export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface ProfessionalStrength {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Generative AI",
    badge: "Intelligence Layer",
    description: "Designing intelligent workflows, leveraging modern foundational models, and engineering prompt systems.",
    skills: [
      "Artificial Intelligence",
      "Generative AI",
      "AI-powered applications",
      "Prompt Engineering",
      "AI workflows",
    ],
  },
  {
    title: "Data & Analytics",
    badge: "Insight Engine",
    description: "Translating data metrics into structured visibility, business intelligence, and analytical models.",
    skills: [
      "Data Analytics",
      "Power BI",
      "Data-driven decision making",
      "Analytical thinking",
    ],
  },
  {
    title: "Software & Technology",
    badge: "Engineering Core",
    description: "Architecting web systems, digital products, and automated integration pipelines.",
    skills: [
      "Software Engineering",
      "Web Development",
      "Digital Products",
      "Automation",
    ],
  },
  {
    title: "Professional Skills",
    badge: "Leadership & Impact",
    description: "Driving cross-functional execution, project orchestration, and clear technical communication.",
    skills: [
      "Project Management",
      "Team Leadership",
      "Communication",
      "Collaboration",
    ],
  },
];

export const PROFESSIONAL_STRENGTHS: ProfessionalStrength[] = [
  {
    title: "Project Management",
    tagline: "Structured Execution",
    description: "Organizing ideas, tasks, and projects into structured execution.",
    iconName: "FolderKanban",
  },
  {
    title: "Team Leadership",
    tagline: "Shared Vision",
    description: "Working collaboratively and helping teams move toward shared goals.",
    iconName: "Users",
  },
  {
    title: "Communication",
    tagline: "Cross-Functional Clarity",
    description: "Communicating ideas clearly across technical and collaborative environments.",
    iconName: "MessageSquareCode",
  },
  {
    title: "AI & Innovation",
    tagline: "Emerging Tech Applied",
    description: "Exploring practical ways to use AI and emerging technologies.",
    iconName: "Sparkles",
  },
];
