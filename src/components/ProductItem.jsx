// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlice";
// import { Link } from "react-router-dom";

// const ProductItem = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="product-card">
//       <img
//         src={product.thumbnail}
//         alt={product.title}
//         loading="lazy"
//         width="150"
//       />

//       <h3>{product.title}</h3>
//       <p>₹ {product.price}</p>

//       <Link to={`/product/${product.id}`}>View Details</Link>

//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductItem;
