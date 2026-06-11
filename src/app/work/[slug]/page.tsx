import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MetricStat } from "@/components/MetricStat";
import { TagChip } from "@/components/TagChip";
import { accomplishments } from "@/content/resume";

export function generateStaticParams() {
  return accomplishments.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = accomplishments.find((a) => a.slug === slug);
  if (!item) return {};
  return { title: `${item.title} — Sriram Venkataraman`, description: item.tagline };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 font-mono text-sm text-accent">{title}</h2>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
      {items.map((b, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = accomplishments.findIndex((a) => a.slug === slug);
  if (index === -1) notFound();

  const item = accomplishments[index];
  const prev = accomplishments[(index - 1 + accomplishments.length) % accomplishments.length];
  const next = accomplishments[(index + 1) % accomplishments.length];

  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-sm text-dim transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} />
          cd ..
        </Link>

        <Reveal>
          <header className="mt-8">
            <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">{item.title}</h1>
            <p className="mt-3 text-lg text-muted">{item.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <TagChip key={t}>{t}</TagChip>
              ))}
            </div>
          </header>
        </Reveal>

        {item.metrics.length > 0 && (
          <Reveal>
            <div className="mt-8 grid grid-cols-2 gap-5 rounded-xl border border-line bg-card p-6 sm:grid-cols-3">
              {item.metrics.map((m) => (
                <MetricStat key={m.label} metric={m} large />
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-12 space-y-10">
          <Reveal>
            <Block title="// the problem">
              <p className="text-[15px] leading-relaxed text-muted">{item.problem}</p>
            </Block>
          </Reveal>
          <Reveal>
            <Block title="// approach">
              <BulletList items={item.approach} />
            </Block>
          </Reveal>
          <Reveal>
            <Block title="// impact">
              <BulletList items={item.impact} />
            </Block>
          </Reveal>
          <Reveal>
            <Block title="// stack">
              <div className="flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <TagChip key={s}>{s}</TagChip>
                ))}
              </div>
            </Block>
          </Reveal>
          {item.links && item.links.length > 0 && (
            <Reveal>
              <Block title="// links">
                <div className="flex flex-wrap gap-4">
                  {item.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-strong"
                    >
                      {l.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </Block>
            </Reveal>
          )}
        </div>

        <nav className="mt-16 flex items-stretch justify-between gap-4 border-t border-line pt-6">
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-1 flex-col items-start rounded-lg border border-line bg-card p-4 transition-colors hover:border-accent/40"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-dim">
              <ArrowLeft size={13} /> prev
            </span>
            <span className="mt-1 text-sm font-medium text-fg group-hover:text-accent">{prev.title}</span>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-1 flex-col items-end rounded-lg border border-line bg-card p-4 text-right transition-colors hover:border-accent/40"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-dim">
              next <ArrowRight size={13} />
            </span>
            <span className="mt-1 text-sm font-medium text-fg group-hover:text-accent">{next.title}</span>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
