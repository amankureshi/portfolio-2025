import { useState } from "react";
import "./Project.css";

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
  ],
  css: [
    {
      title: "Restaurant",
      imageSrc: "https://i.postimg.cc/sDGsjf8R/ww.png",
      sourceCodeLink: "https://github.com/amankureshi/Restaurant-website",
      visitPageLink: "https://restaurant01.vercel.app/",
    },
  ],
  react: [
    {
      title: "Air-Jordan",
      imageSrc: "https://i.postimg.cc/2z6Sdnhw/jordan.png",
      sourceCodeLink: "https://github.com/amankureshi/Air-jordan-react",
      visitPageLink: "https://air-jordan1.vercel.app/",
    },
  ],
};

export default function Project() {
  const [activeTab, setActiveTab] = useState("javascript");

  return (
    <div className="container p-4">
      <div className="btn-group d-flex mb-4">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            className={`btn ${
              activeTab === tab ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {content[activeTab].map((item, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <div className="d-flex justify-content-between">
                  <a
                    href={item.sourceCodeLink}
                    target="_blank"
                    className="btn btn-link text-primary"
                  >
                    Source Code
                  </a>
                  <a
                    href={item.visitPageLink}
                    target="_blank"
                    className="btn btn-link text-success"
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
