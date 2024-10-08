import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddSaddle from './Component/AddSaddle/AddSaddle.jsx'
import Home from './Component/AddSaddle/Home.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/addSaddle',
        element:<AddSaddle/>},
        {
          path:'/home',
          element:<Home/>}
    ]

    
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
