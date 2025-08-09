import React from "react";
import "./HeroSection.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import useAOS from "../Hooks/useAos";
import HeroImage from "../assets/image/Hero-bg.jpg";
import { GiTrophyCup } from "react-icons/gi";

const HeroSection = () => {
  useAOS();
  return (
    <div
      className="hero-bg d-flex justify-content-center align-items-center"
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
              <GiTrophyCup />
              In my BCA, I achieved{" "}
              <a
                href="https://drive.google.com/drive/folders/199jgstGOC2N0tlEhWH2CYvhw21M4c-04?usp=sharing"
                rel="noopener noreferrer"
                className="hundred-link text-decoration-none"
                target="_blank"
              >
                1<sup>st</sup> position
              </a>{" "}
              in web design competitions during my 1st, 2nd, and 3rd years.
            </li>
          </ul>

          <div className="hero-button">
            <a
              href="https://github.com/amankureshi"
              target="_blank"
              className="text-decoration-none"
            >
              <button className="hero-btn text-white">
                Github <FaGithub />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kureshi/"
              target="_blank"
              className="text-decoration-none"
            >
              <button className="hero-btn text-white">
                Linkedin <FaLinkedin />
              </button>
            </a>
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
