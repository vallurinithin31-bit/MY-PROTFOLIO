export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  companyFull: string;
  location: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export interface CareerMilestone {
  year: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "sap-growth-ai",
    period: "September 2026 – Present",
    role: "Junior Growth AI Engineer",
    company: "Screen Andragogy Platforms (SAP)",
    companyFull: "Screen Andragogy Platforms",
    location: "Vijayawada, India",
    description: "Contributing to AI-driven solutions, collaborative projects, and technology initiatives aligned with organizational priorities.",
    tags: ["AI", "Generative AI", "Growth", "Product", "Automation"],
    current: true,
  },
  {
    id: "cognifyz-intern",
    period: "June 2026 – July 2026",
    role: "Student Intern",
    company: "Cognifyz Technologies",
    companyFull: "Cognifyz Technologies",
    location: "Remote / India",
    description: "Completed student internship focusing on software development concepts, technical problem solving, and practical programming workflows.",
    tags: ["Software Engineering", "Web Development", "Problem Solving"],
    current: false,
  },
];

export const CAREER_JOURNEY: CareerMilestone[] = [
  {
    year: "2024",
    title: "B.Tech in Computer Software Engineering",
    subtitle: "Amrita Sai Institute of Science & Technology",
    tag: "Academic Foundation",
    description: "Commenced undergraduate studies focusing on computer science, core algorithms, data structures, and software engineering principles.",
  },
  {
    year: "2026",
    title: "Student Intern",
    subtitle: "Cognifyz Technologies",
    tag: "Industry Exposure",
    description: "Applied foundational engineering concepts in professional software training and practical technical exercises.",
  },
  {
    year: "2026",
    title: "Junior Growth AI Engineer",
    subtitle: "Screen Andragogy Platforms (SAP)",
    tag: "Current Role",
    description: "Spearheading AI-powered engineering workflows, generative AI implementations, and data-driven product growth.",
  },
];
