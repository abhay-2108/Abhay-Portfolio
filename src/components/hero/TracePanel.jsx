import { trace } from "../../data/portfolio";

const TracePanel = () => (
  <div className="trace-shell">
    <div
      className="trace"
      aria-label="Illustrative Agent Foundry runtime trace: memory recall, tool resolution, DAG planning, deterministic validation, and local-only execution."
    >
      <div className="trace__head">
        <div className="trace__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span className="trace__title">{trace.title}</span>
        <span className="trace__live">
          <i aria-hidden="true" /> LOCAL
        </span>
      </div>

      <div className="trace__body">
        <div className="trace__command">
          <span className="trace__prompt">$</span>
          <span>run agent-foundry</span>
          <span className="trace__flag">--task</span>
          <span className="trace__string">&quot;ship feature&quot;</span>
        </div>

        <div className="trace__lines">
          {trace.lines.map((line, index) => (
            <div
              className="trace__line"
              key={line.op}
              style={{ "--line-delay": `${index * 80}ms` }}
            >
              <span className="trace__check" aria-hidden="true">
                ✓
              </span>
              <span className="trace__op">{line.op}</span>
              <span className="trace__detail">{line.detail}</span>
              <span className="trace__time">{line.time}</span>
            </div>
          ))}
        </div>

        <div className="trace__eval">
          <div className="trace__eval-top">
            <span>{trace.eval.label}</span>
            <b>{trace.eval.value}</b>
          </div>
          <div className="trace__bar" aria-hidden="true">
            <span style={{ width: `${trace.eval.percent}%` }} />
          </div>
        </div>
      </div>

      <div className="trace__foot">
        <span>{trace.footer}</span>
        <span className="trace__tag">{trace.tag}</span>
      </div>
    </div>

    <div className="trace__chip" aria-hidden="true">
      {trace.chip}
    </div>
  </div>
);

export default TracePanel;
