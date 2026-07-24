"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const noIntersectionObserver = typeof window !== "undefined" && !("IntersectionObserver" in window);

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(noIntersectionObserver);

  useEffect(() => {
    const el = ref.current;
    if (!el || noIntersectionObserver) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay ? `${delay}s` : undefined }}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.6,.2,1)] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[18px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
