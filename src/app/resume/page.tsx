import Link from "next/link";
import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { profile, resumeSummary, resumeMetrics, resumeExperiences, resumeSkillGroups, resumeAiParagraph } from "@/content/resume";

export const metadata: Metadata = {
  title: `${profile.name} — Résumé`,
  robots: { index: false },
};

const ink = "#292b31";
const accent700 = "#5d5294";
const muted = "#595d6c";
const body = "#3f424d";
const hairline = "#cfd3e5";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "11px",
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: accent700,
        fontWeight: 600,
        margin: "26px 0 12px",
        paddingBottom: "7px",
        borderBottom: "1.5px solid #d2cefd",
      }}
    >
      {children}
    </div>
  );
}

export default function ResumePage() {
  return (
    <div style={{ background: "#2a2c38", minHeight: "100vh", paddingBottom: "3rem" }}>
      <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-divider px-5 py-3 backdrop-blur-md sm:px-8" style={{ background: "color-mix(in srgb, var(--color-bg) 90%, transparent)" }}>
        <Link href="/" className="font-mono text-[13px] text-neutral-300 transition-colors hover:text-accent">
          ← back to portfolio
        </Link>
        <PrintButton />
      </div>

      <div
        style={{
          color: ink,
          fontSize: "13.5px",
          lineHeight: 1.5,
          background: "#fff",
          width: "100%",
          maxWidth: "8.5in",
          margin: "1.5rem auto 0",
          padding: "0.6in",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
        className="print:m-0 print:shadow-none"
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "20px",
            flexWrap: "wrap",
            borderBottom: `2px solid ${ink}`,
            paddingBottom: "14px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "32px", letterSpacing: "-.02em", margin: "0 0 4px", color: ink }}>{profile.name}</h1>
            <div style={{ fontSize: "15px", color: accent700, fontWeight: 500 }}>{profile.title}</div>
          </div>
          <div className="font-mono" style={{ fontSize: "11.5px", color: muted, textAlign: "right", lineHeight: 1.7 }}>
            {profile.location}
            <br />
            {profile.email}
            <br />
            linkedin.com/in/SriramVenkataramanlkd
          </div>
        </div>

        <p style={{ margin: "16px 0 0", color: body, lineHeight: 1.55 }}>{resumeSummary}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginTop: "16px" }}>
          {resumeMetrics.map((m) => (
            <div key={m.label} style={{ border: `1px solid ${hairline}`, borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ fontSize: "20px", fontWeight: 600, color: accent700 }}>{m.value}</div>
              <div style={{ fontSize: "10.5px", color: muted }}>{m.label}</div>
            </div>
          ))}
        </div>

        <SectionLabel>Experience</SectionLabel>
        {resumeExperiences.map((exp) => (
          <div key={exp.role} style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ fontWeight: 600, fontSize: "14.5px" }}>{exp.role}</div>
              <div className="font-mono" style={{ fontSize: "11.5px", color: muted, whiteSpace: "nowrap" }}>
                {exp.period} · {exp.location}
              </div>
            </div>
            <ul style={{ margin: "7px 0 0", paddingLeft: "18px", color: body, lineHeight: 1.5 }}>
              {exp.bullets.map((b) => (
                <li key={b} style={{ marginBottom: "2px" }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <SectionLabel>Core skills</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 28px", color: body, fontSize: "12.5px" }}>
          {resumeSkillGroups.map((g) => (
            <div key={g.label}>
              <b style={{ color: ink }}>{g.label}</b> — {g.body}
            </div>
          ))}
        </div>

        <SectionLabel>AI engineering</SectionLabel>
        <p style={{ margin: 0, color: body, lineHeight: 1.5 }}>
          {resumeAiParagraph.before}
          <b style={{ color: ink }}>{resumeAiParagraph.skillOne}</b>
          {resumeAiParagraph.mid}
          <b style={{ color: ink }}>{resumeAiParagraph.skillTwo}</b>
          {resumeAiParagraph.after}
        </p>
      </div>
    </div>
  );
}
