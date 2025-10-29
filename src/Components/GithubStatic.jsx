import React from "react";
import "./GithubStatic.css";

const GithubStatic = ({ darkMode }) => {
  return (
    <div
      className={`github-section ${darkMode ? "bg-dark text-light" : ""}`}
      id="statics_section"
    >
      <h2
        className={`section-title text-center ${
          darkMode ? "text-light" : "text-dark"
        }`}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        My Github Statics
      </h2>

      <div className="contribution-chart">
        <img
          src="https://ghchart.rshah.org/amankureshi"
          alt="GitHub Contributions"
          className={`github-img ${darkMode ? "github-img-dark" : ""}`}
        />
      </div>

      <div className="github-cards">
        <a href="https://git.io/streak-stats">
          <img
            src={`https://github-readme-streak-stats-seven-flame.vercel.app?user=amankureshi&theme=${
              darkMode ? "dark" : "vision-friendly-dark"
            }&card_width=500&card_height=210`}
            alt="GitHub Streak"
            className={`github-card ${darkMode ? "github-card-dark" : ""}`}
          />
        </a>

        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=amankureshi&show_icons=true&locale=en&layout=compact&theme=${
            darkMode ? "dark" : "highcontrast"
          }`}
          alt="Top Languages"
          className={`github-card2 ${darkMode ? "github-card2-dark" : ""}`}
        />
      </div>
    </div>
  );
};

export default GithubStatic;
