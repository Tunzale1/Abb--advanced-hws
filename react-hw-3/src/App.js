import { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Modal from './components/Modal/Modal';
import {Cart, Favorites, Home} from './pages';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from './api';


const App = () => {
  const getlocal = (key) => {
    const localData = JSON.parse(localStorage?.getItem(key));
    return localData || [];
  }


  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(getlocal('cart'));
  const [favorites, setFavorites] = useState(getlocal('favorites'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectProductId] = useState(null);
  const [modalData, setModalData] = useState('');
  const [actionType, setActionType] = useState('')
  const [total, setTotal] = useState(0);

  
  useEffect(() => {
    fetchData().then(data => {
      setProducts(data)
    })
  }, []);


  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])


  const handleAction = (productId, action) => {
    setActionType(action);
    if (action === "add") {
      handleOpenModal(productId, "modal1");
    } else if (action === "remove") {
      handleOpenModal(productId, "modal2");
    }
  };

  const handleOpenModal = (productId, modalId) => {
    const currentModal = modalContent.find((modal) => modal.id === modalId);
    if (currentModal) {
      setModalData(currentModal);
      if (modalId === "modal1") {
        setActionType("add");
      } else if (modalId === "modal2") {
        setActionType("remove");
      }
    }
    setIsModalOpen(true)
    setSelectProductId(productId)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectProductId(null)
  }



  const handleAddProduct = (selectedProduct) => {
    const productToAdd = products.find((product) => product.sku === selectedProduct.sku);

    const newCartItem = {
      id: uuidv4(),
      ...productToAdd
    };

    const updatedCart = [...cart, newCartItem];

    setCart(updatedCart);
    handleCloseModal();
  };


  const handleFav = (productId) => {
    if (!favorites.includes(productId)) {
      const newFavs = [...favorites, productId];
      setFavorites(newFavs);
    }
  };


  const removeFav = (productId) => {
    const updatedFav = favorites.filter((id) => id !== productId)
    setFavorites(updatedFav);

  }

  const handlePrice = useCallback(() => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);

  const removeProduct = (id) => {
    const updatedProduct = cart.filter((product) => product.id !== id)
    setCart(updatedProduct);
    handleCloseModal()
  }

  const modalContent = [
    {
      id: 'modal1',
      header: 'Are you want to add this item in your card?',
      closeButton: true,

    },
    {
      id: 'modal2',
      header: 'Are you want to delete this item in your card?',
      closeButton: true,
    },
  ];


  return (

    <>
      <Navbar cart={cart} products={products} favorites={favorites} total={total} handleAction={handleAction} />

      <Routes>
        <Route path='/' element={<Home products={products} onClick={handleOpenModal} handleFav={handleFav} favorites={favorites} removeFav={removeFav} />} />
        <Route path='/cart' element={<Cart products={cart} onClick={handleOpenModal} handleAction={handleAction} handleFav={handleFav} favorites={favorites} removeFav={removeFav} />} />
        <Route path='/favorites' element={<Favorites products={products} onClick={handleOpenModal} handleFav={handleFav} favorites={favorites} removeFav={removeFav} />} />
      </Routes>

      {isModalOpen &&
        <Modal
          modalData={modalData}
          closeButton={true}
          actions={
            <>
              {actionType === "add" ? (
                <button onClick={() => handleAddProduct(selectedProductId)}>
                  Yes
                </button>
              ) : actionType === "remove" ? (
                <button onClick={() => removeProduct(selectedProductId)}>
                  Yes
                </button>
              ) : null}
              <button onClick={handleCloseModal}>No</button>
            </>
          }
          onClose={handleCloseModal}
        />
      }
    </>
  )
}

export default App;