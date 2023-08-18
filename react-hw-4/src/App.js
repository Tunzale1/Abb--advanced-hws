import { useState, useEffect, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Modal from './components/Modal/Modal';
import {Cart, Favorites, Home} from './pages';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetching,
  addFavorites,
  addProducts,
  removeFavorites,
  removeProducts,
  setTotal,
  setModal
} from './redux/actions/index';

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart)
  const products = useSelector(state => state.products.products);
  const favorites = useSelector(state => state.favorites.favorites)
  const total = useSelector(state => state.cart.total);
  const { modalData, isModalOpen } = useSelector(state => state.modal)
  const [selectedProductId, setSelectProductId] = useState(null);
  const [actionType, setActionType] = useState('')
  

  useEffect(() => {
    dispatch(fetching())
  }, [dispatch]);

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
      if (modalId === "modal1") {
        setActionType("add");
      } else if (modalId === "modal2") {
        setActionType("remove");
      }
    }
    dispatch(setModal(true, currentModal));
    setSelectProductId(productId)
  }

  const handleCloseModal = () => {
    dispatch(setModal(false, null));
    setSelectProductId(null)
  }



  const handleAddProduct = (selectedProduct) => {

    const productToAdd = products.find((product) => product.sku === selectedProduct.sku);

    const newCartItem = {
      id: uuidv4(),
      ...productToAdd
    };

    dispatch(addProducts(newCartItem))
    handleCloseModal();
  };


  const handleFav = (productId) => {
    if (!favorites.includes(productId)) {
      dispatch(addFavorites(productId))


    }
  };


  const removeFav = (productId) => {
    dispatch(removeFavorites(productId))
  }

  const handlePrice = useCallback(() => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    dispatch(setTotal(totalPrice))
  }, [cart, dispatch]);


  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);

  const removeProduct = (id) => {
    dispatch(removeProducts(id))

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