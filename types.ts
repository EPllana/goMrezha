
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  imageUrl: string;
  category: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  imageUrl: string;
}

export interface GeneratedIdea {
    tagline: string;
    concept: string;
}
