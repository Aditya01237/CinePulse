import React from 'react';
import { Link } from "react-router-dom"; // ✅ Correct import
import logo from "../images/Logo.png"

const HeaderLogin = () => {
  return (
    <div className="absolute w-full px-8 py-4">
      <div className="flex justify-between mx-72  items-center">
        {/* Netflix Logo */}
        <img
          className="w-48 "
          src={logo}
          alt="Netflix Logo"
        />

        {/* Buttons */}
        <div className="space-x-4">
          <button className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-md">English</button>
          <Link to="/login"> 
            <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin;
