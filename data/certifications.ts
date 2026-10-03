export interface CertificationItem {
  id: string;
  name: string;
  provider: string;
  category: "Generative AI" | "Artificial Intelligence" | "Data & Analytics" | "Professional Engagement";
  badge: string;
  skillsCovered: string[];
  linkPlaceholder: string;
  iconName: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "claude-101",
    name: "Claude 101",
    provider: "Anthropic / Educational Curriculum",
    category: "Generative AI",
    badge: "LLM & Prompt Architecture",
    skillsCovered: ["Claude Architecture", "Prompt Engineering", "Context Window Management", "System Instructions"],
    linkPlaceholder: "#",
    iconName: "Cpu",
  },
  {
    id: "ai-fundamentals",
    name: "Artificial Intelligence Fundamentals",
    provider: "Foundational AI Program",
    category: "Artificial Intelligence",
    badge: "Core Foundations",
    skillsCovered: ["Machine Learning Basics", "Neural Network Principles", "AI Ethics", "Algorithm Overview"],
    linkPlaceholder: "#",
    iconName: "BrainCircuit",
  },
  {
    id: "bcg-genai",
    name: "GenAI Job Simulation",
    provider: "Boston Consulting Group (BCG)",
    category: "Generative AI",
    badge: "Enterprise AI Strategy",
    skillsCovered: ["Generative AI Applications", "Business Case Evaluation", "AI Solution Feasibility", "Stakeholder Briefings"],
    linkPlaceholder: "#",
    iconName: "Briefcase",
  },
  {
    id: "tata-genai-analytics",
    name: "GenAI Powered Data Analytics Job Simulation",
    provider: "Tata",
    category: "Data & Analytics",
    badge: "AI-Driven Insights",
    skillsCovered: ["Data Analysis", "GenAI Analytics Workflows", "Insight Synthesis", "Executive Reporting"],
    linkPlaceholder: "#",
    iconName: "BarChart3",
  },
  {
    id: "bloomberg-client-engagement",
    name: "Client Engagement Job Simulation",
    provider: "Bloomberg",
    category: "Professional Engagement",
    badge: "Communication & Strategy",
    skillsCovered: ["Client Relations", "Technical Consultation", "Strategic Presentation", "Problem Scoping"],
    linkPlaceholder: "#",
    iconName: "Users",
  },
  {
    id: "power-bi",
    name: "Power BI Certification",
    provider: "Data Visualization & BI Training",
    category: "Data & Analytics",
    badge: "Business Intelligence",
    skillsCovered: ["Interactive Dashboards", "Data Modeling", "DAX Fundamentals", "Visual Analytics"],
    linkPlaceholder: "#",
    iconName: "PieChart",
  },
];
