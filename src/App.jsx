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
      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-btn">
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <Project />
      <About />
      <Skills />
      <GithubStatic />
      <ContactUs />
    </div>
  );
}

export default App;
