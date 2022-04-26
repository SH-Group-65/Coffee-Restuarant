import React from 'react'
import cf from '../img/cf3.jpg'
import './About.css'
function About() {
  return (
    <div>
        <section className="about" id='about'>
           <heading><h3>About <span>Us</span></h3></heading>
           <div className='row'>
             <div className='image'>
             <img src={cf} alt="Logo" />
             </div>
              <div className='contnet'>
                <h3>This valuable experience taught me how to lead a group of individuals and provided me with a great opportunity to work and collaborate with people from various cultures and countries. What's more, I learned how to work and perform well in a team setting and further developed my knowledge of different aspects of a business</h3>
                  <p>
                  This valuable experience taught me how to lead a group of individuals and provided me with a great opportunity to work and collaborate with people from various cultures and countries. What's more, I learned how to work and perform well in a team setting and further developed my knowledge of different aspects of a business
                  </p><p>
                  This valuable experience taught me how to lead a group of individuals and provided me with a great opportunity to work and collaborate with people from various cultures and countries. What's more, I learned how to work and perform well in a team setting and further developed my knowledge of different aspects of a business
                  </p>
                  
                <button>Learn More about us</button>
             </div>
            
           </div>
          

      </section>
    </div>

  )
}

export default About