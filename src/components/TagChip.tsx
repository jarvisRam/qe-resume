export function TagChip({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
