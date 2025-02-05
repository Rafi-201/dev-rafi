import { Code, Database, Cloud, Rocket } from 'lucide-react'; // Import relevant icons
import { SkillCategory } from '../type/type'; // Assuming this type is still relevant

export const skillData: SkillCategory[] = [
  {
    label: "Languages & Frameworks", // Updated label
    value: "1",
    icon: Code, // Updated icon
    skills: [
      { icon: Code, name: "Node.js" }, // Individual skill entries
      { icon: Code, name: "Go" },
      { icon: Code, name: "TypeScript" },
      { icon: Code, name: "C/C++" },
    ],
  },
  {
    label: "Databases & Concepts", // Updated label
    value: "2",
    icon: Database, // Updated icon
    skills: [
      { icon: Database, name: "SQL" },
      { icon: Database, name: "MongoDB" },
      { icon: Database, name: "Redis" },
      { icon: Code, name: "OOP" }, // Use a code icon for programming concepts
      { icon: Code, name: "Git" },
      { icon: Code, name: "Game Development" },
    ],
  },
  {
    label: "DevOps & Cloud", // Updated label
    value: "3",
    icon: Cloud, // Updated icon
    skills: [
      { icon: Cloud, name: "Azure" },
      { icon: Cloud, name: "RabbitMQ" },
      { icon: Cloud, name: "Docker" },
      { icon: Cloud, name: "Grafana" },
      { icon: Cloud, name: "Prometheus" },
      { icon: Code, name: "Linux" }, // Code icon for Linux
      { icon: Code, name: "Unit Testing" },
      { icon: Rocket, name: "CI/CD" }, // A rocket icon for CI/CD
    ],
  },
  {
    label: "Architecture & Design", // Updated label
    value: "4",
    icon: Cloud, // Or a more appropriate icon
    skills: [
      { icon: Cloud, name: "Microservices" },
      { icon: Cloud, name: "Distributed Systems" },
      { icon: Cloud, name: "Cloud Computing" },
      { icon: Code, name: "Backend Development" }, // Code icon for backend
      { icon: Code, name: "Problem Solving" },
    ],
  },
];