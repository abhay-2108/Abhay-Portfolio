import { useEffect, useRef, useState } from "react";
import { contact } from "../../data/portfolio";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="contact__glow" aria-hidden="true" />

      <div className="container contact__inner">
        <Reveal>
          <Eyebrow number="07">{contact.eyebrow}</Eyebrow>
          <h2 id="contact-heading">
            {contact.heading.before}
            <em>{contact.heading.emphasis}</em>
          </h2>
        </Reveal>

        <Reveal className="contact__row" delay={80}>
          <div className="contact__email-block">
            <a className="contact__email" href={contact.primaryCta.href}>
              {contact.email}
            </a>
            <button
              className="copy-button"
              type="button"
              onClick={copyEmail}
              aria-live="polite"
            >
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>

          <div className="contact__actions">
            <Button href={contact.primaryCta.href} variant="primary">
              {contact.primaryCta.label} <span aria-hidden="true">↗</span>
            </Button>
            <Button
              href={contact.secondaryCta.href}
              variant="ghost"
              external
            >
              {contact.secondaryCta.label} <span aria-hidden="true">↓</span>
            </Button>
            <Button
              href={contact.tertiaryCta.href}
              variant="ghost"
              external
            >
              {contact.tertiaryCta.label} <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
