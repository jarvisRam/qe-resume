import { hero, profile } from "@/content/resume";
import { Btn } from "./Btn";

export function Hero() {
  const gridCols = hero.showHeadshot ? "grid-cols-[1fr_240px]" : "grid-cols-1";
  return (
    <div className={`grid items-start gap-12 ${gridCols} max-[860px]:grid-cols-1`}>
      <div>
        <p className="mb-[22px] font-mono text-[13px] text-neutral-400">
          <span className="text-accent">$</span> {hero.kicker}
        </p>
        <h1 className="mb-6 text-[68px] leading-[.96] tracking-[-.035em] max-[860px]:text-[46px] max-[440px]:text-[38px]">
          {hero.nameLines.map((line, i) => (
            <span key={line}>
              {line}
              {i < hero.nameLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="mb-4 max-w-[40ch] text-[19px] leading-[1.5] text-neutral-200">{hero.tagline}</p>
        <p className="mb-[30px] max-w-[54ch] text-[15.5px] leading-[1.6] text-neutral-400">{hero.intro}</p>
        <div className="flex flex-wrap gap-3">
          <Btn href="#work" variant="primary">
            Selected work
          </Btn>
          <Btn href="/resume">Résumé / PDF</Btn>
          <Btn href={`mailto:${profile.email}`}>Email</Btn>
          {profile.links.map((l) => (
            <Btn key={l.label} href={l.href} external>
              {l.label}
            </Btn>
          ))}
        </div>
      </div>
      {hero.showHeadshot && (
        <div className="aspect-[3/4] overflow-hidden rounded-[12px] bg-surface shadow-sm max-[860px]:max-w-[220px]" />
      )}
    </div>
  );
}
