"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="experience"
      className="px-10 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.category} className="p-4 border rounded-lg">
            <h3 className="font-semibold">{skill.category}</h3>
            <p className="mt-2 text-gray-600">{skill.list.join(", ")}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
