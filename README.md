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

The `/resume` page renders an ATS-friendly, single-column, black-on-white one-pager.
Visitors click **Download PDF** to get a pre-generated file directly — no print dialog.

### Regenerating the PDF after content changes

Whenever you update [`src/content/resume.ts`](src/content/resume.ts), regenerate the downloadable PDF and commit it:

```bash
npm run dev          # keep the dev server running in one terminal
npm run generate-pdf # in another terminal — saves to public/Sriram-Venkataraman-Resume.pdf
```

Then commit the updated PDF alongside your content changes:

```bash
git add public/Sriram-Venkataraman-Resume.pdf
git commit -m "Regenerate resume PDF"
git push
```

> `generate-pdf` requires [Playwright](https://playwright.dev) to be installed (`npm i -g playwright && npx playwright install chromium`).

## Deploy to Vercel

No config needed. Push to a Git remote, then in Vercel choose **Import Project** —
Next.js is auto-detected (build `next build`, output handled automatically).
