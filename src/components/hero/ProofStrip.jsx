import { proof } from "../../data/portfolio";
import Reveal from "../ui/Reveal";

const ProofStrip = () => (
  <Reveal className="proof" delay={160}>
    {proof.map((item) => (
      <div className="proof__item" key={item.label}>
        <p className="proof__label">{item.label}</p>
        <p className="proof__value">
          {item.value}
          <small>{item.detail}</small>
        </p>
      </div>
    ))}
  </Reveal>
);

export default ProofStrip;
