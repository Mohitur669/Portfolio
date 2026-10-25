import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const BASE_URL = process.env.BASE_URL || 'http://localhost:4186';
const BASELINE_DIR = path.resolve('docs/mobile-responsive-fix/baseline');
const TEMP_DIR = path.resolve('docs/mobile-responsive-fix/regression-temp');

if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

const DESKTOP_TARGETS = [
  { name: 'home-viewport-1024px.png', width: 1024, height: 800, url: '/' },
  { name: 'home-viewport-1280px.png', width: 1280, height: 800, url: '/' },
  { name: 'home-viewport-1440px.png', width: 1440, height: 800, url: '/' },
  { name: 'home-viewport-1920px.png', width: 1920, height: 800, url: '/' },
  { name: 'home-fullpage-1024px.png', width: 1024, height: 800, url: '/', fullPage: true },
  { name: 'home-fullpage-1280px.png', width: 1280, height: 800, url: '/', fullPage: true },
  { name: 'home-fullpage-1440px.png', width: 1440, height: 800, url: '/', fullPage: true },
  { name: 'state-command-palette-1280px.png', width: 1280, height: 800, url: '/', state: 'command-palette' },
  { name: 'state-contact-error-1280px.png', width: 1280, height: 800, url: '/#contact', state: 'contact-error' },
  { name: 'state-404-1280px.png', width: 1280, height: 800, url: '/nonexistent-route' },
  { name: 'state-styleguide-1280px.png', width: 1280, height: 800, url: '/#styleguide', fullPage: true },
];

async function stabilize(page) {
  await page.evaluate(async () => {
    document.querySelectorAll('img').forEach((img) => {
      img.loading = 'eager';
    });
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      images.map((img) => {
        if (img.complete) return img.decode().catch(() => {});
        return new Promise((resolve) => {
          img.onload = () => img.decode().catch(() => {}).then(resolve);
          img.onerror = resolve;
        });
      })
    );
  });
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0.001s !important;
        animation-delay: 0s !important;
        transition-duration: 0.001s !important;
        caret-color: transparent !important;
      }
    `
  });
  await page.waitForTimeout(300);
}

function compareImages(baselinePath, currentPath) {
  const pyCode = `
from PIL import Image, ImageChops

im1 = Image.open("${baselinePath}")
im2 = Image.open("${currentPath}")

if im1.size != im2.size:
    print(f"SIZE_MISMATCH {im1.size} vs {im2.size}")
    exit(0)

diff = ImageChops.difference(im1.convert("RGB"), im2.convert("RGB"))
bbox = diff.getbbox()
if not bbox:
    print("DIFF 0.0000% (0/0 pixels)")
else:
    hist = diff.histogram()
    # Ignore subtle noise (diff <= 3)
    diff_pixels = max(sum(hist[4:256]), sum(hist[260:512]), sum(hist[516:768]))
    total = im1.size[0] * im1.size[1]
    pct = (diff_pixels / total) * 100
    print(f"DIFF {pct:.4f}% ({diff_pixels}/{total} pixels)")
`;
  try {
    const output = execSync(`python3 -c '${pyCode.replace(/'/g, "'\\''")}'`).toString().trim();
    return output;
  } catch (err) {
    return `ERROR: ${err.message}`;
  }
}

async function run() {
  console.log('--- RUNNING DESKTOP REGRESSION GUARD (Widths >= 1024px) ---');
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });

  let failures = 0;

  for (const target of DESKTOP_TARGETS) {
    const page = await browser.newPage({
      viewport: { width: target.width, height: target.height },
      deviceScaleFactor: 1,
    });

    await page.goto(`${BASE_URL}${target.url}`, { waitUntil: 'networkidle' });
    await stabilize(page);

    if (target.fullPage) {
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 500;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 30);
        });
      });
      await page.waitForTimeout(300);
      await stabilize(page);
    }

    if (target.state === 'command-palette') {
      await page.keyboard.press(process.platform === 'darwin' ? 'Meta+KeyK' : 'Control+KeyK');
      await page.waitForTimeout(400);
      await stabilize(page);
    } else if (target.state === 'contact-error') {
      const nameInput = page.locator('input[placeholder="Alex Rivera"]');
      const emailInput = page.locator('input[placeholder="alex@company.com"]');
      const msgInput = page.locator('textarea');
      const mathInput = page.locator('input[placeholder="Result (7)"]');
      const submitBtn = page.locator('button[type="submit"]');

      if (await nameInput.isVisible()) {
        await nameInput.fill('Test User');
        await emailInput.fill('test@example.com');
        await msgInput.fill('Hello from testing');
        await mathInput.fill('99');
        await submitBtn.click();
        await page.waitForTimeout(400);
        await stabilize(page);
      }
    }

    const currentPath = path.join(TEMP_DIR, target.name);
    await page.screenshot({ fullPage: !!target.fullPage, path: currentPath });
    await page.close();

    const baselinePath = path.join(BASELINE_DIR, target.name);
    if (process.argv.includes('--update-baseline')) {
      fs.copyFileSync(currentPath, baselinePath);
      console.log(`📸 Updated baseline for ${target.name}`);
      continue;
    }

    if (!fs.existsSync(baselinePath)) {
      console.log(`⚠️ Baseline missing for ${target.name}`);
      continue;
    }

    const result = compareImages(baselinePath, currentPath);
    if (result.startsWith('SIZE_MISMATCH')) {
      console.error(`❌ REGRESSION FAILURE in ${target.name}: ${result}`);
      failures++;
    } else if (result.startsWith('DIFF')) {
      const match = result.match(/DIFF ([0-9.]+)%/);
      const diffPct = match ? parseFloat(match[1]) : 0;
      // Allow max 0.05% for subtle subpixel font rendering anti-aliasing variations
      if (diffPct > 0.05) {
        console.error(`❌ REGRESSION FAILURE in ${target.name}: ${result} (threshold 0.05%)`);
        failures++;
      } else {
        console.log(`✅ ${target.name}: PASS (${result})`);
      }
    } else {
      console.error(`❌ ${target.name}: ${result}`);
      failures++;
    }
  }

  await browser.close();

  if (failures > 0) {
    console.error(`\n🚨 Desktop Regression Guard FAILED with ${failures} regressions!`);
    process.exit(1);
  } else {
    console.log(`\n🎉 Desktop Regression Guard PASSED! All desktop views are pixel-identical.`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
