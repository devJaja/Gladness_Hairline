import { FaWhatsapp, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 text-sm">
        <div className="flex items-center space-x-4">
          <a className="flex items-center space-x-1" href="https://wa.me/message/R7Q6PQE3WCETP1">
            <FaWhatsapp className="text-green-500" />
            <span>WhatsApp</span>
          </a>
          <div className="flex items-center space-x-1">
            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-5 h-5"
            />
            <span>USD</span>
          </div>
        </div>

        <div className="text-2xl font-bold tracking-wide text-[#4169E1] italic">
          GLADNESS HAIRLINE
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaUser />
            <a href="#!" className="hover:text-[#4169E1]">
              Log in
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span>➕</span>
            <a href="#!" className="hover:text-[#4169E1]">
              Track order
            </a>
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
              className="outline-none text-sm py-1"
            />
            <FaSearch className="text-gray-500 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
