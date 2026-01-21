# Portfolio — Bipin Kandari

A modern, responsive portfolio website built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com). This portfolio showcases professional experience, projects, skills, certifications, and education with smooth animations and an elegant user interface.

## Features

- **Responsive Design** — Mobile-first approach with Tailwind CSS
- **Smooth Animations** — Framer Motion for elegant transitions and interactions
- **Multiple Sections** — Home, About, Experience, Projects, Certifications, Education, and Contact
- **Data-Driven** — Easily manage content through organized data files
- **Modern Stack** — Built with Next.js 14, React 18, and TypeScript
- **Performance Optimized** — Server-side rendering and code splitting
- **Icon Support** — React Icons for consistent iconography

## Sections

- **Home** — Introduction and call-to-action
- **About** — Professional background and expertise
- **Experience** — Work history and achievements
- **Projects** — Showcase of notable projects with links
- **Certifications** — Professional certifications and credentials
- **Education** — Academic background
- **Contact** — Contact information and messaging

## Tech Stack

- **Framework** — [Next.js 14](https://nextjs.org)
- **UI Library** — [React 18](https://react.dev)
- **Styling** — [Tailwind CSS 4](https://tailwindcss.com)
- **Animations** — [Framer Motion](https://www.framer.com/motion)
- **Icons** — [React Icons](https://react-icons.github.io/react-icons)
- **Language** — [TypeScript](https://www.typescriptlang.org)
- **Linting** — [ESLint](https://eslint.org)

## Getting Started

### Prerequisites
- Node.js 20.9.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
git clone <repository-url>
cd portfolio

2. Install dependencies:
npm install

3. Run the development server:
npm run dev


Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## 📁 Project Structure

\\\
src/
├── app/                  # Next.js app directory and pages
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   └── projects/        # Projects page
├── components/          # Reusable React components
│   ├── layout/          # Navigation and Footer
│   ├── sections/        # Page sections (Home, About, etc.)
│   └── ui/              # UI utilities (Button, Loading, Cursor)
├── data/                # Content data files
│   ├── home.ts
│   ├── about.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── certifications.ts
│   ├── education.ts
│   └── contact.ts
└── types/               # TypeScript type definitions

## Customization

### Update Portfolio Content

All portfolio content is managed through data files in \src/data/\:

- **Home** — Edit [src/data/home.ts](src/data/home.ts) to update introduction
- **Projects** — Edit [src/data/projects.ts](src/data/projects.ts) to showcase your work
- **Skills** — Edit [src/data/skills.ts](src/data/skills.ts) to list your expertise
- **Experience** — Edit [src/data/experience.ts](src/data/experience.ts) for work history
- **Education** — Edit [src/data/education.ts](src/data/education.ts) for academic background
- **Certifications** — Edit [src/data/certifications.ts](src/data/certifications.ts) for credentials

### Styling

Tailwind CSS is configured for rapid UI development. Customize themes and styles in [tailwind.config.ts](tailwind.config.ts).

## Contact

For inquiries or feedback about this portfolio, please refer to the contact section on the website.
