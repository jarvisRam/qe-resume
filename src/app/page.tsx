import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { AccomplishmentCard } from "@/components/AccomplishmentCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { profile, accomplishments, experiences, skills, aiExpertise } from "@/content/resume";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <Section>
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">{profile.summary}</p>
          </Reveal>
        </Section>

        <Section id="work">
          <Reveal>
            <SectionHeading index="01">Selected work — FanDuel</SectionHeading>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accomplishments
              .filter((a) => a.era !== "earlier")
              .map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.06} className="h-full">
                  <AccomplishmentCard item={item} />
                </Reveal>
              ))}
          </div>

          <Reveal>
            <h3 className="mt-14 mb-6 flex items-baseline gap-3 text-lg font-semibold text-fg">
              <span className="font-mono text-sm text-accent">↳</span>
              Earlier career — Cognizant
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accomplishments
              .filter((a) => a.era === "earlier")
              .map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.06} className="h-full">
                  <AccomplishmentCard item={item} />
                </Reveal>
              ))}
          </div>
        </Section>

        <Section id="ai">
          <Reveal>
            <SectionHeading index="02">AI engineering</SectionHeading>
          </Reveal>
          <Reveal>
            <p className="mb-6 max-w-3xl leading-relaxed text-muted">{aiExpertise.summary}</p>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-xl border border-line bg-card p-5">
                <h3 className="mb-3 font-mono text-sm text-accent">// tools &amp; practices</h3>
                <div className="mb-2 text-xs text-dim">Daily tools</div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {aiExpertise.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-sm text-accent-strong"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mb-2 text-xs text-dim">Ways of working</div>
                <div className="flex flex-wrap gap-2">
                  {aiExpertise.practices.map((p) => (
                    <span
                      key={p}
                      className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-muted"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-xl border border-line bg-card p-5">
                <h3 className="mb-3 font-mono text-sm text-accent">// agent skills I built (reused org-wide)</h3>
                <ul className="space-y-4">
                  {aiExpertise.skills.map((s) => (
                    <li key={s.name}>
                      <div className="font-mono text-sm text-fg">{s.name}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section id="experience">
          <Reveal>
            <SectionHeading index="03">Experience</SectionHeading>
          </Reveal>
          <Reveal>
            <ExperienceTimeline experiences={experiences} />
          </Reveal>
        </Section>

        <Section id="skills">
          <Reveal>
            <SectionHeading index="04">Skills</SectionHeading>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 0.05}>
                <div className="rounded-xl border border-line bg-card p-5">
                  <h3 className="mb-3 font-mono text-sm text-accent">{group.group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-surface px-2.5 py-1 text-sm text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
