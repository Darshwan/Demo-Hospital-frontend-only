import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className="footer">
      <div className="Foot-content1">
        <div className="Foot-content">
          <img src="Logo.png" alt="" width={100} />
          <span>4517 Washington Ave.</span>
          <span>Mnchester, Kentucky 39495</span>
          <span>+1 (505) 555-0125</span>
        </div>
        <div className="Foot-content">
          <span className="head">Departments</span>
          <span className="head1">Cardiology</span>
          <span className="head1">Neurology</span>
          <span className="head1">Urology</span>
          <span className="head1">Orthopaedics</span>
          <span className="head1">Radiology</span>
          <span className="head1">Dentistry</span>
        </div>
      </div>
      <div className="Foot-content2">
        <div className="Foot-content Foot-quickLinks">
          <span className="head head1">About</span>
          <span className="head head1">Home</span>
          <span className="head head1">Contact</span>
          <span className="head head1">Doctors</span>
          <span className="head head1">Review</span>
        </div>
        <div className="Foot-content">
          <span className="head">
            Have Something to talk abour <br /> with our professionals?
          </span>
          <div className="search-box">
            <input
              type="email"
              className="msg-box"
              placeholder="Email Address"
            />
            <FontAwesomeIcon icon={faPaperPlane} className="foot-icon" />
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faFacebook} className="foot-icon" />
            <FontAwesomeIcon icon={faInstagram} className="foot-icon" />
            <FontAwesomeIcon icon={faTwitter} className="foot-icon" />
            <FontAwesomeIcon icon={faGoogle} className="foot-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
