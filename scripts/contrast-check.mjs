#!/usr/bin/env node
/**
 * scripts/contrast-check.mjs
 * Automated WCAG 2.2 contrast verification for Portfolio color tokens.
 * Verifies dark mode and light mode pairings against WCAG AAA/AA requirements.
 */

function hexToRgb(hex) {
  let c = hex.replace(/^#/, '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function luminance({ r, g, b }) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrastRatio(hex1, hex2) {
  const lum1 = luminance(hexToRgb(hex1));
  const lum2 = luminance(hexToRgb(hex2));
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const TESTS = [
  // Dark mode pairings (Canvas: #0d1117, Card: #161b22)
  {
    name: 'Dark Mode: Pure White Heading on Slate Canvas (#0d1117)',
    fg: '#ffffff',
    bg: '#0d1117',
    minTarget: 7.0, // AAA
  },
  {
    name: 'Dark Mode: High-Readability Body (#f0f6fc) on Slate Canvas (#0d1117)',
    fg: '#f0f6fc',
    bg: '#0d1117',
    minTarget: 7.0, // AAA
  },
  {
    name: 'Dark Mode: High-Readability Body (#f0f6fc) on Card Surface (#161b22)',
    fg: '#f0f6fc',
    bg: '#161b22',
    minTarget: 7.0, // AAA
  },
  {
    name: 'Dark Mode: Secondary Text (#e2e8f0) on Card Surface (#161b22)',
    fg: '#e2e8f0',
    bg: '#161b22',
    minTarget: 4.5, // AA
  },
  {
    name: 'Dark Mode: Muted Metadata (#8b949e) on Slate Canvas (#0d1117)',
    fg: '#8b949e',
    bg: '#0d1117',
    minTarget: 4.5, // AA
  },
  {
    name: 'Dark Mode: Teal 300 Accent (#5eead4) on Slate Canvas (#0d1117)',
    fg: '#5eead4',
    bg: '#0d1117',
    minTarget: 4.5,
  },
  {
    name: 'Dark Mode: Amber 300 Eyebrow (#fcd34d) on Slate Canvas (#0d1117)',
    fg: '#fcd34d',
    bg: '#0d1117',
    minTarget: 4.5,
  },

  // Light mode pairings
  {
    name: 'Light Mode: Slate 900 Primary Text on Pure White',
    fg: '#0f172a',
    bg: '#ffffff',
    minTarget: 7.0,
  },
  {
    name: 'Light Mode: Slate 700 Body Text on Pure White',
    fg: '#334155',
    bg: '#ffffff',
    minTarget: 4.5,
  },
  {
    name: 'Light Mode: Slate 600 Muted Text on Paper Canvas (#faf8f5)',
    fg: '#475569',
    bg: '#faf8f5',
    minTarget: 4.5,
  },
  {
    name: 'Light Mode: Teal 700 Accent on Pure White',
    fg: '#0f766e',
    bg: '#ffffff',
    minTarget: 4.5,
  },
];

console.log('--- Automated WCAG 2.2 Contrast Verification ---');
let failed = 0;

for (const t of TESTS) {
  const ratio = contrastRatio(t.fg, t.bg);
  const ratioStr = ratio.toFixed(2) + ':1';
  const passed = ratio >= t.minTarget;

  if (passed) {
    console.log(`[PASS] ${t.name}: ${ratioStr} (Target ≥ ${t.minTarget}:1)`);
  } else {
    console.error(`[FAIL] ${t.name}: ${ratioStr} (Expected ≥ ${t.minTarget}:1)`);
    failed++;
  }
}

if (failed > 0) {
  console.error(`\nContrast check FAILED with ${failed} violation(s).`);
  process.exit(1);
} else {
  console.log(`\nAll ${TESTS.length} contrast checks PASSED successfully.`);
  process.exit(0);
}
