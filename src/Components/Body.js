import React from 'react'
import Login from './Login'
import Browser from './Browser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './MainPage'

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
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body