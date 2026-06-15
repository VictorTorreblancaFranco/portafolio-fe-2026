export interface SocialLink {
  label: string;
  url: string;
}

export interface TechCategory {
  title: string;
  items: string[];
  tone: 'green' | 'blue' | 'amber' | 'rose';
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  status?: string;
  role?: string;
  links?: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface TimelineItem {
  title: string;
  description: string;
  meta: string;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  category: string;
  url: string;
}
