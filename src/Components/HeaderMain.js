import React from 'react';
import logo from "../images/Logo.png"
import { signOut } from "firebase/auth";
import { auth } from '../utills/firebase';
import { useNavigate } from 'react-router-dom';

const HeaderMain = () => {
  const navigate = useNavigate();
  
    const HandleSignOut = () => {
      signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
        // An error happened.
      });
    }
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
          <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md " onClick={HandleSignOut} >Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
