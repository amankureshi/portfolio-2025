import React from "react";
import "./Navbar.css";
import { FaBluesky } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";

const Navbar = ({ darkMode }) => {
  const linkClass = `nav-link ${darkMode ? "text-white" : "text-dark"}`;

  return (
    <div className={`nav-bg ${darkMode ? "dark-mode" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <div className="highlight">AMAN</div>
            <FaBluesky className="fly-icon" />
            <div className={darkMode ? "name text-white" : "name text-dark"}>
              KURESHI
            </div>
          </a>

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
                  duration={100}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="projects"
                  smooth
                  duration={100}
                  offset={-50}
                >
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="about"
                  smooth
                  duration={100}
                  offset={-50}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="skill_section"
                  smooth
                  duration={100}
                  offset={-50}
                >
                  Skills
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="statics_section"
                  smooth
                  duration={100}
                  offset={-50}
                >
                  Statics
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={linkClass}
                  to="contact"
                  smooth
                  duration={100}
                  offset={-50}
                >
                  Contact us
                </Link>
              </li>
            </ul>

            <div className="d-flex gap-2 align-items-center">
              <a
                href="https://github.com/amankureshi"
                className="social-icon text-white bg-dark rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aman-kureshi/"
                className="social-icon text-white bg-dark rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://codepen.io/amankureshi786"
                className="social-icon text-white bg-dark rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
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
    </div>
  );
};

export default Navbar;
