import React from "react";

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
    ,
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
    <section style={{ backgroundColor: "#f2f8fdc0" }}>
      <div className="container ">
        <h2 className="text-center pt-3 pb-3">Skills</h2>
        <div className="row justify-content-center gap-4">
          {data.map((item, index) => (
            <div className=" col-sm-4 col-md-3 col-lg-2 mb-4" key={index}>
              <div
                className="card  rounded-3 shadow-md"
                style={{ width: "12rem" }}
              >
                <img
                  src={item.imageSrc}
                  className="card-img-top mt-4"
                  alt={item.name}
                  style={{ height: "110px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
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
