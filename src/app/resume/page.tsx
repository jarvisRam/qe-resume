import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";
import {
  profile,
  skills,
  experiences,
  education,
  certifications,
  aiExpertise,
  leadership,
  accomplishments,
  personalProjects,
  closingHook,
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
  padding: "0.7in 0.75in",
  lineHeight: 1.4,
  fontSize: "10.5pt",
};

const h2: React.CSSProperties = {
  fontSize: "13pt",
  fontWeight: "bold",
  margin: "16px 0 6px",
  paddingBottom: "2px",
  borderBottom: "1px solid #000",
};

const linkStyle: React.CSSProperties = { color: "#000", textDecoration: "none" };
const urlStyle: React.CSSProperties = { color: "#000", textDecoration: "underline" };

// Tailwind's preflight strips list markers, so the PDF lists set them back on.
const bulletList: React.CSSProperties = {
  margin: "4px 0 0",
  paddingLeft: "18px",
  listStyleType: "disc",
  listStylePosition: "outside",
};

// Closing call-to-action, ruled off from the sections above it.
const closingBand: React.CSSProperties = {
  marginTop: "26px",
  paddingTop: "12px",
  borderTop: "1px solid #000",
};

// Career headline numbers, banded between two rules under the summary.
const metricBand: React.CSSProperties = {
  display: "flex",
  gap: "14px",
  marginTop: "8px",
  padding: "7px 0",
  borderTop: "1px solid #000",
  borderBottom: "1px solid #000",
};

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
        <div style={{ fontSize: "20pt", fontWeight: "bold" }}>{profile.name}</div>
        <div style={{ fontSize: "12pt", marginTop: "2px" }}>{profile.title}</div>
        <div style={{ fontSize: "9.5pt", marginTop: "6px" }}>
          Email: {profile.email} | Phone: {profile.phone} | Location: {profile.location}
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

        {/* Summary */}
        <h2 style={h2}>Professional Summary</h2>
        <p style={{ margin: 0 }}>{profile.summary}</p>
        <div style={metricBand}>
          {profile.impactMetrics.map((m) => (
            <div key={m.value} style={{ flex: 1 }}>
              <div style={{ fontSize: "13pt", fontWeight: "bold", lineHeight: 1.1 }}>{m.value}</div>
              <div style={{ fontSize: "8.5pt", marginTop: "2px" }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Leadership & Governance */}
        <h2 style={h2}>Quality Leadership &amp; Governance</h2>
        <p style={{ margin: "0 0 4px" }}>{leadership.summary}</p>
        {leadership.groups.map((g) => (
          <div key={g.group} style={{ marginBottom: "3px" }}>
            <strong>{g.group}:</strong> {g.items.join("; ")}
          </div>
        ))}

        {/* Skills */}
        <h2 style={h2}>Skills</h2>
        <div>
          {skills.map((g) => (
            <div key={g.group} style={{ marginBottom: "3px" }}>
              <strong>{g.group}:</strong> {g.items.join(", ")}
            </div>
          ))}
        </div>

        {/* AI Engineering */}
        <h2 style={h2}>AI Engineering</h2>
        <div style={{ marginBottom: "4px" }}>
          <strong>Tools:</strong> {aiExpertise.tools.join(", ")}
        </div>
        <div style={{ marginBottom: "4px" }}>
          <strong>Practices:</strong> {aiExpertise.practices.join(", ")}
        </div>
        <ul style={bulletList}>
          {aiExpertise.skills.map((s) => (
            <li key={s.name} style={{ marginBottom: "2px" }}>
              <strong>{s.name}:</strong> {s.desc}
            </li>
          ))}
        </ul>

        {/* Experience */}
        <h2 style={h2}>Work Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
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
                    <li key={j} style={{ marginBottom: "2px" }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Accomplishments — compressed to one line each for the PDF */}
        <h2 style={h2}>Selected Accomplishments</h2>
        <div style={{ fontSize: "9pt", fontStyle: "italic", marginBottom: "4px" }}>
          Full case studies — problem, approach, and impact for each —{" "}
          <a href={profile.website} style={urlStyle}>
            {profile.website.replace(/^https?:\/\//, "")}
          </a>
        </div>
        <ul style={{ ...bulletList, margin: 0 }}>
          {accomplishments
            .filter((a) => a.era !== "earlier")
            .map((a) => (
              <li key={a.slug} style={{ marginBottom: "3px" }}>
                <strong>{a.title}:</strong> {a.pdfSummary}
              </li>
            ))}
        </ul>

        {/* Earlier career — the Cognizant-era accomplishments, one line each. */}
        <h2 style={h2}>Earlier Career Highlights — Cognizant (2010–2021)</h2>
        <ul style={{ ...bulletList, margin: 0 }}>
          {accomplishments
            .filter((a) => a.era === "earlier")
            .map((a) => (
              <li key={a.slug} style={{ marginBottom: "3px" }}>
                <strong>{a.title}:</strong> {a.pdfSummary}
              </li>
            ))}
        </ul>

        {/* Personal Projects */}
        <h2 style={h2}>Personal Projects</h2>
        <ul style={{ ...bulletList, margin: 0 }}>
          {personalProjects.map((p) => (
            <li key={p.slug} style={{ marginBottom: "3px" }}>
              <strong>{p.title}:</strong> {p.pdfSummary}
            </li>
          ))}
        </ul>

        {/* Education */}
        <h2 style={h2}>Education &amp; Certifications</h2>
        {education.map((e, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <strong>{e.qualification}</strong>, {e.institution}
            </span>
            <span style={{ fontSize: "9.5pt" }}>{e.period}</span>
          </div>
        ))}
        <div style={{ marginTop: "4px" }}>
          <strong>Certifications:</strong> {certifications.join(", ")}
        </div>

        {/* Closing call-to-action, banded like the metric row under the summary. */}
        <div style={closingBand}>
          <div style={{ fontSize: "12pt", fontWeight: "bold" }}>{closingHook.headline}</div>
          <p style={{ margin: "5px 0 0", maxWidth: "6.2in" }}>{closingHook.body}</p>
          <div style={{ fontSize: "9.5pt", marginTop: "7px" }}>
            {profile.email}
            {profile.links.map((l) => (
              <span key={l.label}>
                {"  ·  "}
                <a href={l.href} style={linkStyle}>
                  {l.href.replace(/^https?:\/\//, "")}
                </a>
              </span>
            ))}
            {"  ·  "}
            <a href={profile.website} style={linkStyle}>
              {profile.website.replace(/^https?:\/\//, "")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
