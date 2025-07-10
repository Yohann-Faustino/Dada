import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import styles from "./Products.module.css";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) console.error('Erreur:', error);
      else setProducts(data || []);
    };
    fetchProducts();
  }, []);

    return (
    <div>
      <h1>Nos Produits</h1>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h2>{product.name}</h2>
            <p>Prix: {product.price}€</p>
            <p>{product.description}</p>
            {product.stock_quantity > 0 ? (
              <button>Ajouter au panier</button>
            ) : (
              <p className={styles.outOfStock}>Rupture de stock</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}