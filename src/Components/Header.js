import React from 'react';
import { Link } from "react-router-dom"; // ✅ Correct import

const Header = () => {
  return (
    <div className="absolute w-full px-8 py-4">
      <div className="flex justify-between mx-72  items-center">
        {/* Netflix Logo */}
        <img
          className="w-48 "
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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

export default Header;
