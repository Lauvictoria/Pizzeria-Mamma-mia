import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import CustomNavbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'
import Pizza from './components/Pizza'



function App() {
  

  return (
    <>
    <div className="main-content">
      <CustomNavbar/>
      {/* <Home /> */}
      <Pizza/>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart/> */}
      <Footer/>
    </div>
    </>
  )
}

export default App
