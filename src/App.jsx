import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollProgress from "./components/ScrollProgress";
import SectionDots from "./components/SectionDots";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <SectionDots />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Education />
      </main>
      <Contact />
    </div>
  );
}
