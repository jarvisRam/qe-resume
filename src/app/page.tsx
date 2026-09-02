import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { AccomplishmentCard } from "@/components/AccomplishmentCard";
import { PillarWork } from "@/components/PillarWork";
import { PersonalProjectCard } from "@/components/PersonalProjectCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import {
  accomplishments,
  experiences,
  skills,
  whatIBring,
  personalProjects,
} from "@/content/resume";

export default function Home() {
  const current = accomplishments.filter((a) => a.era !== "earlier");
  const earlier = accomplishments.filter((a) => a.era === "earlier");

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        {/* The old page jumped from the summary straight to the cards, so it
            showed what was done but never said what it would bring here. */}
        <Section id="bring">
          <Reveal>
            <SectionHeading index="01">What I bring</SectionHeading>
          </Reveal>
          {/* A list, not cards. Nine boxed cards of ragged-length prose forced
              the eye to re-anchor on every tile; a ruled list gives one
              scan-line down the numbers and lets the labels carry the reading. */}
          <ul className="border-t border-line">
            {whatIBring.map((item, i) => (
              <li key={item.label} className="border-b border-line">
                <Reveal delay={i * 0.03}>
                  <div className="flex gap-4 py-5 sm:gap-5">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-fg">{item.label}</h3>
                      <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="work">
          <Reveal>
            <SectionHeading index="02">Selected work — FanDuel</SectionHeading>
          </Reveal>
          <PillarWork items={current} />

          <Reveal>
            <h3 className="mt-14 mb-6 flex items-baseline gap-3 text-lg font-semibold text-fg">
              <span className="font-mono text-sm text-accent">↳</span>
              Earlier career — Cognizant
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {earlier.map((item, i) => (
              <Reveal key={item.slug} delay={i * 0.06} className="h-full">
                <AccomplishmentCard item={item} />
              </Reveal>
            ))}
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
              <Reveal key={group.group} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-xl border border-line bg-card p-5">
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

        <Section id="projects">
          <Reveal>
            <SectionHeading index="05">Personal projects</SectionHeading>
          </Reveal>
          <Reveal>
            <p className="mb-6 max-w-3xl leading-relaxed text-muted">
              Side projects built for fun, learning, and the people I love — from validating AI-first
              development to keeping my daughter entertained on long car rides.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {personalProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.06} className="h-full">
                <PersonalProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
