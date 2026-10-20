// Dynamic Portfolio Data (Single Source of Truth)
// Built for Abhay Tiwari - AI Engineer & Agentic Workflows

export const personalInfo = {
  name: "Abhay Tiwari",
  role: "AI Engineer & Agentic Systems Architect",
  tagline: "Architecting Autonomous Agent Swarms, Local-First AI & High-Throughput Systems",
  location: "VIT Chennai, India",
  education: "B.Tech in Computer Science Engineering (Specialization in AI & ML), VIT Chennai",
  status: "Available for AI Engineering, Agentic Workflows & System Roles",
  email: "abhaytiwari0821@gmail.com",
  github: "https://github.com/abhay-2108",
  linkedin: "https://www.linkedin.com/in/abhay-tiwari2108/",
  calendar: "https://calendly.com/abhay",
  aiResume: "/Abhay_AI_Resume.pdf",
  webResume: "/Abhay_Web_Resume.pdf",
  stats: {
    repositories: "77+",
    skillsCatalog: "40+",
    openSourceImpact: "100x Speedup",
    agentPersonas: "10"
  }
};

export const about = `I'm Abhay Tiwari, an AI Systems Engineer and Open-Source Contributor pursuing Computer Science with an AI & Machine Learning specialization at VIT Chennai. I design and build production-grade autonomous agent ecosystems, local-first zero-cloud intelligent workspaces, and high-performance retrieval architectures. My work spans the Model Context Protocol (MCP), CRDT-backed distributed local storage, AI runtime guardrails, and deep learning systems.`;

export const aiResume = personalInfo.aiResume;
export const webResume = personalInfo.webResume;
export const resumeLink = personalInfo.aiResume;
export const calendarLink = personalInfo.calendar;

// High-Impact Open Source Contributions
export const openSourceContributions = [
  {
    repo: "arc53/DocsGPT",
    org: "DocsGPT (Production RAG & GenAI Platform)",
    title: "Batched Vector Store Ingestion & Recursive Token Chunking",
    prNumber: "#2505",
    prLink: "https://github.com/arc53/DocsGPT/pull/2505",
    status: "Merged",
    badge: "100x Ingestion Speedup",
    description: "Re-engineered core ingestion pipeline from sequential single-chunk network calls into configurable batched payloads, achieving 100x acceleration (75s down to 0.75s for 500 chunks). Implemented semantic recursive token splitter with cl100k encoding and 0 fractured words across boundaries.",
    impact: "99.0% I/O reduction, zero semantic phrase truncation, 41 unit tests passing.",
    tags: ["RAG", "Vector Databases", "Python", "Performance Optimization", "Tiktoken"]
  },
  {
    repo: "morluto/rea",
    org: "REA (Reverse Engineering Assistant & Agentic Analysis)",
    title: "APK Resource Table Multi-Locale Decode & Ghidra RISC-V PIE Support",
    prNumber: "#4804, #4811",
    prLink: "https://github.com/morluto/rea/pull/4804",
    status: "Merged & Active",
    badge: "Binary Agent Tooling",
    description: "Engineered single-pass multi-locale Android string table extraction eliminating redundant APK decoding passes and temporary disk I/O. Added RISC-V ELF32/64 Position-Independent Executable (PIE) target admission boundaries in the Ghidra decompiler bridge.",
    impact: "Reduced decode cycle time from ~45s to single pass; expanded RISC-V Linux distribution architecture coverage.",
    tags: ["TypeScript", "Ghidra", "Reverse Engineering", "MCP Tools", "Android Internals"]
  },
  {
    repo: "guardrails-ai/guardrails",
    org: "Guardrails AI (AI Safety & Policy Enforcement)",
    title: "@guard_tool Decorator & ToolGuard Runtime Agent Governor",
    prNumber: "#1529",
    prLink: "https://github.com/guardrails-ai/guardrails/pull/1529",
    status: "Completed",
    badge: "OWASP LLM07 / LLM08",
    description: "Architected @guard_tool decorator and ToolGuard execution boundary manager for autonomous tool-calling agents. Mitigates Insecure Plugin Design (OWASP LLM07) and Excessive Agency (OWASP LLM08) with synchronous/asynchronous schema validation and OpenTelemetry tracing.",
    impact: "Centralized tool execution telemetry, 6 automated fail-action strategies, 100% test coverage.",
    tags: ["AI Safety", "Agent Governance", "OpenTelemetry", "Python", "Tool Validation"]
  },
  {
    repo: "corsairdev/corsair",
    org: "Corsair (Human-In-The-Loop Agent Execution)",
    title: "Modify-and-Approve Human-In-The-Loop Permission System",
    prNumber: "#291",
    prLink: "https://github.com/corsairdev/corsair/pull/291",
    status: "Merged",
    badge: "HITL Governance",
    description: "Built the 'Modify and Approve' workflow enabling human operators to inspect, edit, and correct pending tool payloads and API arguments inside the Studio UI prior to execution while preserving backward-compatible SQLite audit state.",
    impact: "Eliminated blind agent execution hazards with zero-breaking-schema persistence.",
    tags: ["Human-In-The-Loop", "TypeScript", "React", "SQLite", "Agent Governance"]
  },
  {
    repo: "modelcontextprotocol/python-sdk",
    org: "Anthropic / Model Context Protocol (Official Python SDK)",
    title: "Session Component Eviction on Re-registration in ClientSessionGroup",
    prNumber: "#3716",
    prLink: "https://github.com/modelcontextprotocol/python-sdk/pull/3716",
    status: "Completed",
    badge: "Protocol Invariants",
    description: "Resolved tool namespace collisions and orphaned tool registrations in ClientSessionGroup during dynamic session refresh. Implemented component eviction and guarded exit stack teardowns with 100% branch and statement coverage.",
    impact: "Guaranteed protocol stability for long-lived multi-server MCP client connections.",
    tags: ["Model Context Protocol", "FastMCP", "AsyncIO", "Python SDK"]
  }
];

// Featured Projects (Easily editable - user can manually add/remove)
export const projects = [
  {
    id: "pageflow",
    title: "PageFlow",
    category: "agentic",
    subtitle: "Local-First Notion Workspace with On-Device AI Engine",
    description: "A fluid, 100% private desktop workspace engineered with Electron 33 and React 18. Combines block-based document editing with SQLite Write-Ahead Logging (WAL), Yjs CRDT real-time local sync, and native on-device streaming LLM inference via Ollama.",
    details: "Zero-cloud telemetry and air-gapped security. Run local models like DeepSeek-R1, Qwen 2.5, and Llama 3.2 without sending any data off your hardware. Validated with 113 automated unit tests.",
    metrics: "113 Tests Passed • 100% Air-Gapped • Sub-10ms Input Latency",
    tags: ["Electron 33", "React 18", "Ollama", "SQLite WAL", "Yjs CRDTs", "TypeScript"],
    link: "https://github.com/abhay-2108/PageFlow",
    featured: true
  },
  {
    id: "agent-foundry",
    title: "Agent Foundry",
    category: "agentic",
    subtitle: "Local-First Workspace & Operating System for Autonomous AI Agents",
    description: "Production-grade multi-agent platform equipping AI coding assistants with 10 specialized agent personas, 40 standardized operational skills, a 3-tier persistent memory engine (SQLite WAL), and FastMCP tool servers.",
    details: "Features declarative multi-agent DAG workflows, BM25 + dense vector ranking, safe subprocess execution with AST parsing, and zero external cloud telemetry.",
    metrics: "10 Agent Personas • 40 Skills • 3 FastMCP Servers • 3-Tier Memory",
    tags: ["Multi-Agent DAGs", "FastMCP", "SQLite WAL", "Python", "Vector Search", "AST Parser"],
    link: "https://github.com/abhay-2108/agent-foundry",
    featured: true
  },
  {
    id: "mcp-air-quality",
    title: "MCP Multi-Agent Air Quality System",
    category: "ai",
    subtitle: "Deep Learning & Model Context Protocol Environmental Reasoning",
    description: "Multi-agent environmental intelligence platform connecting four specialized neural networks through the Model Context Protocol (MCP). Coordinates pollutant forecasting, satellite imagery classification, vehicle emission analysis, and health risk estimation.",
    details: "Exposes AQI LSTM forecasters, CNN image classifiers, and ONNX models as standard MCP tools so LLM agents can autonomously chain multimodal reasoning pipelines.",
    metrics: "4 Neural Networks • MCP Protocol • ONNX Runtime • Multimodal",
    tags: ["Model Context Protocol", "Keras LSTM", "CNN", "ONNX", "Python", "FastMCP"],
    link: "https://github.com/abhay-2108/MCP-Powered-Multi-Agent-Air-Quality-Reasoning-System",
    featured: true
  },
  {
    id: "vectracache",
    title: "VectraCache",
    category: "systems",
    subtitle: "High-Throughput Semantic Vector Caching Engine",
    description: "A low-latency vector cache designed to minimize LLM inference costs and reduce redundant vector database queries through semantic similarity matching and tiered in-memory indexing.",
    details: "Implements adaptive threshold clustering, LRU cache eviction policies, and serialization optimizations for high-concurrency agent workflows.",
    metrics: "Sub-millisecond Hit Latency • Semantic Similarity • Inference Reduction",
    tags: ["Python", "Vector Databases", "Caching", "Semantic Search", "FastAPI"],
    link: "https://github.com/abhay-2108/VectraCache",
    featured: true
  },
  {
    id: "secure-face-liveness",
    title: "Secure Face Liveness Suite",
    category: "ai",
    subtitle: "Computer Vision Anti-Spoofing & Liveness Detection",
    description: "An anti-spoofing verification engine detecting 2D photographic attacks, replay screen simulations, and 3D mask presentations in real-time biometric verification flows.",
    details: "Combines texture analysis, micro-expression tracking, and depth feature extraction for enterprise identity workflows.",
    metrics: "Real-time Verification • 3 Attack Modes Detected • Edge Compatible",
    tags: ["Computer Vision", "Deep Learning", "TypeScript", "Biometrics", "PyTorch"],
    link: "https://github.com/abhay-2108/Secure-Face-Liveness-Suite",
    featured: false
  },
  {
    id: "data-preprocessing-agent",
    title: "Data Preprocessing AI Agent",
    category: "ai",
    subtitle: "Autonomous Natural Language Dataset Pipeline",
    description: "An autonomous agent that accepts natural language dataset cleaning commands, generates reproducible transformations (imputation, encoding, scaling), and outputs verifiable data hygiene reports.",
    details: "Built with LangChain, FAISS vector indexing, and automated report synthesis for data science workflows.",
    metrics: "Automated Data Cleaning • Zero-Leakage Transforms • PDF Auditing",
    tags: ["LangChain", "Python", "FAISS", "Data Engineering", "Scikit-learn"],
    link: "https://github.com/abhay-2108/Data-Preprocessing-AI-Agent",
    featured: false
  }
];

// Technical Taxonomy & Skills (Modern Bento Grid Structure)
export const technicalSkills = [
  {
    category: "Autonomous Agents & LLMs",
    description: "Building production agent swarms, tool protocols, and reasoning loops",
    skills: [
      { name: "Model Context Protocol (MCP)", level: "Advanced", highlight: true },
      { name: "FastMCP & JSON-RPC", level: "Advanced", highlight: true },
      { name: "Multi-Agent DAG Workflows", level: "Advanced", highlight: true },
      { name: "Local LLM Streaming (Ollama)", level: "Advanced", highlight: true },
      { name: "LangChain / LangGraph", level: "Advanced", highlight: false },
      { name: "RAG & Vector Retrieval", level: "Advanced", highlight: true },
      { name: "Agent Safety & Guardrails", level: "Advanced", highlight: true },
      { name: "Prompt Architecture", level: "Advanced", highlight: false }
    ]
  },
  {
    category: "Machine Learning & Deep Learning",
    description: "Model design, neural networks, computer vision, and evaluation",
    skills: [
      { name: "PyTorch & TensorFlow", level: "Advanced", highlight: true },
      { name: "ONNX Runtime & Optimization", level: "Proficient", highlight: true },
      { name: "LSTM & Time-Series Forecasting", level: "Advanced", highlight: false },
      { name: "CNNs & Computer Vision", level: "Proficient", highlight: false },
      { name: "Autoencoders & Anomaly Detection", level: "Advanced", highlight: true },
      { name: "Scikit-Learn & Feature Pipelines", level: "Advanced", highlight: false },
      { name: "Statistical Hypothesis Testing", level: "Proficient", highlight: false }
    ]
  },
  {
    category: "Local-First & Data Systems",
    description: "Resilient persistence, offline-first sync, and caching layers",
    skills: [
      { name: "SQLite WAL Mode", level: "Advanced", highlight: true },
      { name: "Yjs CRDTs & Local Sync", level: "Advanced", highlight: true },
      { name: "Vector Databases (FAISS, Chroma)", level: "Advanced", highlight: true },
      { name: "PostgreSQL & MySQL", level: "Advanced", highlight: false },
      { name: "Semantic Vector Caching", level: "Proficient", highlight: true },
      { name: "Apache Kafka Streaming", level: "Proficient", highlight: false }
    ]
  },
  {
    category: "Systems & Full-Stack Core",
    description: "Robust application runtimes, APIs, and responsive frontends",
    skills: [
      { name: "Python 3.11+", level: "Advanced", highlight: true },
      { name: "TypeScript & JavaScript (ES6+)", level: "Advanced", highlight: true },
      { name: "React 18 & Vite", level: "Advanced", highlight: true },
      { name: "Electron Desktop Runtimes", level: "Proficient", highlight: true },
      { name: "FastAPI, Express & Django", level: "Advanced", highlight: false },
      { name: "Docker & Container Architecture", level: "Proficient", highlight: false },
      { name: "Git Plumbing & CI/CD", level: "Advanced", highlight: false }
    ]
  }
];

// Backward compatibility export for existing components
export const webSkills = technicalSkills[3].skills.map(s => ({ category: "Frontend", name: s.name, level: 90 }));
export const aiSkills = [...technicalSkills[0].skills, ...technicalSkills[1].skills].map(s => ({ category: "AI & ML", name: s.name, level: 90 }));
export const skills = [...webSkills, ...aiSkills];

export const certifications = [
  {
    title: "GEN AI using IBM Watsonx",
    organization: "IBM",
    description: "Enterprise foundation models, prompt engineering, and generative AI deployment using IBM Watsonx.",
    badge: "Verified Credential",
    year: "2024"
  },
  {
    title: "Generative AI using Diffusion Models",
    organization: "Amazon Web Services (AWS)",
    description: "Generative AI architectures, latent diffusion systems, and cloud-scale model operationalization on AWS.",
    badge: "Verified Credential",
    year: "2024"
  },
  {
    title: "AI/ML Engineering Specialization",
    organization: "Coursera",
    description: "Deep supervised learning, neural network tuning, regularization, and optimization algorithms.",
    badge: "Specialization",
    year: "2024"
  },
  {
    title: "Google Data Science Professional",
    organization: "Google",
    description: "Statistical computing, exploratory data analysis, data hygiene, and reproducible analytic pipelines.",
    badge: "Professional Certificate",
    year: "2024"
  }
];

export const contactInfo = {
  email: personalInfo.email,
  linkedin: personalInfo.linkedin,
  github: personalInfo.github,
  calendar: personalInfo.calendar
};

// Chatbot Knowledge Base - Informed by authentic GitHub and LinkedIn activity
export const chatbotKnowledge = {
  greetings: "Greetings! I'm **Abhay's AI Agentic Assistant**. Ask me about his open-source contributions to DocsGPT and REA, his local-first app PageFlow, the Agent Foundry ecosystem, or his research in AI systems.",
  quickPrompts: [
    "🌟 Open Source Contributions",
    "🚀 PageFlow Architecture",
    "🤖 Agent Foundry OS",
    "🔌 Model Context Protocol (MCP)",
    "💼 Background & Resume"
  ],
  responses: {
    openSource: "**Abhay is an active Open Source Contributor:**\n\n- **arc53/DocsGPT (#2505 - Merged):** Accelerated vector store ingestion by **100x** (from 75s to 0.75s for 500 chunks) using batched vector payloads and implemented semantic recursive token chunking.\n- **morluto/rea (#4804 - Merged, #4811):** Optimized Android APK multi-locale decoding and added RISC-V ELF32/64 Position-Independent Executable (PIE) admission boundaries to the Ghidra decompiler bridge.\n- **guardrails-ai/guardrails (#1529):** Implemented `@guard_tool` decorator and `ToolGuard` boundary governor preventing OWASP LLM07/LLM08 vulnerabilities.\n- **corsairdev/corsair (#291 - Merged):** Built the Modify-and-Approve human-in-the-loop permission flow for AI agents in Studio UI.\n- **modelcontextprotocol/python-sdk (#3716):** Fixed component eviction and orphaned tool leaks in `ClientSessionGroup`.",
    pageflow: "**PageFlow** is an open-source, local-first Notion alternative created by Abhay:\n\n- **100% Zero-Cloud Architecture:** Zero external telemetry; all data resides strictly on the user's local disk.\n- **Native On-Device AI Engine:** Streams local models (**DeepSeek-R1, Qwen 2.5, Llama 3.2**) through Ollama.\n- **High-Performance Storage:** Powered by **SQLite Write-Ahead Logging (WAL)** and **Yjs CRDTs** for conflict-free local state synchronization.\n- **Quality Tested:** Backed by 113 automated unit tests.",
    agentFoundry: "**Agent Foundry** is a local-first autonomous multi-agent operating system created by Abhay:\n\n- **10 Specialist Personas:** (Lead Orchestrator, Fullstack Engineer, Security Red Teamer, Code Quality Auditor, etc.)\n- **40 Standardized Modular Skills:** Covering orchestration, software engineering, RAG, and AI safety.\n- **3-Tier Memory Engine:** SQLite WAL-backed working, episodic, and semantic memory.\n- **FastMCP Protocol:** Exposes AST parsing, bash execution, and vector search over JSON-RPC.",
    mcp: "**Abhay has deep hands-on expertise with the Model Context Protocol (MCP):**\n\n- Contributed component eviction & group session refresh to the official **modelcontextprotocol/python-sdk**.\n- Built **MCP Multi-Agent Air Quality System**, exposing 4 neural network models as standard MCP tools.\n- Implemented 3 FastMCP servers within **Agent Foundry** for secure filesystem, subprocess, and memory operations.",
    background: "**Abhay Tiwari** is a Computer Science Engineering student at **VIT Chennai** specializing in Artificial Intelligence and Machine Learning. He focuses on autonomous multi-agent architectures, local-first AI systems, and high-performance developer tooling."
  }
};