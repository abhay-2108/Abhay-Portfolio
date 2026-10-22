import profilePhoto from "../../assets/profile-portrait.webp";
import { about, profile } from "../../data/portfolio";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const Thesis = () => (
  <section className="section thesis" id="about" aria-labelledby="thesis-heading">
    <div className="container thesis__grid">
      <Reveal className="thesis__portrait-wrap">
        <figure className="portrait">
          <img
            src={profilePhoto}
            alt="Abhay Tiwari, AI systems engineer"
            width="900"
            height="1200"
            loading="lazy"
          />
          <figcaption className="portrait__caption">
            <span>
              <b>{profile.name}</b>
              {profile.education}
            </span>
            <span className="portrait__stamp">OPEN TO WORK</span>
          </figcaption>
        </figure>
      </Reveal>

      <Reveal className="thesis__copy" delay={80}>
        <Eyebrow number="02">{about.eyebrow}</Eyebrow>

        <h2 id="thesis-heading">
          {about.heading.before}
          <em>{about.heading.emphasis}</em>
        </h2>

        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div className="principles">
          {about.principles.map((principle) => (
            <article className="principle" key={principle.index}>
              <p className="principle__index">{principle.index}</p>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Thesis;
