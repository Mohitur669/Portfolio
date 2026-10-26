#!/usr/bin/env node
/**
 * scripts/slop-scan.mjs
 * Automated scan of all source files for AI slop phrases and empty corporate buzzwords.
 */

import fs from 'fs';
import path from 'path';

const SLOP_PATTERNS = [
  /\bdelve\b/i,
  /\btapestry\b/i,
  /\btestament to\b/i,
  /\bbeacon of\b/i,
  /\bgame-?changer\b/i,
  /\bcutting-?edge\b/i,
  /\bpassionate (developer|engineer|coder)\b/i,
  /\bcrafting digital experiences\b/i,
  /\bunleash(ing)? the power\b/i,
  /\bdive deep into\b/i,
  /\brockstar (developer|engineer)\b/i,
  /\bninja coder\b/i,
  /\brevolutioniz(e|ing)\b/i,
  /\bseamlessly integrat(e|ed|ing)\b/i,
  /\bdynamic problem solver\b/i,
  /\bdigital landscape\b/i,
  /\bpioneer(ing)? the future\b/i,
  /\barchitecting tomorrow\b/i,
];

const SCAN_DIRS = ['src', 'index.html'];
const IGNORED_EXTS = ['.png', '.jpg', '.webp', '.svg', '.woff2', '.ttf'];

let violationCount = 0;

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, lineNum) => {
    SLOP_PATTERNS.forEach(pattern => {
      const match = line.match(pattern);
      if (match) {
        console.error(`[SLOP DETECTED] ${filePath}:${lineNum + 1} -> "${match[0]}"`);
        console.error(`   Line: ${line.trim()}`);
        violationCount++;
      }
    });
  });
}

function traverse(targetPath) {
  const stat = fs.statSync(targetPath);
  if (stat.isDirectory()) {
    const entries = fs.readdirSync(targetPath);
    for (const entry of entries) {
      if (entry === 'node_modules' || entry === 'dist' || entry === '.git') continue;
      traverse(path.join(targetPath, entry));
    }
  } else {
    if (IGNORED_EXTS.some(ext => targetPath.endsWith(ext))) return;
    scanFile(targetPath);
  }
}

console.log('--- Scanning Source Files for AI Slop Phrases ---');
for (const dir of SCAN_DIRS) {
  const fullPath = path.resolve(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    traverse(fullPath);
  }
}

if (violationCount > 0) {
  console.error(`\nSlop scan FAILED with ${violationCount} violation(s).`);
  process.exit(1);
} else {
  console.log('\n[PASS] Zero AI slop phrases detected across all project source files.');
  process.exit(0);
}
