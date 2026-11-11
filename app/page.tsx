import Hero from "app/components/Hero.tsx";
import Projects from "app/components/Projects.tsx";
import Skills from "app/components/Skills.tsx";
import About from "app/components/About.tsx";
import Experience from "app/components/Experience.tsx";
import Contact from "app/components/Contact.tsx";
import Navbar from "app/components/Navbar.tsx";
import Footer from "app/components/Footer.tsx";
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
