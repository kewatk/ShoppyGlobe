import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../components/CartContext';

function Header({setSearchText}) {

  const [isClickHome,setIsClickHome] = useState(false);

  const { getCartCount } = useCart();
  const cartCount = getCartCount();
function changecolore(){
  setIsClickHome(true);
}
 
  return (
    <nav className="flex dark:bg-gray-800 text-white items-center px-12 h-20">
      <ul className="flex items-center gap-8  flex-row-reverse">
        
        <li className="flex items-center gap-2 ms-8">

          <input 
          type="text" 
          placeholder="Search products..." 
          onChange={(e)=>setSearchText(e.target.value)} 
          className=" text-black bg-amber-50 mx-6"
          />

          <IoIosSearch className="mt-2" />
          <span>Search</span>

        </li>
        <Link to="/">
                <li className="flex items-center gap-2 cursor-pointer">
          <IoMdHome />
          <button onClick={changecolore} className={isClickHome ? "text-gray-500":"text-white"}>Home</button>
        </li>
        </Link>

        <Link to="/cart">
        <li 
          className="flex items-center gap-2 cursor-pointer relative"
          onClick={handleCartClick}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </li>
        </Link>
        
        <li className="flex items-center gap-2 cursor-pointer">
          <FaBars />
          <span>Item</span>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
