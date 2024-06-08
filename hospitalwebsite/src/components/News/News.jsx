import React from 'react'
import "./News.css"
import doctorone from "../Assets/dctr1.avif";
import femaledctor from "../Assets/female dctor.jpg";
import maledoctor from "../Assets/male doctor.jpg";
import femaledoctor2 from "../Assets/female doctor2.avif"
import doctor2 from "../Assets/doctor2.jpg";
import testi from "../Assets/testi.webp";


const News = () => {
  return (
      <section className='news-section'>
          <div className="news">
                 <h1>We Have The Best Specialist</h1>
                 <p>We have a wide experience in experience in design and strategy, <br />with locally-rooted knowledge </p>

         </div>

         <div className="boxe">

              <div className='container-section'>
                 <img src={doctorone} alt="" />
                 <h2>Dr.Awaatif Ali</h2>
                 <p>Dental Care</p>

               </div>
               <div className='container-section'>
                 <img src={femaledctor} alt="" />
                 <h2>Dr.Philip Gaspar</h2>
                 <p>Cardiology</p>

               </div>
               <div className='container-section'>
                 <img src={maledoctor} alt="" />
                 <h2>Dr.Sukmeet Gore</h2>
                 <p>Neurological</p>

               </div>
               <div className='container-section'>
                 <img src={femaledoctor2} alt="" />
                 <h2>Dr.Siri Jackbossan</h2>
                 <p>Prediatrics</p>

               </div>
</div>
                     
               
                
              <section className='section-2'>
                     <h1>What Our Customer Says</h1>

                     <div className='sect3'>
                     <div className='box2'>
                      <div className='para'>
                          <p>I wanted to thanks everyone at this facility for the quality for the quality of care and compression then saying during take care for evrythings of  my stay.</p>
                          <div className='dctr-img'> 
                              <img src={doctor2} alt="" />
                              <h3>Jacqeuilne Asong </h3>                               
                          </div>
                          <p className='pat'>Patiet</p>

                          </div>     
                     </div>

                     <div className='box2'>
                      <div className='para'>
                          <p>I wanted to thanks everyone at this facility for the quality for the quality of care and compression then saying during take care for evrythings of  my stay.</p>
                          <div className='dctr-img'> 
                              <img src={testi} alt="" />
                              <h3>Patricia Riberio </h3>                               
                          </div>
                          <p className='pat'>Patiet</p>

                          </div>     
                     </div>
                     </div>

              </section>
              
              <section className='section-3'>
                    <div className="news-letter">
                           <h1>Subscribe to NewsLetter</h1>
                           <p>We have a wide experience in experience design and strategy.</p>
                           <form action="">
                              <input type="email" name=" Email" id="" placeholder='Enter your email' />
                              <button className='btn'>Send Now</button>
                           </form>
                    </div>
              </section>

      </section>
  )
}

export default News