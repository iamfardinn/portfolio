// Single source of truth for all portfolio content.
// Edit values here and every section reflects the change.

export const profile = {
  name: "Fahim Abrar",
  initials: "FA",
  role: "Full-Stack, AI/LLM & IoT Developer",
  tag: "Computer Science · AIUB · Graduating Dec 2026",
  location: "Dhaka, Bangladesh",
  email: "abrarfahim3669@gmail.com",
  status: "Open to collaborations",
  /** Path to the CV served from /public — note the literal space and trailing dot. */
  cvUrl: "/FahimAbrar Resume .pdf",
  socials: {
    github: "https://github.com/iamfardinn",
    linkedin: "https://www.linkedin.com/in/iamfardinn/",
    codeforces: "https://codeforces.com/profile/abrar3669",
    gmail:
      "https://mail.google.com/mail/?view=cm&fs=1&to=abrarfahim3669@gmail.com",
  },
} as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["C++", "Python", "JavaScript", "TypeScript", "Java", ".NET"],
  },
  {
    label: "Backend",
    items: [".NET", "Node.js", "Express.js", "Socket.io", "Electron.js", "FastAPI"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Firebase", "SQLite"],
  },
  {
    label: "Integrations & AI",
    items: ["Stripe", "SSLCommerz", "Claude API", "OpenAI API", "xAI / Grok", "Gemini API"],
  },
  {
    label: "Tools & Workflow",
    items: ["Git", "GitHub", "Docker", "Postman", "Linux", "Cursor", "Antigravity"],
  },
] as const;

export type ResearchStatus = "In Progress" | "Published" | "Draft" | "Completed";
export interface ResearchItem {
  id: string;
  title: string;
  affiliation: string;
  period: string;
  status: ResearchStatus;
  stack: string[];
  summary: string;
  highlights: string[];
  github?: string;
}

export const research: ResearchItem[] = [
  {
    id: "iot-air-quality",
    title: "IoT Air Quality Monitor",
    affiliation: "Undergraduate Research — AIUB",
    period: "2026 — Present",
    status: "In Progress",
    stack: ["ESP32-C3", "PMS7003", "BME280", "C++", "IoT"],
    summary:
      "Designing a low-cost, portable PM2.5 monitor tailored for real-time air quality awareness in Dhaka.",
    highlights: [
      "Spike-based adaptive alerting algorithms",
      "Humidity-corrected sensor readings",
      "South-Asian climate calibration",
    ],
  },
  {
    id: "spatial-bike-forecasting",
    title: "Spatial Bike Forecasting",
    affiliation: "Undergraduate Research — AIUB",
    period: "2025",
    status: "Completed",
    stack: ["Python", "scikit-learn", "XGBoost", "GeoPandas", "Folium", "K-Means"],
    summary:
      "Localized urban bike demand prediction across 2,631 Seoul bike-share stations using spatial cohort stratification and Moran's I spatial autocorrelation analysis.",
    highlights: [
      "Clustered 2,631 Seoul bike-share stations with K-Means",
      "Trained Random Forest & XGBoost hotspot models",
      "Performed Moran's I spatial autocorrelation analysis",
    ],
    github: "https://github.com/iamfardinn/Spatial-Bike-Forecasting",
  },
];

export interface HackathonItem {
  id: string;
  name: string;
  event: string;
  achievement: string;
  /** Position label like "Finalist" or "16th Place". */
  team?: string;
  stack: string[];
  description: string;
  github?: string;
}

export const hackathons: HackathonItem[] = [
  {
    id: "bup-gridwise",
    name: "GridWise — LLM Energy Optimization API",
    event: "BUP CSE Fest 2026 · GridWise LLM Challenge",
    achievement: "Top 50 Teams",
    stack: ["FastAPI", "Gemini API", "Grok API Failover", "SciPy LP Solver"],
    description:
      "Architected GridWise, an LLM-assisted energy optimization API that generates optimal 24-hour grid/solar/battery scheduling from natural-language operator inputs.",
  },
  {
    id: "fuel-supply-simulator",
    name: "Fuel Supply Simulator",
    event: "BUP CSE Fest 2026",
    achievement: "Finalist",
    stack: ["TypeScript", "Algorithm Design", "Simulation"],
    description:
      "Co-built a fuel supply simulation at BUP CSE Fest 2026 — final round delivery with the team. Models supply-chain demand under constrained delivery windows.",
    github: "https://github.com/tonmoy-y/fuel-supply-simulator",
  },
  {
    id: "legal-tech-ai",
    name: "Legal Tech AI Hackathon",
    event: "Legal Tech AI Hackathon",
    achievement: "16th Place",
    stack: ["Python", "FastAPI", "LLM"],
    description:
      "Built a legal-tech AI system under hackathon constraints — natural-language legal query parsing with structured case output. Placed 16th overall.",
  },
];

export type ProjectCategory =
  | "AI & Web Apps"
  | "IoT / Hardware";

export const projectCategories: { id: ProjectCategory | "All"; label: string }[] = [
  { id: "All", label: "All" },
  { id: "AI & Web Apps", label: "AI & Web Apps" },
  { id: "IoT / Hardware", label: "IoT / Hardware" },
];

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  tagline: string;
  /** README-derived long-form description. */
  description: string;
  stack: string[];
  highlights: string[];
  live?: string;
  github: string;
}

export const projects: ProjectItem[] = [
  {
    id: "medimind-ai",
    slug: "medimind-ai",
    title: "MediMind-AI",
    category: "AI & Web Apps",
    year: "2025",
    tagline: "AI Healthcare Platform",
    description:
      "Production-ready AI healthcare dashboard with generative medical chat, intelligent symptom analysis, and secure real-time doctor appointments. Built as a microservice architecture with dual payment rails (Stripe + SSLCommerz) for international and local Dhaka billing.",
    stack: ["TypeScript", "Express", "PostgreSQL", "LLM API", "Stripe", "SSLCommerz"],
    highlights: [
      "AI symptom triage pipeline",
      "Dual-payment processing (Stripe + SSLCommerz)",
      "Unified doctor dashboard for records & scheduling",
    ],
    live: "https://medimindai1.netlify.app/",
    github: "https://github.com/iamfardinn/MediMind-AI",
  },
  {
    id: "deepwork",
    slug: "deepwork",
    title: "DeepWork",
    category: "AI & Web Apps",
    year: "2025",
    tagline: "Cross-client collaborative Pomodoro desktop widget",
    description:
      "Real-time, cross-client collaborative Pomodoro desktop widget that synchronizes focus sessions across multiple devices seamlessly via Socket.io. Electron-based desktop shell with a reactive React UI for live presence.",
    stack: ["Electron", "React", "Socket.io", "JavaScript"],
    highlights: [
      "Cross-client session sync",
      "Real-time presence via Socket.io",
      "Desktop widget shell (Electron)",
    ],
    github: "https://github.com/iamfardinn/DeepWork_Frontend",
  },
  {
    id: "aero-index-app",
    slug: "aero-index-app",
    title: "Aero-Index Mobile",
    category: "IoT / Hardware",
    year: "2026",
    tagline: "BLE air quality monitor companion app",
    description:
      "Mobile client for the AeroIndex research initiative. Interfaces with ESP32 sensors via Bluetooth Low Energy to monitor PM2.5/PM10, calculate dynamic air quality readings, and detect hyper-local pollution spikes using adaptive baselines. Backed by Firebase for real-time sync.",
    stack: ["TypeScript", "React Native", "ESP32", "BLE", "Firebase", "Skia"],
    highlights: [
      "ESP32 ↔ BLE sensor bridge",
      "Adaptive spike detection baselines",
      "Real-time Firebase sync",
    ],
    github: "https://github.com/iamfardinn/Aero-Index-App",
  },
  {
    id: "aero-index-web",
    slug: "aero-index",
    title: "Aero-Index Web Dashboard",
    category: "IoT / Hardware",
    year: "2026",
    tagline: "Mobile-first PM2.5 monitoring dashboard",
    description:
      "Responsive web dashboard prototype for monitoring real-time PM2.5 air quality, designed as the visual layer over the AeroIndex ESP32 sensor fleet. Mobile-first layouts for on-the-go AQI checks.",
    stack: ["TypeScript", "React", "Charts", "IoT"],
    highlights: [
      "Real-time PM2.5 monitoring",
      "Mobile-first responsive layout",
      "Pairs with AeroIndex sensor fleet",
    ],
    github: "https://github.com/iamfardinn/Aero-Index",
  },
  {
    id: "mct-business-management",
    slug: "mct-business-management",
    title: "MCT Business Management",
    category: "AI & Web Apps",
    year: "2026",
    tagline: "Offline-first enterprise desktop suite",
    description:
      "Comprehensive offline-first enterprise desktop application for managing sub-dealer distribution, market sales, broadband subscriber billing, and daily cashbook operations. Electron-wrapped frontend, Express backend, PostgreSQL data layer, and Socket.IO real-time notifications for approval workflows.",
    stack: ["Electron", "React", "TypeScript", "Express", "Socket.IO", "PostgreSQL", "Zustand"],
    highlights: [
      "Multi-tier invoice approval workflows",
      "Real-time Socket.IO approval notifications",
      "Audit logging with actor traceability",
      "Exportable Excel financial reports",
    ],
    github: "https://github.com/iamfardinn/MCT_Business_Management",
  },
  {
    id: "save-it",
    slug: "save-it",
    title: "Save-it",
    category: "AI & Web Apps",
    year: "2026",
    tagline: "Game session save manager (Tauri + Rust)",
    description:
      "Tauri + Rust desktop save manager that auto-tracks game sessions, checkpoints, and progress. Discord-style \"Now Playing\" banner, save-folder watcher, milestone captures, and per-game session timelines. Built-in game database recognises 100+ titles by process name.",
    stack: ["Tauri", "Rust", "React", "TypeScript", "SQLite"],
    highlights: [
      "Discord-style \"Now Playing\" banner",
      "Save-folder auto-watching",
      "Per-game session timeline + milestones",
      "100+ built-in game detections",
    ],
    github: "https://github.com/iamfardinn/Save-it",
  },
  {
    id: "cf-bot",
    slug: "cf-bot",
    title: "CF_BOT",
    category: "AI & Web Apps",
    year: "2026",
    tagline: "Codeforces contest alerts Discord bot",
    description:
      "Production-ready Discord bot that monitors the Codeforces API to deliver 1-hour warnings, contest-started embeds, and ongoing-contest detection with per-division colour coding. Slash commands (/next_contest, /ongoing, /help_cf), optional role mentions, and resilient state tracking across restarts.",
    stack: ["Python", "discord.py", "Codeforces API"],
    highlights: [
      "1-hour warning + live contest embeds",
      "Discord-native timezone conversion",
      "Per-division colour coding",
      "Crash-resilient state tracking",
    ],
    github: "https://github.com/iamfardinn/CF_BOT",
  },
];

export interface LeadershipItem {
  id: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const leadership: LeadershipItem[] = [
  {
    id: "aiub-cyber-fest",
    role: "Asst. Game Lead / Tournament Coordinator",
    org: "AIUB Cyber Gaming Fest — AIUB Computer Club",
    period: "",
    bullets: [
      "Managed live brackets and player check-ins for 100+ participants",
      "Ran Discord ops and real-time hardware/network troubleshooting",
    ],
  },
  {
    id: "bmarpc",
    role: "Game Lead / Tournament Coordinator",
    org: "2nd BMARPC National Science Festival",
    period: "",
    bullets: [
      "End-to-end ruleset design and bracket architecture",
      "Owned equipment setup and venue network infrastructure",
    ],
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  status: "Ongoing" | "Completed";
  description?: string;
  highlights?: string[];
}

export const education: EducationItem[] = [
  {
    id: "aiub-bsc-cse",
    degree: "B.Sc. in Computer Science & Engineering",
    field: "Computer Science & Engineering",
    institution: "American International University — Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    start: "2023",
    end: "Expected Dec 2026",
    status: "Ongoing",
    description:
      "Undergraduate program covering systems, AI/ML, networks, databases, and software engineering. Active in AIUB Computer Club, esports coordination, and competitive hackathon circuits.",
    highlights: [
      "AIUB Computer Club — esports & hackathon coordinator",
      "BUP CSE Fest 2026 (GridWise finalist track)",
      "AIUB Cyber Gaming Fest — Asst. Game Lead",
    ],
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  /** Optional credential URL (verify, course page, etc.). */
  url?: string;
  description?: string;
}

/**
 * TODO: paste from https://www.linkedin.com/in/fahim-abrar-fardin1/details/certifications/
 * Fields: title, issuer, year (issued), description (optional), url (optional).
 * LinkedIn blocked automated fetch (999), so add manually here.
 */
export const certifications: CertificationItem[] = [];
