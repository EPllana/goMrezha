
import React from 'react';
import type { Service, Project, ProcessStep, Testimonial } from './types';

// Icons for Services
const UiUxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m0-8v4m-4-2h8m-8 6h8m-4-14a8 8 0 100 16 8 8 0 000-16z" />
    </svg>
);
const WebDevIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);
const BrandingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h8a2 2 0 002-2v-4a2 2 0 00-2-2h-8a2 2 0 00-2 2v4a2 2 0 002 2z" />
    </svg>
);
const SeoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const SERVICES: Service[] = [
  {
    icon: <UiUxIcon />,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and beautiful user experiences that engage and convert. We focus on user-centric design to build products people love.'
  },
  {
    icon: <WebDevIcon />,
    title: 'Web Development',
    description: 'Building fast, scalable, and secure websites and applications using the latest technologies. From static sites to complex web apps.'
  },
  {
    icon: <BrandingIcon />,
    title: 'Branding & Identity',
    description: 'Creating memorable brand identities that tell your story. We develop logos, style guides, and messaging that resonate with your audience.'
  },
  {
    icon: <SeoIcon />,
    title: 'SEO & Marketing',
    description: 'Driving organic growth and visibility. Our strategies are designed to boost your search rankings and connect you with your target customers.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/seed/project1/800/600',
    category: 'E-commerce',
    title: 'Nova Retail',
    description: 'A futuristic e-commerce platform with a focus on seamless user journey and immersive product discovery.'
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/seed/project2/800/600',
    category: 'Corporate Website',
    title: 'Quantum Solutions',
    description: 'A sleek and professional corporate site for a leading tech firm, showcasing their innovations and services.'
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/seed/project3/800/600',
    category: 'Mobile App',
    title: 'Zenith Health',
    description: 'A health and wellness app with a calming UI, personalized plans, and progress tracking features.'
  },
  {
    id: 4,
    imageUrl: 'https://picsum.photos/seed/project4/800/600',
    category: 'SaaS Platform',
    title: 'ConnectSphere',
    description: 'An intuitive dashboard for a SaaS product, designed for clarity, efficiency, and data visualization.'
  },
  {
    id: 5,
    imageUrl: 'https://picsum.photos/seed/project5/800/600',
    category: 'Branding',
    title: 'Artisan Coffee Co.',
    description: 'A complete brand identity for a new coffee shop, including logo, packaging, and digital presence.'
  },
  {
    id: 6,
    imageUrl: 'https://picsum.photos/seed/project6/800/600',
    category: 'Web Application',
    title: 'TravelScape AI',
    description: 'An AI-powered travel planning application that provides personalized itineraries and booking.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
    {
      id: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and audience to create a tailored strategy for success.'
    },
    {
      id: '02',
      title: 'Design & Prototyping',
      description: 'Our team crafts wireframes and high-fidelity mockups, focusing on creating an intuitive and beautiful user interface.'
    },
    {
      id: '03',
      title: 'Development & Testing',
      description: 'We bring the designs to life with clean, efficient code and rigorously test across devices for a flawless experience.'
    },
    {
      id: '04',
      title: 'Launch & Optimization',
      description: 'After deployment, we monitor performance and provide ongoing support to ensure your digital presence continues to evolve.'
    }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "goMrezha transformed our vision into a stunning reality. Their attention to detail and creative prowess are second to none. Our user engagement has skyrocketed since the launch!",
    author: 'Sarah Johnson',
    company: 'CEO of Nova Retail',
    imageUrl: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    quote: "Working with the goMrezha team was a dream. They are true professionals who are passionate about what they do. The final product exceeded all our expectations.",
    author: 'Michael Chen',
    company: 'Founder of ConnectSphere',
    imageUrl: 'https://picsum.photos/seed/person2/100/100'
  },
  {
    quote: "Their process is transparent and collaborative. They kept us in the loop at every stage and delivered a website that perfectly captures our brand identity. Highly recommended!",
    author: 'Emily Rodriguez',
    company: 'Marketing Director, Quantum Solutions',
    imageUrl: 'https://picsum.photos/seed/person3/100/100'
  }
];
