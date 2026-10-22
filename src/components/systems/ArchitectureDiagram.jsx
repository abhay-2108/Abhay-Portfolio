const DIAGRAMS = {
  "agent-foundry": {
    label: "agent-foundry / runtime",
    meta: "LOCAL-FIRST",
    note: "10 personas · 40 skills · 0 telemetry",
    rows: [
      { type: "node", primary: true, title: "› task.orchestrator", state: "DAG" },
      { type: "arrow" },
      {
        type: "row",
        nodes: [
          { title: "LEAD", sub: "persona" },
          { title: "FULLSTACK", sub: "persona" },
          { title: "REVIEWER", sub: "gate" },
        ],
      },
      { type: "arrow" },
      {
        type: "node",
        title: "3 × FastMCP servers",
        state: "JSON-RPC",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        primary: true,
        title: "3-tier persistent memory",
        state: "SQLITE WAL",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        primary: true,
        title: "eval + guardrail boundary",
        state: "GATE",
        strongTitle: true,
      },
    ],
  },
  indra: {
    label: "indra / supply resilience",
    meta: "CREWAI",
    note: "5 agents · 5-column topology · SQLite audit",
    rows: [
      {
        type: "node",
        primary: true,
        title: "custom intel + news briefings",
        state: "INPUT",
      },
      { type: "arrow" },
      {
        type: "row",
        nodes: [
          { title: "RISK", sub: "agent" },
          { title: "SCENARIO", sub: "agent" },
          { title: "PROCUREMENT", sub: "agent" },
        ],
      },
      { type: "arrow" },
      {
        type: "node",
        title: "SPR + digital twin agents",
        state: "5 AGENTS",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        title: "SQLite state communication",
        state: "RUN_ID",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        primary: true,
        title: "Next.js geospatial operations room",
        state: "LEAFLET",
      },
    ],
  },
  cortex: {
    label: "cortex / intelligence suite",
    meta: "CREWAI",
    note: "forecast · reason · audit",
    rows: [
      {
        type: "node",
        primary: true,
        title: "retail + supply signals",
        state: "INPUT",
      },
      { type: "arrow" },
      {
        type: "row",
        nodes: [
          { title: "DEMAND", sub: "agent" },
          { title: "INVENTORY", sub: "agent" },
          { title: "RISK", sub: "agent" },
        ],
      },
      { type: "arrow" },
      {
        type: "node",
        title: "chain-of-thought reasoning",
        state: "COT",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        title: "carbon-aware reorder logic",
        state: "RULES",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        primary: true,
        title: "forensic audit ledger",
        state: "TRACE",
      },
    ],
  },
  vectracache: {
    label: "vectracache / hybrid retrieval",
    meta: "FAISS",
    note: "dense + BM25 · GMM routing · float16 cache",
    rows: [
      {
        type: "node",
        primary: true,
        title: "search query",
        state: "REQUEST",
      },
      { type: "arrow" },
      {
        type: "node",
        title: "SentenceTransformers + BM25",
        state: "HYBRID",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        title: "GMM topic router",
        state: "CLUSTERS",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "row",
        nodes: [
          { title: "CACHE HIT", sub: "cluster key" },
          { title: "CACHE MISS", sub: "retrieve + rank" },
          { title: "FAISS", sub: "vector index" },
        ],
      },
      { type: "arrow" },
      {
        type: "node",
        primary: true,
        title: "cluster-aware cache",
        state: "LRU + FP16",
      },
    ],
  },
  capforge: {
    label: "capforge / capability runtime",
    meta: "3 PLANES",
    note: "5-level verification · 289/290 tests",
    rows: [
      {
        type: "node",
        primary: true,
        title: "host agents + MCP clients",
        state: "REQUEST",
      },
      { type: "arrow" },
      {
        type: "node",
        title: "execution plane",
        state: "<10MS ROUTER",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        title: "control plane",
        state: "SQLITE WAL · HMAC",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        title: "learning plane",
        state: "3-PASS",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "row",
        nodes: [
          { title: "AST GUARD", sub: "security" },
          { title: "Z3 / SYMPY", sub: "proofs" },
          { title: "MUTATION", sub: "fuzz + kill" },
        ],
      },
      { type: "arrow" },
      {
        type: "node",
        primary: true,
        title: "active capability",
        state: "MCP + REST",
      },
    ],
  },
  beliefstate: {
    label: "beliefstate / belief layer",
    meta: "ASYNC",
    note: "3-stage contradiction · 0 added latency",
    rows: [
      { type: "node", primary: true, title: "LLM turn", state: "REQUEST" },
      { type: "arrow" },
      {
        type: "node",
        title: "background tracker",
        state: "QUEUED",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        title: "dual-source extraction",
        state: "USER + ASSISTANT",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "row",
        nodes: [
          { title: "RULE", sub: "stage 01" },
          { title: "EMBED", sub: "stage 02" },
          { title: "JUDGE", sub: "stage 03" },
        ],
      },
      { type: "arrow" },
      {
        type: "node",
        title: "belief store",
        state: "SQLITE · PG · REDIS",
        strongTitle: true,
      },
      { type: "arrow" },
      {
        type: "node",
        primary: true,
        title: "context injection",
        state: "NEXT CALL",
      },
    ],
  },
};

const DiagramNode = ({ node }) => (
  <div className={`diagram__node ${node.primary ? "is-primary" : ""}`.trim()}>
    <span>{node.strongTitle ? <b>{node.title}</b> : node.title}</span>
    <span className="diagram__state">{node.state}</span>
  </div>
);

const ArchitectureDiagram = ({ id, label }) => {
  const diagram = DIAGRAMS[id];
  if (!diagram) return null;

  const [name, kind] = diagram.label.split(" / ");

  return (
    <div className="diagram" role="img" aria-label={label}>
      <div className="diagram__top">
        <span className="mono-label">
          {name} / <b>{kind}</b>
        </span>
        <span className="mono-label">{diagram.meta}</span>
      </div>

      <div className="diagram__flow">
        {diagram.rows.map((row, index) => {
          const key = `${row.type}-${index}`;

          if (row.type === "arrow") {
            return (
              <div className="diagram__arrow" key={key} aria-hidden="true">
                ↓
              </div>
            );
          }

          if (row.type === "row") {
            return (
              <div className="diagram__row" key={key}>
                {row.nodes.map((node) => (
                  <div className="diagram__mini" key={node.title}>
                    <span>{node.title}</span>
                    <b>{node.sub}</b>
                  </div>
                ))}
              </div>
            );
          }

          return <DiagramNode node={row} key={key} />;
        })}
      </div>

      <p className="diagram__note">{diagram.note}</p>
    </div>
  );
};

export default ArchitectureDiagram;
