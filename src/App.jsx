import "./App.css";
import About from "./Components/About";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Project />
    </>
  );
}

export default App;
