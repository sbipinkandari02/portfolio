// src/types/index.ts

export interface Skill {
  category: string;
  list: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string[];
}

export interface Project {
  title: string;
  role: string;
  backend?: string;
  frontend?: string;
  demo?: string;
  portals?: string;
  description: string[];
  tech: string[];
}

export interface ContactItem {
  name: string;
  url: string;
  bgColor: string;
  textColor?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}


export interface Education {
  degree: string;
  institution: string;
  location?: string;
  year?: string;
}

export interface HomeData {
  name: string;
  role: string;
  description: string;
  ctaText?: string;
  ctaTarget?: string;
  imageUrl: string;
}

