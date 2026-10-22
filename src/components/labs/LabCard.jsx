import ArchitectureDiagram from "../systems/ArchitectureDiagram";
import Reveal from "../ui/Reveal";

const LabCard = ({ lab, delay = 0 }) => {
  const headingId = `lab-${lab.id}`;

  return (
    <Reveal className="lab-card" delay={delay}>
      <article className="lab-card__inner" aria-labelledby={headingId}>
        <div className="lab-card__meta">
          <span className="lab-card__org">
            {lab.org} <span aria-hidden="true">/</span> {lab.index}
          </span>
          <span className="lab-card__version">{lab.version}</span>
        </div>

        <h3 id={headingId}>
          {lab.title}
          <br />
          <em>{lab.emphasis}</em>
        </h3>

        <p className="lab-card__description">{lab.description}</p>

        <div
          className="lab-card__stats"
          role="list"
          aria-label={`${lab.title} project statistics`}
        >
          {lab.stats.map((stat) => (
            <div className="lab-card__stat" role="listitem" key={stat.label}>
              <span className="lab-card__stat-value">{stat.value}</span>
              <span className="lab-card__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="lab-card__stack" aria-label="Technology stack">
          {lab.stack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="lab-card__diagram">
          <ArchitectureDiagram id={lab.diagram} label={lab.diagramLabel} />
        </div>

        <div className="lab-card__footer">
          <div className="lab-card__links">
            {lab.links.map((link) => (
              <a
                className="text-link"
                href={link.href}
                key={link.href}
                {...(link.external
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `${lab.title}: ${link.label} (opens in a new tab)`,
                    }
                  : {})}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <span className="lab-card__license">{lab.license}</span>
        </div>
      </article>
    </Reveal>
  );
};

export default LabCard;
