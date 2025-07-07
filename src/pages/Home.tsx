import PicturesCarousel from '../components/PicturesCarousel.tsx';

const Home = () => {
  return (
    <div>
      <h1>Bienvenue chez DADA Cosmetics 💄</h1>
      <PicturesCarousel /> {/* Carousel d'images pour promos ou produits du moment */}
      <p>Découvrez nos rouges à lèvres 100% vegan !</p>
    </div>
  );
};

export default Home;