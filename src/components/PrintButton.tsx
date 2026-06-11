"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-strong transition-colors hover:bg-accent/20"
    >
      <Printer size={16} />
      Save as PDF
    </button>
  );
}
