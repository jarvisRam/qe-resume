import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/resume";

export function Hero() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 pt-12 sm:px-8 sm:pt-16">
      <div className="overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 border-b border-line bg-card px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-xs text-dim">sriram@portfolio: ~</span>
        </div>

        <div className="px-6 py-8 sm:px-10 sm:py-12">
          <p className="font-mono text-sm text-term-green">
            $ whoami<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-term-green/80" />
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-accent sm:text-xl">{profile.title}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summaryShort}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-dim" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              <Mail size={15} className="text-dim" />
              {profile.email}
            </a>
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 transition-colors hover:text-accent"
              >
                {link.label}
                <ArrowUpRight size={14} className="text-dim transition-colors group-hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
