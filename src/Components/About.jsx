import React from "react";
import "./About.css";
// import aboutImage from "../assets/about-image.jpg";
import aboutImage from "../assets/image/8.jpg";

const About = () => {
  return (
    <section id="about" className="about-section py-5 container">
      <div className="container-fluid">
        <div className="row text-center image-reverse">
          <div className="col-md-6">
            <h2 className="section-title" data-aos="fade-up">
              About Me
            </h2>
            <p className="about-text" data-aos="fade-left">
              Hi, I’m Aman Kureshi, a frontend developer currently studying BCA
              (Bachelor of Computer Applications) in the 6th semester. I have a
              strong interest in creating interactive and user-friendly web
              applications.
            </p>
            <p className="about-text" data-aos="fade-left">
              I am a Frontend Developer.I love creating beautifull, usefull
              websites. I am always open to learn new technologies. I always try
              to expand my tech stack. I also have an extra interest in CSS.
            </p>
            <p className="about-text" data-aos="fade-left">
              I won 1st place in my college's web design competition in both 1st
              and 2nd year. These achievements helped me improve my skills,
              boost my creativity, and gain good experience in web development.
            </p>
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
