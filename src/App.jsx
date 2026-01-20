// App.jsx - Updated with loading state
import { useFetchProducts } from "./hooks/useFetchProducts";
import Header from "./components/Header";
import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const { products = [], error, loading } = useFetchProducts();
  const [searchText, setSearchText] = useState("");

  if (loading) {
    return (
      <>
        <Header setSearchText={setSearchText} />
        <div className="loading-container">Loading products...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header setSearchText={setSearchText} />
        <p className="error-message">Error: {error}</p>
      </>
    );
  }
  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Header setSearchText={setSearchText} />
      <Outlet context={{ filteredProducts, allProducts: products }} />
    </>
  );
}

export default App;