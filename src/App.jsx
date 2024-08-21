import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import CustomNavbar from './components/Navbar'



function App() {
  

  return (
    <>
     <CustomNavbar/>
     <Home/>
     <Footer/>
     
    </>
  )
}

export default App
