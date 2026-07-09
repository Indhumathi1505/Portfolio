export interface Project {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend" | "Backend";
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  videoUrl?: string;
  images?: string[];
  featured?: boolean;
  extendedDescription?: string;
}

export interface Skill {
  name: string;
  icon: string; // lucide icon name
  category: "Programming" | "Frontend" | "Backend" | "Database" | "Tools";
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  department: string;
  duration: string;
  gpa: string;
  details: string[];
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: "Internship" | "Freelance" | "Workshop" | "Open Source" | "Hackathon" | "Leadership";
  description: string[];
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  category: "Coding" | "Academic" | "Competition" | "Certification";
  metric: string;
  description: string;
  date: string;
  credentialUrl?: string;
}

