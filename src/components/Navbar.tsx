import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#ff99cc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Accueil</Link> {/*Lien vers la page accueil*/} 
      <Link to="/products" style={{ marginRight: '1rem' }}>Produits</Link> {/*Lien vers la page des produits*/} 
    </nav>
  );
};

export default Navbar;