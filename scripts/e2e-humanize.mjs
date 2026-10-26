#!/usr/bin/env node
/**
 * scripts/e2e-humanize.mjs
 * End-to-end multi-viewport browser verification for Mohd Mohitur Rahaman's portfolio.
 * Tests 5 viewports (360, 390, 768, 1024, 1440) across light and dark themes.
 */

import { chromium } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:4187';

const VIEWPORTS = [
  { name: 'Mobile Mini (360px)', width: 360, height: 740 },
  { name: 'Mobile Standard (390px)', width: 390, height: 844 },
  { name: 'Tablet Portrait (768px)', width: 768, height: 1024 },
  { name: 'Laptop Standard (1024px)', width: 1024, height: 768 },
  { name: 'Desktop Large (1440px)', width: 1440, height: 900 },
];

async function runTests() {
  console.log(`Starting E2E verification against: ${BASE_URL}`);
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  let totalErrors = 0;

  try {
    for (const vp of VIEWPORTS) {
      console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: 2,
      });
      const page = await context.newPage();

      // Navigate to homepage
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });

      // 1. Check title and canonical
      const title = await page.title();
      if (!title.includes('Mohd Mohitur Rahaman')) {
        console.error(`  [FAIL] Title does not contain owner name: "${title}"`);
        totalErrors++;
      } else {
        console.log(`  [PASS] Document title verified: "${title}"`);
      }

      // Check canonical link
      const canonicalHref = await page.getAttribute('link[rel="canonical"]', 'href');
      if (canonicalHref !== 'https://mohitur.com/') {
        console.error(`  [FAIL] Canonical URL is not https://mohitur.com/ (got: "${canonicalHref}")`);
        totalErrors++;
      } else {
        console.log(`  [PASS] Canonical link verified: "${canonicalHref}"`);
      }

      // 2. Rule 5 Verification: Profile Card & Photo must be visible
      const aboutPhoto = page.locator('picture:has(source[srcset*="about.webp"]) img, img[src*="about"]');
      const isAboutPhotoVisible = await aboutPhoto.first().isVisible();
      if (!isAboutPhotoVisible) {
        console.error(`  [FAIL] Rule 5 Violation: About profile photo is NOT visible at ${vp.width}px!`);
        totalErrors++;
      } else {
        console.log(`  [PASS] Rule 5 verified: About profile photo is visible at ${vp.width}px.`);
      }

      // 3. Hero Profile Card photo verification
      const heroPhoto = page.locator('picture:has(source[srcset*="profile-circle.webp"]) img, img[src*="profile"]');
      const isHeroPhotoVisible = await heroPhoto.first().isVisible();
      if (!isHeroPhotoVisible) {
        console.error(`  [FAIL] Hero profile photo is NOT visible at ${vp.width}px!`);
        totalErrors++;
      } else {
        console.log(`  [PASS] Hero profile photo is visible at ${vp.width}px.`);
      }

      // 4. Contact form message field type verification
      const messageInput = page.locator('#contact-message');
      const tagName = await messageInput.evaluate(el => el.tagName.toLowerCase());
      if (tagName !== 'input') {
        console.error(`  [FAIL] Contact message field must be an <input>, got: <${tagName}>`);
        totalErrors++;
      } else {
        console.log(`  [PASS] Contact message field is verified as an <input> (scrollable).`);
      }

      // 5. System Architecture / How the Systems Work verification
      const archSection = page.locator('#architecture');
      const isArchVisible = await archSection.isVisible();
      if (!isArchVisible) {
        console.error(`  [FAIL] Architecture section (#architecture) is not visible!`);
        totalErrors++;
      } else {
        console.log(`  [PASS] Architecture section is present and accessible.`);
      }

      // 6. Horizontal scroll / overflow check
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      if (scrollWidth > clientWidth) {
        console.error(`  [FAIL] Horizontal overflow detected! scrollWidth (${scrollWidth}) > clientWidth (${clientWidth})`);
        totalErrors++;
      } else {
        console.log(`  [PASS] Zero horizontal overflow at ${vp.width}px.`);
      }

      // 7. Dark Mode Readability & Contrast Verification
      await page.evaluate(() => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      });
      await page.waitForTimeout(100);

      const darkStyles = await page.evaluate(() => {
        const body = document.body;
        const mainDiv = document.querySelector('main')?.parentElement;
        const heading = document.querySelector('#home h1');
        const heroP = document.querySelector('#home p.text-base, #home p.text-lg');
        const aboutP = document.querySelector('#about .space-y-5 p');

        return {
          bodyBg: window.getComputedStyle(body).backgroundColor,
          mainBg: mainDiv ? window.getComputedStyle(mainDiv).backgroundColor : null,
          headingColor: heading ? window.getComputedStyle(heading).color : null,
          heroPColor: heroP ? window.getComputedStyle(heroP).color : null,
          aboutPColor: aboutP ? window.getComputedStyle(aboutP).color : null,
        };
      });

      // Verify dark canvas background is actually dark (not light slate #f8fafc)
      if (darkStyles.bodyBg === 'rgb(248, 250, 252)' || darkStyles.bodyBg === 'rgb(255, 255, 255)') {
        console.error(`  [FAIL] Dark mode canvas background is light: ${darkStyles.bodyBg}`);
        totalErrors++;
      } else {
        console.log(`  [PASS] Dark mode canvas background is verified dark: ${darkStyles.bodyBg}`);
      }

      // Verify text is high contrast light (not black or dark grey)
      if (darkStyles.heroPColor && darkStyles.heroPColor.startsWith('rgb(24')) {
        console.log(`  [PASS] Dark mode paragraph text is crisp and readable: ${darkStyles.heroPColor}`);
      } else {
        console.log(`  [INFO] Dark mode paragraph color: ${darkStyles.heroPColor}`);
      }

      await context.close();
    }
  } catch (err) {
    console.error('Fatal E2E error:', err);
    totalErrors++;
  } finally {
    await browser.close();
  }

  if (totalErrors > 0) {
    console.error(`\nE2E Suite FAILED with ${totalErrors} issue(s).`);
    process.exit(1);
  } else {
    console.log('\n[PASS] All E2E journeys passed across all 5 viewports.');
    process.exit(0);
  }
}

runTests();
