import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Accomplishment } from "@/content/resume";
import { TagChip } from "./TagChip";

export function AccomplishmentCard({ item }: { item: Accomplishment }) {
  const headline = item.metrics[0];
  return (
    <Link
      href={`/work/${item.slug}`}
      className="group relative flex flex-col rounded-xl border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card-hover hover:shadow-[0_0_0_1px_rgba(88,166,255,0.25),0_18px_40px_-20px_rgba(88,166,255,0.45)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-fg">{item.title}</h3>
        <ArrowUpRight
          size={18}
          className="shrink-0 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted">{item.tagline}</p>

      {headline && (
        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-mono text-2xl font-semibold text-accent-strong">{headline.value}</span>
          <span className="text-xs text-dim">{headline.label}</span>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {item.tags.map((tag) => (
          <TagChip key={tag}>{tag}</TagChip>
        ))}
      </div>
    </Link>
  );
}
