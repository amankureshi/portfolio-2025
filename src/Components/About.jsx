import React from "react";
import "./About.css";
import aboutImage from "../assets/image/about_Image.jpg";
import { FaCode, FaTrophy, FaPalette } from "react-icons/fa";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`about-section ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      {/* Background decoration */}
      <div className="about-orb about-orb-one"></div>
      <div className="about-orb about-orb-two"></div>
      <div className="about-grid"></div>

      <div className="container">
        {/* SECTION HEADER */}
        <div className="about-heading" data-aos="fade-up">
          <div className="about-eyebrow">
            <span></span>
            GET TO KNOW ME
          </div>

          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          <p className="about-subtitle">
            A frontend developer who loves turning ideas into clean,
            interactive and meaningful digital experiences.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="row align-items-center about-row">

          {/* IMAGE */}
          <div
            className="col-lg-5 col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="about-image-area">

              <div className="about-image-glow"></div>

              <div className="about-ring about-ring-one"></div>
              <div className="about-ring about-ring-two"></div>

              <div className="about-image-card">
                <img
                  src={aboutImage}
                  alt="Aman Kureshi"
                  className="about-image"
                />

                <div className="image-label">
                  <span className="label-dot"></span>
                  FRONTEND DEVELOPER
                </div>
              </div>

              {/* Floating badge */}
              <div className="experience-badge">
                <FaTrophy />
                <div>
                  <strong>3×</strong>
                  <span>Web Design Winner</span>
                </div>
              </div>

            </div>
          </div>

          {/* CONTENT */}
          <div
            className="col-lg-7 col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="about-content">

              <div className="about-intro">
                <span className="intro-line"></span>

                <p>
                  Hi, I'm <strong>Aman Kureshi</strong> — a passionate
                  Frontend Developer and a BCA graduate from KSV University.
                </p>
              </div>

              <div className="about-description">
                <p>
                  I enjoy creating clean, responsive and user-friendly
                  interfaces that combine thoughtful design with smooth
                  functionality. For me, frontend development is not just
                  about writing code — it's about creating experiences that
                  people enjoy using.
                </p>

                <p>
                  I'm always curious about new technologies and continuously
                  work on expanding my skill set. Among all areas of frontend
                  development, <span>CSS and UI design</span> are especially
                  exciting to me.
                </p>

                <p>
                  During my BCA journey, I secured <strong>1st place</strong>{" "}
                  in web design competitions in my 1st, 2nd and 3rd years.
                  These experiences strengthened my creativity, problem-solving
                  ability and confidence as a developer.
                </p>
              </div>

              {/* SKILL CARDS */}
              <div className="about-highlights">

                <div className="highlight-card">
                  <div className="highlight-icon">
                    <FaCode />
                  </div>

                  <div>
                    <strong>Frontend</strong>
                    <span>Development</span>
                  </div>
                </div>

                <div className="highlight-card">
                  <div className="highlight-icon">
                    <FaPalette />
                  </div>

                  <div>
                    <strong>UI / UX</strong>
                    <span>Design Focus</span>
                  </div>
                </div>

                <div className="highlight-card">
                  <div className="highlight-icon">
                    <FaTrophy />
                  </div>

                  <div>
                    <strong>3× Winner</strong>
                    <span>Web Design</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
