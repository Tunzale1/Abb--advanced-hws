import Items from "../components/Items/Items";
import React from 'react';
export function Cart ({ products, onClick, handleFav, favorites, removeFav,  handleAction }) {

  return (
    <div className="container">
      <Items
        products={products}
        onClick={onClick}
        handleFav={handleFav}
        favorites={favorites}
        removeFav={removeFav}
        isInCart ={true}
        handleAction={handleAction}
      />
    </div>
  );
};


