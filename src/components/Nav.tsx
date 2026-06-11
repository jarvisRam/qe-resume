import Link from "next/link";
import { FileText } from "lucide-react";

export function Nav() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="font-mono text-sm text-muted transition-colors hover:text-fg">
          <span className="text-term-green">~/</span>sriram
        </Link>
        <div className="flex items-center gap-1 text-sm sm:gap-2">
          <a href="/#work" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg sm:block">
            Work
          </a>
          <a href="/#ai" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg sm:block">
            AI
          </a>
          <a href="/#experience" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg sm:block">
            Experience
          </a>
          <a href="/#skills" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg sm:block">
            Skills
          </a>
          <a href="/#projects" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg sm:block">
            Projects
          </a>
          <Link
            href="/resume"
            className="ml-1 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 font-medium text-accent-strong transition-colors hover:bg-accent/20"
          >
            <FileText size={15} />
            Resume / PDF
          </Link>
        </div>
      </nav>
    </header>
  );
}
