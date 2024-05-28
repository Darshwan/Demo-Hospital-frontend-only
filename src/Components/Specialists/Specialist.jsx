import React from 'react'
import "./Specialist.css"
function Specialist() {
  return (
    <section className='Spec-container' >
        <h2 className="title">Meet Our Specialists</h2>
        <div className="Specialists-Container">
            <div className="card-1 card">
                <div className="image-container">
                <img src="./Specialist_1.jpg" alt="specialist" />
                </div>
                <div className="info">
                    <span className='Name'>Dr.Robert Watson</span>
                    <span className='post'>Neurologist</span>
                    <span className="hospital">Apex Hospital</span>
                </div>
            </div>

            <div className="card-2 card">
                <div className="image-container">
                <img src="./Specialist_2.jpg" alt="specialist" />
                </div>
                <div className="info">
                    <span className='Name'>Dr. Bettie Chan</span>
                    <span className='post'>Cardiologist</span>
                    <span className="hospital">Advocate Hospital</span>
                </div>
            </div>

            <div className="card-3 card">
                <div className="image-container">
                <img src="./Specialist_3.jpg" alt="specialist" />
                </div>
                <div className="info">
                    <span className='Name'>Dr. Albert Flores Watson</span>
                    <span className='post'>Neurologist</span>
                    <span className="hospital">Apex Hospital</span>
                </div>
            </div>

            <div className="card-4 card">
                <div className="image-container">
                <img src="./Specialist_4.jpg" alt="specialist" />
                </div>
                <div className="info">
                    <span className='Name'>Dr.Robert Watson</span>
                    <span className='post'>Neurologist</span>
                    <span className="hospital">Apex Hospital</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Specialist