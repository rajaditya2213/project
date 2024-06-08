import React from 'react'
import "./Header.css"
import group from "../Assets/group.png";


const Header = () => {
  return (
    
      <header>
          <div class="container header-section flex">
               <div class="header-left">
                    <p>Welcome to MediCare+ Clinic</p>
                    <h1>Best Speclialists</h1>
                    <p className='pra'>We are on the leading edge of cancer care.Providing the full continum of cnacer treatments and supportive care services in a single convient location. leading edge of cancer care.Providing the doctor location.</p>
                    <div class="bhu">
                     <button class="started">Make an Appointment  </button>
                     <button class='dep'>Department</button>
               </div>

               </div>
               <div class="header-right">
                 <img src={group} alt="" />

                    
               </div>
          </div>
          
     </header>
  )
}

export default Header