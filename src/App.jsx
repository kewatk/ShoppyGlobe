import { useFetchProducts } from './hooks/useFetchProducts';
import ProductList from './pages/ProductList'
function App() {
  const { products, error } = useFetchProducts();

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
    <ProductList productdata = {products}/>
    </>
  )
}

export default App;
