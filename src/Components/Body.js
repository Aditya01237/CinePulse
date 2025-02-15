import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './MainPage'
import { useEffect } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utills/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utills/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <MainPage/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/browser",
      element: <Browser/>
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid , email:email , displayName:displayName}));
        // ...
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body