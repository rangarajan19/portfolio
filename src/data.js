export const profile = {
  name: "Rangarajan G",
  role: "Agentic AI Engineer",
  tagline: "GenAI Engineer · LLM Orchestration",
  location: "Chennai, India",
  email: "g.rangarajan19@gmail.com",
  phone: "+91 63826 36622",
  linkedin: "https://linkedin.com/in/rangarajan19",
  github: "https://github.com/rangarajan19",
  summary:
    "I build multi-agent systems that go past the demo stage — orchestration with Google ADK, LangGraph and MCP, retrieval that's actually grounded, and guardrails so agents fail safely instead of silently. Most recently that meant a CLI assistant for Centric PLM workflows: tool selection, RAG retrieval and multi-turn reasoning over a genuinely complex enterprise domain. I've also built operational tooling end-to-end, including a Jira API-driven dashboard that tracks SLA and ticket health for operations teams.",
};

export const stats = [
  { value: "70%", label: "fewer flaky tests after the self-healing rewrite" },
  { value: "40%", label: "less manual design effort on test case generation" },
  { value: "30%", label: "faster ticket resolution with the Jira analyst agent" },
];

export const trace = [
  { tag: "run", text: "agent run centric-plm-assist --task \"generate test cases\"", tone: "cmd" },
  { tag: "plan", text: "decompose story into 4 subtasks", tone: "info" },
  { tag: "tool", text: "jira.fetch_context()          0.8s", tone: "ok" },
  { tag: "tool", text: "rag.retrieve(k=6)             1.2s", tone: "ok" },
  { tag: "tool", text: "adk.generate_test_cases()     2.1s", tone: "ok" },
  { tag: "validate", text: "output schema + coverage check", tone: "info" },
  { tag: "done", text: "4 test cases generated · 50% faster than manual", tone: "done" },
];

export const experience = [
  {
    role: "AI Automation Engineer (SDET)",
    company: "Kripya Solution Private Ltd",
    location: "Chennai, India",
    start: "Apr 2025",
    end: "Present",
    bullets: [
      "Configure and enhance AI-powered MCP tools supporting customer-specific Centric PLM engineering workflows across US and Europe regions.",
      "Engineered a Google ADK multi-agent system integrating Jira MCP for autonomous test case generation — 40% less manual design effort, 50% faster story-to-test-case turnaround across 30+ sprint cycles.",
      "Built a self-healing Playwright + Gemini framework that recovers locators from DOM snapshots, cutting flaky tests by 70% and improving CI reliability.",
      "Designed structured agent personas with reasoning constraints and output validation, measurably reducing hallucinations in structured reporting.",
      "Built a CLI-based agentic Centric PLM assistant on LangGraph and Gemini — LLM-driven tool selection, RAG-based retrieval, code/config generation.",
      "Shipped 12+ reusable Claude-powered prompt skills for PLM workflows and migration work, covering BDD generation, validation logic and migration assistance.",
    ],
  },
  {
    role: "AI/ML Engineer Intern",
    company: "Tristha Global Pvt Ltd",
    location: "Chennai, India",
    start: "Feb 2025",
    end: "Apr 2025",
    bullets: [
      "Fine-tuned LLaMA 3.2-11B with LoRA for banking domain classification — 25% accuracy gain, 35% fewer false positives over baseline.",
      "Designed and deployed a RAG pipeline over a vector store for contextual retrieval, reducing hallucinations for production use.",
    ],
  },
  {
    role: "Python Developer",
    company: "Office 2000 Solutions Pvt Ltd",
    location: "Chennai, India",
    start: "Jul 2024",
    end: "Nov 2024",
    bullets: [
      "Optimized backend REST APIs and PostgreSQL queries for a 50% cut in response latency.",
      "Built a real-time power metrics dashboard in Flask covering 10+ monitored data streams.",
    ],
  },
];

export const projects = [
  {
    name: "AI Test Case Generator Agent",
    stack: ["Google ADK", "MCP", "Jira", "Python"],
    flow: ["Jira story", "MCP context", "ADK agent", "Test cases"],
    description:
      "Autonomous agent that pulls Jira story context via MCP and converts it into structured, scenario-based test cases. Multi-step reasoning handles ambiguous requirements instead of failing on them.",
    impact: "50% less manual documentation work across 30+ sprint cycles.",
  },
  {
    name: "AI Jira Analyst Chatbot",
    stack: ["Google ADK", "MCP", "Python"],
    flow: ["Ticket + comments", "MCP extraction", "Multi-turn agent", "Root-cause summary"],
    description:
      "Conversational agent that reads ticket history, summarizes updates and surfaces root-cause insights. Follow-up questions resolve without re-ingesting the whole ticket.",
    impact: "~35% lower average response latency on follow-ups.",
  },
  {
    name: "BDD Feature Architect",
    stack: ["Claude API", "Prompt Engineering", "Python"],
    flow: ["Structured test cases", "Template prompt", "Claude API", "Gherkin scenarios"],
    description:
      "Converts structured test cases into Gherkin scenarios through a template-driven prompt workflow, keeping full traceability back to the source test case.",
    impact: "200+ scenarios generated, 50% less manual BDD authoring time.",
  },
  {
    name: "PLM Code Assist Agent",
    stack: ["LangGraph", "MCP", "Gemini", "Python"],
    flow: ["User query", "LangGraph router", "RAG + MCP tools", "Code / config output"],
    description:
      "CLI-based agentic assistant for Centric PLM: LLM-driven tool selection, RAG-based context retrieval and code/config generation, with multi-turn conversational reasoning.",
    impact: "~40% less manual PLM lookup and configuration time in internal testing.",
  },
];

export const openSourceProjects = [
  {
    name: "agentkit-mcp",
    url: "https://github.com/rangarajan19/agentkit-mcp",
    description:
      "MCP-first agent framework where every tool comes from an MCP server, with guardrails at the tool layer — dry-run, human approval, argument rules, tool allow-lists. Own agent loop with tracing and a step limit; tool errors go back to the model so it can recover.",
    detail: "Works with Gemini and free OpenRouter models with retry and fallback · 47 automated tests in CI · ships issue-triage and web-research example agents.",
    stack: ["Python", "MCP", "Gemini", "OpenRouter"],
  },
  {
    name: "agentic-api-testing",
    url: "https://github.com/rangarajan19/agentic-api-testing",
    description:
      "Chat-driven API testing: a local LLM agent (LangGraph + Ollama) routes requests, while deterministic pytest checks do the actual testing — the LLM steers, the assertions stay reliable.",
    detail: "Keeps LLM judgment and test correctness as separate concerns on purpose.",
    stack: ["Python", "LangGraph", "Ollama", "pytest"],
  },
];

export const contributions = [
  {
    repo: "HelpCode-ai/anythingmcp",
    repoUrl: "https://github.com/HelpCode-ai/anythingmcp",
    pr: "#698",
    prUrl: "https://github.com/HelpCode-ai/anythingmcp/pull/698",
    title: "Added an adapter:new scaffolder so new connector adapters start from a template",
    note: "closes #585 · merged",
  },
  {
    repo: "agentevals-dev/agentevals",
    repoUrl: "https://github.com/agentevals-dev/agentevals",
    pr: "#224",
    prUrl: "https://github.com/agentevals-dev/agentevals/pull/224",
    title: "CI fix so autofixable ruff violations fail the build instead of passing silently",
    note: "merged",
  },
];

export const skillGroups = [
  {
    label: "Agentic AI & orchestration",
    items: ["Google ADK", "LangGraph", "LangChain", "CrewAI", "MCP", "Multi-agent pipelines", "Tool calling", "RAG", "Prompt engineering"],
  },
  {
    label: "LLMs & models",
    items: ["Gemini", "LLaMA", "LoRA fine-tuning", "Embeddings", "Pinecone", "Chroma", "FAISS", "Claude Code", "Codex", "Copilot"],
  },
  {
    label: "AI automation & testing",
    items: ["Playwright", "Self-healing frameworks", "AI-driven UI/API testing"],
  },
  {
    label: "Software engineering",
    items: ["Python", "TypeScript", "FastAPI", "Flask", "REST APIs", "PostgreSQL", "Git", "Agile"],
  },
  {
    label: "Cloud & platforms",
    items: ["AWS Bedrock", "AWS SageMaker", "Docker", "Jira API", "Postman", "MCP integrations"],
  },
  {
    label: "Enterprise systems",
    items: ["Centric PLM", "Product Lifecycle Management", "Configuration Management", "UAT", "Go-Live Support"],
  },
];

export const education = {
  degree: "B.Tech in Information Technology",
  school: "Rajalakshmi Engineering College, Chennai",
  years: "2020 – 2024",
  detail: "CGPA 8.39 / 10",
};

export const publications = [
  { title: "Sign Language Caption Generation Using LSTM", venue: "IEEE Xplore, 2024" },
];

export const certifications = [
  "AWS Certified AI Practitioner — Amazon Web Services",
  "Prompt Engineering for Developers — Great Lakes Institute of Management",
  "Essential Automation Professional — Automation Anywhere University",
  "UiPath Studio Foundational — UiPath",
  "AI and Machine Learning Basics — Udemy",
];
