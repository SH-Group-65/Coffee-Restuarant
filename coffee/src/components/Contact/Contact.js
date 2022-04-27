import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div>
      
      <div>
        <section className="contact" id='about'>
           <heading><h3>Contact <span>Us</span></h3></heading>
           <div className='row'>
             <div className='map'>
             <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507378.802108466!2d3.256151463021077!3d6.53470444612231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf2bae227550d%3A0xe771ad7f1bbe89d6!2sLagos!5e0!3m2!1sen!2sng!4v1650989333484!5m2!1sen!2sng"  
             
              style={{ border: 0 , width :"100%",frameBorder:"0", allowFullScreen:"" ,ariaHidden:"false", height :"450px", tabIndex:"0"}}
           
              ></iframe>
             </div>
              <div className='form'>
                <h3>Contact Us Now</h3>
              <form>
                <div>
                <label>Enter your name:
                    <input type="text" />
                  </label>

                </div>
                  
                  <br></br>
                  <div>
                  <label>Enter your email:
                    <input type="email" />
                  </label>
                  </div>
                  
                  <br></br>
                  <div>
                  <label>Enter your number:
                  <input type="number" />
                     </label> 
                  </div>
                  
                     <br></br>

                     <br></br>
                  <input type="submit" value='contact us'></input>
                </form>
             </div>
            
           </div>
          

      </section>
    </div>
     
    </div>
  )
}

export default Contact