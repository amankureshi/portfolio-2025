import React from "react";
import "./Navbar.css";
import { FaBluesky } from "react-icons/fa6";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const Navbar = ({ darkMode }) => {
  return (
    <div className={darkMode ? "nav-bg dark-mode" : "nav-bg"}>
      <div className="container fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="highlight">AMAN</div>
              <FaBluesky className="fly-icon" />
              <div className={`name ${darkMode ? "text-white" : "text-dark"}`}>
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
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    to="home"
                    smooth={true}
                    duration={100}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    to="projects"
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    to="about"
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    to="skill_section"
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                    to="statics_section"
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    Statics
                  </Link>
                </li>
                <li className="nav-item">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                      to="contact"
                      smooth={true}
                      duration={100}
                      offset={-50}
                    >
                      Contact us
                    </Link>
                  </li>
                </li>
              </ul>

              <div className="d-flex gap-2 h6 mt-1">
                <a
                  href="https://github.com/amankureshi"
                  className="text-white bg-dark rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-kureshi/"
                  className="text-white bg-dark rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://codepen.io/amankureshi786"
                  className="text-white bg-dark rounded-circle p-2 d-inline-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <FaCodepen />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
