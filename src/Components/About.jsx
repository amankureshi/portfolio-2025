import React from "react";
import "./About.css";
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
            <ul className="about-text-list">
              <li className="about-text" data-aos="fade-left">
                Hi, I'm Aman Kureshi — a passionate Frontend Developer with a
                completed BCA from KSV University. I love building clean,
                responsive, and user-friendly web interfaces that make a real
                impact.
              </li>
              <li className="about-text" data-aos="fade-left">
                I am a Frontend Developer. I love creating beautiful, useful
                websites. I am always open to learn new technologies. I always
                try to expand my tech stack. I also have an extra interest in
                CSS.
              </li>
              <li className="about-text" data-aos="fade-left">
                I won 1st place in my college's web design competition in my
                1st, 2nd, and 3rd years. These achievements strengthened my
                skills, enhanced my creativity, and gave me valuable experience
                in web development.
              </li>
            </ul>
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
