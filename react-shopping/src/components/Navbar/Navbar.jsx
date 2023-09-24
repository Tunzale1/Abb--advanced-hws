import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setTotal, setModal} from '../../redux/actions/index'
import { content } from "../Modal/content";
import './Navbar.css'


const Navbar =() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const favorites = useSelector((state) => state.favorites.favorites);
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  
  const handlePrice = useCallback(() => {
    const totalPrice = cart.reduce(
      (total, product) => total + product.price,
      0
    );
    dispatch(setTotal(totalPrice));
  }, [cart, dispatch]);

  useEffect(() => {
    handlePrice();
  }, [cart, handlePrice]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const dropdownContentRef = useRef(null)
  const cartRef = useRef(null);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const openModal = (productId, modalId) => {
    const currentModal = content.find((modal) => modal.id === modalId);
    if (currentModal) {
      dispatch(setModal(true, currentModal, productId));
    }
  };
  const handleOutsideClick = (e) => {
    if (
      dropdownContentRef.current &&
      !dropdownContentRef.current.contains(e.target) &&
      cartRef.current &&
      !cartRef.current.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
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

          <button className="shopping-cart" onClick={handleDropdown}
          ref={cartRef}
          data-testid='btn-cart-dropdown'>
          <i className="fa-solid fa-2x fa-plus">&nbsp;</i>
            Cart ({cart.length && cart.length})
          </button>
          {isDropdownOpen && (
            <div className="dropdown-cart" ref={dropdownContentRef}>
              <div className="container">
                <ul className="dropdown-list">
                  {cart.map((product) => {
                    return (
                      <li className="dropdown-item" key={product.id}>
                        <div className="cart-item">
                          <div className="cart-item--left">
                            <div className="cart-item-img">
                              <img src={product.img_path} alt="product" />
                            </div>

                            <h3 className="cart-item-title">{product.name}</h3>
                          </div>
                          <div className="cart-item--right">
                            <span className="cart-item-price">
                              { product.price+ " " + "azn"}
                            </span>
                            <button
                              className="remove"
                              data-testid='product-delete-btn'
                              onClick={() => {
                                openModal(product.id, "modal2");
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