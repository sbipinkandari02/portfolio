"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Hamburger for mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {pages.map((page) => (
            <motion.div
              key={page.name}
              whileHover={{ scale: 1.1, color: "#EF4444" }} // scale up + red color
              whileTap={{ scale: 0.95 }} // shrink slightly on click
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href={page.href}
                className={`capitalize font-medium ${
                  pathname === page.href ? "text-red-500" : "text-gray-700"
                }`}
              >
                {page.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-2 px-4 py-4">
            {pages.map((page) => (
              <motion.div
                key={page.name}
                whileHover={{ scale: 1.05, color: "#EF4444" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={page.href}
                  className={`block w-full text-center px-4 py-3 font-medium ${
                    pathname === page.href ? "text-red-500" : "text-gray-700"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {page.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
