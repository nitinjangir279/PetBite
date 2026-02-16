import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaUserCircle, FaPaw, FaBars, FaTimes } from "react-icons/fa";
import { FaDog, FaCat } from "react-icons/fa";
import { GiBirdHouse, GiFishBucket, GiCow } from "react-icons/gi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-900 text-white w-full">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <FaPaw className="text-lime-400 text-2xl" />
          <span className="text-xl font-bold tracking-wide">PetBite</span>
        </Link>

        {/* HAMBURGER (Mobile Only) */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-lg">

          <NavLink to="/" className="hover:text-lime-300">Home</NavLink>
          <NavLink to="/products" className="hover:text-lime-300">Products</NavLink>
          <NavLink to="/offer" className="hover:text-lime-300">Offer/Discount</NavLink>

          {/* DROPDOWN */}
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1 hover:text-lime-300">
              Categories
              <FaChevronDown className="text-[10px] transition-transform group-hover:rotate-180" />
            </span>

            <div className="absolute left-0 top-6 hidden group-hover:block
                            w-40 bg-white text-gray-700 rounded-md shadow-md py-2">

              <NavLink to="/category/dog" className="flex items-center gap-2 px-4 py-2 hover:bg-green-50">
                <FaDog className="text-green-600" /> Dog Food
              </NavLink>

              <NavLink to="/category/cat" className="flex items-center gap-2 px-4 py-2 hover:bg-green-50">
                <FaCat className="text-green-600" /> Cat Food
              </NavLink>

              <NavLink to="/category/bird" className="flex items-center gap-2 px-4 py-2 hover:bg-green-50">
                <GiBirdHouse className="text-green-600" /> Bird Food
              </NavLink>

              <NavLink to="/category/fish" className="flex items-center gap-2 px-4 py-2 hover:bg-green-50">
                <GiFishBucket className="text-green-600" /> Fish Food
              </NavLink>

              <NavLink to="/category/cattle" className="flex items-center gap-2 px-4 py-2 hover:bg-green-50">
                <GiCow className="text-green-600" /> Cattle Food
              </NavLink>

            </div>
          </div>

          <NavLink to="/cart" className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              3
            </span>
          </NavLink>

          <NavLink to="/login">
            <FaUserCircle size={30} />
          </NavLink>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-lg bg-green-800">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/offer" onClick={() => setMenuOpen(false)}>Offer/Discount</NavLink>

          <NavLink to="/category/dog" onClick={() => setMenuOpen(false)}>Dog Food</NavLink>
          <NavLink to="/category/cat" onClick={() => setMenuOpen(false)}>Cat Food</NavLink>
          <NavLink to="/category/bird" onClick={() => setMenuOpen(false)}>Bird Food</NavLink>
          <NavLink to="/category/fish" onClick={() => setMenuOpen(false)}>Fish Food</NavLink>
          <NavLink to="/category/cattle" onClick={() => setMenuOpen(false)}>Cattle Food</NavLink>

          <NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart</NavLink>
          <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>

        </div>
      )}
    </nav>
  );
};
