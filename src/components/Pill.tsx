export function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-divider bg-surface px-[11px] py-[5px] text-[13px] text-neutral-200">
      {children}
    </span>
  );
}
