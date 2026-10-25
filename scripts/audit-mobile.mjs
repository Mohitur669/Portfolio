import { chromium, devices } from 'playwright';

const BASE_URL = 'http://localhost:4186';
const TEST_WIDTHS = [320, 360, 375, 390, 412, 430, 600, 768, 820];

async function run() {
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });

  console.log('=== MOBILE AUDIT EXECUTION ===\n');

  for (const w of TEST_WIDTHS) {
    const page = await browser.newPage({
      viewport: { width: w, height: 800 },
      deviceScaleFactor: 1,
      hasTouch: true,
    });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Check horizontal overflow
    const overflowInfo = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const overflowingElements = [];

      document.querySelectorAll('*').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 1 || rect.width > docWidth + 1) {
          overflowingElements.push({
            tag: el.tagName,
            id: el.id,
            className: el.className ? String(el.className).substring(0, 50) : '',
            width: Math.round(rect.width),
            right: Math.round(rect.right),
          });
        }
      });

      return {
        hasOverflow: scrollWidth > docWidth,
        docWidth,
        scrollWidth,
        diff: scrollWidth - docWidth,
        overflowingElements: overflowingElements.slice(0, 10),
      };
    });

    console.log(`[Width ${w}px] Overflow: ${overflowInfo.hasOverflow ? `YES (+${overflowInfo.diff}px)` : 'NO'}`);
    if (overflowInfo.hasOverflow) {
      console.log('  Top overflowing elements:', overflowInfo.overflowingElements);
    }

    // Check tap target sizes
    const smallTargets = await page.evaluate(() => {
      const issues = [];
      document.querySelectorAll('button, a, input, select, textarea').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && (rect.width < 44 || rect.height < 44)) {
          issues.push({
            tag: el.tagName,
            text: el.innerText ? el.innerText.substring(0, 20) : (el.getAttribute('aria-label') || ''),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            class: el.className ? String(el.className).substring(0, 40) : '',
          });
        }
      });
      return issues;
    });

    console.log(`  Tap targets < 44x44px: ${smallTargets.length} found`);
    if (smallTargets.length > 0) {
      console.log('  Sample small targets:', smallTargets.slice(0, 5));
    }

    // Check input font sizes (< 16px causes iOS Safari auto-zoom)
    const inputsUnder16px = await page.evaluate(() => {
      const issues = [];
      document.querySelectorAll('input, select, textarea').forEach((el) => {
        const fs = window.getComputedStyle(el).fontSize;
        const fsPx = parseFloat(fs);
        if (fsPx < 16) {
          issues.push({
            placeholder: el.getAttribute('placeholder') || el.getAttribute('name') || '',
            fontSize: fs,
          });
        }
      });
      return issues;
    });

    if (inputsUnder16px.length > 0) {
      console.log(`  Inputs with font-size < 16px (triggers iOS zoom): ${inputsUnder16px.length} inputs (size: ${inputsUnder16px[0]?.fontSize})`);
    }

    await page.close();
  }

  await browser.close();
}

run().catch(console.error);
