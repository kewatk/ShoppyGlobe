import { useOutletContext } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import "../style/ProductItem.css";
function ProductList() {
  const { filteredProducts } = useOutletContext();
  return (
    <div className="product-list">
      {filteredProducts.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
