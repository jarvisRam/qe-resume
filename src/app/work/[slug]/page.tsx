import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Kicker } from "@/components/Kicker";
import { MetricStat } from "@/components/MetricStat";
import { TagChip } from "@/components/TagChip";
import { caseStudies, caseStudyOrder, getAdjacentCaseStudies } from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudyOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies[slug];
  if (!item) return {};
  return { title: `${item.title} — Sriram Venkataraman`, description: item.tagline };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies[slug];
  if (!item) notFound();

  const { prev, next } = getAdjacentCaseStudies(slug);

  return (
    <>
      <Nav condensed />
      <main className="mx-auto w-full max-w-[860px] px-[40px] pb-[96px] pt-[104px] max-[640px]:px-[22px]">
        <Link href="/#work" className="font-mono text-[13px] text-neutral-400 transition-colors hover:text-accent">
          ← selected work
        </Link>

        <Reveal>
          <p className="mb-[14px] mt-[30px] font-mono text-[12.5px] text-neutral-500">{item.tag}</p>
          <h1 className="mb-[18px] max-w-[18ch] text-[46px] leading-[1.02] tracking-[-.03em] max-[640px]:text-[32px]">
            {item.title}
          </h1>
          <p className="mb-[30px] max-w-[52ch] text-[19px] leading-[1.5] text-neutral-200">{item.tagline}</p>

          <div className="mb-2 flex flex-wrap gap-2">
            {item.stack.map((t) => (
              <TagChip key={t}>{t}</TagChip>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-10 border-y border-divider py-7">
            {item.metrics.map((m) => (
              <MetricStat key={m.l} n={m.n} l={m.l} />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Kicker className="mt-11">The problem</Kicker>
          <p className="text-[16px] leading-[1.65] text-neutral-300">{item.problem}</p>
        </Reveal>

        <Reveal>
          <Kicker className="mt-11">What I built</Kicker>
          <div>
            {item.approach.map((a) => (
              <div key={a} className="grid grid-cols-[20px_1fr] gap-3 py-[9px] text-[15.5px] leading-[1.6] text-neutral-300">
                <span className="text-accent">▪</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <Kicker className="mt-11">Impact</Kicker>
          <div>
            {item.impact.map((i) => (
              <div key={i} className="grid grid-cols-[20px_1fr] gap-3 py-[9px] text-[15.5px] leading-[1.6] text-neutral-300">
                <span className="text-accent">→</span>
                <span>{i}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 max-[640px]:grid-cols-1">
          <Link
            href={`/work/${prev.slug}`}
            className="flex flex-col gap-1.5 rounded-[10px] border border-divider p-[18px] text-text transition-colors hover:border-accent/45"
          >
            <span className="font-mono text-[11.5px] text-neutral-500">← previous</span>
            <span className="text-[15px]">{prev.title}</span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="flex flex-col gap-1.5 rounded-[10px] border border-divider p-[18px] text-right text-text transition-colors hover:border-accent/45"
          >
            <span className="font-mono text-[11.5px] text-neutral-500">next →</span>
            <span className="text-[15px]">{next.title}</span>
          </Link>
        </div>

        <div className="mt-12">
          <Link
            href="/#work"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-divider px-[14px] py-[6px] text-sm font-medium text-text transition-colors hover:bg-text/7 active:bg-text/14"
          >
            ← All selected work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
