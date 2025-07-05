import type { Skill, Project, Experience, Education } from "./types"

export const skills: {
  languages: Skill[]
  frameworks: Skill[]
  tools: Skill[]
} = {
  languages: [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "SQL", level: 80 },
    { name: "C++", level: 75 },
    { name: "Java", level: 70 },
  ],
  frameworks: [
    { name: "React / Next.js", level: 95 },
    { name: "FastAPI", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "TensorFlow", level: 80 },
  ],
  tools: [
    { name: "Supabase", level: 90 },
    { name: "Docker", level: 85 },
    { name: "AWS", level: 80 },
    { name: "Git & CI/CD", level: 95 },
    { name: "Postman", level: 75 },
    { name: "Linux", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Figma", level: 70 },
    { name: "Pinecone", level: 85 },
    { name: "ChromaDB", level: 80 },
  ],
}

export const projects: Project[] = [
  {
    title: "AI Document QA Platform",
    description:
      "Ingested PDFs and extracted text + bounding boxes with pdfplumber, embedded 50K+ vectors via OpenAI, stored in Pinecone for instant semantic search with page-linked citations, and launched a Render-hosted FastAPI service that auto-indexes new Supabase Storage docs and returns GPT-4o answers in under 1 second.",
    image: "/project-ai-qa.png",
    tags: ["Python", "FastAPI", "Next.js", "TypeScript", "Supabase", "Pinecone"],
    github: "https://github.com/yaozay/ai-document-qa-platform",
    liveDemo: "https://ai-document-qa-platform.vercel.app",
  },
  {
    title: "Real-Time Air Traffic Safety Dashboard",
    description:
      "Streamed live flight data from AviationStackAPI via WebSockets into a modular Node backend; flagged hazards at an 80 ms update rate; designed a responsive Next.js map UI and MongoDB alert log, winning 3rd place at the HP-sponsored Create & Innovate Hackathon.",
    image: "/project-air-traffic.png",
    tags: ["Node.js", "TypeScript", "WebSocket", "MongoDB", "Next.js"],
    github: "https://github.com/yaozay/air-traffic-safety-dashboard",
    liveDemo: "https://air-traffic-dashboard.vercel.app",
  },
  {
    title: "PopReel (TikTok Clone)",
    description:
      "Engineered a social video app with Clerk auth, real-time feeds, and AWS S3 storage; implemented a Prisma/PostgreSQL backend and Tailwind-responsive UI.",
    image: "/project-popreel.png",
    tags: ["TypeScript", "Next.js", "AWS S3", "Prisma", "Tailwind CSS", "Clerk"],
    github: "https://github.com/yaozay/popreel",
    liveDemo: "https://pop-reel.vercel.app",
  },
]

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Pearson Labs (YC F24)",
    period: "June 2025 – Present",
    achievements: [
      "Developed 4 AI-powered dataroom features using TypeScript, FastAPI, GPT-4o, Pinecone, and Supabase, streamlining document embedding, querying, and retrieval for early-stage users.",
      "Collaborated on backend & frontend tickets via Linear, contributing to core product improvements with Python, FastAPI, and TypeScript.",
      "Integrated Supabase and Vercel for full-stack development, enhancing CI/CD flow with GitHub Actions and feature-based PRs.",
    ],
  },
  {
    role: "AI Research Assistant",
    company: "University of Houston – System & Simulation Lab",
    period: "May 2025 – Present",
    achievements: [
      "Fine-tuned a 7B-parameter Mistral LLM on 1M tokens with HuggingFace and LoRA, reducing average query latency by 92% (850 ms → 65 ms).",
      "Built a ChromaDB-backed RAG service with HNSW indexing and streaming FastAPI endpoints, achieving 99.6% accuracy on a 500-question benchmark.",
      "Shipped a TypeScript/React web app visualizing retrieval context and model confidence.",
    ],
  },
  {
    role: "Software Engineer Resident",
    company: "Headstarter AI",
    period: "Nov 2024 – Apr 2025",
    achievements: [
      "Built 14+ ML/AI-engineering and full-stack projects in a fast-paced software team.",
      "Developed 5+ neural networks in Python and 11 apps in TypeScript on AWS/Vercel with dedicated dev environments.",
      "Implemented LLM-chaining, hyperparameter tuning, and fine-tuning on 10+ LLM models, optimizing for latency.",
    ],
  },
  {
    role: "Lead Instructor",
    company: "Coder Kids",
    period: "Mar 2025 – May 2025",
    achievements: [
      "Taught K–8 students coding fundamentals (Python & JavaScript), inspiring the next generation of developers.",
    ],
  },
  {
    role: "Designer",
    company: "CougarCS",
    period: "Nov 2024 – Present",
    achievements: [
      "Designed digital products and marketing materials in Figma for student-organization initiatives.",
    ],
  },
]

export const education: Education[] = [
  {
    degree: "B.S. in Computer Science (Minor: Data and Society)",
    institution: "University of Houston – Honor’s College",
    period: "Expected May 2026",
    details:
      "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Systems, Automata and Computability",
  },
]
