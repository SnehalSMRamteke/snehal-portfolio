import NavbarComp from "./components/NavbarComp";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <NavbarComp />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
