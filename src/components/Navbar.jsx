import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const loginDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setLoginDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-md w-full overflow-x-hidden relative">
      <div className="flex justify-between items-center px-6 py-4 text-sm md:flex-row flex-row-reverse w-full">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="text-2xl font-bold tracking-wide text-[#4169E1] italic">
          GLADNESS HAIRLINE
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a className="flex items-center space-x-1" href="https://wa.me/message/R7Q6PQE3WCETP1">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp</span>
          </a>
          <div className="flex items-center space-x-1">
            <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-5" />
            <span>USD</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Log in Button with Mini Dropdown */}
          <div className="relative" ref={loginDropdownRef}>
            <button className="flex items-center space-x-2" onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}>
              <FaUser />
              <span className="hover:text-[#4169E1] cursor-pointer">Log in</span>
            </button>

            {/* Log in & Register Dropdown */}
            {loginDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-20 bg-white shadow-md rounded-lg p-2 z-50">
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Log in
                </button>
                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Register
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span>➕</span>
            <a href="#!" className="hover:text-[#4169E1]">Track order</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <a href="#!" className="hover:text-[#4169E1]">Shopping cart</a>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md px-2">
            <input type="text" placeholder="I'm shopping for" className="outline-none text-sm py-1" />
            <FaSearch className="text-gray-500 ml-1" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-lg w-full">
          <a href="https://wa.me/message/R7Q6PQE3WCETP1" className="flex items-center space-x-1">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp</span>
          </a>
          <div className="flex items-center space-x-1">
            <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-5" />
            <span>USD</span>
          </div>

          {/* Mobile Log in Dropdown */}
          <button className="flex items-center space-x-2" onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}>
            <FaUser />
            <span className="hover:text-[#4169E1]">Log in</span>
          </button>

          {loginDropdownOpen && (
            <div className="w-40 bg-white shadow-md rounded-lg p-2">
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Log in
              </button>
              <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Register
              </button>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <span>➕</span>
            <a href="#!" className="hover:text-[#4169E1]">Track order</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaShoppingCart />
            <a href="#!" className="hover:text-[#4169E1]">Shopping cart</a>
          </div>
          <div className="flex items-center border border-gray-300 rounded-md px-2 w-3/4">
            <input type="text" placeholder="I'm shopping for" className="outline-none text-sm py-1 w-full" />
            <FaSearch className="text-gray-500 ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
