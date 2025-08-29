import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'


const App = () => {

    const router = createBrowserRouter([
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/fruits",
        element:<Fruits/>
      },
    ])

  return <RouterProvider router = {router}/>
}

export default App