import React from 'react'
import './Footr.css'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div>
      
        <footer>
          <section className="footer">
            <div className="share">


              <li> </li>
              <li> </li>
              <li> </li>
              <li> </li>

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