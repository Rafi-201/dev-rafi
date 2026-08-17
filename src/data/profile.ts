export const profile = {
  name: "Tanvir Hasan",
  shortName: "Tanvir",
  initials: "TH",
  role: "Backend Software Engineer",
  specialty: "Cloud-Native & Distributed Systems",
  location: "Dhaka, Bangladesh",
  email: "tanvir.hasan.rafi.00@gmail.com",
  phone: "+8801869494543",

  // TODO(rafi): confirm this LinkedIn slug matches your profile URL.
  linkedin: "https://www.linkedin.com/in/tanvir-hasan-rafi/",
  github: "https://github.com/Rafi-201",

  // Served from /public so the download always works (Google Drive blocks
  // the `download` attribute on cross-origin links).
  resume: "tanvir-hasan-resume.pdf",

  // TODO(rafi): paste a Calendly/Cal.com link to enable the "Book a call"
  // button. Left empty, the button is hidden rather than rendered dead.
  calendly: "",

  headline: "I build event-driven backends that stay up.",
  positioning:
    "Backend engineer with 3+ years building event-driven, cloud-native systems on Azure for US-based enterprise clients — owning work from technical design through production support. I also build multi-agent AI systems with orchestration, tool calling, and LLM-based workflows.",
} as const;

export type Metric = {
  value: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: "3+", label: "Years shipping production backends" },
  { value: "Millions", label: "IoT events ingested per day" },
  { value: "55%", label: "Azure SQL query latency cut" },
  { value: "10+", label: "Azure services run in production" },
];

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
