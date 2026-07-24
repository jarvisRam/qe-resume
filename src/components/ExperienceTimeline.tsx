import type { Experience } from "@/content/resume";

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div>
      {experiences.map((exp, i) => {
        const isLast = i === experiences.length - 1;
        return (
          <div
            key={exp.role}
            className={`relative pl-[30px] ${isLast ? "border-l border-transparent" : "border-l border-divider pb-[34px]"}`}
          >
            <span className="absolute left-[-6.5px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-[22px]">{exp.role}</h3>
              <span className="whitespace-nowrap font-mono text-[13px] text-neutral-400">{exp.period}</span>
            </div>
            <p className="mb-3 mt-1 font-mono text-[12px] text-neutral-500">{exp.location}</p>
            <ul className="list-disc space-y-0 pl-[18px] text-[14.5px] leading-[1.6] text-neutral-300">
              {exp.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
