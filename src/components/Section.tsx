import type { ReactNode } from "react";

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} style={{ scrollMarginTop: "76px" }} className={`mt-[108px] max-[860px]:mt-[72px] ${className}`}>
      {children}
    </section>
  );
}
