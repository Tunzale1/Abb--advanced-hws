import Items from "../components/Items/Items";

const Home = ({ products, onClick, handleFav, favorites, removeFav }) => {
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

export default Home;
