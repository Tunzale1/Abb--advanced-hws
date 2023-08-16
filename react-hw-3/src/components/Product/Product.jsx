
import "./Product.scss";
import PropTypes from "prop-types";


const Product = ({
  product,
  onClick,
  handleFav,
  favorites,
  removeFav,
  isInCart,
  handleAction
}) => {
  const isFavorited = favorites.includes(product.sku);

    return (
      <div className="products">
        <img src={product.img_path} alt="" />
        <div>
        <h2 className="products-price">{product.price + " " + "azn"}</h2>
        </div>
        
        
        <div className="products_head">
          <h3 className="product-tit">{product.name}</h3>
          <span
            className="fav"
            onClick={() => {
              isFavorited ? removeFav(product.sku) : handleFav(product.sku);
            }}
          >
            {isFavorited ? (
              <i className="fa-solid fa-2x fa-star" style={{ color: "red" }} ></i>
            ) : (
              <i className="fa-regular fa-2x fa-star"></i>
            )}
          </span>
        </div>
       
        <div className="products-det">
        {isInCart ? (
          <button
            className="btn-delete"
            onClick={() => {
              handleAction(product.id, "remove");
            }}
          >
            Delete
          </button>
        ) : (
          <button
            className="btn-add"
            onClick={() => onClick(product, "modal1")}
          >
          Add to Cart
          </button>
        )}
        </div>
      </div>
    );
  }


Product.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites: PropTypes.array,
  removeFav: PropTypes.func
};

Product.defaultProps = {
  product: {},
  favorites: [],
};

export default Product;
