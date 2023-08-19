import Items from "../components/Items/Items";
import React from 'react';

export function Home ({ products, onClick, handleFav, favorites, removeFav }) {
  return (
    <div className="container">
      <Items
        products={products}
        onClick={onClick}
        handleFav={handleFav}
        favorites={favorites}
        removeFav={removeFav}
      />
    </div>
  );
};

