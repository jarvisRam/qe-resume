import Link from "next/link";
import type { WorkRow as WorkRowData } from "@/content/resume";

export function WorkRow({ item, last = false }: { item: WorkRowData; last?: boolean }) {
  return (
    <Link
      href={`/work/${item.slug}`}
      className={`group grid grid-cols-[30px_1fr_auto] items-center gap-5 rounded-lg px-[8px] py-[20px] text-text transition-[padding,background-color] duration-[250ms] ease-in-out hover:bg-text/5 hover:pl-[16px] ${
        last ? "" : "border-b border-divider"
      }`}
    >
      <span className="font-mono text-sm text-neutral-500">{item.index}</span>
      <span>
        <div className="text-[19px] font-medium tracking-[-.01em] text-text transition-colors group-hover:text-accent-300">
          {item.title}
        </div>
        <div className="mt-[3px] text-[13.5px] text-neutral-400">{item.desc}</div>
      </span>
      <span className="flex items-center gap-4">
        <span className="whitespace-nowrap font-mono text-sm text-accent-300">{item.metric}</span>
        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-divider text-[13px] text-neutral-400 opacity-70 transition-all duration-[250ms] group-hover:translate-x-[2px] group-hover:border-accent group-hover:text-accent group-hover:opacity-100">
          →
        </span>
      </span>
    </Link>
  );
}
