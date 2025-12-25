import { useFetchProducts } from './hooks/useFetchProducts';
import Header from './components/Header';
import ProductList from './pages/ProductList'
function App() {
  const { products, error } = useFetchProducts();

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
    <Header/>
    <ProductList productdata = {products}/>
    </>
  )
}

export default App;
