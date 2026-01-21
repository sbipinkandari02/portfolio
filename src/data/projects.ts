// src/data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "ShopSphere — E-Commerce Platform",
    role: "Full Stack Developer",
    backend: "https://github.com/sbipinkandari02/Ecommerce-nodeServer",
    frontend: "https://github.com/sbipinkandari02/Ecommerce-fontend",
    demo: "https://ecommerce-fontend-tc8w-dzzslrm7a-shopspheres-projects-f3ee8995.vercel.app/",
    description: [
      "Built a scalable e-commerce admin panel with dashboards and charts using React and TypeScript.",
      "Implemented role-based access control and secured admin routes.",
      "Developed backend services using Node.js and Express, with Firebase Authentication (Google Login).",
      "Implemented product, cart, and order management workflows.",
      "Integrated Stripe payment gateway and Redis caching.",
      "Deployed backend on Render and frontend on Vercel.",
    ],
    tech: ["React", "TypeScript", "Vite", "Node.js", "Firebase Auth", "Redis", "Stripe", "REST APIs", "Cloudinary"],
  },
  {
    title: "Mursion — Simulation & Training Platform",
    role: "React Developer",
    portals: "Client Portal — not publicly accessible due to confidentiality.",
    description: [
      "Contributed to a global simulation and training platform using role-based learning scenarios.",
      "Migrated the Learner Role Portal to Next.js, improving SSR/CSR performance and build efficiency.",
      "Improved application quality using Jest and React Testing Library, reducing bugs by 20%.",
      "Implemented internationalization (i18n) for multi-language support.",
      "Optimized date and time handling using Moment.js.",
      "Collaborated in Agile environment using Jira.",
    ],
    tech: ["React", "Next.js", "Jest", "RTL", "i18n", "Moment.js", "SonarQube"],
  },
  {
    title: "Wassa Wassa App",
    role: "React Native Developer",
    description: [
      "Developed cross-platform mobile applications using Expo for Web, Android, and iOS.",
      "Built scalable frontend features with TypeScript and Redux.",
      "PRD analysis, task breakdown, and delivery timelines.",
      "Contributed to product ideation and grooming sessions with product managers.",
      "Conducted merge request reviews to maintain code quality.",
    ],
    portals: "Client Project — not publicly accessible due to confidentiality.",
    tech: ["React Native", "Expo", "TypeScript", "Redux"],
  },
  {
    title: "SurvivorApp — Health Checkup Platform",
    role: "Node.js Developer",
    portals: "Client Project — not publicly accessible due to confidentiality.",
    description: [
      "Designed and developed an automated health checkup application with structured screening stages.",
      "Built and maintained REST APIs using Node.js and LoopBack.",
      "Implemented JWT-based authentication for secure access.",
      "Designed and managed MongoDB schemas, including relational data structures.",
      "Implemented reusable and scalable backend logic.",
      "Shared API documentation and collections with frontend teams using Postman.",
    ],
    tech: ["Node.js", "LoopBack", "MongoDB", "JWT", "REST APIs", "Postman"],
  },
];
