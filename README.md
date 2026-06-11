# QE Resume — interactive site + ATS PDF

A Lead/Staff Quality Engineer resume that is two things from one source:

- An **interactive site** (`/`) with a clickable card layout that drills into a rich detail page per accomplishment (`/work/[slug]`).
- An **ATS-friendly PDF** generated from the same data at `/resume` → "Save as PDF".

All content lives in one file: [`src/content/resume.ts`](src/content/resume.ts). Edit it and every surface updates.

## Run locally

Requires Node 20+ (an `.nvmrc` pins 22).

```bash
nvm use            # or: nvm use 22
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build && npm run start
```

## The PDF

Open `/resume`, click **Save as PDF** (or Cmd/Ctrl+P). The print stylesheet strips
the nav/toolbar and renders a single-column, system-font, black-on-white one-pager
with standard headings and selectable text — engineered to pass ATS parsers.

## Deploy to Vercel

No config needed. Push to a Git remote, then in Vercel choose **Import Project** —
Next.js is auto-detected (build `next build`, output handled automatically).
