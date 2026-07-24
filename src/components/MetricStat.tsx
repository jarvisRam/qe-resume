export function MetricStat({ n, l, size = "md" }: { n: string; l: string; size?: "md" | "lg" }) {
  return (
    <div>
      <div
        className={`font-semibold leading-none tracking-[-.02em] text-accent-300 ${
          size === "lg" ? "text-[38px]" : "text-[32px]"
        }`}
      >
        {n}
      </div>
      <div className="mt-2 max-w-[22ch] text-[12.5px] text-neutral-400">{l}</div>
    </div>
  );
}
