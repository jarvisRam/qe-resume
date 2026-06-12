import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <a
      href="/Sriram-Venkataraman-Resume.pdf"
      download="Sriram-Venkataraman-Resume.pdf"
      className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-strong transition-colors hover:bg-accent/20"
    >
      <Download size={16} />
      Download PDF
    </a>
  );
}
