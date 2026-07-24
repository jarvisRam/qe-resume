import { contact, profile } from "@/content/resume";
import { Btn } from "./Btn";

export function Footer() {
  return (
    <footer className="no-print mt-[112px] border-t border-divider pt-10">
      <div className="mx-auto w-full max-w-[1080px] px-10 pb-[96px] max-[860px]:px-[22px]">
        <p className="mb-[14px] font-mono text-[13px] text-neutral-400">
          <span className="text-accent">$</span> {contact.kicker}
        </p>
        <h2 className="mb-5 max-w-[20ch] text-[30px] tracking-[-.02em]">{contact.heading}</h2>
        <div className="flex flex-wrap gap-3">
          <Btn href={`mailto:${profile.email}`} variant="primary">
            {profile.email}
          </Btn>
          {profile.links.map((l) => (
            <Btn key={l.label} href={l.href} external>
              {l.label}
            </Btn>
          ))}
          <Btn href="/resume">Résumé / PDF</Btn>
        </div>
        <p className="mt-10 font-mono text-[12px] text-neutral-600">{contact.credit}</p>
      </div>
    </footer>
  );
}
