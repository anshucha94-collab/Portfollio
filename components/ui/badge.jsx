export function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-600 backdrop-blur ${className}`.trim()}
    >
      {children}
    </span>
  );
}
