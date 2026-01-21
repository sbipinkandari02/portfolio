"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="about"
      className="px-10 py-20 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto">
        Software Developer with 4+ years of experience specializing in React,
        Node.js, and Next.js. I build scalable applications, optimize
        performance, and love clean, maintainable code.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-center">Tech Stack</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((category) =>
          category.list.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border rounded-full text-sm text-gray-700 bg-gray-100"
            >
              {skill}
            </span>
          ))
        )}
      </div>
    </motion.section>
  );
}
