import { chromium, devices } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:4186';
const OUT_DIR = path.resolve('docs/mobile-responsive-fix/baseline');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const WIDTHS = [320, 360, 375, 390, 412, 430, 600, 768, 820, 1024, 1280, 1440, 1920];

const DEVICE_PROFILES = [
  { name: 'iPhone-SE', device: devices['iPhone SE'] },
  { name: 'iPhone-14', device: devices['iPhone 14'] },
  { name: 'Pixel-7', device: devices['Pixel 7'] },
  { name: 'Galaxy-S9', device: devices['Galaxy S9+'] },
  { name: 'iPad-Mini-Portrait', device: devices['iPad Mini'] },
  { name: 'iPad-Mini-Landscape', device: devices['iPad Mini landscape'] },
];

async function stabilize(page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0.001s !important;
        animation-delay: 0s !important;
        transition-duration: 0.001s !important;
      }
    `
  });
  await page.waitForTimeout(300);
}

async function run() {
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });

  console.log('Capturing viewport widths...');
  for (const w of WIDTHS) {
    const page = await browser.newPage({
      viewport: { width: w, height: 800 },
      deviceScaleFactor: 1,
    });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await stabilize(page);

    // Viewport screenshot
    await page.screenshot({ path: path.join(OUT_DIR, `home-viewport-${w}px.png`) });

    // Full page screenshot for key widths
    if ([320, 360, 390, 768, 1024, 1280, 1440].includes(w)) {
      await page.screenshot({ fullPage: true, path: path.join(OUT_DIR, `home-fullpage-${w}px.png`) });
    }

    await page.close();
    console.log(`  ✓ Width ${w}px captured`);
  }

  console.log('Capturing device emulations...');
  for (const { name, device } of DEVICE_PROFILES) {
    const context = await browser.newContext({ ...device });
    const page = await context.newPage();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await stabilize(page);
    await page.screenshot({ path: path.join(OUT_DIR, `device-${name}.png`) });
    await page.screenshot({ fullPage: true, path: path.join(OUT_DIR, `device-${name}-full.png`) });
    await context.close();
    console.log(`  ✓ Device ${name} captured`);
  }

  console.log('Capturing open states...');
  // 1. Mobile Menu Open (at 390px)
  {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await stabilize(page);
    // Click mobile menu hamburger
    const menuBtn = page.locator('button[aria-label="Toggle mobile menu"]');
    if (await menuBtn.isVisible()) {
      await menuBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(OUT_DIR, `state-mobile-menu-open-390px.png`) });
    }
    await page.close();
    console.log('  ✓ Mobile menu open captured');
  }

  // 2. Command Palette Open (at 1280px and 390px)
  for (const w of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await stabilize(page);
    await page.keyboard.press(process.platform === 'darwin' ? 'Meta+KeyK' : 'Control+KeyK');
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT_DIR, `state-command-palette-${w}px.png`) });
    await page.close();
    console.log(`  ✓ Command palette ${w}px captured`);
  }

  // 3. Contact Form Validation Error (at 390px and 1280px)
  for (const w of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    await page.goto(`${BASE_URL}#contact`, { waitUntil: 'networkidle' });
    await stabilize(page);
    // Fill wrong math answer to trigger validation error
    const nameInput = page.locator('input[placeholder="Alex Rivera"]');
    const emailInput = page.locator('input[placeholder="alex@company.com"]');
    const msgInput = page.locator('textarea');
    const mathInput = page.locator('input[placeholder="Result (7)"]');
    const submitBtn = page.locator('button:has-text("Transmit Direct Inquiry")');

    if (await nameInput.isVisible()) {
      await nameInput.fill('Test User');
      await emailInput.fill('test@example.com');
      await msgInput.fill('Hello from testing');
      await mathInput.fill('99'); // Wrong answer (should be 7)
      await submitBtn.click();
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(OUT_DIR, `state-contact-error-${w}px.png`) });
    }
    await page.close();
    console.log(`  ✓ Contact form error ${w}px captured`);
  }

  // 4. 404 Page (at 1280px and 390px)
  for (const w of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    await page.goto(`${BASE_URL}/nonexistent-route`, { waitUntil: 'networkidle' });
    await stabilize(page);
    await page.screenshot({ path: path.join(OUT_DIR, `state-404-${w}px.png`) });
    await page.close();
    console.log(`  ✓ 404 page ${w}px captured`);
  }

  // 5. Styleguide Page (at 1280px and 390px)
  for (const w of [1280, 390]) {
    const page = await browser.newPage({ viewport: { width: w, height: 800 } });
    await page.goto(`${BASE_URL}/#styleguide`, { waitUntil: 'networkidle' });
    await stabilize(page);
    await page.screenshot({ fullPage: true, path: path.join(OUT_DIR, `state-styleguide-${w}px.png`) });
    await page.close();
    console.log(`  ✓ Styleguide page ${w}px captured`);
  }

  await browser.close();
  console.log('All baseline screenshots captured successfully!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
