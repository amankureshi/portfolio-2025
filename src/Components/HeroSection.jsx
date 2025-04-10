import React from "react";
import "./HeroSection.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import useAOS from "../Hooks/useAos";
import HeroImage from "../assets/image/Hero.jpg";

const HeroSection = () => {
  useAOS();
  return (
    <div
      className="hero-bg  d-flex justify-content-center align-items-center"
      id="home"
      to="home"
    >
      <main className="hero-content container mt-5">
        <div
          className="animation-text"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2>Hello, my name is</h2>
          <h3>
            Aman <span>Kureshi</span>
          </h3>
          <ul>
            <li>
              Currently working on the{" "}
              <a
                href="https://100-projects-challenge.vercel.app/"
                target="_blank"
                className="hundred-link text-decoration-none"
              >
                100-projects
              </a>{" "}
              challenge to expand my front-end development skills.
            </li>
            <li>
              In my BCA , I achieved the 1st position in web design competitions
              during both my 1st and 2nd years
            </li>
          </ul>

          <div className="hero-button">
            <button className="hero-btn">
              <a
                href="https://github.com/amankureshi"
                target="_blank"
                className="text-decoration-none text-white"
              >
                Github <FaGithub />
              </a>
            </button>
            <button className="hero-btn">
              <a
                href="https://www.linkedin.com/in/aman-kureshi/"
                target="_blank"
                className="text-decoration-none text-white"
              >
                Linkedin <FaLinkedin />
              </a>
            </button>
          </div>
        </div>
        <div className="image-section" data-aos="fade-left">
          <img src={HeroImage} alt="Aman Kureshi Logo" />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
