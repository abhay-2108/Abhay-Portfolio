const CompactCase = ({ item }) => (
  <article className="compact-case">
    <div className="compact-case__top">
      <div className="compact-case__heading">
        <p className="compact-case__role">{item.role}</p>
        <h4>{item.title}</h4>
      </div>
      <span className="compact-case__arrow" aria-hidden="true">
        ↗
      </span>
    </div>

    <p className="compact-case__summary">{item.summary}</p>

    <div className="compact-case__tags" aria-label="Technology stack">
      {item.tags.map((tag) => (
        <span className="chip" key={tag}>
          {tag}
        </span>
      ))}
    </div>

    <a
      className="text-link compact-case__link"
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.linkLabel}: ${item.title} on GitHub (opens in a new tab)`}
    >
      {item.linkLabel} <span aria-hidden="true">↗</span>
    </a>
  </article>
);

export default CompactCase;
