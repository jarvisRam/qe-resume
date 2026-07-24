import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Kicker } from "@/components/Kicker";
import { MetricStat } from "@/components/MetricStat";
import { WorkRow } from "@/components/WorkRow";
import { Card, CardKicker, CardTitle, CardBody } from "@/components/Card";
import { Pill } from "@/components/Pill";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PersonalProjectCard } from "@/components/PersonalProjectCard";
import {
  impactMetrics,
  workRows,
  aiSection,
  experiences,
  skills,
  personalProjects,
  personalProjectsIntro,
} from "@/content/resume";

export default function Home() {
  const fanduelRows = workRows.filter((r) => r.era === "fanduel");
  const earlierRows = workRows.filter((r) => r.era === "earlier");

  return (
    <>
      <Nav />
      <main id="top" className="mx-auto w-full max-w-[1080px] px-[40px] pb-[96px] pt-[84px] max-[860px]:px-[22px]">
        <Hero />

        <Reveal>
          <div className="mt-16 grid grid-cols-4 gap-6 border-t border-divider pt-[34px] max-[860px]:grid-cols-2">
            {impactMetrics.map((m) => (
              <MetricStat key={m.label} n={m.value} l={m.label} size="lg" />
            ))}
          </div>
        </Reveal>

        <Section id="work">
          <Reveal>
            <Kicker>01 — Selected work · FanDuel Sportsbook</Kicker>
          </Reveal>
          <Reveal>
            <h2 className="mb-[30px] max-w-[22ch] text-[34px] tracking-[-.02em]">
              The testing platform behind FanDuel Sportsbook.
            </h2>
          </Reveal>
          <Reveal>
            <div>
              {fanduelRows.map((row, i) => (
                <WorkRow key={row.slug} item={row} last={i === fanduelRows.length - 1} />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Kicker className="mt-[52px]">↳ Earlier career · Cognizant</Kicker>
          </Reveal>
          <Reveal>
            <div>
              {earlierRows.map((row, i) => (
                <WorkRow key={row.slug} item={row} last={i === earlierRows.length - 1} />
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="ai">
          <Reveal>
            <Kicker>02 — AI engineering</Kicker>
          </Reveal>
          <Reveal>
            <h2 className="mb-[18px] max-w-[24ch] text-[34px] tracking-[-.02em]">{aiSection.heading}</h2>
          </Reveal>
          <Reveal>
            <p className="mb-10 max-w-[62ch] text-[15.5px] leading-[1.6] text-neutral-300">{aiSection.intro}</p>
          </Reveal>
          <Reveal>
            <p className="mb-10 max-w-[62ch] text-[15.5px] leading-[1.6] text-neutral-300">{aiSection.subtext}</p>
          </Reveal>

          <Reveal>
            <div className="mb-[30px] grid grid-cols-2 gap-5 max-[860px]:grid-cols-1">
              {aiSection.cards.map((c) => (
                <Card key={c.title}>
                  <CardKicker>{c.kicker}</CardKicker>
                  <CardTitle>{c.title}</CardTitle>
                  <CardBody>{c.body}</CardBody>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-2 gap-10 max-[860px]:grid-cols-1">
              <div>
                <h6 className="mb-3 text-neutral-400">{"// Daily tools"}</h6>
                <div className="flex flex-wrap gap-2">
                  {aiSection.dailyTools.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-neutral-400">{"// Ways of working"}</h6>
                <div className="flex flex-wrap gap-2">
                  {aiSection.waysOfWorking.map((p) => (
                    <Pill key={p}>{p}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Section id="experience">
          <Reveal>
            <Kicker>03 — Experience</Kicker>
          </Reveal>
          <Reveal>
            <ExperienceTimeline experiences={experiences} />
          </Reveal>
        </Section>

        <Section id="skills">
          <Reveal>
            <Kicker>04 — Skills</Kicker>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-14 gap-y-10 max-[860px]:grid-cols-1">
            {skills.map((group) => (
              <Reveal key={group.group}>
                <div>
                  <h6 className="mb-[14px] text-accent-300">{group.group}</h6>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="projects">
          <Reveal>
            <Kicker>05 — Personal projects</Kicker>
          </Reveal>
          <Reveal>
            <p className="mb-[34px] max-w-[62ch] text-[15.5px] leading-[1.6] text-neutral-300">
              {personalProjectsIntro}
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 gap-5 max-[860px]:grid-cols-1">
              {personalProjects.map((project) => (
                <PersonalProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
