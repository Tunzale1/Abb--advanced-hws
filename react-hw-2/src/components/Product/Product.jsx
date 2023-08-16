import React, { Component } from "react";
import "./Product.scss";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { product, onClick, handleFav, favorites, removeFav } = this.props;
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
          
          <button className="add" onClick={() => onClick(product)}>
            Add to card
          </button>
        </div>
      </div>
    );
  }
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
