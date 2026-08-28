import React from "react";
import "./Navbar.css";
import { FaBluesky } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

const Navbar = ({ darkMode }) => {
  const linkClass = `nav-link ${darkMode ? "dark-link" : "light-link"}`;

  return (
    <header className={`nav-bg ${darkMode ? "dark-mode" : "light-mode"}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container navbar-container">

          {/* LOGO */}
          <a className="navbar-brand" href="#home">
            <span className="highlight">AMAN</span>

            <span className="butterfly-flight">
              <span className="butterfly-glow"></span>
              <FaBluesky className="fly-icon" />
              <span className="butterfly-spark spark-one">✦</span>
              <span className="butterfly-spark spark-two">·</span>
            </span>


            <span className="name">
              KURESHI
            </span>
          </a>

          {/* MOBILE TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAVIGATION */}
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="home"
                  smooth
                  duration={500}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="projects"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="about"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="skill_section"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  Skills
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="statics_section"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  Statics
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="contact"
                  smooth
                  duration={500}
                  offset={-90}
                >
                  Contact
                </Link>
              </li>

            </ul>

            {/* SOCIAL LINKS */}
            <div className="social-links">

              <a
                href="https://github.com/amankureshi"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aman-kureshi/"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://codepen.io/amankureshi786"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CodePen"
              >
                <FaCodepen />
              </a>

            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
