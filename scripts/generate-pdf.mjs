/**
 * Regenerate the downloadable resume PDF from the live /resume page.
 * Run: npm run generate-pdf  (requires the dev server on :3000)
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../public/Sriram-Venkataraman-Resume.pdf');

const browser = await chromium.launch();
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
