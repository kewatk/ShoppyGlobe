import { useFetchProducts } from './utils/useFetchProducts';
import ProductList from './components/ProductList'
function App() {
  const { Products, error } = useFetchProducts();

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
    <ProductList Productdata = {Products}/>
    </>
  )
}

export default App;
