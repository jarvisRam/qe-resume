import type { Accomplishment, PillarId } from "@/content/resume";
import { pillars } from "@/content/resume";
import { AccomplishmentCard } from "./AccomplishmentCard";
import { Reveal } from "./Reveal";

// Cards were previously a flat grid of seventeen at identical visual weight,
// so nothing ranked and a scanner had no way to tell what mattered most.
// Grouping under the five pillars does the ranking: the reader takes in five
// headings rather than nineteen cards.
const VISIBLE_PER_PILLAR = 3;

function CardGrid({ items }: { items: Accomplishment[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.slug} delay={i * 0.06} className="h-full">
          <AccomplishmentCard item={item} />
        </Reveal>
      ))}
    </div>
  );
}

export function PillarWork({ items }: { items: Accomplishment[] }) {
  const byPillar = (id: PillarId) => items.filter((a) => a.pillar === id);

  return (
    <div className="space-y-12">
      {pillars.map((pillar) => {
        const group = byPillar(pillar.id);
        if (group.length === 0) return null;

        const shown = group.slice(0, VISIBLE_PER_PILLAR);
        const hidden = group.slice(VISIBLE_PER_PILLAR);

        return (
          <div key={pillar.id}>
            <Reveal>
              <h3 className="flex items-baseline gap-3 text-lg font-semibold text-fg">
                <span className="font-mono text-sm text-accent">↳</span>
                {pillar.label}
              </h3>
              <p className="mt-2 mb-5 max-w-3xl text-sm leading-relaxed text-muted">
                {pillar.blurb}
              </p>
            </Reveal>

            <CardGrid items={shown} />

            {hidden.length > 0 && (
              // <details> keeps the overflow one click away without shipping a
              // client component for what is a disclosure toggle.
              <details className="group mt-4">
                <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-fg">
                  <span className="transition-transform group-open:rotate-90">▸</span>
                  {hidden.length} more in {pillar.label.toLowerCase()}
                </summary>
                <div className="mt-4">
                  <CardGrid items={hidden} />
                </div>
              </details>
            )}
          </div>
        );
      })}
    </div>
  );
}
