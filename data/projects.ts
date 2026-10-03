export type ProjectCategory = "All" | "AI Applications" | "Generative AI" | "Data Analytics" | "Software Projects";

export interface ProjectItem {
  id: string;
  title: string;
  category: "AI Applications" | "Generative AI" | "Data Analytics" | "Software Projects";
  categoryLabel: string;
  summary: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  highlights: string[];
}

export const PROJECT_CATEGORIES: { id: ProjectCategory; label: string; desc: string }[] = [
  { id: "All", label: "All Work", desc: "Complete cross-disciplinary project portfolio" },
  { id: "AI Applications", label: "AI Applications", desc: "AI-powered applications and intelligent workflows" },
  { id: "Generative AI", label: "Generative AI", desc: "Projects involving LLMs, prompt engineering, and generative AI" },
  { id: "Data Analytics", label: "Data Analytics", desc: "Data-driven dashboards, analytics, and visualization projects" },
  { id: "Software Projects", label: "Software Projects", desc: "Web applications and software engineering projects" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "generative-ai-reasoning-system",
    title: "Contextual LLM & Generative Reasoning Architecture",
    category: "Generative AI",
    categoryLabel: "Generative AI & LLM Systems",
    summary: "Intelligent AI system integrating structured prompt engineering, dynamic context orchestration, and automated API reasoning flows.",
    description: "An AI engineering architecture template exploring practical generative models. Focuses on modular prompt routing, deterministic schema validation, and structured tool interactions for real-world enterprise applications.",
    technologies: ["Artificial Intelligence", "Generative AI", "Prompt Engineering", "TypeScript", "Next.js", "API Automation"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "",
    liveDemoUrl: "",
    caseStudyUrl: "",
    highlights: [
      "Modular prompt routing and dynamic context memory management",
      "Robust structured response schema validation",
      "Seamless integration with modern frontend interfaces",
    ],
  },
  {
    id: "growth-ai-automation-pipeline",
    title: "Intelligent Growth & Workflow Automation Engine",
    category: "AI Applications",
    categoryLabel: "AI & Growth Automation",
    summary: "Automated pipeline connecting digital communication channels to intelligent categorization and prioritization.",
    description: "Explores the intersection of growth engineering and AI. Bridges user touchpoints with autonomous triage algorithms to optimize project communication and streamline operational cycles.",
    technologies: ["AI Automation", "Python / Node.js", "Generative AI", "Workflow Orchestration", "Growth Strategy"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "",
    liveDemoUrl: "",
    caseStudyUrl: "",
    highlights: [
      "Automated triage and priority assignment for incoming signals",
      "Eliminates repetitive data-entry and status check overhead",
      "Real-time alerts and actionable synthesis",
    ],
  },
  {
    id: "power-bi-analytics-suite",
    title: "Executive Data Analytics & Power BI Workspace",
    category: "Data Analytics",
    categoryLabel: "Data Analytics & BI",
    summary: "Interactive data-driven dashboard analyzing multi-variable business metrics and operational performance.",
    description: "Built to transform raw transactional and operational datasets into actionable executive intelligence using Power BI principles, KPI hierarchies, and automated trend visualization.",
    technologies: ["Power BI", "Data Analytics", "Data Modeling", "Business Intelligence", "DAX"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "",
    liveDemoUrl: "",
    caseStudyUrl: "",
    highlights: [
      "Clean relational schema with star-schema modeling",
      "Dynamic KPI tracking and variance analysis",
      "Designed for executive decision-making visibility",
    ],
  },
  {
    id: "software-engineering-web-app",
    title: "Full-Stack Software Engineering Platform",
    category: "Software Projects",
    categoryLabel: "Software Engineering",
    summary: "Production-grade responsive web architecture emphasizing clean modular components and type safety.",
    description: "A showcase of core software engineering foundations: scalable folder structures, accessible UI patterns, strict TypeScript typing, and optimized bundle performance for cloud deployment.",
    technologies: ["Software Engineering", "React", "TypeScript", "Tailwind CSS", "Next.js"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "",
    liveDemoUrl: "",
    caseStudyUrl: "",
    highlights: [
      "Strict TypeScript enforcement with zero any-types",
      "Fully responsive layout crafted with Tailwind CSS",
      "Accessible ARIA landmarks and smooth Framer Motion reveals",
    ],
  },
];
