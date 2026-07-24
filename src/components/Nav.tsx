import Link from "next/link";
import { Btn } from "./Btn";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#ai", label: "AI" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
];

const condensedLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
];

export function Nav({ condensed = false }: { condensed?: boolean }) {
  const items = condensed ? condensedLinks : links;
  return (
    <header
      className="no-print fixed inset-x-0 top-0 z-40 border-b border-divider backdrop-blur-md"
      style={{ background: "color-mix(in srgb, var(--color-bg) 82%, transparent)" }}
    >
      <div className="mx-auto flex h-[58px] max-w-[1080px] items-center gap-[26px] px-10 max-[860px]:px-[22px]">
        <Link href="/" className="mr-auto font-mono text-[16px] text-text">
          ~/sriram
        </Link>
        {items.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[13.5px] text-neutral-300 transition-colors hover:text-accent max-[860px]:hidden"
          >
            {l.label}
          </a>
        ))}
        <Btn href="/resume" variant="primary" className="px-[14px] py-[6px]">
          Résumé / PDF
        </Btn>
      </div>
    </header>
  );
}
