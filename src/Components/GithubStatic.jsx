import React from "react";
import "./GithubStatic.css";

const GithubStatic = () => {
  return (
    <div className="container">
      <h2
        className="section-title text-center mt-5"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        My Github Statics
      </h2>
      <div className="row">
        <img
          src="https://ghchart.rshah.org/amankureshi"
          className="github-img "
          alt=""
        />
      </div>
    </div>
  );
};

export default GithubStatic;
