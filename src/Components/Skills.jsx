import React from "react";
import "./Skill.css";

const Skills = ({ darkMode }) => {
  const data = [
    {
      imageSrc: "https://mahin.vercel.app/svgs/HTML_icon.svg",
      name: "HTML",
    },
    {
      imageSrc: "https://mahin.vercel.app/svgs/CSS-icon.svg",
      name: "CSS",
    },
    {
      imageSrc: "https://mahin.vercel.app/svgs/JAVASCRIPT-icon.svg",
      name: "JavaScript",
    },
    {
      imageSrc: "https://mahin.vercel.app/svgs/REACT-icon.svg",
      name: "React",
    },
    {
      imageSrc: "https://img.icons8.com/?size=200&id=HKNzD81eiiSc&format=png",
      name: "jQuery",
    },
    {
      imageSrc: "https://mahin.vercel.app/svgs/BOOTSTRAPT-icon.svg",
      name: "Bootstrap",
    },
    {
      imageSrc: "https://mahin.vercel.app/svgs/TAILWIND_CSS-icon.svg",
      name: "Tailwind CSS",
    },
    {
      imageSrc: "https://mahin.vercel.app/svgs/git.svg",
      name: "Git",
    },
    {
      imageSrc: "https://img.icons8.com/?size=512&id=62856&format=png",
      name: "GitHub",
    },
    {
      imageSrc: "https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png",
      name: "Vercel",
    },
  ];

  return (
    <section
      id="skill_section"
      className={`skills-section py-5 ${darkMode ? "skills-dark text-light" : "skills-light text-dark"
        }`}
    >
      {/* Background decoration */}
      <div className="skills-orb skills-orb-one" />
      <div className="skills-orb skills-orb-two" />
      <div className="skills-grid-bg" />

      <div className="container position-relative">

        {/* ================= HEADER ================= */}
        <div
          className="text-center mx-auto mb-4 mb-md-5"
          style={{ maxWidth: "700px" }}
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <span className="skills-line" />

            <span className="small fw-bold text-uppercase text-warning">
              My Expertise
            </span>

            <span className="skills-line" />
          </div>

          <h2 className="display-5 fw-bold mb-3 skills-heading">
            My <span>Skills</span>
          </h2>

          <p
            className={`mb-0 ${darkMode ? "text-white-50" : "text-secondary"
              }`}
          >
            Technologies and tools I use to build modern, responsive and
            user-friendly web experiences.
          </p>
        </div>

        {/* ================= SKILLS GRID ================= */}
        <div className="row g-3 g-md-4 justify-content-center">

          {data.map((item, index) => (
            <div
              key={item.name}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 50, 250)}
            >
              <div
                className={`card skill-card h-100 border-0 rounded-4 text-center ${darkMode
                  ? "bg-dark text-light"
                  : "bg-white text-dark"
                  }`}
              >
                {/* Icon */}
                <div className="card-body d-flex flex-column align-items-center justify-content-center p-3 p-md-4">

                  <div className="skill-icon-box rounded-4 d-flex align-items-center justify-content-center mb-3">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="img-fluid skill-icon"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <h3 className="h6 fw-semibold mb-0">
                    {item.name}
                  </h3>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* ================= BOTTOM INFO ================= */}
        <div
          className="text-center mt-5 pt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span
            className={`small ${darkMode ? "text-white-50" : "text-secondary"
              }`}
          >
            Always learning • Always improving
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skills;
