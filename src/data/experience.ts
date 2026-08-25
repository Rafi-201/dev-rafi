export type Role = {
  title: string;
  period: string;
};

export type Experience = {
  company: string;
  location: string;
  period: string;
  current: boolean;
  roles: Role[];
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Brain Station 23",
    location: "Dhaka, Bangladesh",
    period: "March 2023 — Present",
    current: true,
    roles: [
      { title: "Software Engineer II", period: "Current" },
      { title: "Software Engineer Intern", period: "Started as" },
    ],
    summary:
      "Own event-driven backend systems for a US-based industrial IoT client, from technical design through production support.",
    points: [
      "Design and build event-driven backend systems using Azure Functions and IoT Event Hub, ingesting real-time telemetry from devices across North America at millions of events per day.",
      "Improved Azure SQL query performance by 55% through execution-plan analysis, indexing strategy, query refactoring, caching, and connection tuning.",
      "Built fault-tolerant distributed messaging workflows on Azure Service Bus with retry policies, dead-letter handling, and failed-message isolation.",
      "Instrumented services with Azure Monitor and Application Insights, building operational dashboards that surface bottlenecks and shorten time-to-diagnosis on production incidents.",
      "Review pull requests and mentor junior engineers on architecture, testing, and maintainability, translating business requirements into scalable designs with stakeholders across the USA and Bangladesh.",
    ],
    stack: [
      "Azure Functions",
      "IoT Event Hub",
      "Service Bus",
      "Azure SQL",
      "Application Insights",
      "TypeScript",
      "C#",
      "Go",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  year: string;
};

export const education: Education = {
  degree: "B.Sc. in Computer Science & Engineering",
  school: "University of Information Technology and Sciences (UITS)",
  location: "Dhaka, Bangladesh",
  year: "2019",
};

export const leadership = [
  {
    title: "University Computer Club",
    detail:
      "Led a 200+ student community and a team of 10+ executives, mentoring students in competitive programming.",
  },
  {
    title: "Inter-University Programming Contest",
    detail:
      "Directed a 350+ participant contest across 10 universities, managing sponsorships and coordination.",
  },
];
