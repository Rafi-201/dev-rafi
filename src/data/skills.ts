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
      "InversifyJS",
      "Jest",
      "Puppeteer",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "Azure Functions",
      "Service Bus",
      "IoT Event Hub",
      "Azure IoT Hub",
      "Event Hubs",
      "Blob Storage",
      "Cognitive Search",
      "Azure Monitor",
      "API Management",
      "Key Vault",
      "Docker",
      "Kubernetes",
      "AKS",
      "Terraform",
      "Azure DevOps",
      "CI/CD",
      "Linux",
      "Git",
    ],
  },
  {
    label: "Databases",
    skills: [
      "Azure SQL Server",
      "Cosmos DB",
      "Knex",
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
