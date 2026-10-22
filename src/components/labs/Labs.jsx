import { labs } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import LabCard from "./LabCard";

const Labs = () => (
  <section className="section labs" id="labs" aria-labelledby="labs-heading">
    <div className="container">
      <SectionHeader
        id="labs-heading"
        number="04"
        eyebrow="Open source products"
        title={
          <>
            Built in the open. <em>Read the source.</em>
          </>
        }
        description="Two Altiora Labs products: an agent runtime that evolves its own tools, and a persistent belief layer for LLM memory."
      />

      <div className="labs__grid">
        {labs.map((lab, index) => (
          <LabCard lab={lab} key={lab.id} delay={index * 90} />
        ))}
      </div>

      <div className="labs__footer">
        <span className="mono-label">Public source · Apache-2.0</span>
        <a
          className="text-link"
          href="https://github.com/AltioraLabs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Altiora Labs on GitHub (opens in a new tab)"
        >
          Altiora Labs on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </section>
);

export default Labs;
