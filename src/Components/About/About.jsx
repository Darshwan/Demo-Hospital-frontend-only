import React from "react";
import "./About.css";
function About() {
  return (
    <section className="About">
      <h2 className="title">Who Are We ?</h2>
      <div className="About-container">
        <div className="leftSide">
          <span>
            A collaborative hospital service website is a digital platforom that
            brings together healthcare professionals, patients, and
            administrators to streamline and enchance the delivery of health
            care services. This innovative platform allows for seamless
            communicaiton and coordination among healthcare teams , enabling
            them to provide more efficient and personalized care to patients.
          </span>
        </div>
        <div className="About-rightSide">
          <div className="image">
            <img src="./Doctor2.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./Specialist_1.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./Specialist_2.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./Specialist_3.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./Specialist_2.jpg" alt="" />
          </div>
          <div className="image">
            <img src="./Doctors.jpg" alt="" />
          </div>
        </div>
      </div>
      <h2 className="title">Patient Feedback</h2>
      <div className="Patient-Cards">
        <div className="patientCard">
          <div className="imageAndName">
            <div className="img">
              <img src="Doctors.jpg" alt="" width={100} />
            </div>
            <div className="nameAndPost">
              <span>Andrew Miles</span>
              <span>Businessman</span>
            </div>
          </div>
          <div className="description">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </span>
          </div>
        </div>
        <div className="patientCard Patientcard-2">
          <div className="imageAndName">
            <div className="img">
              <img src="Doctors.jpg" alt="" width={100} />
            </div>
            <div className="nameAndPost">
              <span>Andrew Miles</span>
              <span>Businessman</span>
            </div>
          </div>
          <div className="description">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </span>
          </div>
        </div>
        <div className="patientCard">
          <div className="imageAndName">
            <div className="img">
              <img src="./Adult.jpg" alt="" width={100} />
            </div>
            <div className="nameAndPost">
              <span>Andrew Miles</span>
              <span>Businessman</span>
            </div>
          </div>
          <div className="description">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
