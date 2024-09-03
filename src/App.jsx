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



function App() {
  

  return (
    <>
     <CustomNavbar/>
     <div className="main-content">
        {/* <Home /> */}
        {/* <Register /> */}
        <Login />
      </div>
     <Footer/>
     
    </>
  )
}

export default App
