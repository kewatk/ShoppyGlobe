function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-cover"
      />

      <h1 className="product-title">{product.title}</h1>
      <h1 className="product-price">{product.price}$</h1>
      {/* <p className="product-description">{product.description}</p> */}
      <button className="add-cart">Add to Cart</button>
    </div>
  );
}

export default ProductItem;
