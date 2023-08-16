import Items from "../components/Items/Items";

const Favorites = ({ products, onClick, handleFav, favorites, removeFav }) => {
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

export default Favorites;
