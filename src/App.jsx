import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './Component/Header'
import Footer from './Component/Footer'

function App() {
 

  return (
    <>
    <div>
      <Header/>
      <Outlet/>
    
      <Footer/>

    
      
    </div>
    </>
  )
}

export default App
