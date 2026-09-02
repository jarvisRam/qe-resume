/**
 * Regenerate the downloadable resume PDF from the live /resume page.
 * Run: npm run generate-pdf  (requires the dev server on :3000)
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../public/Sriram-Venkataraman-Resume.pdf');

// Normally Playwright finds its own bundled Chromium (npx playwright install
// chromium). Set PLAYWRIGHT_CHROMIUM_PATH to point at an existing binary when
// running somewhere that ships Chromium at a fixed path instead.
const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined,
});
const page = await browser.newPage();
await page.goto('http://localhost:3000/resume', { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.waitForTimeout(500);
await page.pdf({
  path: outPath,
  format: 'A4',
  printBackground: false,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});
await browser.close();
console.log(`✓ PDF saved to ${outPath}`);
