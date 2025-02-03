import React from "react";
import { FaRegUser, FaBox, FaHeart, FaCoins } from "react-icons/fa";

const UserDropdown = () => {
  return (
    <div className="absolute top-10 right-0 w-48 bg-white shadow-md rounded-lg p-4 z-50">
      <div className="flex space-x-2 mb-3">
        <button className="bg-orange-300 text-white px-4 py-1 rounded">Log in</button>
        <button className="bg-black text-white px-4 py-1 rounded">Register</button>
      </div>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
          <FaRegUser />
          <span>My Account</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
          <FaBox />
          <span>My Order</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
          <FaHeart />
          <span>My Wishlist</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:text-orange-500">
          <FaCoins />
          <span>My Points</span>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
