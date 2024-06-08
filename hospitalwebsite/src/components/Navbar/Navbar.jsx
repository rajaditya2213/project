import React from 'react'
import logo from "../Assets/logo.png";
import './Navbar.css'
const Navbar = () => {
  return (
    <div>

<nav>
          <div class="container main-nav flex">
               <a href="#" class="company-logo">
                <img src={logo} alt="" />
               </a>
              
               <div class="nav-links">
                    <ul class="flex">
                         <li><a href="" class="home" >Home</a></li>
                         <li><a href="" >About Us</a></li>
                         <li><a href="" >Services</a></li>
                         <li><a href="" >News</a></li>
                         <button>Contact</button>
                    </ul>

               </div>
          </div>
     </nav>

    </div>
  )
}

export default Navbar