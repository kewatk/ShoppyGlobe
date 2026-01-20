// ProductDetail.jsx - Enhanced with attractive UI
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../components/CartContext';
import { useFetchProduct } from '../hooks/useFetchProducts';
import '../style/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { product, loading, error } = useFetchProduct(id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
    
    // Show success animation (you can replace with a toast notification)
    const button = document.querySelector('.add-to-cart-detail');
    button.textContent = '✓ Added!';
    setTimeout(() => {
      button.textContent = 'Add to Cart';
    }, 2000);
  };

  const getStockStatus = (stock) => {
    if (stock === 0) return { class: 'out-of-stock', text: '⭕ Out of Stock' };
    if (stock < 10) return { class: 'low-stock', text: '⚠️ Only ' + stock + ' left' };
    return { class: 'in-stock', text: '✓ In Stock (' + stock + ' available)' };
  };

  if (loading) {
    return (
      <div className="product-detail-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p style={{ fontSize: '20px', color: '#667eea', fontWeight: 600 }}>
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail-container">
        <div className="error-container">
          <p style={{ fontSize: '24px', color: '#f5576c', fontWeight: 700, marginBottom: '20px' }}>
            {error || 'Product not found'}
          </p>
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Products
          </button>
        </div>
      </div>
    );
  }

  const stockStatus = getStockStatus(product.stock);

  return (
    <div className="product-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back to Products
      </button>

      <div className="product-detail-content">
        {/* Image Gallery */}
        <div className="image-section">
          <div className="main-image">
            <img 
              src={product.images?.[selectedImage] || product.thumbnail} 
              alt={product.title}
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="thumbnail-gallery">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className={selectedImage === index ? 'active' : ''}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="info-section">
          <h1 className="detail-title">{product.title}</h1>
          
          <div className="rating-section">
            <span className="rating">
              ⭐ {product.rating.toFixed(1)}
            </span>
            <span className="reviews">
              ({product.reviews?.length || Math.floor(product.rating * 100)} reviews)
            </span>
          </div>

          <div className="price-section">
            <span className="current-price">${product.price}</span>
            {product.discountPercentage > 0 && (
              <>
                <span className="original-price">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="discount">-{product.discountPercentage.toFixed(0)}% OFF</span>
              </>
            )}
          </div>

          {/* Stock Badge */}
          <div className={`stock-badge ${stockStatus.class}`}>
            {stockStatus.text}
          </div>

          <div className="description-section">
            <h3>About This Product</h3>
            <p>{product.description}</p>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Brand</span>
              <span className="detail-value">{product.brand || 'Generic'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Category</span>
              <span className="detail-value">{product.category}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Availability</span>
              <span className="detail-value">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">SKU</span>
              <span className="detail-value">{product.sku || 'N/A'}</span>
            </div>
          </div>

          {/* Quantity Selector */}
          {product.stock > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
              <span style={{ fontWeight: 600, color: '#4a5568' }}>Quantity:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid #667eea',
                    background: 'white',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#667eea'
                  }}
                >
                  -
                </button>
                <span style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  minWidth: '40px', 
                  textAlign: 'center',
                  color: '#2d3748'
                }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid #667eea',
                    background: 'white',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#667eea'
                  }}
                >
                  +
                </button>
              </div>
            </div>
          )}

          <button 
            className="add-to-cart-detail"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? '⭕ Out of Stock' : '🛒 Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;