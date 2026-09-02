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
          <Link href="/#bring" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg lg:block">
            What I bring
          </Link>
          <Link href="/#work" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg lg:block">
            Work
          </Link>
          <Link href="/#experience" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg lg:block">
            Experience
          </Link>
          <Link href="/#skills" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg lg:block">
            Skills
          </Link>
          <Link href="/#projects" className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg lg:block">
            Projects
          </Link>
          <Link
            href="/resume"
            className="ml-1 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-muted transition-colors hover:text-fg"
          >
            <FileText size={15} />
            CV
          </Link>
        </div>
      </nav>
    </header>
  );
}
