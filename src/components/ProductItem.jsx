// ProductItem.jsx - Final working version
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

function ProductItem({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Stop event from bubbling to card
    console.log('Adding to cart:', product.title);
    addToCart(product);
  };

  const handleProductClick = (e) => {
    // Don't navigate if clicking the button
    if (e.target.closest('.add-to-cart')) {
      return;
    }
    console.log('Navigating to product:', product.id);
    navigate(`/product/${product.id}`);
  };
  
  return (
    <div className="product-card" onClick={handleProductClick}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-cover"
      />

      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <h1 className="product-price">⭐{product.rating}</h1>
        <h1 className="product-price">${product.price}</h1>
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