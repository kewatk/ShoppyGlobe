import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './components/CartContext.jsx';
import App from './App.jsx'
import './index.css'
import ProductList from "./pages/ProductList";
import NotFound from './pages/NotFound.jsx';
import About from './components/About.jsx';
import Cart from './pages/Cart.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        path: '/',
        element: <ProductList />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <NotFound />,
  }
]);

createRoot(document.getElementById('root')).render(
    <CartProvider>
    <RouterProvider router={appRouter} />
  </CartProvider>
)