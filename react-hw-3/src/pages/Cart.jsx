import Items from "../components/Items/Items";

const Cart = ({ products, onClick, handleFav, removeFav, favorites, handleAction }) => {
  

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

export default Cart;
