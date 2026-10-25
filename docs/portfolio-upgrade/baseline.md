# Phase 0: Baseline & Reconnaissance Report

**Date:** 2026-10-25  
**Repository:** `Mohitur669/Portfolio`  
**Current Branch:** `master` (clean, uncommitted changes preserved in `legacy/`)  

---

## 1. Repository Inventory

### 1.1 Architecture & Stack
- **Initial State:** Static HTML5 / CSS3 / Vanilla JavaScript.
- **Target Upgrade Stack:** React 19 / Vite 6 / TypeScript / Tailwind CSS v3 / Motion (Framer Motion).
- **Existing Asset Structure:**
  - `img/`: 21 assets (PNG/JPG/ICO), including uncompressed profile photo (`profile.png` ~688 KB), about illustration (`about.png` ~193 KB), project screenshots (`speak.png`, `sync-code.png`, `olympic.jpg`, `covid19.png`, `to-do.png`, `amazon.jpg`), and icons.
  - `file/`: `resume.pdf` (213 KB) containing verified real educational background (KIIT MCA CGPA 8.92, Malda College B.Sc Math Hons CGPA 8.92) and verified real projects.
  - `css/style.css`: 874 lines of custom CSS with recent uncommitted refactoring attempting a dark glassmorphic UI.
  - `js/script.js`: Typewriter effect for roles, mobile hamburger navigation, SheetDB Google Sheets contact form handler.
- **Hosting / Deployment Configuration:**
  - Configured for GitHub Pages (`origin git@github.com:Mohitur669/Portfolio.git`). No `.github` workflows, Vercel, or Netlify configs currently in the repository.
  - Target build tool: Vite SPA configured with prerendering/clean static output suitable for modern CDNs (Cloudflare Pages, Vercel, GitHub Pages).

### 1.2 Content Verification & Real Data Sources
- **Owner Identity:** Mohd Mohitur Rahaman
- **Location:** Malda / Kolkata, West Bengal, India
- **Core Specialization:** Full-Stack & Cloud Developer moving into AI/GenAI Engineering (Spring Boot / Java, Node.js, React, TypeScript, AWS, Cloudflare, Python data analytics).
- **Contact:**
  - Email: `mohitur669@gmail.com` / `mohiturrahman02@gmail.com`
  - GitHub: `https://github.com/Mohitur669`
  - LinkedIn: `https://linkedin.com/in/mohitur02`
  - Blog: `https://rahamanmohitur.blogspot.com/`
- **Verified Real Projects:**
  1. **SpeakIT** - Text-to-speech converter using AWS Polly + React.js.
  2. **Sync Code** - Real-time collaborative code editor with Socket.io + React.js.
  3. **Olympic History Analysis** - Python, Pandas, Streamlit interactive 120-year data exploration.
  4. **COVID-19 Vaccination Tracker** - Tableau interactive global vaccine dashboard.
  5. **Daily Goals Planner** - React productivity & daily rhythm interface.
  6. **Amazon Scraper** - Python web scraping & product data pipeline.

---

## 2. Baseline Performance & Lighthouse Audit

Audits performed using Google Chrome 135+ headless and Lighthouse v13.5.0 against localhost.

### 2.1 Summary Metrics Table

| Metric | Mobile (Simulated 4G / Throttled) | Desktop (Broadband / Unthrottled) | Target Goal (Phase 7) |
| :--- | :---: | :---: | :---: |
| **Performance** | **76 / 100** | **96 / 100** | **≥ 95** |
| **Accessibility** | 100 / 100 | 100 / 100 | 100 / 100 |
| **Best Practices** | 100 / 100 | 100 / 100 | 100 / 100 |
| **SEO** | 91 / 100 | 91 / 100 | 100 / 100 |
| **FCP (First Contentful Paint)** | 1.8 s | 0.8 s | < 1.0 s |
| **LCP (Largest Contentful Paint)** | **6.8 s** (Critical failure) | **1.3 s** | **< 2.5 s** |
| **TBT (Total Blocking Time)** | 0 ms | 0 ms | < 50 ms |
| **CLS (Cumulative Layout Shift)**| 0.000 | 0.000 | < 0.05 |
| **Speed Index** | 1.8 s | 0.8 s | < 1.5 s |

### 2.2 Critical Weaknesses Identified
1. **LCP Disaster on Mobile (6.8 s):** The hero profile image `profile.png` is 688 KB uncompressed, loaded without responsive sizing, modern image formats (AVIF/WebP), or `fetchpriority="high"`.
2. **Third-party Network Hops:** External render-blocking calls to `fonts.googleapis.com`, `fonts.gstatic.com`, `unpkg.com/boxicons`, and DevIcon CDN svgs.
3. **SEO Gaps (Score 91):** Missing `robots.txt`, `sitemap.xml`, canonical URLs, JSON-LD structured schema (`Person`, `WebSite`), and social meta cards (OpenGraph / Twitter image).
4. **Static Template Presentation:** The site resembles a generic portfolio template with static card grids, stock-feeling glow orbs, and lacks a cohesive interactive identity that demonstrates real engineering capability.

---

## 3. Baseline Screenshots Captured

Stored under `docs/portfolio-upgrade/screenshots/`:
- `baseline-360.png` (Mobile viewport 360x780)
- `baseline-768.png` (Tablet viewport 768x1024)
- `baseline-1024.png` (Small desktop / landscape tablet 1024x900)
- `baseline-1440.png` (Wide desktop 1440x1080)

Lighthouse raw JSON & HTML reports stored in `docs/portfolio-upgrade/lighthouse/baseline-mobile.report.json` and `docs/portfolio-upgrade/lighthouse/baseline-desktop.report.json`.

---

## 4. Phase 0 Gate Check

- [x] Repo inventory completed and documented.
- [x] Baseline bundle and runtime metrics captured.
- [x] Screenshots captured at 360, 768, 1024, and 1440 px widths.
- [x] Uncommitted changes preserved safely in `legacy/`.
- [x] Gate status: **PASSED**. Proceeding to Phase 1.
