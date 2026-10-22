import { hero, profile } from "../../data/portfolio";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import ProofStrip from "./ProofStrip";
import TracePanel from "./TracePanel";

const Hero = () => (
  <section className="hero" id="top" aria-labelledby="hero-heading">
    <div className="hero__glow" aria-hidden="true" />
    <div className="hero__grid-bg" aria-hidden="true" />

    <div className="container">
      <div className="hero__intro">
        <div className="hero__meta">
          <Eyebrow number="01">{hero.eyebrow}</Eyebrow>
          <span className="mono-label hero__location">
            {profile.location.toUpperCase()} · {profile.timezone}
          </span>
        </div>

        <h1 id="hero-heading">
          {hero.heading.before}
          <em>{hero.heading.emphasis}</em>
          <br />
          {hero.heading.after.trim()}
        </h1>
      </div>

      <div className="hero__main">
        <div className="hero__copy">
          <p className="hero__subhead">{hero.subhead}</p>

          <div className="hero__actions">
            <Button
              href={hero.primaryCta.href}
              variant="primary"
              className="button--hero"
            >
              {hero.primaryCta.label} <span aria-hidden="true">↓</span>
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="ghost"
              className="button--hero"
            >
              {hero.secondaryCta.label} <span aria-hidden="true">↗</span>
            </Button>
          </div>

          <p className="hero__current">
            <i className="availability__dot" aria-hidden="true" />
            <span>Currently</span> <b>{profile.current}</b>
            <span className="hero__slash" aria-hidden="true">
              /
            </span>
            <span>{profile.currentSecondary}</span>
          </p>
        </div>

        <TracePanel />
      </div>

      <ProofStrip />
    </div>
  </section>
);

export default Hero;
