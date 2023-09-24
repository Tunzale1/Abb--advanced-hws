import Items from "../components/Items/Items";
import React from 'react';
import { createContext, useState } from "react";
import { useSelector } from "react-redux";
export const SwitchContext = createContext(null);

export function Home () {
  const [currentView, setCurrentView] = useState("grid");
  const products = useSelector((state) => state.products.products);


  return (
    <SwitchContext.Provider value={currentView}>
    <div className="container">
    <div className="display">
          <div style={{padding:10}}
            className="btn"
            onClick={() =>
              setCurrentView((prev) => (prev === "grid" ? "list" : "grid"))
            }
            data-testid='grid-btn'
          >
            {currentView === "grid" ?  <i className="fa-solid fa-2x fa-ellipsis"></i> : <i className="fa-solid fa-2x fa-ellipsis-vertical"></i> }
          </div>
        </div>
      <Items
        products={products}
      />
    </div>
    </SwitchContext.Provider>
  );
};

