import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import HeroSection from "./Components/HeroSection";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import GithubStatic from "./Components/GithubStatic";
import ThemeSwitch from "./Components/ThemeSwitch";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <div className="container">
        <ThemeSwitch
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection darkMode={darkMode} />
      <Project darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <GithubStatic darkMode={darkMode} />
      <ContactUs darkMode={darkMode} />
    </div>
  );
}

export default App;
