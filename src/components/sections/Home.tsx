"use client";

import Link from "next/link";
import Image from "next/image";
import { homeData } from "@/data/home";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="px-6 md:px-10 py-20 flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 text-center md:text-left gap-8 md:gap-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Left: Profile Image */}
      <motion.div
        className="flex-shrink-0" // prevent image from stretching
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={homeData.imageUrl}
          alt="Profile Picture"
          className="rounded-full shadow-lg"
          width={270}
          height={270}
          priority
        />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div
        className="max-w-xl flex flex-col items-center md:items-start justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m {homeData.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          {homeData.role}
        </p>
        <p className="text-gray-600 mb-8">{homeData.description}</p>
      </motion.div>
    </motion.section>
  );
}
