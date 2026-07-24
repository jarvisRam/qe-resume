import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-md border px-[10px] py-[6px] font-sans text-sm font-medium leading-tight transition-colors";

const variants: Record<Variant, string> = {
  primary: "border-accent text-accent hover:bg-accent/12 active:bg-accent/22",
  secondary: "border-divider text-text hover:bg-text/7 active:bg-text/14",
};

export function Btn({
  href,
  variant = "secondary",
  children,
  className = "",
  external = false,
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  if (href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
