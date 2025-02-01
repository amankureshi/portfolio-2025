import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <main className="hero-content container mt-5">
      <div className="animation-text">
        <h2>Hello, my name is</h2>
        <h3>
          Aman <span>Kureshi</span>
        </h3>
        <h1>
          <ul>
            <li>
              Currently working on the
              <a href="" className="hundred-link text-decoration-none px-1">
                100-project
              </a>
              challenge to expand my front-end development skills.
            </li>
            <li>
              In my BCA , I achieved the 1st position in web design competitions
              during both my 1st and 2nd years
            </li>
          </ul>
        </h1>
        <div className="hero-button">
          <button className="hero-btn">
            <a
              href="https://github.com/amankureshi"
              target="_blank"
              className="text-decoration-none text-white"
            >
              Github
            </a>
          </button>
          <button className="hero-btn">
            <a
              href="https://www.linkedin.com/in/aman-kureshi/"
              target="_blank"
              className="text-decoration-none text-white"
            >
              Linkedin
            </a>
          </button>
        </div>
      </div>
      <div className="image-section">
        <img
          src="https://amankureshi.vercel.app/images/aman-logo1.png"
          alt="Aman Kureshi Logo"
        />
      </div>
    </main>
  );
};

export default HeroSection;
