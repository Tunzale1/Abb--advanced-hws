
import "./Items.scss";
import PropTypes from "prop-types";
import Product from "../Product/Product";


const Items = ({ products, onClick, handleFav, favorites, removeFav, isInCart, handleAction }) => {
  return (
    <div className="products-wrapper">
      {products.map((product) => {
        return (
          <Product
            key={product.id ? product.id : product.sku}
            product={product}
            onClick={onClick}
            handleFav={handleFav}
            favorites={favorites}
            removeFav={removeFav}
            isInCart={isInCart}
            handleAction={handleAction}
          />
        );
      })}
    </div>
  );
};

Items.propTypes = {
  products: PropTypes.array,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites:  PropTypes.array,
  removeFav : PropTypes.func
};

Items.defaultProps = {
  products: [],
  favorites: []
};

export default Items;
