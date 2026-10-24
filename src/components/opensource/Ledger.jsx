import { contributions, ledgerVerification } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const pad = (value) => String(value).padStart(2, "0");
const repoCount = new Set(contributions.map((item) => item.repo)).size;
const mergedCount = contributions.filter(
  (item) => item.status === "Merged",
).length;
const statusClass = {
  Merged: "is-merged",
  Open: "is-open",
  Closed: "is-closed",
  Superseded: "is-superseded",
};

const Ledger = () => (
  <section
    className="section ledger-section"
    id="ledger"
    aria-labelledby="ledger-heading"
  >
    <div className="container">
      <SectionHeader
        id="ledger-heading"
        number="05"
        eyebrow="Open source ledger"
        title={
          <>
            The upstream <em>ledger.</em>
          </>
        }
        description={
          <span className="ledger-summary">
            <span>
              <b>{pad(contributions.length)}</b> featured
            </span>
            <span>
              <b>{pad(repoCount)}</b> repos
            </span>
            <span>
              <b>{pad(mergedCount)}</b> merged
            </span>
          </span>
        }
      />

      <Reveal className="ledger">
        <div className="ledger__head" aria-hidden="true">
          <span>Repository</span>
          <span>Change</span>
          <span>Impact</span>
          <span>Status</span>
          <span />
        </div>

        <ul className="ledger__rows">
          {contributions.map((item) => (
            <li key={item.href}>
              <a
                className="ledger__row"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.repo}: ${item.change}. Impact: ${item.impact}. Status: ${item.status}. Opens on GitHub in a new tab.`}
              >
                <span className="ledger__repo">
                  <span className="ledger__mark" aria-hidden="true">
                    {item.mark}
                  </span>
                  <b>{item.repo}</b>
                </span>
                <span className="ledger__change">{item.change}</span>
                <span className="ledger__impact">{item.impact}</span>
                <span
                  className={`ledger__status ${
                    statusClass[item.status] ?? "is-closed"
                  }`}
                >
                  {item.status}
                </span>
                <span className="ledger__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <p className="ledger__note">
        PR states and impact labels checked{" "}
        <time dateTime={ledgerVerification.iso}>
          {ledgerVerification.label}
        </time>
        . The 100× figure is a local DocsGPT benchmark, not a production claim.
      </p>
    </div>
  </section>
);

export default Ledger;
