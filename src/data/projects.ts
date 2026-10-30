export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  /** The situation that made the work necessary. */
  problem: string;
  /** How it was built — the part hiring managers actually read. */
  approach: string[];
  /** Measurable outcomes. */
  results: { value: string; label: string }[];
  stack: string[];
  diagram: "fleet" | "iot" | "agents";
  links: { label: string; href: string }[];
  /** Client work under NDA: shows a "Private / NDA" label instead of code links. */
  confidential?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fleet-platform",
    eyebrow: "Professional · Industrial cleaning equipment client",
    title: "OIP – IoT Fleet Operations Platform",
    tagline:
      "An event-driven serverless backend that turns live telemetry from connected cleaning machines into dashboards, exports, reports, alerts and field-service integrations.",
    problem:
      "Connected cleaning machines stream device events, battery health, hour meters and firmware data around the clock. Operators need that turned into timezone-correct usage and battery-health views, large exports, scheduled PDF reports, alerts and third-party field-service sync, without one slow workload holding up the rest.",
    approach: [
      "Split the backend into 8 Azure Function Apps (56 functions) in a TypeScript npm-workspaces monorepo: 6 Event Hub stream handlers ingest IoT Hub telemetry, and dedicated apps own aggregation, exports, integrations, reports and the HTTP APIs behind Azure API Management.",
      "Designed priority-based async processing with high- and low-priority Service Bus queues, plus dead-letter and poison-message recovery, so heavy exports and reports never starve interactive work.",
      "Built timezone-aware, rolling-window aggregation pipelines for monthly usage and 6-month battery State-of-Health, CRON-scheduled around maintenance windows (e.g. 0 */15 0-6,8-23 * * *).",
      "Automated the data lifecycle with scheduled archival and retention purges for events, alerts and exports.",
      "Generated server-side PDF and chart reports with Puppeteer, Chart.js and Handlebars on AKS, and sent incident and report emails through SendGrid.",
      "Kept the codebase maintainable with InversifyJS dependency injection, Joi validation, Knex migrations on Azure SQL, i18n, Jest unit and integration tests, and ESLint/Prettier enforced by Husky pre-commit hooks.",
      "Shipped through Webpack builds and Azure DevOps pipelines across dev, stage and prod, with infrastructure as code in Terraform: Function Apps, IoT Hub & DPS, Event Hubs, Service Bus, AKS, Cosmos DB, Key Vault, Storage, API Management, Log Analytics and VNet.",
    ],
    results: [
      { value: "8", label: "Function Apps in one TypeScript monorepo" },
      { value: "56", label: "functions: 29 timer · 14 queue · 7 HTTP · 6 Event Hub" },
      { value: "3", label: "environments shipped via Azure DevOps + Terraform" },
    ],
    stack: [
      "TypeScript",
      "Node.js",
      "Azure Functions (v4)",
      "Azure IoT Hub",
      "Event Hubs",
      "Service Bus",
      "AKS / Kubernetes",
      "Docker",
      "Azure SQL Database",
      "Knex",
      "Cosmos DB",
      "Azure Cognitive Search",
      "Blob Storage",
      "Key Vault",
      "API Management",
      "Terraform",
      "Azure DevOps CI/CD",
      "Jest",
      "Puppeteer",
      "InversifyJS",
    ],
    diagram: "fleet",
    links: [],
    confidential: true,
  },
  {
    id: "iot-pipeline",
    eyebrow: "Professional · US enterprise client",
    title: "Industrial IoT Telemetry Pipeline",
    tagline:
      "Real-time ingestion for a fleet of industrial machines across North America.",
    problem:
      "An industrial IoT fleet emits continuous telemetry from devices across North America. The platform had to ingest millions of events per day without dropping messages, survive downstream failures, and still answer enterprise reporting queries fast enough for operators to act on.",
    approach: [
      "Ingest device telemetry through Azure IoT Event Hub, with Azure Functions consuming partitions and scaling elastically with load instead of running idle capacity.",
      "Fan work out over Azure Service Bus topics so slow consumers never block ingestion, with retry policies, dead-letter queues, and failed-message isolation for anything that cannot be processed.",
      "Tune the Azure SQL persistence layer through execution-plan analysis, targeted indexing, query refactoring, caching, and connection pooling.",
      "Instrument every hop with Azure Monitor and Application Insights, and build operational dashboards that surface bottlenecks before they turn into incidents.",
    ],
    results: [
      { value: "Millions", label: "events ingested per day" },
      { value: "55%", label: "faster Azure SQL queries" },
      { value: "0", label: "silently dropped messages" },
    ],
    stack: [
      "Azure Functions",
      "IoT Event Hub",
      "Service Bus",
      "Azure SQL",
      "Blob Storage",
      "Key Vault",
      "Application Insights",
      "Node.js",
      "TypeScript",
    ],
    diagram: "iot",
    links: [{ label: "Live platform", href: "https://iris.tennantco.com/" }],
  },
  {
    id: "agent-platform",
    eyebrow: "Personal · AI systems",
    title: "Multi-Agent AI Orchestration Platform",
    tagline:
      "A central orchestration layer that routes tasks to specialized agents and invokes tools on demand.",
    problem:
      "A single LLM call cannot carry a multi-step task that needs different skills and real tools at different stages. The platform needed a way to decompose a request, route each part to the agent best suited to it, and let those agents reach real systems through a consistent tool interface.",
    approach: [
      "Built a central orchestration layer that classifies an incoming task and routes it to the specialized agent that owns that capability.",
      "Gave agents workflows that select and invoke the appropriate tools, process the results, and pass structured output back through the orchestrator for downstream agents to consume.",
      "Exposed tools over MCP so capabilities are declared once and reused by every agent instead of being reimplemented per agent.",
      "Wrapped the whole platform in a FastAPI service, making agent capabilities callable from multiple client applications over a plain HTTP contract.",
    ],
    results: [
      { value: "MCP", label: "standard tool interface" },
      { value: "N", label: "agents behind one endpoint" },
      { value: "1", label: "reusable API for all clients" },
    ],
    stack: [
      "Python",
      "FastAPI",
      "LLMs",
      "MCP",
      "Tool Calling",
      "Async Workers",
    ],
    diagram: "agents",
    // TODO(rafi): add the GitHub repo + a short demo video here. This is the
    // single highest-value link on the whole site — hiring managers will
    // want to click it.
    links: [],
  },
];

export type SideProject = {
  title: string;
  description: string;
  stack: string;
  year: string;
  href: string;
};

export const sideProjects: SideProject[] = [
  {
    title: "DarkLife",
    description:
      "2D mobile game built in Unity, shipped to Android and iOS with in-app purchases and performance tuning for low-end devices.",
    stack: "Unity 2D · C# · Android · iOS",
    year: "2020",
    href: "https://null577.itch.io/life",
  },
];
