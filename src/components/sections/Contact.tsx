"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contactLinks } from "@/data/contact";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaFileAlt
} from "react-icons/fa";

// Map icons to contact names
const iconMap: Record<string, JSX.Element> = {
  LinkedIn: <FaLinkedin size={20} />,
  GitHub: <FaGithub size={20} />,
  Resume: <FaFileAlt size={20} />,
  Email: <FaEnvelope size={20} />,
  WhatsApp: <FaWhatsapp size={20} />,
};

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-10 py-20 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
      <p className="text-gray-700 mb-10">
        Reach out via any of the platforms below.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {contactLinks.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.url}
              target="_blank"
              className="group inline-flex items-center gap-3 px-8 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 font-medium transition-all duration-300 hover:border-red-500"
            >
              {/* ICON */}
              <span className="text-gray-700 transition-colors duration-300 group-hover:text-red-500">
                {iconMap[item.name]}
              </span>

              {/* TEXT */}
              <span className="transition-colors duration-300 group-hover:text-red-500">
                {item.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
