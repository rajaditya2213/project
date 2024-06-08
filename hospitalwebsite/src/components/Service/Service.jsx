import React from 'react'
import "./Service.css"
import dental from "../Assets/dental.png";
import lungs from "../Assets/lungs.png";
import human from "../Assets/human-brain.png";
import medical from "../Assets/medical.png";
import woman from "../Assets/doctor-woman.png"
import man from "../Assets/doctor-man.png";
import ambulance from "../Assets/ambulance.png";




const Service = () => {
  return (

    <section className='feature-section'>
        <div className="big-container">
              <h1>Our Services</h1>
              <p>We provide the most full medical services, so every person could <br />have the oppourtinity to recieve qualitative medical help.</p>

            <div className='card-details'>
             <div className='card'>
                  <div className='dental'>
                     <img src={dental} alt="" />
                     <p>Dental Care</p>
                  </div>
              </div>
              <div className='card   card-dental'>
                  <div className='dental details'>
                     <img src={lungs} alt="" />
                     <h3>Pulmonary</h3>
                     <p>Learn More  </p>
                  </div>
              </div>
              <div className='card'>
                  <div className='dental'>
                     <img src={human} alt="" />
                     <p>Neurological</p>
                  </div>
              </div>
              <div className='card'>
                  <div className='dental'>
                     <img src={medical} alt="" />
                     <p>Prediatrics</p>
                  </div>
              </div>
             </div>
              
        </div> 


        <section className='feature-section2'>
              <div className='innov'>
               <div className="big-container2">
                    <h1>Clinic With Innovation</h1>
                    <p>We provide the most full medical services, so every person could <br /> heave the oppourtinity to recieve qualitative medical help.</p>
             </div>
             <div className='card-2'>
                  <div className='dental2'>
                     <img src={woman} alt="" />
                     <p>Qualified Doctors</p>
                  </div>
              </div>
              <div className='card-2'>
                  <div className='dental2'>
                     <img src={man} alt="" />
                     <p>Emergency Care</p>
                  </div>
              </div>
            </div>
            <div className=' card-det'>
                  <div className='dental3'>
                     <img src={ambulance} alt="" />
                     <p>24 Hour Service</p>
                  </div>
              </div>

            

        </section>
         
    </section>
    

    
  )
}

export default Service