import { useState } from "react";

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
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 border rounded ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {content[activeTab].map((item, index) => (
          <div key={index} className="border p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-40 object-cover my-2"
            />
            <div className="flex justify-between">
              <a
                href={item.sourceCodeLink}
                target="_blank"
                className="text-blue-500"
              >
                Source Code
              </a>
              <a
                href={item.visitPageLink}
                target="_blank"
                className="text-green-500"
              >
                Visit Page
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
