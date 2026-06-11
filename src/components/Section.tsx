import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-5 py-14 sm:px-8 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({ index, children }: { index: string; children: ReactNode }) {
  return (
    <h2 className="mb-8 flex items-baseline gap-3 text-xl font-semibold text-fg sm:text-2xl">
      <span className="font-mono text-sm text-accent">{index}</span>
      {children}
    </h2>
  );
}
