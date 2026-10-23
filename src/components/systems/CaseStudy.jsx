import { verification } from "../../data/portfolio";
import ArchitectureDiagram from "./ArchitectureDiagram";
import Reveal from "../ui/Reveal";

const CaseStudy = ({ system }) => {
  const headingId = `case-${system.id}`;

  return (
    <article className="case" aria-labelledby={headingId}>
      <Reveal className="case__copy">
        <div className="case__meta">
          <span className="case__index">{system.index}</span>
          <span className="case__tag">{system.category}</span>
          <span className={`case__tag case__tag--${system.statusTone}`}>
            <i aria-hidden="true" />
            {system.status}
          </span>
        </div>

        <h3 id={headingId}>
          {system.title}
          <br />
          <em>{system.emphasis}</em>
        </h3>

        <p className="case__description">{system.description}</p>

        <div className="case__stats">
          {system.stats.map((stat) => (
            <div className="case__stat" key={stat.label}>
              <span className="case__stat-value">{stat.value}</span>
              <span className="case__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="case__evidence">
          <span className="case__verified">
            Verified{" "}
            <time dateTime={verification.iso}>{system.verified}</time>
          </span>
          <span className="case__sources">
            {system.sources.map((source) => (
              <a
                href={source.href}
                key={source.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${system.title} source: ${source.label} (opens in a new tab)`}
              >
                {source.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </span>
        </div>
        <p className="case__evidence-note">{system.evidenceNote}</p>

        <div className="case__stack" aria-label="Technology stack">
          {system.stack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="case__links">
          {system.links.map((link) => (
            <a
              className="text-link"
              href={link.href}
              key={link.href}
              {...(link.external
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `${link.label}: ${system.title} on GitHub (opens in a new tab)`,
                  }
                : {})}
            >
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal className="case__visual" delay={90}>
        <ArchitectureDiagram
          id={system.diagram}
          label={system.diagramLabel}
        />
      </Reveal>
    </article>
  );
};

export default CaseStudy;
