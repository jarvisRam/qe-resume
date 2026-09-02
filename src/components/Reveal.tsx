import type { CSSProperties, ReactNode } from "react";

// Previously a client component that set opacity:0 and animated on
// whileInView. That made every section below the hero invisible whenever the
// IntersectionObserver did not fire — real mobile browsers, reduced-motion
// settings, or content inside a collapsed <details>, which is display:none and
// so never intersects anything. The page still contained the text; it just
// could not be seen.
//
// Now it is a CSS entrance animation with no JavaScript, no observer, and no
// client bundle. Content cannot end up stuck invisible: if the animation never
// runs, the base state is already visible.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={className ? `reveal ${className}` : "reveal"}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
