
import { useFetchProducts } from "./hooks/useFetchProducts";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import { useState } from "react";
import "./App.css";

function App() {
  const { products = [], error } = useFetchProducts();
  const [searchText, setSearchText] = useState("");

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Header setSearchText={setSearchText} />
      <ProductList productdata={filteredProducts} />
    </>
  );
}

export default App;

