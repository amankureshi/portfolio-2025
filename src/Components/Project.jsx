import { useState } from "react";
import "./Project.css";
import Loader from "../assets/Loader/loader-spinner.svg";

const content = {
  javascript: [
    {
      title: "Quote",
      imageSrc: "https://i.postimg.cc/cJL0R1v6/api-photoshop.png",
      sourceCodeLink: "https://github.com/amankureshi/Quotes-generator",
      visitPageLink: "https://quotes-generator-vert.vercel.app/",
    },
    {
      title: "Jokes",
      imageSrc: "https://i.postimg.cc/hPXDwtsm/joke.jpg",
      sourceCodeLink: "https://github.com/amankureshi/Joke-generator",
      visitPageLink: "https://joke-generator-gilt.vercel.app/",
    },
    {
      title: "Timer",
      imageSrc: "https://i.postimg.cc/FNH739yN/timer.png",
      sourceCodeLink: "https://github.com/amankureshi/Timer",
      visitPageLink: "https://amankureshi.github.io/Timer/",
    },
    {
      title: "Calculator",
      imageSrc: "https://i.postimg.cc/Y0nSF43r/calc.png",
      sourceCodeLink: "https://github.com/amankureshi/calculator1",
      visitPageLink: "https://calculator1-nine-psi.vercel.app/",
    },
    {
      title: "Form",
      imageSrc: "https://i.postimg.cc/FHsHrPhR/form.png",
      sourceCodeLink: "https://github.com/amankureshi/Form-validation",
      visitPageLink: "https://form-v.vercel.app/",
    },
    {
      title: "Music-app",
      imageSrc: "https://i.postimg.cc/XYFVj1T7/music-app.png",
      sourceCodeLink: "https://github.com/amankureshi/Music-Player-App",
      visitPageLink: "https://song-anywhere.vercel.app/",
    },
    ,
    {
      title: "Color-changer",
      imageSrc: "https://i.postimg.cc/fyTD9y6v/arrow.jpg",
      sourceCodeLink: "https://github.com/amankureshi/Color-changer",
      visitPageLink: "https://color-changer01.vercel.app/",
    },
    {
      title: "Clock",
      imageSrc: "https://i.postimg.cc/Pds35Xr8/clock.png",
      sourceCodeLink: "https://github.com/amankureshi/Clock",
      visitPageLink: "https://clock-analog.vercel.app/",
    },
    {
      title: "BMI-Calcultor",
      imageSrc: "https://i.postimg.cc/ZYdtwDqr/bmi.jpg",
      sourceCodeLink: "https://github.com/amankureshi/Bmi-Generetor",
      visitPageLink: "https://bmi-generetor.vercel.app/",
    },
    {
      title: "Search Filter",
      imageSrc:
        "https://i.postimg.cc/Pq0MWXTx/Screenshot-2024-11-20-173241.png",
      sourceCodeLink:
        "https://github.com/amankureshi/100-projects-challenge/tree/main/day-01",
      visitPageLink: "https://search-filterday01.vercel.app/",
    },
    {
      title: "Humburger",
      imageSrc:
        "https://i.postimg.cc/xCfJWBfQ/Screenshot-2024-11-20-173944.png",
      sourceCodeLink:
        "https://github.com/amankureshi/100-projects-challenge/tree/main/day-02",
      visitPageLink: "https://humburger1.vercel.app/",
    },
    {
      title: "Toast Notification",
      imageSrc:
        "https://i.postimg.cc/8cKrN4yY/Screenshot-2024-11-20-174347.png",
      sourceCodeLink:
        "https://github.com/amankureshi/100-projects-challenge/tree/main/day-03",
      visitPageLink: "https://day-03.onrender.com/",
    },
  ],
  css: [
    {
      title: "Restaurant",
      imageSrc: "https://i.postimg.cc/sDGsjf8R/ww.png",
      sourceCodeLink: "https://github.com/amankureshi/Restaurant-website",
      visitPageLink: "https://restaurant01.vercel.app/",
    },
    {
      title: "Paralax",
      imageSrc: "https://i.postimg.cc/RhcRVBQL/parallax.png",
      sourceCodeLink: "https://github.com/amankureshi/paralax",
      visitPageLink: "https://amankureshi.github.io/Parallax/",
    },
    {
      title: "My Collage",
      imageSrc: "https://i.postimg.cc/1Rp12Nhb/bca-collge.png",
      sourceCodeLink: "https://github.com/amankureshi/Npccsm-collage",
      visitPageLink: "https://college-npccsm.vercel.app/",
    },
    {
      title: "Music B5",
      imageSrc: "https://i.postimg.cc/rFNJBqp8/dj.png",
      sourceCodeLink: "https://github.com/amankureshi/music",
      visitPageLink: "https://music-gray-one.vercel.app/",
    },
    {
      title: "Appe-Music",
      imageSrc: "https://i.postimg.cc/8Tw4wk34/music.png",
      sourceCodeLink: "https://github.com/amankureshi/Timer",
      visitPageLink: "https://amankureshi.github.io/Timer/",
    },
    {
      title: "Job-Application",
      imageSrc: "https://i.postimg.cc/zfsKLQft/job-app.png",
      sourceCodeLink: "https://github.com/amankureshi/Music-2021",
      visitPageLink: "https://music-2021.vercel.app/",
    },
    {
      title: "Avatar-Clone",
      imageSrc: "https://i.postimg.cc/7PTVLBQt/Avtar.jpg",
      sourceCodeLink: "https://github.com/amankureshi/Avatar-clone",
      visitPageLink: "https://avatar-clone.vercel.app/",
    },
    {
      title: "Developer",
      imageSrc: "https://i.postimg.cc/RVH58cF1/devloper.jpg",
      sourceCodeLink: "https://github.com/amankureshi/Devleoper_website",
      visitPageLink: "https://devleoper-website.vercel.app/",
    },
    {
      title: "Blog-Website",
      imageSrc: "https://i.postimg.cc/L8QCVzbS/blog-website.png",
      sourceCodeLink: "https://github.com/amankureshi/Blog-website",
      visitPageLink: "https://blog-website01.vercel.app/",
    },
  ],
  react: [
    {
      title: "Air-Jordan",
      imageSrc: "https://i.postimg.cc/2z6Sdnhw/jordan.png",
      sourceCodeLink: "https://github.com/amankureshi/Air-jordan-react",
      visitPageLink: "https://air-jordan1.vercel.app/",
    },
    {
      title: "Contact-Page",
      imageSrc: "https://i.postimg.cc/Y9dp7YjJ/contact.jpg",
      sourceCodeLink: "https://github.com/amankureshi/Contact-page",
      visitPageLink: "https://contact-page1.vercel.app/",
    },
    {
      title: "Dice Game",
      imageSrc: "https://i.postimg.cc/fR2GQFd7/dice-game.png",
      sourceCodeLink: "https://github.com/amankureshi/Dice-Game",
      visitPageLink: "https://dice-game7.vercel.app/",
    },
    {
      title: "E-commerce",
      imageSrc: "https://i.postimg.cc/MZ37C6sB/e-commerce.png",
      sourceCodeLink: "https://github.com/amankureshi/E-commerce",
      visitPageLink: "https://armanee.vercel.app/",
    },
    {
      title: "Contact-app",
      imageSrc: "https://i.postimg.cc/XWt2yZpb/contact-app.png",
      sourceCodeLink: "https://github.com/amankureshi/Contact-App",
      visitPageLink: "https://contact-app01.vercel.app/",
    },
  ],
};

export default function Project() {
  const [activeTab, setActiveTab] = useState("javascript");
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="container tab-center text-center p-4">
      <h1>Projects</h1>
      <div className="btn-group mb-4">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            className={`btn ${
              activeTab === tab ? "btn-primary active" : "btn-secondary"
            } btn-custom mt-4`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {content[activeTab].map((item, index) => (
          <div key={index} className="col">
            <div className="card">
              <h4 className="card-title pt-3 pb-2">{item.title}</h4>
              {loading && (
                <div className="loader-container">
                  <img src={Loader} alt="Loading..." width="150" height="200" />
                </div>
              )}
              <img
                src={item.imageSrc}
                alt={item.title}
                onLoad={handleImageLoad}
                className="card-img-top"
                style={{ display: loading ? "none" : "block" }}
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <a
                    href={item.sourceCodeLink}
                    target="_blank"
                    className="btn btn-link text-warning"
                  >
                    Source Code
                  </a>
                  <a
                    href={item.visitPageLink}
                    target="_blank"
                    className="btn btn-link text-warning"
                  >
                    Visit Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
