import React from "react";
import "./Skill.css";

const Skills = () => {
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
      name: "J-query",
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
      imageSrc:
        "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png",
      name: "Vercel",
    },
  ];

  return (
    <section className="skills-section" id="skill_section" to="skill_section">
      <div className="skills-container">
        <h2
          className="skills-heading"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          My Skills
        </h2>
        <div className="skills-row container">
          {data.map((item, index) => (
            <div className="skills-card-container" key={index}>
              <div className="skills-card">
                <img
                  src={item.imageSrc}
                  className="skills-card-image"
                  alt={item.name}
                />
                <div className="skills-card-body">
                  <h5 className="skills-card-title">{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
