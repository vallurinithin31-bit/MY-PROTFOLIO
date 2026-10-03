export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  role: string;
  company: string;
  companyShort: string;
  location: string;
  locationShort: string;
  email: string;
  linkedin: string;
  portfolioUrl: string;
  education: {
    degree: string;
    field: string;
    institution: string;
  };
  headline: string;
  tagline: string;
  bio: string;
  narrative1: string;
  narrative2: string;
  focus: string[];
  statusText: string;
  brandStatement: string;
  philosophy: string;
}

export const PROFILE_DATA: ProfileData = {
  name: "Nithin Sai Valluri",
  shortName: "Nithin",
  monogram: "NSV",
  role: "Junior Growth AI Engineer",
  company: "Screen Andragogy Platforms (SAP)",
  companyShort: "Screen Andragogy Platforms",
  location: "Vijayawada Rural, Andhra Pradesh, India",
  locationShort: "Vijayawada, India",
  email: "vallurinithin31@gmail.com",
  linkedin: "https://www.linkedin.com/in/nithin-sai-valluri-a947b0410",
  portfolioUrl: "",
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Software Engineering",
    institution: "Amrita Sai Institute of Science & Technology",
  },
  headline: "Building Intelligent Solutions with AI & Technology",
  tagline: "Junior Growth AI Engineer | Computer Software Engineering Student | AI & Data Enthusiast",
  bio: "Hi, I'm Nithin Sai Valluri — a Junior Growth AI Engineer passionate about artificial intelligence, software engineering, data analytics, and building practical digital solutions.",
  narrative1: "I'm currently pursuing a Bachelor of Technology in Computer Software Engineering while working as a Junior Growth AI Engineer at Screen Andragogy Platforms. My interests sit at the intersection of artificial intelligence, software engineering, data analytics, and digital innovation.",
  narrative2: "I enjoy exploring how AI can be transformed from an emerging technology into practical solutions that improve workflows, products, and decision-making.",
  focus: ["Artificial Intelligence", "Data Analytics", "Software Engineering", "Automation", "Growth"],
  statusText: "Currently working at Screen Andragogy Platforms",
  brandStatement: "An aspiring AI-focused software engineer building practical AI-powered solutions, intelligent digital products, and data-driven experiences.",
  philosophy: "I don't just learn technology. I build with it.",
};
