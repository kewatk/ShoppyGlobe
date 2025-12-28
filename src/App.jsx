import { useFetchProducts } from './hooks/useFetchProducts';
import Header from './components/Header';
import ProductList from './pages/ProductList'
import NotFound from './pages/NotFound';
import { Routes, Route } from "react-router-dom";
function App() {
  const { products, error } = useFetchProducts();

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
    <Header/>
    <ProductList productdata = {products}/>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App;
