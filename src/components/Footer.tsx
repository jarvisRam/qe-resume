import { profile } from "@/content/resume";

export function Footer() {
  return (
    <footer className="no-print mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 py-8 font-mono text-xs text-dim sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          <span className="text-term-green">$</span> echo &quot;{profile.name}&quot;
        </span>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
            {profile.email}
          </a>
          {profile.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
