function HiddenText({
  children,
  ...attributes
}: React.PropsWithChildren & React.HTMLAttributes<HTMLSpanElement>) {
  const className = attributes.className
    ? `sr-only ${attributes.className}`
    : 'sr-only';

  return (
    <span className={className} {...attributes}>
      {children}
    </span>
  );
}

export default HiddenText;
