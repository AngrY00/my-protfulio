import { FaCode, FaServer, FaRobot, FaPalette } from 'react-icons/fa';

export const projects = [
  {
    id: 1,
    title: "PortIQ — Logistics Intelligence Platform",
    description:
      "A full-stack logistics-tech platform for C&F and import-export workflows. Features CPA port bill calculation, HS Code AI intelligence, shipment tracking, and smart notification systems tailored for Bangladesh trade operations.",
    technologies: ["TypeScript", "Supabase", "n8n", "AI Agents", "Lovable"],
    category: "ai",
    github: "https://github.com/AngrY00",
    live: "#",
    image: null,
  },
  {
    id: 2,
    title: "AI Business Chat Agent System",
    description:
      "Intelligent chat agents for business automation — handling customer queries, lead qualification, and support ticket routing with natural language understanding. Integrated with WhatsApp and Telegram APIs.",
    technologies: ["n8n", "AI Agents", "WhatsApp API", "Telegram Bot API", "TypeScript"],
    category: "ai",
    github: "https://github.com/AngrY00",
    live: "#",
    image: null,
  },
  {
    id: 3,
    title: "Email Automation Workflow Engine",
    description:
      "Automated email workflows for business operations — drip campaigns, trigger-based notifications, and CRM sync pipelines built using n8n. Reduced manual email management by 80% for client businesses.",
    technologies: ["n8n", "EmailJS", "Supabase", "TypeScript"],
    category: "automation",
    github: "https://github.com/AngrY00",
    live: "#",
    image: null,
  },
  {
    id: 4,
    title: "Interactive Business Dashboard & CRM",
    description:
      "A lightweight CRM and analytics dashboard for small business management — tracking clients, sales pipeline, notifications, and business metrics. Built for practical daily use, not complexity.",
    technologies: ["TypeScript", "Supabase", "Lovable", "n8n"],
    category: "automation",
    github: "https://github.com/AngrY00",
    live: "#",
    image: null,
  },
  {
    id: 5,
    title: "Export Operations Management System",
    description:
      "Internal tool for managing export documentation, ASYCUDA World data processing, and customs clearance workflows at J.K Shipping. Handles team coordination, document tracking, and compliance reporting.",
    technologies: ["MS Excel", "ASYCUDA World", "Automation Scripts"],
    category: "logistics",
    github: "https://github.com/AngrY00",
    live: "#",
    image: null,
  },
  {
    id: 6,
    title: "Brand Identity & Graphic Design Portfolio",
    description:
      "A collection of graphic design work including logo design, brand identity systems, marketing materials, and digital illustrations delivered to clients — built using Adobe Photoshop and Illustrator.",
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Graphic Design"],
    category: "design",
    github: "https://github.com/AngrY00",
    live: "#",
    image: null,
  },
];

export const categories = [
  { id: "all", name: "All Projects", icon: <FaCode /> },
  { id: "ai", name: "AI & Agents", icon: <FaRobot /> },
  { id: "automation", name: "Automation", icon: <FaServer /> },
  { id: "logistics", name: "Logistics Tech", icon: <FaServer /> },
  { id: "design", name: "Design", icon: <FaPalette /> },
];
