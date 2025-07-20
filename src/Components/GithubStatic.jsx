import React from "react";
import "./GithubStatic.css";

const GithubStatic = () => {
  return (
    <div className="github-section">
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
        <img
          src="https://streak-stats.demolab.com?user=amankureshi&theme=vision-friendly-dark&card_width=460"
          alt="GitHub Streak"
          className="github-card"
        />
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
