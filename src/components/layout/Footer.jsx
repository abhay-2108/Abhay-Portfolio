import { profile } from "../../data/portfolio";
import Monogram from "../ui/Monogram";
import LocalTime from "./LocalTime";

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__inner">
      <div className="site-footer__identity">
        <Monogram className="monogram--small" />
        <span className="mono-label">
          © {new Date().getFullYear()} Abhay Tiwari · {profile.location} ·{" "}
          <LocalTime />
        </span>
      </div>

      <nav className="site-footer__links" aria-label="Footer">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
        <a href={`mailto:${profile.email}`}>Email ↗</a>
        <a href="#top">Back to top ↑</a>
      </nav>

      <p className="mono-label site-footer__note">
        Built using React · too many evals
      </p>
    </div>
  </footer>
);

export default Footer;
