import React from "react";
import logo from "../images/Logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utills/firebase";
import { Links, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utills/userSlice";

const HeaderMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleAskAi = () => {
    alert("Comming Soon...");
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black/50">
      <div className={`flex ${user ? 'justify-between mx-10' : 'justify-evenly'} items-center`}>
        {/* Netflix Logo */}
        <img className="w-48 " src={logo} alt="Netflix Logo" />

        {/* Buttons */}
        {user ? (
          <div className="space-x-4 flex items-center">
            {/* <Link to={"/gptsearch"}> */}
            <button onClick={handleAskAi} className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-md">
              Ask AI
            </button>
            {/* </Link> */}
            <button
              className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md "
              onClick={HandleSignOut}
            >
              Sign Out
            </button>
            <p className="px-4 py-2 text-white text-xl font-semibold ">
              { user.displayName}
            </p>
          </div>
        ) : (
          <div className="space-x-4">
            {/* <button className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-md">
              Ask AI
            </button> */}
            <Link to="/login">
              <button className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
