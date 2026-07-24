import type { ReactNode } from "react";

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mb-[26px] flex items-baseline gap-2.5 font-mono text-[12.5px] tracking-[.04em] text-accent ${className}`}>
      <span>{children}</span>
      <span
        className="h-px flex-1"
        style={{ background: "linear-gradient(to right, var(--color-divider), transparent)" }}
      />
    </div>
  );
}
