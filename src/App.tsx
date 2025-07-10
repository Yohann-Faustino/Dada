// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import { supabase } from './lib/supabaseClient';
import './App.css';
import { useEffect } from 'react'; // Importez useEffect

function App() {
  // Testez la connexion dès le démarrage de l'app
  useEffect(() => {
    supabase.from('products').select('*')
      .then(({ data, error }) => {
        if (error) {
          console.error("🚨 ERREUR DE CONNEXION :", error);
          alert("Échec de la connexion à la BDD. Vérifiez la console.");
        } else {
          console.log("✅ CONNEXION RÉUSSIE. Données reçues :", data);
        }
      });
  }, []); // Le tableau vide signifie que cela s'exécute une fois au montage

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;