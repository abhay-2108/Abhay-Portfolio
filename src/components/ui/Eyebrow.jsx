const Eyebrow = ({ number, children, className = "" }) => (
  <p className={`eyebrow ${className}`.trim()}>
    {number ? <span className="eyebrow__number">{number}</span> : null}
    <span>{children}</span>
  </p>
);

export default Eyebrow;
