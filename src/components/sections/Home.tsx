"use client";

import Link from "next/link";
import { homeData } from "@/data/home";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="px-6 md:px-10 py-20 flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m {homeData.name}</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-6">{homeData.role}</p>
      <p className="text-gray-600 max-w-2xl mb-8">{homeData.description}</p>

      {homeData.ctaText && homeData.ctaTarget && (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href={`#${homeData.ctaTarget}`}
            scroll={false}
            className="relative px-8 py-3 rounded-lg border border-gray-300 font-medium overflow-hidden"
          >
            {/* Animated text */}
            <motion.span
              className="relative z-10 text-gray-800"
              whileHover={{ color: "#EF4444" }} // Tailwind RED-500
              transition={{ duration: 0.3 }}
            >
              {homeData.ctaText}
            </motion.span>
          </Link>
        </motion.div>
      )}
    </motion.section>
  );
}
