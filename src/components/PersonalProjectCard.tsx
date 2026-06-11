import Image from "next/image";
import { ArrowUpRight, MonitorSmartphone } from "lucide-react";
import type { PersonalProject } from "@/content/resume";
import { TagChip } from "./TagChip";

export function PersonalProjectCard({ project }: { project: PersonalProject }) {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-card-hover hover:shadow-[0_0_0_1px_rgba(88,166,255,0.25),0_18px_40px_-20px_rgba(88,166,255,0.45)]"
    >
      {/* Screenshot or placeholder */}
      <div className="relative h-44 w-full overflow-hidden border-b border-line bg-surface">
        {project.screenshot ? (
          <Image
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center gap-3 text-dim">
            <MonitorSmartphone size={32} className="opacity-40" />
            <span className="font-mono text-sm opacity-40">Mobile app</span>
          </div>
        )}
        {project.url && (
          <div className="absolute right-3 top-3 rounded-full border border-line/60 bg-ink/70 p-1.5 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
            <ArrowUpRight size={14} className="text-accent" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-fg">{project.title}</h3>
          {project.url && (
            <ArrowUpRight
              size={16}
              className="mt-0.5 shrink-0 text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          )}
        </div>

        <p className="mt-1 text-xs font-medium text-accent-strong">{project.tagline}</p>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.stack.map((tag) => (
            <TagChip key={tag}>{tag}</TagChip>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
