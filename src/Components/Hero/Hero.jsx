import React from 'react'
import CountUp from 'react-countup';

import "./Hero.css"
function Hero() {

  return (
    <section className='hero-section'>
      <div className="hero-container">
      <div className="left-side">
        <h1> Your Health Is Our Top Priority </h1>
        <span className='secondaryText'>
          Securly share your comprehensive medical history with <br/>
          doctors and loved ones, for better communication and care.
        </span> <br />
        <div className="hero-button">
        <button className="btn">Appointment Now</button>
        </div>
      </div>
      <div className="right-side">
        <div className="img-container">
       <img src='/Doctors.jpg' alt="doctors" width={500} />
       </div>
      </div>
      </div>
      {/* Stats  */}
      <div className="stats">
        <div className="stat">
        <CountUp className='MainText' start={0} end={500} duration={5.5} />
          <span className='orangeText'>+</span>
         <p className='secondaryText'>Expert Doctors</p>
        </div>
        <hr className='divider'/>
        <div className="stat">
        <CountUp className='MainText' start={0} end={20000} duration={5.5} />
          <span className='orangeText'>+</span>
         <p className='secondaryText'>Happy Patient</p>
        </div>
        <hr className='divider'/>
        <div className="stat">
          <span className='MainText'>24/7</span>
         <p className='secondaryText'>Emergency Service</p>
        </div>
        <hr className='divider'/>
        <div className="stat">
        <CountUp className='MainText' start={0} end={100} duration={5.5} />
          <span className='orangeText'>+</span>
         <p className='secondaryText'>Operation Theaters</p>
        </div>
        <hr className='divider'/>
        <div className="stat">
        <CountUp className='MainText' start={0} end={500} duration={5.5} />
          <span className='orangeText'>+</span>
         <p className='secondaryText'>Hospital Rooms</p>
        </div>
      </div>
    </section>
  )
}

export default Hero