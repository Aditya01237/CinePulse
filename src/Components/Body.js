import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './MainPage'
import GptMainPage from './GptMainPage'

const Body = () => {
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
    {
      path:"gptsearch",
      element:<GptMainPage/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body