import { useCart } from '../components/CartContext';

function ProductItem({ product }) {
  const { addToCart} = useCart();
  
    const handleAddToCart = () => {
    addToCart(product);

  };
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-cover"
      />

      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <h1 className="product-price">⭐{product.rating}</h1>
        <h1 className="product-price">{product.price}$</h1>
      </div>

      <button 
        className="add-to-cart"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductItem;