import type { Metric } from "@/content/resume";

// Values range from short numerics ("58", "~70%") to short phrases
// ("Fully stubbed"). At display sizes a phrase overflows its grid column and
// collides with the next stat, so step the type down to fit.
//
// Two constraints, because they fail differently: the longest single word sets
// how small we must go to avoid an ugly mid-word break, while total length
// controls how many lines the value wraps to. Take whichever is stricter.
// Base sizes are tuned for the narrowest column (2-up on a 375px screen);
// sm: sizes for the roomier 3-up desktop grid.
const LARGE = ["text-2xl sm:text-4xl", "text-xl sm:text-3xl", "text-base sm:text-2xl", "text-sm sm:text-xl"];
const SMALL = ["text-2xl", "text-xl", "text-lg", "text-sm"];

function tierBy(n: number, breaks: [number, number, number]) {
  return n <= breaks[0] ? 0 : n <= breaks[1] ? 1 : n <= breaks[2] ? 2 : 3;
}

function sizeFor(value: string, large: boolean) {
  // Split on hyphens and slashes as well as spaces — browsers can wrap after
  // those, so "Program-wide" is really two 7-char chunks, not one 12-char word.
  const longestWord = Math.max(...value.split(/[\s/-]+/).map((w) => w.length));
  const tier = Math.max(tierBy(longestWord, [9, 11, 13]), tierBy(value.length, [11, 18, 26]));
  return (large ? LARGE : SMALL)[tier];
}

export function MetricStat({ metric, large = false }: { metric: Metric; large?: boolean }) {
  return (
    // min-w-0 lets the value wrap instead of forcing the grid column wider.
    <div className="min-w-0">
      <div
        className={`font-mono font-semibold break-words text-accent-strong ${sizeFor(metric.value, large)}`}
      >
        {metric.value}
      </div>
      <div className="mt-1 text-xs leading-snug text-dim">{metric.label}</div>
    </div>
  );
}
