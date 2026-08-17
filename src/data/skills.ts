export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "Node.js", "Python", "C#", "Go"],
  },
  {
    label: "Backend",
    skills: [
      "RESTful APIs",
      "Microservices",
      "Event-Driven Architecture",
      "Message Queues",
      "Background Services",
      "API Versioning",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "Azure Functions",
      "Service Bus",
      "IoT Event Hub",
      "Azure Monitor",
      "API Management",
      "Key Vault",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
      "Git",
    ],
  },
  {
    label: "Databases",
    skills: [
      "Azure SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Query optimization",
      "Indexing",
      "Schema design",
    ],
  },
  {
    label: "AI Systems",
    skills: [
      "Multi-Agent Orchestration",
      "LLM Workflows",
      "MCP",
      "Tool Calling",
      "FastAPI",
    ],
  },
  {
    label: "System Design",
    skills: [
      "Distributed Systems",
      "Scalability",
      "Fault Tolerance",
      "Observability",
      "Clean Architecture",
      "SOLID",
    ],
  },
];
