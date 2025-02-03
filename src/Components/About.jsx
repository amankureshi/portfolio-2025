import React from "react";
import "./About.css";
import aboutImage from "../assets/about-image.jpg";
const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row text-center image-reverse">
          <div className="col-md-6">
            <h2 className="section-title">About Me</h2>
            <p className="about-text"></p>
            <p className="about-text"></p>
          </div>
          <div className="col-md-6">
            <img
              src={aboutImage}
              alt="AmanKureshi"
              className="about-image img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
