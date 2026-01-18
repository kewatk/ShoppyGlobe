import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({setSearchText}) {

  const [isClickHome,setIsClickHome] = useState(false);
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

        <li className="flex items-center gap-2 cursor-pointer">
          <FaShoppingCart />
          <span>Cart</span>
        </li>
        <li className="flex items-center gap-2 cursor-pointer">
          <FaBars />
          <span>Item</span>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
