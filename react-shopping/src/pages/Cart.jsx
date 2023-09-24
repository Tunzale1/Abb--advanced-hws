import React from 'react';
import { useSelector } from "react-redux";
import Items from "../components/Items/Items";
import Checkout from "../Forms/Form";

export function Cart () {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="container">
      {cart.length ? (
        <>
        <div className="form">
        <h1 className="title">Fill all sections.</h1>
          <Checkout />
          </div>
          <br></br>
          <Items products={cart} isInCart={true}
          />
        </>
      ) : (
        <h1 className="no-items">Empty</h1>
      )}
    </div>
  );
};

    


