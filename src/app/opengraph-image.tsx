import { ImageResponse } from "next/og";
import { profile } from "@/content/resume";

// The unfurl card recruiters see when this URL is pasted into LinkedIn, Slack,
// or an email. Both of the site's real traffic channels render this, so it is
// the first impression far more often than the homepage is.
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palette mirrored from globals.css. ImageResponse can't read CSS variables,
// so these are duplicated deliberately rather than imported.
const ink = "#0d1117";
const fg = "#e6edf3";
const muted = "#93a1b1";
const dim = "#6b7787";
const accent = "#58a6ff";
const green = "#7ee787";
const line = "#1d2530";

// Two strongest proof points, held here rather than in resume.ts: this is a
// design surface with its own space budget, not a content surface.
const proof = [
  { value: "180m → 30m", caption: "test build time" },
  { value: "55% → 70%", caption: "code coverage" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: ink,
          padding: "72px 80px",
          borderTop: `10px solid ${accent}`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: green, letterSpacing: 1 }}>
            $ whoami
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              color: fg,
              marginTop: 20,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div style={{ fontSize: 38, color: accent, marginTop: 12 }}>
            {profile.title}
          </div>
          <div style={{ fontSize: 27, color: muted, marginTop: 14 }}>
            Test Automation Frameworks &amp; AI Quality Engineering
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: `2px solid ${line}`,
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex" }}>
            {proof.map((p) => (
              <div
                key={p.value}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: 64,
                }}
              >
                <div style={{ fontSize: 46, fontWeight: 700, color: fg }}>
                  {p.value}
                </div>
                <div style={{ fontSize: 23, color: dim, marginTop: 6 }}>
                  {p.caption}
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 24, color: dim }}>{profile.location}</div>
        </div>
      </div>
    ),
    size,
  );
}
