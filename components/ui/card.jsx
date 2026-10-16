export function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-[28px] border border-black/8 bg-white/75 shadow-[0_20px_60px_rgba(18,18,18,0.08)] backdrop-blur-xl ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export function CardBody({ className = "", children }) {
  return <div className={`p-6 sm:p-7 ${className}`.trim()}>{children}</div>;
}
