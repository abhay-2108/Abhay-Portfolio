import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const SectionHeader = ({ id, number, eyebrow, title, description }) => (
  <Reveal className="section-head">
    <div className="section-head__title">
      <Eyebrow number={number}>{eyebrow}</Eyebrow>
      <h2 id={id}>{title}</h2>
    </div>
    {description ? <p className="section-head__description">{description}</p> : null}
  </Reveal>
);

export default SectionHeader;
