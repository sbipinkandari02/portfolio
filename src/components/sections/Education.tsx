"use client";

import { education } from "@/data/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="education"
      className="px-10 py-20 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.degree} className="border-l-2 border-gray-300 pl-6">
            <h3 className="font-semibold text-xl">{edu.degree}</h3>
            <p className="text-gray-500">{edu.institution} {edu.location && `| ${edu.location}`}</p>
            {edu.year && <p className="text-gray-400 text-sm">{edu.year}</p>}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
