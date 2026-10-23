import { proof, verification } from "../../data/portfolio";
import Reveal from "../ui/Reveal";

const ProofStrip = () => (
  <Reveal className="proof-block" delay={160}>
    <div className="proof">
      {proof.map((item) => (
        <a
          className="proof__item"
          href={item.href}
          key={item.label}
          {...(item.external
            ? {
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `${item.value} ${item.label}: ${item.detail}. Source: ${item.source}. Verified ${verification.label}. Opens in a new tab.`,
              }
            : {
                "aria-label": `${item.value} ${item.label}: ${item.detail}. Source: ${item.source}. Verified ${verification.label}.`,
              })}
        >
          <p className="proof__label">{item.label}</p>
          <p className="proof__value">
            {item.value}
            <small>{item.detail}</small>
          </p>
          <span className="proof__source">
            {item.source}{" "}
            <span aria-hidden="true">{item.external ? "↗" : "↓"}</span>
          </span>
        </a>
      ))}
    </div>
    <p className="proof__verified">
      Source-checked{" "}
      <time dateTime={verification.iso}>{verification.label}</time>
    </p>
  </Reveal>
);

export default ProofStrip;
