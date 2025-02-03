import React from "react";
import "./Navbar.css";
import { FaBluesky } from "react-icons/fa6";
import Resume from "../assets/aman-resume-2025.pdf";

const Navbar = () => {
  return (
    <div>
      <div className="container">
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
                  <a
                    className="nav-link text-dark  active "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark " href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Contact us
                  </a>
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
