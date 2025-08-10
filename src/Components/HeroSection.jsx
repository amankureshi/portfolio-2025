import React from "react";
import "./HeroSection.css";
import Resume from "../assets/Aman_Frontend_Resume.pdf";
import useAOS from "../Hooks/useAos";
import HeroImage from "../assets/image/Hero-bg.jpg";
import { GiTrophyCup } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-scroll";

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

          <div class="d-inline-flex">
            <a
              href={Resume}
              class="btn btn-dark text-white px-4 py-3 lh-1 d-flex justify-content-center align-items-center resume-btn"
              target="_blank"
            >
              <FiDownload class="me-2" /> Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={100}
              offset={-50}
              target="_blank"
              class="btn contact-btn px-4 py-3 lh-1 d-flex justify-content-center align-items-center resume-btn"
            >
              <FaPaperPlane class="me-2" /> Contact Us
            </Link>
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
