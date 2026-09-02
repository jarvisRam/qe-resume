import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";
import {
  profile,
  whatIBring,
  keyImpact,
  skills,
  experiences,
  selfDirected,
  education,
  certifications,
  personalProjects,
} from "@/content/resume";

export const metadata: Metadata = {
  title: `${profile.name} — Resume`,
  robots: { index: false },
};

// ATS-clean styling. Deliberately plain: single column, system font, black on
// white, standard headings, real selectable text, no icons. Inline styles keep
// it independent of the site's dark theme.
const sheet: React.CSSProperties = {
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#000",
  background: "#fff",
  width: "100%",
  maxWidth: "8.5in",
  margin: "0 auto",
  padding: "0.4in 0.5in",
  lineHeight: 1.22,
  fontSize: "9pt",
};

const h2: React.CSSProperties = {
  fontSize: "10.5pt",
  fontWeight: "bold",
  margin: "8px 0 3px",
  paddingBottom: "1px",
  borderBottom: "1px solid #000",
};

const linkStyle: React.CSSProperties = { color: "#000", textDecoration: "none" };
const urlStyle: React.CSSProperties = { color: "#000", textDecoration: "underline" };

// Tailwind's preflight strips list markers, so the PDF lists set them back on.
const bulletList: React.CSSProperties = {
  margin: "2px 0 0",
  paddingLeft: "15px",
  listStyleType: "disc",
  listStylePosition: "outside",
};

// Two-column rows for "What I Bring" and "Key Impact": bold label left, prose
// right. Mirrors the CV and reads far tighter on paper than a stacked list.
const labelledRow: React.CSSProperties = {
  display: "flex",
  gap: "12px",
  marginBottom: "2px",
  breakInside: "avoid",
};

const rowLabel: React.CSSProperties = {
  flex: "0 0 1.75in",
  fontWeight: "bold",
};

const rowBody: React.CSSProperties = { flex: 1, margin: 0 };

export default function ResumePage() {
  return (
    <div className="resume-page" style={{ background: "#3a3f47", minHeight: "100vh", paddingBottom: "3rem" }}>
      <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-ink/90 px-5 py-3 backdrop-blur-md sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-dim transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} /> back to site
        </Link>
        <div className="flex items-center gap-3">
          <PrintButton />
        </div>
      </div>

      <div
        className="print-sheet"
        style={{ ...sheet, marginTop: "1.5rem", boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}
      >
        {/* Header */}
        <div style={{ fontSize: "17pt", fontWeight: "bold" }}>{profile.name}</div>
        <div style={{ fontSize: "10.5pt", marginTop: "2px" }}>
          {profile.title} — {profile.titleQualifier}
        </div>
        <div style={{ fontSize: "9.5pt", marginTop: "6px" }}>
          Email: {profile.email} | Phone: {profile.phone} | Location: {profile.location} |{" "}
          {profile.remote}
          {profile.links.map((l) => (
            <span key={l.label}>
              {" | "}
              {l.label}:{" "}
              <a href={l.href} style={linkStyle}>
                {l.href.replace(/^https?:\/\//, "")}
              </a>
            </span>
          ))}
          {" | "}Portfolio:{" "}
          <a href={profile.website} style={urlStyle}>
            {profile.website.replace(/^https?:\/\//, "")}
          </a>
        </div>
        {/* Right-to-work stated outright: UK recruiters drop ambiguous
            candidates rather than asking. */}
        <div style={{ fontSize: "9.5pt", marginTop: "3px", fontWeight: "bold" }}>
          {profile.workAuthorisation}
        </div>

        {/* Summary */}
        <h2 style={h2}>Professional Summary</h2>
        <p style={{ margin: 0 }}>{profile.summary}</p>

        {/* What I bring — capability, answering "what would you bring here",
            which a list of past accomplishments never actually states. */}
        <h2 style={h2}>What I Bring</h2>
        {whatIBring.map((item) => (
          <div key={item.label} style={labelledRow}>
            <div style={rowLabel}>{item.label}</div>
            <p style={rowBody}>{item.body}</p>
          </div>
        ))}

        {/* Key impact — outcomes. Each figure carries the clause saying what
            it bought; without that they read as trivia. */}
        <h2 style={h2}>Key Impact</h2>
        {keyImpact.map((item) => (
          <div key={item.label} style={labelledRow}>
            <div style={rowLabel}>{item.label}</div>
            <p style={rowBody}>{item.body}</p>
          </div>
        ))}

        {/* Skills */}
        <h2 style={h2}>Core Skills</h2>
        <div>
          {skills.map((g) => (
            <div key={g.group} style={{ marginBottom: "3px", breakInside: "avoid" }}>
              <strong>{g.group}:</strong> {g.items.join(", ")}
            </div>
          ))}
        </div>

        {/* Experience */}
        <h2 style={h2}>Professional Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} style={{ marginBottom: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong style={{ fontSize: "11pt" }}>
                {exp.role}, {exp.company}
              </strong>
              <span style={{ fontSize: "9.5pt" }}>{exp.period}</span>
            </div>
            <div style={{ fontSize: "9.5pt", fontStyle: "italic" }}>{exp.location}</div>
            {exp.groups.map((g, gi) => (
              <div key={gi}>
                {g.group ? (
                  <div style={{ fontSize: "9.5pt", fontWeight: "bold", marginTop: "5px" }}>{g.group}</div>
                ) : null}
                <ul style={bulletList}>
                  {g.items.map((b, j) => (
                    <li key={j} style={{ marginBottom: "1px" }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Projects, self-directed work and education share one section, as on
            the CV, so the sections an ATS cares about stay near the top. */}
        <h2 style={h2}>Personal Projects, Self-Directed Hands-On &amp; Education</h2>
        <ul style={{ ...bulletList, margin: 0 }}>
          <li style={{ marginBottom: "3px" }}>
            <strong>Self-directed hands-on (personal projects, non-commercial):</strong> {selfDirected}
          </li>
          {personalProjects.map((p) => (
            <li key={p.slug} style={{ marginBottom: "3px" }}>
              <strong>{p.title}:</strong> {p.pdfSummary}
            </li>
          ))}
          {education.map((e, i) => (
            <li key={`edu-${i}`} style={{ marginBottom: "3px" }}>
              <strong>Education:</strong> {e.qualification}, {e.institution} — {e.period} ·{" "}
              {certifications.join(", ")}
            </li>
          ))}
        </ul>

        {/* The closing hook is parked, not deleted: it is three lines, and
            with it the document runs to a fourth page holding nothing else.
            closingHook is still in resume.ts — re-render it here to restore. */}
      </div>
    </div>
  );
}
