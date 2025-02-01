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
              Currently working on the 100-project challenge to expand my
              front-end development skills.
            </li>
            <li>
              In my BCA , I achieved the 1st position in web design competitions
              during both my 1st and 2nd years
            </li>
          </ul>
        </h1>
      </div>
      {/* <button className="resume-btn">
        <a href="/images/my-resume.pdf" download="resume">
          Resume
        </a>
      </button> */}
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
