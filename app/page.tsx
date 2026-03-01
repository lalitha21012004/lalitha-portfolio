import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}