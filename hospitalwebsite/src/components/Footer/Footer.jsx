import React from 'react'
import logo from "../Assets/logo.png"
import "./Footer.css"


const Footer = () => {
  return (
        <footer className='footer-section'>
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
               <div className='foter'>
                    <div className='icons'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-twitter"></i>
                    </div>
                    <p>@2023-2024</p>
               </div>
        </footer>
  )
}

export default Footer