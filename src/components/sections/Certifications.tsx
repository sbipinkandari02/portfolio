"use client";

import { certifications } from "@/data/certifications";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";

export default function Certifications() {
  return (
    <section className="px-10 py-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Certifications</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="relative group p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{cert.title}</h3>
            <p className="text-sm text-gray-600">{cert.issuer}</p>
            <p className="text-xs text-gray-400 mb-4">{cert.year}</p>

            {cert.url ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-red-500 transition"
              >
                View Certificate <FaExternalLinkAlt size={12} />
              </a>
            ) : (
              <div className="relative inline-flex items-center gap-2 text-sm text-gray-500 cursor-default">
                <FaLock size={12} />
                Credential available on request

                {/* Tooltip BELOW */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 rounded-md bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                  Certificate not publicly shared
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
