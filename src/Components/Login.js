import React, { useRef } from "react";
import { useState } from "react";
import { checkValidData } from "../utills/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../utills/firebase";
import logo from "../images/Logo.png"
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utills/userSlice";

const Login = () => {
  const [signIn, setsignIn] = useState(true);
  const [seePassword, setseePassword] = useState(false);
  const [errorMessage, seterrorMessage] = useState();
  const dispatch = useDispatch();
  

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    setsignIn(!signIn);
  };
  const HandlePassword = (e) => {
    e.preventDefault();
    setseePassword(!seePassword);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message) return;
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName:  name.current.value,
          }).then(() => {
            const {uid,email,displayName} = auth.currentUser;
          dispatch(addUser({uid:uid , email:email , displayName:displayName}));
          }).catch((error) => {
            seterrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="relative z-10 my-4 mx-20 flex justify-between ">
        <Link to={"/"} ><img
          className="w-48"
          src={logo}
          alt="Netflix Logo"
        /></Link>
        <h1 className="text-white text-xl  ">id: adi04@gmail.com Pass: aditya1234</h1>
      </div>
      <div className="absolute inset-0 ">
        {" "}
        {/* Added z-index */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black "></div>
      </div>
      {/** Form Starting  */}
      <div>
        <form className="absolute w-3/12 p-12 bg-black my-20  mx-auto right-0 left-0 text-white flex flex-col rounded-sm bg-opacity-70">
          <h1 className=" text-3xl my-10 font-bold ">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
          {!signIn && (
            <input
              ref={name}
              className="py-4 px-4 my-2 bg-black  placeholder-gray-300  bg-opacity-50 rounded-md border-2 border-white border-opacity-50 "
              type="text"
              placeholder="Full Name"
              name=""
              id=""
            />
          )}
          <input
            ref={email}
            className="py-4 px-4 my-2 bg-black  placeholder-gray-300  bg-opacity-50 rounded-md border-2 border-white border-opacity-50 "
            type="text"
            placeholder="Email or mobile number"
            name=""
            id=""
          />
          <div className="flex w-full justify-between">
            <input
              ref={password}
              className="py-4 px-4 my-2 w-full bg-black  placeholder-gray-300   bg-opacity-50 rounded-tl-md rounded-bl-md border-r-0  border-2 border-white border-opacity-50 focus:outline-none "
              type={seePassword ? "text" : "password"}
              placeholder="Password"
              name=""
              id=""
            />
            <button
              className="bg-opacity-50 bg-black py-4 px-8  my-2 w-10 rounded-tr-md rounded-br-md border-l-0 border-2 border-white border-opacity-50 focus:outline-none"
              onClick={HandlePassword}
            >
              {seePassword ? "🙂" : "🫣"}
            </button>
          </div>
          <h1 className="text-red-500 text-lg ">{errorMessage}</h1>
          <button
            className="py-4 my-6 w-full bg-red-600 rounded-md"
            onClick={handleSubmitForm}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          <div className="flex ">
            <h1 className="">
              {signIn ? "New to CinePulse?" : "Already Registered?"}
            </h1>
            <h1
              className="font-bold ml-1 cursor-pointer "
              onClick={handleClick}
            >
              {signIn ? "Sign Up" : "Sign In"}
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
