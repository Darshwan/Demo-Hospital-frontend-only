import React from "react";
import "./Service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import FontAwesome icons for the categories
import {
  faBrain,
  faHeartPulse,
  faTooth,
  faBone,
  faRadiation,
  faPills,
  faStethoscope,
  faAnglesRight,
  faBandAid,
} from "@fortawesome/free-solid-svg-icons";

function Service() {
  return (
    <section className="S-container">
      <h2 className="title">Services</h2>
      <div className="container">
        <div className="grid-container">
          <div className="grid-item">
            <FontAwesomeIcon icon={faBrain} className="icon" />
            <div className="text">Neurology</div>
          </div>
          <div className="grid-item cardiology">
            <FontAwesomeIcon icon={faHeartPulse} className="icon cardiologyIcon" />
            <div className="text">Cardiology</div>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faBandAid} className="icon" />
            <div className="text">Surgery</div>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faTooth} className="icon"/>
            <div className="text">Dentistry</div>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faRadiation} className="icon"/>
            <div className="text">Radiology</div>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faStethoscope} className="icon"/>
            <div className="text">Urology</div>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faPills} className="icon"/>
            <div className="text">Medicine</div>
          </div>
          <div className="grid-item">
            <FontAwesomeIcon icon={faBone} className="icon"/>
            <div className="text">Orthopaedics</div>
          </div>
          <div className="grid-item">
          <FontAwesomeIcon icon={faAnglesRight} className="icon" />
            <div className="text">See more...</div>
          </div>
        </div>
        <div className="rightSide">
          <h2>Cardiology Department</h2>
          <ul className="Services">
            <li>Electrocardium (ECG)</li>
            <li>Echocardiagram</li>
            <li>Color Doppler Echo</li>
            <li>Dobutamine Stress Echo(DSE)</li>
            <li>Transesophageal (TEE)</li>
            <li>Exercise Tolerance Text (Ett/TMT)</li>
            <li>Holter monitor</li>
            <li>24 Hour Ambulatory BP monitor</li>
            <li>Tilt Test/ Tilt Table Text</li>
          </ul>
          <button className="btn">Appointment Now</button>
        </div>
      </div>
      <div className="container-2">
        <div className="rightSide">
          <h2>
            We are always here to Ensure Best Medical Treatment
          </h2>
          <ul className="Services">
            <li>Easy make appointment</li>
            <li>Top specialist Doctor</li>
            <li>24/7 services</li>
            <li>Discount for all medical treatment</li>
            <li>Enrollment is quick and easy</li>
          </ul>
        </div>
        <div className="leftSide">
          <div className="img-container">
          <img src="Doctor2.jpg" alt="Doctor2" width={600} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
