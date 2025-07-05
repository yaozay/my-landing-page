import type { Skill, Project, Experience, Education } from "./types"

export const skills = {
  languages: [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Rust", level: 75 },
    { name: "C++", level: 70 },
  ],
  frameworks: [
    { name: "React / Next.js", level: 95 },
    { name: "Node.js / Express", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Actix Web", level: 70 },
  ],
  tools: [
    { name: "PostgreSQL", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Git & GitHub", level: 95 },
    { name: "Vercel", level: 90 },
  ]
}

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce website with features like product search, cart, and checkout.",
    image: "/project-1.png",
    tags: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    liveDemo: "https://vercel.com",
  },
  {
    title: "Real-time Chat App",
    description: "A chat application using WebSockets for instant messaging and user presence.",
    image: "/project-2.png",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
    github: "https://github.com",
    liveDemo: "https://vercel.com",
  },
  {
    title: "Sentiment Analysis API",
    description: "A machine learning model deployed as a REST API to analyze text sentiment.",
    image: "/project-3.png",
    tags: ["Python", "Flask", "NLTK", "Docker"],
    github: "https://github.com",
    liveDemo: "https://vercel.com",
  },
  {
    title: "High-Performance Web Server",
    description: "A custom web server built in Rust focusing on speed and low-level control.",
    image: "/project-4.png",
    tags: ["Rust", "Tokio", "Hyper"],
    github: "https://github.com",
    liveDemo: "https://vercel.com",
  },
]

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Pearson Labs",
    period: "Summer 2025",
    achievements: [
      "Developed and shipped a new feature for the main product, used by millions of users.",
      "Improved API response time by 30% through query optimization.",
      "Wrote comprehensive unit and integration tests, increasing code coverage by 15%.",
    ],
  },
  {
    role: "AI Research Assistant",
    company: "University of Houston - System and Simulation Lab",
    period: "Summer 2025",
    achievements: [
      "Contributed to a research paper on novel machine learning algorithms.",
      "Implemented and benchmarked various data structures for performance analysis.",
    ],
  },
  {
    role: "Lead Instructor",
    company: "Coder Kids",
    period: "Mar 2025 - May 2025",
    achievements: [
      "Contributed to a research paper on novel machine learning algorithms.",
      "Implemented and benchmarked various data structures for performance analysis.",
    ],
  },
  {
    role: "Software Engineer Resident",
    company: "Headstarter AI",
    period: "Nov 2024 - Mar 2025",
    achievements: [
      "Contributed to a research paper on novel machine learning algorithms.",
      "Implemented and benchmarked various data structures for performance analysis.",
    ],
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Houston",
    period: "May 2026",
    details: "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Automata and Computability",
  },
]