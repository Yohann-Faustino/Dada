// ProductCard.tsx
type Product = {
  name: string;
  price: number;
  color: string;
};

const ProductCard = ({ name, price, color }: Product) => {
  return (
    <div style={{ border: '1px solid pink', padding: '10px', margin: '10px' }}>
      <h3>{name}</h3>
      <p>Prix: {price}€</p>
      <p>Couleur: {color}</p>
    </div>
  );
};

export default ProductCard;