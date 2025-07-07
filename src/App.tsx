// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import './App.css'; // Pour les styles globaux

function App() {
  return (
    <Router>
      <div className="app">
        {/* La Navbar importer ici afin qu'elle soit visible sur toutes les pages */}
        <Navbar />
        
        {/* Contenu changeant selon la page */}
        <Routes>
          <Route path="/" element={<Home />} />          {/* Route vers la page d'accueil */}
          <Route path="/products" element={<Products />} /> {/* Route vers la page produits */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;