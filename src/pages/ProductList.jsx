import ProductItem from '../components/ProductItem';

function ProductList(props) {
  return (
    <div className="product-list">
      {props.productdata.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
