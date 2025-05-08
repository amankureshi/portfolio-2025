import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import HeroSection from "./Components/HeroSection";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  const [loading, setLoading] = useState(true);

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
    <>
      <Navbar />
      <HeroSection />
      <Project />
      <About />
      <Skills />
      <ContactUs />
    </>
  );
}

export default App;
