import type { Metric } from "@/content/resume";

export function MetricStat({ metric, large = false }: { metric: Metric; large?: boolean }) {
  return (
    <div>
      <div
        className={`font-mono font-semibold text-accent-strong ${large ? "text-3xl sm:text-4xl" : "text-2xl"}`}
      >
        {metric.value}
      </div>
      <div className="mt-1 text-xs leading-snug text-dim">{metric.label}</div>
    </div>
  );
}
