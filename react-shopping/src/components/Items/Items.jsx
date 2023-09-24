import "./Items.scss";
import PropTypes from "prop-types";
import Product from "../Product/Product";

import {useContext} from "react"
import {SwitchContext} from "../../pages/Home"

const Items = ({ products, isInCart }) => {
  const currentView = useContext(SwitchContext);

  return (
    <div className={
      currentView === "list" ? "product-wrapper-list" : "products-wrapper"
    }>
      {products.map((product) => {
        return (
          <Product
            isInCart={isInCart}
            key={product.id ? product.id : product.sku}
            product={product}
            
            
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
  removeFav : PropTypes.func,
  favorites:  PropTypes.array
};

Items.defaultProps = {
  products: [],
  favorites: []
};

export default Items;
