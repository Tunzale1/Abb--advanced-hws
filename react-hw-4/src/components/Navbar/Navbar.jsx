import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ cart, favorites, total, handleAction }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="mar">
          <div className="navbar-link">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favs</Link>
            <Link to="/cart">Cart</Link>
          </div>
          </div>
          <div className="favorite-products">
          <i className="fa-regular fa-heart">&nbsp;</i> 
            Favs ({favorites.length})
          </div>

          <button className="shopping-cart" onClick={handleDropdown}>
          <i className="fa-solid fa-2x fa-plus">&nbsp;</i>
            Cart ({cart.length && cart.length})
          </button>
          {isDropdownOpen && (
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

                            <h3 className="cart-item-title">{product.name}</h3>
                          </div>
                          <div className="cart-item--right">
                            <span className="cart-item-price">
                              { product.price+ " " + "azn"}
                            </span>
                            <button
                              className="remove"
                              onClick={() => {
                                handleAction(product.id, "remove");
                              }}
                            >
                              <i className="fa-regular fa-2x fa-circle-xmark"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="cart-details">
                  <h3 className="total-cost-title">Total cost: </h3>
                  <span className="total-price"> {total + " "+"azn"}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  cart: PropTypes.array,
  favorites: PropTypes.array,
  total:PropTypes.number,
  handleAction: PropTypes.func
};

Navbar.defaultProps = {
  cart: [],
  favorites: [],
  total: 0
};

export default Navbar;