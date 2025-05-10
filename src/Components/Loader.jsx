import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <main className="loader-center">
      <div className="contain">
        <div className="second"></div>
        <div className="third"></div>
        <div className="text">Loading...</div>
      </div>
    </main>
  );
};

export default Loader;
