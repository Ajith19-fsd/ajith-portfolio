import { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import "../index.css";

export default function Home() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (!ref.current) return;
    const top = ref.current.offsetTop;
    const height = ref.current.offsetHeight;
    const centerOffset = top - window.innerHeight / 2 + height / 2;
    window.scrollTo({
      top: centerOffset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, skillsRef, projectsRef }} />

      <div className="nav-bg text-white scroll-smooth">

        {/* Hero */}
        <section ref={homeRef} className="min-h-screen flex items-center justify-center px-6">
          <Hero />
        </section>

        {/* Skills */}
        <section ref={skillsRef} className="min-h-screen flex items-center justify-center px-6">
          <Skills />
        </section>

        {/* Projects */}
        <section ref={projectsRef} className="min-h-screen flex items-center justify-center px-6">
          <Projects />
        </section>

        {/* Optional Contact Anchor */}
        <div id="contact" className="h-1" />
      </div>
    </>
  );
}
