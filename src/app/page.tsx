import HomePage from "@/components/sections/Home";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Project";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </main>
  );
}
