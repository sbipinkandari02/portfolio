import { projects } from "@/data/projects";
import { FaLock } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition bg-white"
          >
            <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
            <p className="italic text-gray-500 mb-3">{p.role}</p>

            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              {p.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>

            <p className="text-sm text-gray-600 mb-4">
              <span className="font-medium">Tech Stack:</span>{" "}
              {p.tech.join(", ")}
            </p>

            {/* Links / Internal Badge */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              {p.frontend && (
                <a
                  href={p.frontend}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Frontend
                </a>
              )}

              {p.backend && (
                <a
                  href={p.backend}
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  Backend
                </a>
              )}

              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  className="text-red-600 hover:underline"
                >
                  Live demo
                </a>
              )}
              {p.portals && (
                <div className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-md text-xs text-gray-600 bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <FaLock className="text-gray-500" />
                    Internal project
                  </button>

                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max max-w-xs px-3 py-1.5 rounded-md bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                    {p.portals}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
