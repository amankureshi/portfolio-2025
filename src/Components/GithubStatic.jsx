import React from "react";
import "./GithubStatic.css";

const GithubStatic = ({ darkMode }) => {
  const streakTheme = darkMode ? "dark" : "vision-friendly-dark";
  const languageTheme = darkMode ? "dark" : "highcontrast";

  return (
    <section
      id="statics_section"
      className={`github-section py-5 ${darkMode ? "dark-mode text-light" : "light-mode"
        }`}
    >
      {/* Background decoration */}
      <div className="github-orb github-orb-one"></div>
      <div className="github-orb github-orb-two"></div>
      <div className="github-grid"></div>

      <div className="container position-relative">
        {/* Section Header */}
        <div
          className="text-center mx-auto mb-5"
          style={{ maxWidth: "700px" }}
          data-aos="fade-up"
        >
          <div className="github-eyebrow">
            <span></span>
            GITHUB ACTIVITY
            <span></span>
          </div>

          <h2 className="github-title mb-3">
            My <span>GitHub</span> Statistics
          </h2>

          <p
            className={`github-subtitle mb-0 ${darkMode ? "text-secondary" : "text-muted"
              }`}
          >
            A quick look at my coding activity, contribution history and
            technologies I work with.
          </p>
        </div>

        {/* Contribution Chart */}
        <div
          className="row justify-content-center mb-4"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="col-12 col-xl-10">
            <div
              className={`github-panel p-3 p-md-4 ${darkMode ? "github-panel-dark" : ""
                }`}
            >
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div>
                  <h5 className="mb-1 fw-semibold">Contribution Activity</h5>
                  <small className="text-secondary">
                    My GitHub contribution graph
                  </small>
                </div>

                <span className="github-live-badge">
                  <span></span>
                  LIVE
                </span>
              </div>

              <div className="github-chart-wrapper">
                <img
                  src="https://ghchart.rshah.org/amankureshi"
                  alt="Aman's GitHub contribution chart"
                  className="github-chart img-fluid"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Cards */}
        <div className="row g-4 justify-content-center">
          {/* Streak */}
          <div
            className="col-12 col-lg-7"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div
              className={`github-stat-card h-100 ${darkMode ? "github-stat-card-dark" : ""
                }`}
            >
              <div className="github-card-heading">
                <div>
                  <h5 className="mb-1 fw-semibold">GitHub Streak</h5>
                  <small className="text-secondary">
                    Consistency is the key to growth
                  </small>
                </div>

                <span className="github-number">01</span>
              </div>

              <a
                href="https://git.io/streak-stats"
                target="_blank"
                rel="noopener noreferrer"
                className="github-image-link"
              >
                <img
                  src={`https://github-readme-streak-stats-seven-flame.vercel.app?user=amankureshi&theme=${streakTheme}&card_width=500&card_height=210`}
                  alt="GitHub Streak Statistics"
                  className="github-stat-image"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>

          {/* Languages */}
          <div
            className="col-12 col-lg-5"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div
              className={`github-stat-card h-100 ${darkMode ? "github-stat-card-dark" : ""
                }`}
            >
              <div className="github-card-heading">
                <div>
                  <h5 className="mb-1 fw-semibold">Top Languages</h5>
                  <small className="text-secondary">
                    Technologies I use most
                  </small>
                </div>

                <span className="github-number">02</span>
              </div>

              <div className="github-language-wrapper">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs?username=amankureshi&show_icons=true&locale=en&layout=compact&theme=${languageTheme}`}
                  alt="Aman's top GitHub languages"
                  className="github-language-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Caption */}
        <div
          className="text-center mt-5"
          data-aos="fade-up"
          data-aos-delay="450"
        >
          <span className="github-footer-text">
            <span className="footer-dot"></span>
            Building • Learning • Improving
          </span>
        </div>
      </div>
    </section>
  );
};

export default GithubStatic;
