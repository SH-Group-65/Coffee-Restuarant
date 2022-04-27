import React from 'react'
import './Footr.css'
import { Link } from "react-router-dom";
import fb from '../img/fb.png'
import ig from '../img/ig.jpg'
import wh from '../img/whatsapp.jpg'
import tw from '../img/twittr.jpg'


function Footer() {
  return (
    <div>
      
        <footer>
          <section className="footer">
            <div className="share">


              <li><img src={fb} alt="Logo" /> </li>
              <li> <img src={ig} alt="Logo" /></li>
              <li> <img src={wh} alt="Logo" /></li>
              <li><img src={tw} alt="Logo" /> </li>

            </div>
            <div className="links">
              
            <Link className='li' to="/home">Home</Link>
            <Link className='li' to="/about">About</Link>
            <Link className='li' to="/product">Product</Link>
            <Link className='li' to="/contact">Contact</Link>
              

            </div>
            <div className="credit">
              Created by SH group 65 || The winning team ||<span> All rights reserved </span>@2022
            </div>

          </section>
        </footer>
    </div>
  )
}

export default Footer