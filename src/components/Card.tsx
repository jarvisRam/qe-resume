import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  as = "div",
  href,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "a";
  href?: string;
}) {
  const cls = `flex h-full flex-col gap-[5.6px] rounded-md bg-surface p-[8.4px] text-text shadow-sm no-underline ${className}`;
  if (as === "a" && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return <div className={cls}>{children}</div>;
}

export function CardKicker({ children }: { children: ReactNode }) {
  return <span className="text-[10px] uppercase tracking-[.1em] text-accent">{children}</span>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <div className="text-[17px] leading-[1.2]">{children}</div>;
}

export function CardBody({ children }: { children: ReactNode }) {
  return <p className="flex-1 text-[13px] leading-relaxed opacity-80">{children}</p>;
}
