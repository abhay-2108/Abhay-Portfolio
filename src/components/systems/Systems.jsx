import { compactCases, systems } from "../../data/portfolio";
import SectionHeader from "../ui/SectionHeader";
import CaseStudy from "./CaseStudy";
import CompactCase from "./CompactCase";

const Systems = () => (
  <section
    className="section systems"
    id="systems"
    aria-labelledby="systems-heading"
  >
    <div className="container">
      <SectionHeader
        id="systems-heading"
        number="03"
        eyebrow="Selected systems"
        title={
          <>
            Proof, not a <em>project gallery.</em>
          </>
        }
        description="Four systems that show the range: agent infrastructure, supply-chain intelligence, enterprise analytics, and retrieval performance."
      />

      <div className="systems__list">
        {systems.map((system) => (
          <CaseStudy system={system} key={system.id} />
        ))}
      </div>

      <div className="compact-grid">
        {compactCases.map((item) => (
          <CompactCase item={item} key={item.title} />
        ))}
      </div>
    </div>
  </section>
);

export default Systems;
