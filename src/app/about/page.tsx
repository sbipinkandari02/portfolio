import { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About | Bipin Kandari",
  description:
    "I am a Full-Stack Developer specializing in building high-performance, scalable web applications using React, Next.js, Node.js, and MongoDB."
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
