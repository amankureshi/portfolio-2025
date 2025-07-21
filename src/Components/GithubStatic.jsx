import React from "react";
import "./GithubStatic.css";

const GithubStatic = () => {
  return (
    <div className="github-section" id="statics_section">
      <h2
        className="section-title text-center"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        My Github Statics
      </h2>

      <div className="contribution-chart">
        <img
          src="https://ghchart.rshah.org/amankureshi"
          alt="GitHub Contributions"
          className="github-img"
        />
      </div>
      <div className="github-cards">
        <a href="https://git.io/streak-stats">
          <img
            src="https://github-readme-streak-stats-seven-flame.vercel.app?user=amankureshi&theme=vision-friendly-dark&card_width=500&card_height=210"
            alt="GitHub Streak"
            className="github-card"
          />
        </a>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=amankureshi&show_icons=true&locale=en&layout=compact&theme=highcontrast"
          alt="Top Languages"
          className="github-card2"
        />
      </div>
    </div>
  );
};

export default GithubStatic;
