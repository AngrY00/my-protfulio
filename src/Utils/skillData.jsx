import {
  FaCode,
  FaRocket,
  FaLayerGroup,
  FaRobot,
  FaWhatsapp,
  FaDatabase,
  FaPalette,
  FaChartBar,
} from "react-icons/fa";
import { SiN8N, SiSupabase, SiTypescript, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

export const skills = [
  {
    name: "AI Agent Development",
    category: "ai",
    experience: "Building intelligent chat agents and automation systems",
    usedIn: ["PortIQ Platform", "Business Chat Agents", "Customer Support Bots"],
    icon: <FaRobot className="text-orange-400" />,
  },
  {
    name: "n8n Workflows",
    category: "automation",
    experience: "Complex business workflow automation and integrations",
    usedIn: ["Email Automation", "CRM Systems", "Notification Pipelines", "PortIQ"],
    icon: <SiN8N className="text-orange-300" />,
  },
  {
    name: "TypeScript",
    category: "language",
    experience: "Type-safe development for web apps and automation scripts",
    usedIn: ["PortIQ Platform", "Dashboard Tools", "API Integrations"],
    icon: <SiTypescript className="text-blue-400" />,
  },
  {
    name: "Supabase",
    category: "database",
    experience: "Backend-as-a-service for real-time data and auth",
    usedIn: ["PortIQ Platform", "CRM Systems", "Tracking Dashboards"],
    icon: <SiSupabase className="text-green-400" />,
  },
  {
    name: "Website Development",
    category: "frontend",
    experience: "Building modern responsive websites and web apps",
    usedIn: ["Business Websites", "Landing Pages", "Dashboards"],
    icon: <FaCode className="text-sky-400" />,
  },
  {
    name: "WhatsApp / Telegram Bots",
    category: "automation",
    experience: "Conversational bots for business communication automation",
    usedIn: ["Customer Support", "Notification Systems", "Lead Generation"],
    icon: <FaWhatsapp className="text-green-500" />,
  },
  {
    name: "Lovable / Vibe Coding",
    category: "frontend",
    experience: "Rapid AI-assisted app development and prototyping",
    usedIn: ["PortIQ MVP", "Quick Prototypes", "Business Tools"],
    icon: <FaRocket className="text-pink-400" />,
  },
  {
    name: "ASYCUDA World",
    category: "logistics",
    experience: "Export-import document data entry and data analysis",
    usedIn: ["J.K Shipping Export Ops", "Customs Clearance", "Trade Documents"],
    icon: <FaDatabase className="text-yellow-400" />,
  },
  {
    name: "Adobe Photoshop",
    category: "design",
    experience: "Professional photo editing and graphic design",
    usedIn: ["Brand Design", "Marketing Materials", "Client Projects"],
    icon: <SiAdobephotoshop className="text-blue-300" />,
  },
  {
    name: "Adobe Illustrator",
    category: "design",
    experience: "Vector graphics, logo design, and brand identity",
    usedIn: ["Logo Design", "Brand Identity", "Illustrations"],
    icon: <SiAdobeillustrator className="text-orange-500" />,
  },
  {
    name: "Dashboard & CRM Systems",
    category: "automation",
    experience: "Interactive business dashboards and lightweight CRMs",
    usedIn: ["Business Analytics", "Client Management", "Sales Tracking"],
    icon: <FaChartBar className="text-purple-400" />,
  },
  {
    name: "MS Office Suite",
    category: "tools",
    experience: "Advanced Word, Excel, PowerPoint for business operations",
    usedIn: ["Documentation", "Data Analysis", "Reports"],
    icon: <FaLayerGroup className="text-green-300" />,
  },
];

export const categories = [
  { id: "all", name: "All", icon: <FaLayerGroup /> },
  { id: "ai", name: "AI & Agents", icon: <FaRobot /> },
  { id: "automation", name: "Automation", icon: <FaRocket /> },
  { id: "frontend", name: "Web Dev", icon: <FaCode /> },
  { id: "design", name: "Design", icon: <FaPalette /> },
  { id: "database", name: "Database", icon: <FaDatabase /> },
  { id: "logistics", name: "Logistics", icon: <FaLayerGroup /> },
  { id: "tools", name: "Tools", icon: <FaLayerGroup /> },
];
