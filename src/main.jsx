import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ProductList from "./pages/ProductList";
import NotFound from './pages/NotFound.jsx';
import About from './components/About.jsx';

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
        path: '/about',
        element: <About />
      },
    ],
    errorElement: <NotFound />,
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)