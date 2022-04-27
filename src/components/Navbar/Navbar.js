import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo4.webp'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navibar'>
        <nav className='logo'>
        <img src={logo} alt="Logo" />
        </nav>
        <nav className='navi-links'>
        <div className="links">
              
              <Link className='li' to="/home">Home</Link>
              <Link className='li' to="/about">About</Link>
              <Link className='li' to="/product">Product</Link>
              <Link className='li' to="/contact">Contact</Link>
                
  
              </div>
        </nav>
    </div>
  )
}

export default Navbar