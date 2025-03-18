import { useState, useRef, useEffect } from "react";
import {
  FaWhatsapp,
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const loginDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        loginDropdownRef.current &&
        !loginDropdownRef.current.contains(event.target)
      ) {
        setLoginDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-md w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center text-sm relative">
        {/* Logo */}
        {/* <div className="text-2xl font-bold tracking-wide text-[#4169E1] italic" >
          GLADNESS HAIRLINE
        </div> */}
        <a href="/" className="text-2xl font-bold tracking-wide text-[#4169E1] italic">GLADNESS HAIRLINE</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="https://wa.me/message/R7Q6PQE3WCETP1">
            <FaWhatsapp className="text-green-500" />
          </a>
          <a href="/" className="font-semibold border-b-2 border-black pb-1">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-500">
            Shop All
          </a>
          <a
            href="/wig-collection"
            className="hover:text-gray-500 flex items-center"
          >
            Categories <span className="ml-1">▼</span>
          </a>
          <a href="/contact" className="hover:text-gray-500">
            Contact
          </a>
        </div>

        {/* Right Section with Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Desktop Login and Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={loginDropdownRef}>
              <button
                className="flex items-center space-x-2"
                onClick={() => navigate("/login")}
              >
                <FaUser />
                <span className="hover:text-[#4169E1] cursor-pointer">
                  Log in
                </span>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <FaShoppingCart />
              <a href="#!" className="hover:text-[#4169E1]">
                Shopping cart
              </a>
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-2">
              <input
                type="text"
                placeholder="I'm shopping for"
                className="outline-none text-sm py-1 w-full"
              />
              <FaSearch className="text-gray-500 ml-1" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg w-full">
          <a href="https://wa.me/message/R7Q6PQE3WCETP1">
            <FaWhatsapp className="text-green-500" />
          </a>
          <button
            className="flex items-center space-x-2"
            onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
          >
            <FaUser />
            <span className="hover:text-[#4169E1]">Log in</span>
          </button>

          {loginDropdownOpen && (
            <div className="w-40 bg-white shadow-md rounded-lg p-2">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Register
              </button>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <a href="#!" className="hover:text-[#4169E1]">
              Shopping cart
            </a>
          </div>

          <div className="flex items-center border border-gray-300 rounded-md px-2 w-3/4">
            <input
              type="text"
              placeholder="I'm shopping for"
              className="outline-none text-sm py-1 w-full"
            />
            <FaSearch className="text-gray-500 ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
