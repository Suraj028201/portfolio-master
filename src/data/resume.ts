export const personal = {
  name: "Suraj Kumar Yadav",
  title:
    "Full Stack Software Engineer (Frontend Heavy) · React · TypeScript · AI-Driven Web",
  location: "Gurugram, India",
  phone: "9557679137",
  email: "surajk.civ17@nituk.ac.in",
  linkedin: "https://linkedin.com/in/suraj-kumar-yadav-50b25518b",
  profileImagePath: "/profile.png",
} as const;

export const summary = `Full Stack Software Engineer with 4+ years of experience building and shipping production React.js and TypeScript applications. Mostly frontend work, with hands-on backend experience in Node.js, Express, and PostgreSQL, across AI-driven analytics dashboards and Fintech platforms used by real customers. Redesigned a loan journey that cut customer drop-off by 30% and loan processing time by 40%, and built an EV fleet dashboard that increased fleet utilization by 30%. Comfortable integrating LLM-based AI features such as Gemini, LangChain, and vector search into live products.`;

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Angular",
      "React Native",
      "Next.js",
      "Ember.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Three.js",
    ],
  },
  {
    label: "State & Build",
    items: ["Redux", "Redux Saga", "Webpack"],
  },
  {
    label: "Backend & APIs",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Twilio",
      "Exotel",
      "Stripe",
    ],
  },
  {
    label: "AI & Data",
    items: [
      "Gemini",
      "LLMs",
      "Vector Embeddings",
      "LangChain",
      "LangSmith",
      "OpenAI",
      "AI-Powered Analytics",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: ["Netlify", "Railway", "GitHub Actions", "Git", "GitHub"],
  },
  {
    label: "Other",
    items: [
      "Markdown",
      "IoT Integration",
      "KYC Automation",
      "Blockchain",
      "GitHub Copilot",
      "Codex",
    ],
  },
] as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "Revenaut AI",
    period: "Sep 2025 – Present",
    location: "Gurugram, India",
    highlights: [
      "Built AI-powered analytics dashboards covering 3 agent types (Phone, SMS, and Notetaker) for real-time financial and communication insights.",
      "Built inbound and outbound phone call AI agents with Exotel (India) and Twilio (US), with Stripe for payments.",
      "Built WebGPT, a plug-and-play AI chatbot embeddable on any website to improve lead conversion and engagement.",
      "Used Codex and GitHub Copilot in daily workflow, shipping features roughly 3× faster.",
      "Designed prompt templates and markdown-based workflows that improved AI code generation quality across the team.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tapsys Private Limited",
    period: "Apr 2024 – Aug 2025",
    location: "Mumbai, India",
    highlights: [
      "Led development of Customer Onboarding, Customer Management, and Loan Management systems.",
      "Built a real-time EV fleet tracking and AI dashboard using IoT data, increasing fleet utilization by 30%.",
      "Used GitHub Copilot for PR reviews and code generation, cutting average review turnaround time.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Arth PayTech Pvt. Ltd.",
    period: "Jan 2023 – Mar 2024",
    location: "Gurugram, India",
    highlights: [
      "Integrated Surepass API to automate KYC verification, reducing manual steps and onboarding friction.",
      "Redesigned the loan application journey, cutting drop-off by 30% and processing time by 40%.",
      "Led FAIRCENT lender API integration for real-time loan disbursal, improving TAT by 20%.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Raja Software Labs",
    period: "Jul 2022 – Dec 2022",
    location: "Remote",
    highlights: [
      "Contributed to LinkedIn's Data Intelligence Platform for ad performance metrics: cost, impressions, and engagement.",
      "Wrote unit tests that improved reliability and coverage; supported Ember 3.8 → 4 migration.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Vashiyat.com",
    url: "https://vashiyat.com",
    badge: "Live · Real users",
    description:
      "Financial life and legacy planning platform with secure inventory across 7 categories and Insurance AI that reads policy PDFs using Gemini, embeddings, and pgvector.",
    stack: "React, Redux, TypeScript, Node.js, Express, LangChain, LangSmith, Railway, Supabase",
  },
  {
    name: "my.vashiyat.com",
    url: "https://my.vashiyat.com",
    badge: "Live · Real users",
    description:
      "Authenticated customer app for financial assets, nominees, access rules, family financial map, and AI-driven policy analysis.",
    stack: "React, TypeScript, Node.js, AI integrations",
  },
  {
    name: "ss-loans.vashiyat.com",
    url: "https://ss-loans.vashiyat.com",
    badge: "Live · Real users",
    description:
      "Loan management system for distributors in tier 4–5 cities: profiles, schedules, EMI tracking, and automated payment notifications.",
    stack: "React, TypeScript, Node.js, PostgreSQL",
  },
] as const;

export const achievement = {
  title: "Co-Founder, Homy Market Pvt. Ltd.",
  details: [
    "Co-founded and scaled a hyperlocal grocery delivery platform similar to Zepto, sourcing from local markets.",
    "Completed 1,000+ deliveries for 500+ customers; grew the team from 3 to 15 members.",
  ],
} as const;

export const education = {
  degree: "B.Tech, Civil Engineering",
  school: "NIT Uttarakhand",
  period: "Aug 2017 – Jun 2021",
} as const;

export const interests =
  "Finance, artificial intelligence, and blockchain — the areas I keep coming back to outside of work.";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;
