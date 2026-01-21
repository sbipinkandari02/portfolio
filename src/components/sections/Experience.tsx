"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="experience"
      className="px-10 py-20 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

      <div className="space-y-8">
        {experience.map((exp) => (
          <div key={exp.company} className="border-l-2 border-gray-300 pl-6">
            <h3 className="font-semibold text-xl">{exp.role} @ {exp.company}</h3>
            <p className="text-gray-500 text-sm mb-2">{exp.duration} | {exp.location}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
