import Items from "../components/Items/Items";
import React from 'react';
import { useSelector } from "react-redux";


export function Favorites () {
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <div className="container">
      <Items
        products={favorites}
      />
    </div>
  );
};


