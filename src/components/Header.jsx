import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../components/CartContext';

function Header({setSearchText}) {
  const [isClickHome, setIsClickHome] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  function changecolore(){
    setIsClickHome(true);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
 
  return (
    <nav className="flex dark:bg-gray-800 text-white items-center px-4 md:px-12 h-20 relative">
      {/* Desktop Menu - Hidden on mobile, visible on md and up */}
      <h1 className="tracking-wide text-4xl font-bold bg-clip-text text-transparent  bg-linear-to-r from-cyan-500 to-pink-400">ShoppyGlobe</h1>
      <ul className="hidden md:flex items-center gap-8 flex-row-reverse w-full">
        <li className="flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Search products..."
            onChange={(e) => setSearchText(e.target.value)} 
            className="text-black bg-amber-50 px-3 py-2 rounded"
          />
          <IoIosSearch className="mt-2" />
          <span>Search</span>
        </li>

        <Link to="/">
          <li className="flex items-center gap-2 cursor-pointer">
            <IoMdHome />
            <button onClick={changecolore} className={isClickHome ? "text-gray-500" : "text-white"}>
              Home
            </button>
          </li>
        </Link>

        <Link to="/cart">
          <li className="flex items-center gap-2 cursor-pointer relative">
            <FaShoppingCart className="w-5 h-5" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </li>
        </Link>
      </ul>

      {/* Mobile Menu Button - Visible only on small screens */}
      <div className="md:hidden w-full flex justify-between items-center">
      <span className="text-xl font-bold">Shop</span>
        <button 
          onClick={toggleMenu}
          className="flex items-center gap-2 cursor-pointer p-2"
        >
          {isMenuOpen ? <IoClose className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-800 z-50 shadow-lg">
          <ul className="flex flex-col">
            <li className="border-b border-gray-700 p-4">
              <input 
                type="text" 
                placeholder="Search products..." 
                onChange={(e) => setSearchText(e.target.value)} 
                className="text-black bg-amber-50 px-3 py-2 rounded w-full"
              />
            </li>

            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <li className="flex items-center gap-2 cursor-pointer p-4 hover:bg-gray-700 border-b border-gray-700">
                <IoMdHome />
                <button onClick={changecolore} className={isClickHome ? "text-gray-500" : "text-white"}>
                  Home
                </button>
              </li>
            </Link>

            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
              <li className="flex items-center gap-2 cursor-pointer p-4 hover:bg-gray-700 border-b border-gray-700 relative">
                <FaShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="ml-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;