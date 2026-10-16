export function SectionHeading({ label, title, description, align = "left" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass}`.trim()}>
      {label ? (
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-neutral-500">
          {label}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
