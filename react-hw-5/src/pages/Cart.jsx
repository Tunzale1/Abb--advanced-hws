import React from 'react';
import Items from "../components/Items/Items";
import Checkout from "../Forms/Form";

export function Cart ({ products, onClick, handleFav, favorites, removeFav,  handleAction }) {
  return (
    <div className="container">
      {products.length ? (
        <>
        <div className="form">
        <h1 className="title">Fill all sections.</h1>
          <Checkout products={products} />
          </div>
          <br></br>
          <Items
            products={products}
            onClick={onClick}
            handleFav={handleFav}
            favorites={favorites}
            removeFav={removeFav}
            isInCart={true}
            handleAction={handleAction}
          />
        </>
      ) : (
        <h1 className="no-items">Empty</h1>
      )}
    </div>
  );
};

    


