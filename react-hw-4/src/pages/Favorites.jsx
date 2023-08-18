import Items from "../components/Items/Items";
import React from 'react';

export function Favorites ({ products, onClick, handleFav, favorites, removeFav }) {
  const favoriteProducts = products.filter(product => favorites.includes(product.sku));

  return (
    <div className="container">
      <Items
        products={favoriteProducts}
        onClick={onClick}
        handleFav={handleFav}
        favorites={favorites}
        removeFav={removeFav}
      />
    </div>
  );
};


