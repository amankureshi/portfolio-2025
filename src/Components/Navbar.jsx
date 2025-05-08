import React from "react";
import "./Navbar.css";
import { FaBluesky } from "react-icons/fa6";
import Resume from "../assets/aman-resume.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="nav-bg">
      <div className="container fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="highlight">AMAN</div>
              <FaBluesky className="fly-icon" />
              <div className="name">KURESHI</div>
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
                    className="nav-link text-dark  active "
                    aria-current="page"
                    to="home"
                    smooth={true}
                    duration={100}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    to="projects"
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
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
                    className="nav-link text-dark"
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
                    className="nav-link text-dark"
                    to="contact"
                    smooth={true}
                    duration={100}
                    offset={-50}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn resume-btn" type="submit">
                  <a
                    href={Resume}
                    className="text-decoration-none text-white"
                    target="_blank"
                  >
                    Resume
                  </a>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
