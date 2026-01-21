import type { Metadata } from "next";
import About from "@/components/sections/About";

export const aboutData = {
  title: "About Me",
  description: [
    "I am a Frontend Developer with experience building scalable, high-performance web applications using React and Next.js.",
    "I focus on clean UI, performance optimization, SEO, and maintainable code architecture.",
    "I enjoy turning complex problems into simple, elegant solutions."
  ],
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "REST APIs",
    "Git",
  ],
};

export const metadata: Metadata =  {
  title: "Projects | Bipin Kandari",
  description: aboutData.description.join(" "),
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
