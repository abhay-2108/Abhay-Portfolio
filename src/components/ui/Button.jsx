const Button = ({
  href,
  children,
  variant = "ghost",
  external = false,
  className = "",
  ...rest
}) => {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      className={`button button--${variant} ${className}`.trim()}
      href={href}
      {...externalProps}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Button;
