import {
  capabilities,
  credentials,
  profile,
  verification,
} from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const CapabilityColumn = ({ title, share, items }) => (
  <div className="capability-column">
    <div className="capability-column__head">
      <h3>{title}</h3>
      <span>{share}</span>
    </div>
    <div className="capability-column__rows">
      {items.map((item) => (
        <div className="capability-row" key={item.name}>
          <span className="capability-row__name">{item.name}</span>
          <span className="capability-row__evidence">{item.evidence}</span>
        </div>
      ))}
    </div>
  </div>
);

const BackgroundStrip = () => (
  <Reveal className="background-strip">
    <div className="background-strip__education">
      <p className="mono-label">Background</p>
      <p>{profile.education}</p>
    </div>

    <div className="background-strip__credentials">
      {credentials.map((credential) => (
        <span className="credential" key={credential.title}>
          <b>{credential.title}</b>
          {credential.detail}
        </span>
      ))}
    </div>
  </Reveal>
);

const CapabilityMatrix = () => (
  <section
    className="section capabilities"
    id="capabilities"
    aria-labelledby="capabilities-heading"
  >
    <div className="container">
      <SectionHeader
        id="capabilities-heading"
        number="06"
        eyebrow="Capability matrix"
        title={
          <>
            Sixty percent <em>intelligence.</em>
            <br />
            Forty percent <em>systems.</em>
          </>
        }
        description="No progress bars. Each capability maps to work in the repos: MCP tool graphs, belief stores, SMT verification, PyO3 hot paths. AI engineering is software engineering with a harder failure surface."
      />

      <Reveal className="capability-split">
        <CapabilityColumn
          title="Intelligence layer"
          share="60%"
          items={capabilities.intelligence}
        />
        <CapabilityColumn
          title="Systems layer"
          share="40%"
          items={capabilities.systems}
        />
      </Reveal>

      <Reveal className="capability-note" delay={80}>
        The 60/40 is not a theme. It is the actual shape of the work:{" "}
        <b>the model is one dependency; the runtime is the product.</b>
      </Reveal>

      <p className="capability-source">
        Test counts are from the linked project READMEs, checked{" "}
        <time dateTime={verification.iso}>{verification.label}</time>.
      </p>

      <BackgroundStrip />
    </div>
  </section>
);

export default CapabilityMatrix;
