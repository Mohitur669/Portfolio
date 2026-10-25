# Phase 0: Baseline & Reconnaissance Report

**Project:** Mohd Mohitur Rahaman — Developer Portfolio V2  
**Date:** 2026-10-25  
**Current Git Branch:** `master`  
**Initial Git Status:** Clean (`nothing to commit, working tree clean`)

---

## 1. Stack & Architecture Inventory

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | React 18 | `18.3.1` | Component UI tree |
| **Build Tool** | Vite | `6.1.0` | Bundling, dev server, HMR, chunking |
| **Type System**| TypeScript | `5.7.3` | Strict type checking (`noUnusedLocals`, `strict: true`) |
| **Styling** | Tailwind CSS | `3.4.17` | Utility-first CSS, dark mode class |
| **Animation** | Motion (Framer) | `12.4.7` | UI transitions & layout animations |
| **Icons** | Lucide React | `0.475.0` | SVG icons |
| **Effects** | Canvas Confetti | `1.9.4` | Form submission celebration |
| **Testing** | Vitest & Playwright | `5.0.5` / `1.50+` | Unit tests & visual regression suite |

---

## 2. Breakpoint & Container Analysis

### Existing Tailwind Breakpoints
Tailwind standard screen hierarchy in active use:
- `sm`: `640px`
- `md`: `768px` (used for desktop navigation switch, grid stacking)
- `lg`: `1024px` (**Desktop boundary** — 1024px and above is desktop)
- `xl`: `1280px`
- `2xl`: `1536px`

### Container Constraints
- Sections wrap inside `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Outer viewport meta currently: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`.
- `overflow-x-hidden` was on `body` in `index.html` (to be removed in Phase 2 in compliance with Rule 5).

---

## 3. Baseline Screenshots Index

Stored in `docs/mobile-responsive-fix/baseline/`:

### Viewport Widths (Height 800px):
- `home-viewport-320px.png` (ultra-compact mobile)
- `home-viewport-360px.png` (standard Android)
- `home-viewport-375px.png` (iPhone SE)
- `home-viewport-390px.png` (iPhone 14/15/16 standard)
- `home-viewport-412px.png` (Google Pixel / Samsung Galaxy)
- `home-viewport-430px.png` (iPhone Pro Max)
- `home-viewport-600px.png` (large foldable / mini tablet)
- `home-viewport-768px.png` (iPad portrait breakpoint)
- `home-viewport-820px.png` (iPad Air portrait)
- `home-viewport-1024px.png` (**Desktop baseline boundary**)
- `home-viewport-1280px.png` (standard laptop baseline)
- `home-viewport-1440px.png` (widescreen desktop baseline)
- `home-viewport-1920px.png` (full HD desktop baseline)

### Full-Page Screenshots:
- `home-fullpage-320px.png`
- `home-fullpage-360px.png`
- `home-fullpage-390px.png`
- `home-fullpage-768px.png`
- `home-fullpage-1024px.png`
- `home-fullpage-1280px.png`
- `home-fullpage-1440px.png`

### Device Profiles (Emulation):
- `device-iPhone-SE.png` & `device-iPhone-SE-full.png` (375x667, dpr 2)
- `device-iPhone-14.png` & `device-iPhone-14-full.png` (390x844, dpr 3)
- `device-Pixel-7.png` & `device-Pixel-7-full.png` (412x915, dpr 2.625)
- `device-Galaxy-S9.png` & `device-Galaxy-S9-full.png` (360x800, dpr 3)
- `device-iPad-Mini-Portrait.png` & `device-iPad-Mini-Portrait-full.png` (820x1180, dpr 2)
- `device-iPad-Mini-Landscape.png` & `device-iPad-Mini-Landscape-full.png` (1180x820, dpr 2)

### Open States:
- `state-mobile-menu-open-390px.png`
- `state-command-palette-390px.png` & `state-command-palette-1280px.png`
- `state-contact-error-390px.png` & `state-contact-error-1280px.png`
- `state-404-390px.png` & `state-404-1280px.png`
- `state-styleguide-390px.png` & `state-styleguide-1280px.png`

---

## 4. Mobile Baseline Lighthouse Scores

Measured with Lighthouse 13.5.0 (Mobile profile, throttled slow 4G, Moto G Power emulation):

| Metric | Baseline Score / Value | Status |
| :--- | :--- | :--- |
| **Performance** | **84 / 100** | Needs optimization for mobile LCP |
| **Accessibility** | **95 / 100** | Heading order, touch target, and contrast checks |
| **Best Practices** | **100 / 100** | Passed |
| **SEO** | **100 / 100** | Passed |
| **FCP (First Contentful Paint)** | `1.5 s` | Good |
| **LCP (Largest Contentful Paint)**| `4.4 s` | Needs improvement on throttled mobile |
| **TBT (Total Blocking Time)** | `0 ms` | Perfect |
| **CLS (Cumulative Layout Shift)**| `0.004` | Excellent (well below 0.1 threshold) |
| **Total Transfer JS** | `77 KB` | Ultra-lean bundle |

---

## 5. Phase 0 Gate Verification
- [x] Initial `git status` clean and branch recorded (`master`).
- [x] Full stack, libraries, and Tailwind breakpoints documented.
- [x] Baseline screenshots captured across 13 widths, 6 device profiles, and 5 interactive states.
- [x] Baseline Lighthouse metrics captured.
- [x] Phase 0 Gate **PASSED**.
