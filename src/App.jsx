import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

function App() {
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
