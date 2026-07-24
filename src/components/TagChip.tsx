export function TagChip({ children }: { children: string }) {
  return (
    <span className="rounded-[6px] border border-divider px-[9px] py-[4px] font-mono text-[11px] text-neutral-300">
      {children}
    </span>
  );
}
