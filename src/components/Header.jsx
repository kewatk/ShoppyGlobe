import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBars } from "react-icons/fa";
<IoMdHome />

function Header() {
  return (
    <nav className="flex dark:bg-gray-800 text-white items-center px-12 h-20 mr-0">
      <ul className="flex items-center gap-8">
        
        <li className="flex items-center gap-2">
          <IoIosSearch className="mt-2" />
          <span>Search</span>
        </li>

        <li className="flex items-center gap-2 cursor-pointer">
          <IoMdHome />
          <span>Home</span>
        </li>

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
