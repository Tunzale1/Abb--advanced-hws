import React, { Component } from "react";
import "./Items.scss";
import PropTypes from "prop-types";
import Product from "../Product/Product";

class Items extends Component {
  render() {
    const { products, onClick, handleFav, favorites, removeFav } = this.props;

    return (
      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <Product
              key={product.sku}
              product={product}
              onClick={onClick}
              handleFav={handleFav}
              removeFav={removeFav}
              favorites={favorites}
            />
          );
        })}
      </div>
    );
  }
}

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
