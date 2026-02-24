export function Horizon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative my-16 h-px overflow-visible ${className}`}
      role="presentation"
    >
      {/* gradient line */}
      <div
        className="absolute inset-0 bg-linear-to-r from-transparent via-border to-transparent"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--border) 15%, var(--border) 85%, transparent)",
        }}
      />
      {/* glow bar */}
      <div
        className="absolute left-1/2 top-1/2 h-px w-[240px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent) 35%, #9dd4ff 50%, var(--accent) 65%, transparent)",
          boxShadow:
            "0 0 14px 2px rgba(74,158,255,.5), 0 0 40px 6px rgba(74,158,255,.18)",
        }}
      />
      {/* bloom ellipse */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 w-[280px] -translate-x-1/2"
        style={{
          height: 48,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(74,158,255,.07), transparent 70%)",
        }}
      />
    </div>
  );
}
