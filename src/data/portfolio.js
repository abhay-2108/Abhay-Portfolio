export const profile = {
  name: "Abhay Tiwari",
  role: "AI Engineer",
  location: "Chennai, IN",
  timezone: "IST",
  availability: "Open to AI roles",
  email: "abhaytiwari0821@gmail.com",
  github: "https://github.com/abhay-2108",
  linkedin: "https://www.linkedin.com/in/abhay-tiwari2108/",
  resume: "/Abhay_AI_Resume.pdf",
  education: "B.Tech CSE (AI & ML) · VIT Chennai",
  current: "building Agent Foundry",
  currentSecondary: "shipping CapForge + BeliefState",
};

export const verification = {
  label: "23 Oct 2026",
  iso: "2026-10-23",
};

export const navLinks = [
  { href: "#systems", label: "Systems" },
  { href: "#labs", label: "Labs" },
  { href: "#ledger", label: "Upstream" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  eyebrow: "AI Engineer",
  heading: {
    before: "I build the ",
    emphasis: "system",
    after: " around the model.",
  },
  subhead:
    "Agent runtimes, retrieval infrastructure, and local-first AI. I take model demos the last mile: tools, memory, guardrails, and evals that hold up in production.",
  primaryCta: { label: "Explore the systems", href: "#systems" },
  secondaryCta: { label: "Read the PR ledger", href: "#ledger" },
};

export const proof = [
  {
    value: "10",
    label: "Featured PRs",
    detail: "across 5 repos",
    href: "#ledger",
    source: "Upstream ledger",
    external: false,
  },
  {
    value: "100×",
    label: "Local ingestion",
    detail: "benchmark",
    href: "https://github.com/arc53/DocsGPT/pull/2505",
    source: "DocsGPT #2505 · closed",
    external: true,
  },
  {
    value: "113",
    label: "PageFlow tests",
    detail: "README badge",
    href: "https://github.com/abhay-2108/PageFlow#testing--quality-verification",
    source: "PageFlow README",
    external: true,
  },
  {
    value: "10",
    label: "Agent personas",
    detail: "AGENT.md files",
    href: "https://github.com/abhay-2108/agent-foundry/tree/main/agents",
    source: "Agent Foundry tree",
    external: true,
  },
];

export const trace = {
  title: "agent-foundry / runtime",
  command: 'run agent-foundry --task "ship feature"',
  lines: [
    { op: "memory.recall", detail: "3-tier · SQLite WAL", time: "HIT" },
    { op: "tools.resolve", detail: "42 skills · 4 servers", time: "MCP" },
    { op: "dag.plan", detail: "personas · review gate", time: "DAG" },
    { op: "guard.validate", detail: "deterministic validation", time: "GATE" },
  ],
  eval: { label: "run.mode", value: "LOCAL ONLY", percent: 100 },
  footer: "Illustrative runtime trace · not a live benchmark",
  tag: "AGENT-FOUNDRY / 2026",
  chip: "AGENT FOUNDRY · LOCAL-FIRST",
};

export const about = {
  eyebrow: "The thesis",
  heading: {
    before: "Anyone can call a model. The work is ",
    emphasis: "everything around it.",
  },
  paragraphs: [
    "I’m an AI engineer. My work sits between a model and a real job: tool protocols, memory hierarchies, retrieval pipelines, execution boundaries, and the evals that show whether any of it works. I care about systems that run locally, fail safely, and hold up under real use.",
    "I’ve contributed upstream to DocsGPT, Guardrails AI, Corsair, REA, and the official MCP Python SDK. I also build Agent Foundry, CapForge, BeliefState, and PageFlow.",
  ],
  principles: [
    {
      index: "01 / TOOLS",
      title: "Interfaces over prompts",
      body: "An agent is only as capable as the tools it can call safely.",
    },
    {
      index: "02 / MEMORY",
      title: "Persistence over context",
      body: "Working, episodic, semantic: stored and retrieved, not stuffed.",
    },
    {
      index: "03 / EVALS",
      title: "Evidence over vibes",
      body: "Every workflow needs a pass condition and a trace you can inspect.",
    },
  ],
};

export const systems = [
  {
    id: "agent-foundry",
    index: "01",
    category: "Autonomous Agent Runtime",
    status: "Active Public Build",
    statusTone: "live",
    title: "Agent Foundry",
    emphasis: "an operating system for autonomous agents.",
    description:
      "A local-first platform with 10 specialist personas, 42 modular skills, 4 MCP server entry points, and a 3-tier memory engine on SQLite WAL. It runs coding workflows with deterministic validation and zero cloud telemetry.",
    stats: [
      { value: "10", label: "specialist personas" },
      { value: "42", label: "modular skills" },
      { value: "4", label: "MCP entry points" },
      { value: "0", label: "cloud telemetry" },
    ],
    stack: [
      "Python",
      "FastMCP",
      "SQLite WAL",
      "DAG Workflows",
      "AST Parsing",
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/abhay-2108/agent-foundry",
        external: true,
      },
    ],
    diagram: "agent-foundry",
    diagramLabel:
      "Agent Foundry architecture: a DAG task orchestrator, builder and reviewer personas, four MCP server entry points, three-tier memory backed by SQLite WAL, and an eval and guardrail boundary.",
    sources: [
      {
        label: "README",
        href: "https://github.com/abhay-2108/agent-foundry#readme",
      },
      {
        label: "repository tree",
        href: "https://github.com/abhay-2108/agent-foundry",
      },
    ],
    evidenceNote:
      "Personas, skills, and MCP entry points counted from the repository tree; the zero-telemetry claim is from the project README.",
    verified: verification.label,
  },
  {
    id: "indra-energy",
    index: "02",
    category: "Multi-Agent Supply Chain Resilience",
    status: "Deployed Build",
    statusTone: "live",
    title: "Indra Energy Platform",
    emphasis: "supply-chain resilience for maritime energy shocks.",
    description:
      "A multi-agent energy resilience platform. Five CrewAI agents model geopolitical risk, refinery run-rates, procurement alternatives, SPR drawdowns, and a geospatial digital twin. Run state and audit logs persist in SQLite.",
    stats: [
      { value: "5", label: "CrewAI agents" },
      { value: "5-Column", label: "supply chain topology" },
      { value: "SQLite", label: "auditable run logs" },
    ],
    stack: [
      "Python",
      "FastAPI",
      "CrewAI",
      "Next.js 16",
      "SQLite / LanceDB",
      "Gemini / NVIDIA NIM",
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/abhay-2108/Indra-The-Energy-Supply-Chain",
        external: true,
      },
    ],
    diagram: "indra",
    diagramLabel:
      "Indra architecture: geopolitical risk, scenario modelling, procurement, SPR, and digital twin agents, database state communication over SQLite, a geospatial operations map, and run-level audit archives.",
    sources: [
      {
        label: "README",
        href: "https://github.com/abhay-2108/Indra-The-Energy-Supply-Chain#readme",
      },
    ],
    evidenceNote:
      "README documents five CrewAI agents and the five-column supply-chain topology; run state is persisted in SQLite.",
    verified: verification.label,
  },
  {
    id: "cortex-retail",
    index: "03",
    category: "Agentic Supply Chain Intelligence",
    status: "Enterprise Build",
    statusTone: "live",
    title: "Cortex Enterprise",
    emphasis: "demand, inventory, and audit in one agentic suite.",
    description:
      "An agentic enterprise suite for supply-chain orchestration: XGBoost plus Random Forest demand forecasts, autonomous stock-transfer agents, carbon-aware reorder logic, and a forensic audit ledger.",
    stats: [
      { value: "XGBoost", label: "demand forecasts" },
      { value: "CoT", label: "agent reasoning" },
      { value: "Audit", label: "decision ledger" },
    ],
    stack: ["Python", "FastAPI", "React", "MongoDB", "CrewAI"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/abhay-2108/Cortex-Retail-The-Agentic-Enterprise-Intelligence-Suite",
        external: true,
      },
    ],
    diagram: "cortex",
    diagramLabel:
      "Cortex Enterprise architecture: retail and supply signals, demand, inventory and risk agents, chain-of-thought reasoning, carbon-aware reorder rules, and a forensic audit ledger.",
    sources: [
      {
        label: "README",
        href: "https://github.com/abhay-2108/Cortex-Retail-The-Agentic-Enterprise-Intelligence-Suite#readme",
      },
    ],
    evidenceNote:
      "Capabilities and stack are described in the repository README; no performance benchmark is claimed.",
    verified: verification.label,
  },
  {
    id: "vectracache",
    index: "04",
    category: "Hybrid Retrieval & Semantic Cache",
    status: "Engineering Build",
    statusTone: "live",
    title: "VectraCache",
    emphasis: "hybrid search with a cluster-aware cache.",
    description:
      "A hybrid semantic search platform built on the 20 Newsgroups corpus. It fuses SentenceTransformers with BM25, routes queries through a Gaussian-mixture topic model, and caches results with LRU eviction and float16 quantization behind a FastAPI service.",
    stats: [
      { value: "Hybrid", label: "dense + BM25" },
      { value: "GMM", label: "topic routing" },
      { value: "float16", label: "cache quantization" },
    ],
    stack: [
      "Python",
      "FastAPI",
      "FAISS",
      "SentenceTransformers",
      "Scikit-learn",
      "BM25",
    ],
    links: [
      {
        label: "View repository",
        href: "https://github.com/abhay-2108/VectraCache",
        external: true,
      },
    ],
    diagram: "vectracache",
    diagramLabel:
      "VectraCache architecture: a search query enters SentenceTransformers and BM25 retrieval, a Gaussian-mixture router assigns topic clusters, FAISS serves the vector index, and a cluster-aware cache applies LRU eviction and float16 quantization.",
    sources: [
      {
        label: "README",
        href: "https://github.com/abhay-2108/VectraCache#readme",
      },
    ],
    evidenceNote:
      "Architecture and feature claims are from the repository README; the project is presented as an engineering build.",
    verified: verification.label,
  },
];

export const compactCases = [
  {
    title: "PageFlow",
    role: "Local-First AI Workspace",
    summary:
      "Fluid, local-first notes using private on-device AI. Electron 33, SQLite WAL, Yjs CRDTs, and Ollama streaming.",
    tags: ["TypeScript", "Electron", "SQLite WAL", "Yjs", "Ollama"],
    href: "https://github.com/abhay-2108/PageFlow",
    linkLabel: "View repository",
  },
  {
    title: "ComplianceAI",
    role: "AML Transaction Intelligence",
    summary:
      "Random Forest detection on 15 engineered features, Gemini and ChromaDB policy explanations, human review, and Celery / MongoDB batch processing.",
    tags: ["Python", "FastAPI", "Random Forest", "ChromaDB", "Celery"],
    href: "https://github.com/abhay-2108/ComplainceAI",
    linkLabel: "View repository",
  },
  {
    title: "Logistics ML Pipeline",
    role: "Kafka Streaming ML",
    summary:
      "Kafka-fed risk classification, autoencoder anomaly detection, LSTM predictive maintenance, and a live Streamlit operations dashboard.",
    tags: ["Python", "Kafka", "XGBoost", "LSTM", "Streamlit"],
    href: "https://github.com/abhay-2108/Real-Time-Logistics-ML-Pipeline",
    linkLabel: "View repository",
  },
  {
    title: "DiaTrace.AI",
    role: "Diabetes Temporal Trace Engine",
    summary:
      "Four CrewAI agents turn synthetic longitudinal EHR notes into structured timelines, eGFR decline math, ADA guideline audits, and a cited causal trace.",
    tags: ["Python", "CrewAI", "Qwen2.5", "ChromaDB", "FastAPI"],
    href: "https://github.com/abhay-2108/Diabetes-Temporal-Trace-Analysis-Engine",
    linkLabel: "View repository",
  },
];

export const labs = [
  {
    id: "capforge",
    index: "01",
    org: "Altiora Labs",
    title: "CapForge",
    emphasis: "agents that build the tools they are missing.",
    version: "v1.2.0",
    license: "Apache-2.0",
    description:
      "An autonomous capability runtime. It detects missing tools, synthesizes typed Python capabilities, repairs them through a three-pass loop, and verifies each artifact with AST, SMT, sandbox, fuzz, and mutation gates before exposing it over MCP.",
    stats: [
      { value: "3-Plane", label: "runtime architecture" },
      { value: "5-Level", label: "verification pipeline" },
      { value: "MCP", label: "stdio + SSE hub" },
      { value: "289/290", label: "tests (README)" },
    ],
    stack: [
      "Python",
      "Pydantic v2",
      "SQLite WAL",
      "Z3 / SymPy",
      "PyO3 / Rust",
      "MCP",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AltioraLabs/CapForge",
        external: true,
      },
      {
        label: "Documentation",
        href: "https://altioralabs.github.io/CapForge/",
        external: true,
      },
    ],
    diagram: "capforge",
    diagramLabel:
      "CapForge architecture: host agents and MCP clients enter an execution plane, a control plane backed by SQLite WAL, and a learning plane that synthesizes and verifies capabilities through Z3/SymPy proofs, sandboxing, and mutation testing before exposing an active capability.",
    sources: [
      {
        label: "README",
        href: "https://github.com/AltioraLabs/CapForge#readme",
      },
      {
        label: "CI runs",
        href: "https://github.com/AltioraLabs/CapForge/actions",
      },
    ],
    evidenceNote:
      "README reports 289/290 tests; the main CI workflow last completed successfully on 5 Oct 2026.",
    verified: verification.label,
  },
  {
    id: "beliefstate",
    index: "02",
    org: "Altiora Labs",
    title: "BeliefState",
    emphasis: "memory that resolves its own contradictions.",
    version: "v1.2.0 · PyPI",
    license: "Apache-2.0",
    description:
      "A background belief-state tracker for LLM applications. It extracts user and assistant facts, resolves contradictions through a rule, embedding, and judge pipeline, persists them in SQLite, Postgres, or Redis, and injects the relevant context on the next call.",
    stats: [
      { value: "5+", label: "LLM providers" },
      { value: "3", label: "persistent stores" },
      { value: "3-Stage", label: "contradiction engine" },
      { value: "Async", label: "background tracking" },
    ],
    stack: [
      "Python",
      "TypeScript",
      "FastAPI",
      "SQLite / Postgres / Redis",
      "OpenTelemetry",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/AltioraLabs/beliefstate",
        external: true,
      },
      {
        label: "Documentation",
        href: "https://altioralabs.github.io/beliefstate/",
        external: true,
      },
      {
        label: "PyPI",
        href: "https://pypi.org/project/beliefstate/",
        external: true,
      },
    ],
    diagram: "beliefstate",
    diagramLabel:
      "BeliefState architecture: an LLM turn enters a background tracker, fact extraction runs on user and assistant messages, a three-stage rule, embedding, and judge pipeline resolves contradictions, beliefs persist in SQLite, Postgres, or Redis, and relevant context is injected on the next call.",
    sources: [
      {
        label: "README",
        href: "https://github.com/AltioraLabs/beliefstate#readme",
      },
      {
        label: "PyPI v1.2.0",
        href: "https://pypi.org/project/beliefstate/",
      },
    ],
    evidenceNote:
      "PyPI release is v1.2.0; 5+ providers, three persistent stores, and the three-stage contradiction pipeline are documented in the README.",
    verified: verification.label,
  },
];

export const contributions = [
  {
    repo: "arc53 / DocsGPT",
    mark: "DG",
    change:
      "Batched vector ingestion + recursive chunking with overlap (#2505)",
    impact: "100× local",
    status: "Superseded",
    href: "https://github.com/arc53/DocsGPT/pull/2505",
  },
  {
    repo: "arc53 / DocsGPT",
    mark: "DG",
    change:
      "Token overlap for the recursive chunker (#2919)",
    impact: "Token overlap",
    status: "Open",
    href: "https://github.com/arc53/DocsGPT/pull/2919",
  },
  {
    repo: "morluto / rea",
    mark: "RE",
    change:
      "One APK decode pass across selected locales (#4804)",
    impact: "1 decode pass",
    status: "Merged",
    href: "https://github.com/morluto/rea/pull/4804",
  },
  {
    repo: "morluto / rea",
    mark: "RE",
    change:
      "RISC-V PIE admission in the Ghidra lane (#4811)",
    impact: "RISC-V PIE",
    status: "Open",
    href: "https://github.com/morluto/rea/pull/4811",
  },
  {
    repo: "corsairdev / corsair",
    mark: "CO",
    change:
      "Twilio plugin: SMS, voice, webhook signatures (#246)",
    impact: "SMS + voice",
    status: "Merged",
    href: "https://github.com/corsairdev/corsair/pull/246",
  },
  {
    repo: "corsairdev / corsair",
    mark: "CO",
    change:
      "OneDrive webhook subscription commands (#239)",
    impact: "CLI parity",
    status: "Merged",
    href: "https://github.com/corsairdev/corsair/pull/239",
  },
  {
    repo: "corsairdev / corsair",
    mark: "CO",
    change:
      "Modify-and-approve HITL permission flow (#291)",
    impact: "Edit before approve",
    status: "Closed",
    href: "https://github.com/corsairdev/corsair/pull/291",
  },
  {
    repo: "corsairdev / corsair",
    mark: "CO",
    change:
      "Execution history + audit trail in Studio (#294)",
    impact: "Audit trail",
    status: "Closed",
    href: "https://github.com/corsairdev/corsair/pull/294",
  },
  {
    repo: "guardrails-ai / guardrails",
    mark: "GR",
    change:
      "@guard_tool decorator + ToolGuard runtime governor (#1529)",
    impact: "OWASP LLM07 / 08",
    status: "Closed",
    href: "https://github.com/guardrails-ai/guardrails/pull/1529",
  },
  {
    repo: "modelcontextprotocol / python-sdk",
    mark: "MC",
    change:
      "Session component eviction on re-registration (#3716)",
    impact: "No orphaned tools",
    status: "Closed",
    href: "https://github.com/modelcontextprotocol/python-sdk/pull/3716",
  },
];

export const capabilities = {
  intelligence: [
    {
      name: "Agent runtimes & orchestration",
      evidence: "AGENT FOUNDRY · CAPFORGE",
    },
    { name: "Tool protocols & MCP", evidence: "MCP SDK · CAPFORGE" },
    { name: "Persistent memory & belief tracking", evidence: "BELIEFSTATE" },
    {
      name: "LLM provider abstraction",
      evidence: "BELIEFSTATE · CAPFORGE",
    },
    { name: "RAG & vector retrieval", evidence: "DOCSGPT · VECTRACACHE" },
    { name: "Evals, guardrails & HITL", evidence: "GUARDRAILS · CORSAIR" },
    {
      name: "Document intelligence & compliance",
      evidence: "COMPLIANCEAI · DOCSGPT",
    },
    {
      name: "Local inference (Ollama)",
      evidence: "PAGEFLOW · BELIEFSTATE",
    },
    { name: "Deep learning & computer vision", evidence: "MCP AQI · LIVENESS" },
  ],
  systems: [
    {
      name: "Python & FastAPI services",
      evidence: "BELIEFSTATE · CAPFORGE",
    },
    { name: "TypeScript, React & Electron", evidence: "PAGEFLOW · INDRA" },
    { name: "SQLite, WAL & CRDT sync", evidence: "PAGEFLOW · CAPFORGE" },
    { name: "Formal verification & sandboxing", evidence: "CAPFORGE" },
    {
      name: "Observability & telemetry",
      evidence: "BELIEFSTATE · CAPFORGE",
    },
    {
      name: "Performance & I/O optimization",
      evidence: "DOCSGPT · CAPFORGE",
    },
    { name: "Testing & CI", evidence: "289/290 CAPFORGE · 113 PAGEFLOW" },
    { name: "Sandboxed local deployment", evidence: "CAPFORGE · AGENT FOUNDRY" },
    { name: "Streaming data pipelines", evidence: "LOGISTICS · INDRA" },
  ],
};

export const credentials = [
  { title: "IBM Watsonx", detail: "Generative AI" },
  { title: "AWS", detail: "Generative AI" },
  { title: "Coursera", detail: "AI/ML Engineering" },
  { title: "Google", detail: "Data Science" },
];

export const contact = {
  eyebrow: "Contact",
  heading: { before: "Start a ", emphasis: "run." },
  email: profile.email,
  primaryCta: { label: "Email me", href: `mailto:${profile.email}` },
  secondaryCta: {
    label: "Download resume",
    href: profile.resume,
  },
  tertiaryCta: { label: "GitHub", href: profile.github, external: true },
};
