import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.scss";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownOpen: false,
      total: 0,
    };
  }

  dropdownitems = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };
 
  render() {
    const { cart, favorites, total } = this.props;

    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="favorite-products">
            <i className="fa-regular fa-heart">&nbsp;</i> 
              Favs ({favorites.length})
            </div>

            <button className="shopping-cart" onClick={this.dropdownitems}>
            <i className="fa-solid fa-2x fa-plus">&nbsp;</i>
              Cart ({cart.length && cart.length})
            </button>
            {this.state.isDropdownOpen && (
              <div className="dropdown-cart">
                <div className="container">
                  <ul className="dropdown-list">
                    {cart.map((product) => {
                      return (
                        <li className="dropdown-item" key={product.id}>
                          <div className="cart-item">
                            <div className="cart-item--left">
                              <div className="cart-item-img">
                                <img src={product.img_path} alt="" />
                              </div>

                              <h3 className="cart-item-title">
                                {product.name}
                              </h3>
                            </div>
                            <div className="cart-item--right">
                              <span className="cart-item-price">
                                {product.price + " " + "azn"}
                              </span>
                              
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="cart-details">
                    <h3 className="total-cost-title">Total cost: </h3>
                    <span className="total-price">
                      {total + " " + "azn"}
                    </span>
                  </div>
                  
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

Navbar.propTypes = {
  cart: PropTypes.array,
  favorites: PropTypes.array,
  total: PropTypes.number
};

Navbar.defaultProps = {
  cart: [],
  favorites: [],
  total: 0
};

export default Navbar;
