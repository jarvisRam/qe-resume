import Link from "next/link";
import { Mail, MapPin, ArrowUpRight, FileText, Globe } from "lucide-react";
import { profile } from "@/content/resume";

// Five parts, in order: identity → positioning → impact → scope → contact.
//
// The impact and scope bands are deliberately typographic rather than prose.
// Every figure here was already on the old site, written out as sentences, and
// read as trivia. A large numeral with its consequence underneath is what
// carries in a ten-second scan.
//
// Both bands are needed because the target roles split two ways: impact
// answers the Staff IC bar, scope answers the Head-of-Quality one.
export function Hero() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 pt-10 sm:px-8 sm:pt-14">
      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs text-dim">sriram@portfolio: ~</span>
        </div>

        <div className="px-6 py-7 sm:px-10 sm:py-9">
          {/* 1 · Identity */}
          <p className="font-mono text-sm text-term-green">
            $ whoami<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-term-green/80" />
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-base text-accent sm:text-lg">{profile.title}</p>
          <p className="mt-1.5 text-sm text-muted sm:text-base">{profile.titleQualifier}</p>

          {/* 2 · Positioning — what I build and what I govern, in one breath */}
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {profile.summaryShort}
          </p>

          {/* 3 · Impact — numbers that carry their own consequence */}
          <div className="mt-7 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {profile.impactMetrics.map((m) => (
              <div key={m.value} className="bg-card px-4 py-4">
                <div className="font-mono text-xl font-bold tracking-tight text-accent-strong sm:text-2xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-dim">{m.label}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted">{m.consequence}</p>
              </div>
            ))}
          </div>

          {/* 4 · Scope and governance — the Head-of-Quality axis */}
          <div className="mt-3 rounded-lg border border-line bg-card px-4 py-4">
            <div className="font-mono text-sm font-medium text-fg">{profile.scope.line}</div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
              {profile.scope.governance}
            </p>
          </div>

          {/* 5 · Availability and the ask */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-dim" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe size={15} className="text-dim" />
              {profile.remote}
            </span>
            <span className="text-term-green">{profile.workAuthorisation}</span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}?subject=Role%20enquiry`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
            >
              <Mail size={16} />
              Email me about a role
            </a>
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
              >
                {link.label}
                <ArrowUpRight size={15} className="text-dim transition-colors group-hover:text-accent" />
              </a>
            ))}
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 rounded-md border border-line px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              <FileText size={15} />
              View / download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
