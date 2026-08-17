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
  diagram: "iot" | "agents";
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
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
