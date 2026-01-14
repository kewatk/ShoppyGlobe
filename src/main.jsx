import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ProductItem from './components/ProductItem.jsx';
import NotFound from './pages/NotFound.jsx';

const appRouter = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  errorElement:<NotFound/>
},
  
    {
      path:'/NotFound',
      element:<NotFound/>
    }
]);
createRoot(document.getElementById('root')).render(
<RouterProvider router={appRouter}></RouterProvider>
)

