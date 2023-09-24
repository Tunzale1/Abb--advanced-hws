import "./Product.scss";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { content } from "../Modal/content";
import {addFavorites,addProducts,removeFavorites, removeProducts,setModal,} from "../../redux/actions/index";

const Product = ({ product, isInCart }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const favorites = useSelector((state) => state.favorites.favorites);

  const { modalData, isModalOpen, selectedProductId } = useSelector(
    (state) => state.modal
  );


  const isFavorited = favorites.find((fav)=>fav.sku === product.sku);

  const handleFav = (product) => {
    if (!isFavorited) {
      dispatch(addFavorites(product));
    }
  };

  const handleAddProduct = (selectedProduct) => {
    const productToAdd = products.find(
      (product) => product.sku === selectedProduct.sku
    );

    const newCartItem = {
      id: uuidv4(),
      ...productToAdd,
    };

    dispatch(addProducts(newCartItem));
    handleCloseModal();
  };

  const removeFav = (productId) => {
    dispatch(removeFavorites(productId));
  };

  const handleOpenModal = (productId, modalId) => {
    const currentModal = content.find((modal) => modal.id === modalId);
    if (currentModal) {
      dispatch(setModal(true, currentModal, productId));
    }
  };
  const handleCloseModal = () => {
    dispatch(setModal(false, null, null));
  };

  const removeProduct = (id) => {
    dispatch(removeProducts(id));
    handleCloseModal();
  };

  return (
    <div className="products">
      <img src={product.img_path} alt="product" />
      <div>
        <h2 className="products-price">{product.price + " " + "azn"}</h2>
      </div>

      <div className="products_head">
        <h3 className="product-tit">{product.name}</h3>
        <span
          className="fav"
          onClick={() => {
            isFavorited ? removeFav(product.sku) : handleFav(product);
          }}
        >
          {isFavorited ? (
            <i className="fa-solid fa-2x fa-star" style={{ color: "red" }}></i>
          ) : (
            <i className="fa-regular fa-2x fa-star"></i>
          )}
        </span>
      </div>

      <div className="products-det">
        {isInCart ? (
          <button
            className="delete"
            onClick={() => {
              handleOpenModal(product.id, "modal2");
            }}
            data-testid="btn_remove"
          >
            Delete
          </button>
        ) : (
          <button
            className="add"
            onClick={() => handleOpenModal(product, "modal1")}
            data-testid='btn_add'
          >
            Add to Cart
          </button>
        )}
      </div>

      {isModalOpen && (
        <Modal
          modalData={modalData}
          closeButton={true}
          actions={
            <>
              {modalData.action === "add" ? (
                <button onClick={() => handleAddProduct(selectedProductId)} data-testid='modal-add-btn'>
                  
                  Yes
                </button>
              ) : modalData.action === "remove" ? (
                <button onClick={() => removeProduct(selectedProductId)} data-testid='modal-remove-btn'>
                  Yes
                </button>
              ) : null}
              <button onClick={handleCloseModal}    data-testid='cancelbtn'>No</button>
            </>
          }
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites: PropTypes.array,
  removeFav: PropTypes.func,
};

Product.defaultProps = {
  product: {},
  favorites: [],
};

export default Product;
