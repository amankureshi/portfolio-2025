import React from "react";
import "./HeroSection.css";
import Resume from "../assets/Resume/Aman_Kureshi_Frontend_Developer_Resume.pdf";
import useAOS from "../Hooks/useAos";
import HeroImage from "../assets/image/aman_2.png";
import { GiTrophyCup } from "react-icons/gi";
import { FiDownload } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-scroll";

const HeroSection = ({ darkMode }) => {
  useAOS();

  return (
    <section
      className={`hero-section  ${darkMode ? "dark-mode" : "light-mode"}`}
      id="home"
    >
      {/* Animated background */}
      <div className="hero-orb orb-one"></div>
      <div className="hero-orb orb-two"></div>
      <div className="hero-grid"></div>

      <div className="container mt-4">
        <div className="row align-items-center hero-row">

          {/* LEFT CONTENT */}
          <div
            className="col-lg-8 col-md-7"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="hero-content">

              <div className="hero-small-title">
                <span className="line"></span>
                HELLO, MY NAME IS
              </div>

              <h1 className="hero-title">
                Aman
                <span>Kureshi</span>
              </h1>

              <div className="hero-role">
                <span>Frontend Developer</span>
                <span className="role-dot"></span>
                <span>UI Enthusiast</span>
              </div>

              <p className="hero-description">
                I create modern, responsive and interactive web experiences
                with a strong focus on clean UI, performance and user
                experience.
              </p>

              <ul className="hero-info">
                <li>
                  Currently working on the{" "}
                  <a
                    href="https://100-projects-challenge.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    100-projects
                  </a>{" "}
                  challenge to expand my front-end development skills.
                </li>

                <li>
                  <GiTrophyCup className="trophy-icon" />
                  In my BCA, I achieved{" "}
                  <a
                    href="https://drive.google.com/drive/folders/199jgstGOC2N0tlEhWH2CYvhw21M4c-04?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    1<sup>st</sup> position
                  </a>{" "}
                  in web design competitions during my 1st, 2nd, and 3rd
                  years.
                </li>
              </ul>

              <div className="hero-buttons">
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn resume-btn"
                >
                  <FiDownload />
                  <span>Resume</span>
                </a>

                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hero-btn contact-btn"
                >
                  <FaPaperPlane />
                  <span>Contact Me</span>
                </Link>
              </div>

              <div className="hero-bottom">
                <div className="available-dot"></div>
                <span>Available for frontend opportunities</span>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="col-lg-4 col-md-5"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <div className="hero-image-wrapper">

              <div className="image-ring ring-one"></div>
              <div className="image-ring ring-two"></div>

              <div className="image-glow"></div>

              <div className="hero-image">
                <img
                  src={HeroImage}
                  alt="Aman Kureshi"
                />
              </div>

              {/* Floating cards */}
              <div className="floating-card card-one">
                <strong>01</strong>
                <span>Web Design</span>
              </div>

              <div className="floating-card card-two">
                <strong>100+</strong>
                <span>Projects Goal</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
