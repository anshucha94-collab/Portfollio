import Link from "next/link";

export function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98]";
  const variants = {
    primary: "bg-neutral-950 text-white shadow-[0_14px_40px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 hover:bg-neutral-800",
    secondary:
      "border border-black/10 bg-white/80 text-neutral-900 backdrop-blur hover:-translate-y-0.5 hover:bg-white",
    ghost: "bg-transparent text-neutral-900 hover:bg-black/5",
  };

  const classes = `${base} ${variants[variant] ?? variants.primary} ${className}`.trim();

  if (href) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
