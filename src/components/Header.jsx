import "../style.css"
function Header(){
  return (
    <header className="header">
      <h1>ShoppyGlobe</h1>

      <input
        type="text"
        placeholder="Search products..."
        // onChange={handleSearchChange}
      />

      <nav>
        <button>HOME</button>
        <button>CART</button>
      </nav>
    </header>
  );
};

export default Header;
