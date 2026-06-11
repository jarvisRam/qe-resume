import type { Experience } from "@/content/resume";

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <ol className="relative ml-2 border-l border-line">
      {experiences.map((exp, i) => (
        <li key={`${exp.company}-${i}`} className="relative pb-9 pl-7 last:pb-0">
          <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-ink" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="font-medium text-fg">
              {exp.role} <span className="text-muted">· {exp.company}</span>
            </h3>
            <span className="font-mono text-xs text-dim">{exp.period}</span>
          </div>
          <div className="mb-3 font-mono text-xs text-dim">{exp.location}</div>
          <ul className="space-y-1.5 text-sm leading-relaxed text-muted">
            {exp.bullets.map((b, j) => (
              <li key={j} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
