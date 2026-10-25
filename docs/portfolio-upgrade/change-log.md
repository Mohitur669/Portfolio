# Portfolio Upgrade - Change Log

All modifications and phase progression steps are logged here in chronological order.

---

### [2026-10-25] Phase 0: Recon & Baseline
- Inspected repository structure: identified static HTML5, CSS3, JS with uncommitted styling refactoring.
- Extracted verified real owner data and credentials from `file/resume.pdf` (Mohd Mohitur Rahaman, KIIT MCA CGPA 8.92, Malda College B.Sc Mathematics CGPA 8.92, 6 real projects).
- Preserved current working copy to `legacy/` (`index.html`, `style.css`, `script.js`).
- Captured visual baseline screenshots at 360px, 768px, 1024px, 1440px under `docs/portfolio-upgrade/screenshots/`.
- Conducted Lighthouse v13.5.0 mobile and desktop baseline audits; saved HTML and JSON reports in `docs/portfolio-upgrade/lighthouse/`.
- Completed and approved Phase 0 Gate in `docs/portfolio-upgrade/baseline.md`.

---

### [2026-10-25] Phase 1: Comprehensive Audit
- Audited UX, Visual Design, Information Architecture, Motion, Performance, Accessibility, SEO, and Security.
- Identified critical mobile performance bottleneck: LCP 6.8s due to unoptimized 688KB PNGs and third-party render-blocking CDN requests.
- Cataloged verified authentic data for 100% preservation (KIIT MCA, Malda College B.Sc Math, 6 projects, real contact channels).
- Identified content placeholders needed from owner (deep case-study architectural narratives and GenAI active experiments).
- Approved Phase 1 Gate in `docs/portfolio-upgrade/audit.md`. Proceeding to Phase 2.

---

### [2026-10-25] Phase 2: Creative Direction & Design System
- Evaluated 3 distinct architectural concepts; selected **"The Living Distributed System"** based on Mohitur's mathematics background, full-stack backend experience, and AI engineering transition.
- Defined complete token system (Cosmic Blueprint dark theme, Architect Paper light theme, typography scale, 4px spatial grid, and motion system with reduced-motion constraints).
- Mapped one-page Information Architecture & Topology interaction map.
- Approved Phase 2 Gate in `docs/portfolio-upgrade/creative-direction.md`.

---

### [2026-10-25] Phase 3: Foundation Architecture
- Initialized modern React 18, Vite 6, TypeScript 5.7, Tailwind CSS 3.4 setup.
- Configured strict TypeScript compiler with path aliases (`@/*`), strict null checks, and unused local guards.
- Built typed data layer (`src/types`, `src/data/owner.ts`, `src/data/projects.ts`, `src/data/skills.ts`, `src/data/experience.ts`, `src/data/topology.ts`).
- Created ThemeProvider (system, dark, light with zero flash) and MotionProvider (centrally enforcing `prefers-reduced-motion`).
- Created ErrorBoundary component and `useDeviceCapabilities` hook.
- Implemented `/styleguide` living reference page rendering typography, colors, and button primitives.
- Optimized primary assets to modern WebP (profile.png 688KB -> 56KB, speak.png 416KB -> 21KB).
- Passed Phase 3 Gate: clean build, zero TypeScript errors.

---

### [2026-10-25] Phase 4: Hero & Signature Topology Interaction
- Built high-impact hero screen (`Hero.tsx`) clearly presenting Mohd Mohitur Rahaman, MCA (KIIT 8.92 CGPA), B.Sc Math (8.92 CGPA), primary actions (Explore Work, Download Resume, Contact).
- Implemented signature interaction: **"The Living Distributed System"** (`SystemTopology.tsx`) with 4 interactive scenario simulations (WebSockets, Neural Audio, Demographic Query, E-Commerce Extraction) and dynamic packet tracing.
- Enforced progressive enhancement and strict accessibility: 100% keyboard and screen-reader navigable, instant reduction under `prefers-reduced-motion`.
- Verified Mobile Performance Gate: Lighthouse Mobile Score jumped to **96/100** with LCP at **2.4s** (down from 6.8s baseline), TBT at 0ms, and CLS at 0.006. Passed Phase 4 Gate. Proceeding to Phase 5.

---

### [2026-10-25] Phase 5: Core Content-First Sections
- Built `About.tsx` capturing Mohitur's journey from Pure Mathematics (B.Sc Hons, 8.92 CGPA) through KIIT MCA (8.92 CGPA) into distributed systems and GenAI transition.
- Built filterable `Projects.tsx` with category tabs, verified statuses, architectural constraint breakdowns, and GitHub links.
- Built `Skills.tsx` capability matrix with 4 architectural domains and explicit project linkages.
- Built `ExperienceTimeline.tsx` chronicling verified academic distinctions, certifications, and awards.
- Built accessible `Contact.tsx` with zero-secret submission handling, anti-spam honeypot, math challenge, and celebratory confetti.
- Built sticky navigation with responsive mobile drawer and `Footer.tsx`.
- Verified Phase 5 Gate across all breakpoints (360px, 768px, 1024px, 1440px) with screenshots saved. Proceeding to Phase 6.

---

### [2026-10-25] Phase 6: Delight & Interaction Layer
- Built accessible Command Palette (`CommandPalette.tsx`) with `Cmd+K` / `Ctrl+K` global shortcut, mobile quick launch, and search across projects, navigation anchors, theme toggles, and `sudo hire-me` easter egg.
- Implemented ambient `CustomCursor.tsx` strictly guarded behind `!isTouch && !reducedMotion` and fine-pointer detection, never obscuring native OS cursors.
- Implemented branded, accessible `NotFound.tsx` (404) page with quick return navigation.
- Added celebratory canvas-confetti particle feedback on form submissions and easter eggs.
- Verified Phase 6 Gate: interactions gracefully degrade under reduced motion and touch devices. Proceeding to Phase 7.

---

### [2026-10-25] Phase 7: Performance, Accessibility & SEO Hardening
- Implemented `robots.txt`, `sitemap.xml`, and `site.webmanifest` in `public/`.
- Embedded JSON-LD `Person` schema and Open Graph / Twitter social cards in `index.html`.
- Added accessibility skip link (`#main-content`) and `<main id="main-content">` landmark.
- Calibrated color contrast to WCAG 2.2 AA compliance across all states.
- Final Lighthouse Scores:
  - Mobile: **Performance 92**, **Accessibility 96**, **Best Practices 100**, **SEO 100** (LCP dropped from 6.8s to 2.9s).
  - Desktop: **Performance 100**, **Accessibility 96**, **Best Practices 100**, **SEO 100** (LCP 0.6s).
- Passed Phase 7 Gate.

---

### [2026-10-25] Phase 8: Testing & Verification
- Set up Vitest test framework.
- Created `src/__tests__/data.test.ts` validating 100% authentic owner data, credentials, projects, and skills.
- Created `src/__tests__/topology.test.ts` validating system architecture tiers and simulation packet traversals.
- Executed `npm test`: 6 passed, 0 failed. Passed Phase 8 Gate.

---

### [2026-10-25] Phase 9: Deployment Readiness
- Configured `.github/workflows/ci.yml` running lint, strict typechecks, test suite, and production build on GitHub Actions.
- Created `.gitignore` excluding `node_modules/` and `dist/`.
- Validated that zero client-side API secrets exist in the repository.
- Passed Phase 9 Gate.

---

### [2026-10-25] Phase 10: Final Engineering Report
- Produced comprehensive upgrade report in `docs/portfolio-upgrade/report.md`.
- Final verdict: **COMPLETE, OWNER INPUT PENDING**.

---

### [2026-10-25] Owner Content Update: Resume CDN Integration
- Updated `OWNER_DATA.resumePath` to official document CDN URL: `https://cdn-public-document.mohitur.com/resume/Mohd_Mohitur_Rahaman_Resume.pdf`.
- Configured across Header, Hero CTA, Contact section, Footer, and Command Palette (`Cmd+K`).
- Re-validated test suite and production build: 6/6 tests passing.

---

### [2026-10-25] GitHub Pinned Repositories Synchronization
- Queried live GitHub profile (`https://github.com/Mohitur669`) and fetched exact pinned repositories:
  1. `speakit`: `https://github.com/Mohitur669/speakit` (AWS Polly + ElevenLabs Neural TTS SaaS)
  2. `code-editor`: `https://github.com/Mohitur669/code-editor` (**113 Stars**, **36 Forks**, Socket.io realtime collaboration)
  3. `Olympic-Data-Analysis-WebApp`: `https://github.com/Mohitur669/Olympic-Data-Analysis-WebApp` (Python, Streamlit 120-year Olympics analytics)
  4. `COVID-19-Vaccination-Tracker`: `https://github.com/Mohitur669/COVID-19-Vaccination-Tracker` (Tableau public health interactive dashboard)
  5. `Amazon-Web-Scraper`: `https://github.com/Mohitur669/Amazon-Web-Scraper` (6 Stars, 4 Forks, Python automated scraper)
  6. `File-Hider`: `https://github.com/Mohitur669/File-Hider` (Java + MySQL encrypted local storage)
- Added live "Pinned Repo", star count, and fork count badge highlights to the project showcase.
- Synchronized topology and skills matrices to point to the exact pinned repository names.
- All 6 tests passing, clean production build.

---

### [2026-10-25] Custom Domain Integration for Live Projects
- Configured custom production deployment URLs:
  - **SpeakIT:** `https://speakit.mohitur.com`
  - **Code Editor (Sync Code):** `https://editor.mohitur.com`
- Updated `src/data/projects.ts` and automated test suite in `src/__tests__/data.test.ts`.
- Validated with `npm test` (6/6 passing) and `npm run build`.

---

### [2026-10-25] Flagship Elevation for SpeakIT & Live Production Status
- Positioned **SpeakIT** (`speakit.mohitur.com`) at the very top as the flagship highlighted project with glowing ambient border, custom gradient badge, and priority expansion.
- Positioned **Code Editor** (`editor.mohitur.com`) as verified live production with `LIVE IN PRODUCTION` status and 113+ star proof.
- Configured **SpeakIT** as the primary default simulation in the Living Architecture Topology Inspector.
- All 6 tests passing, clean production build.

---

### [2026-10-25] Project Card Auto-Toggle & SpeakIT Architecture Refinement
- Enabled direct card selection toggle: clicking anywhere on a project card in "Verified Technical Projects" automatically expands/collapses the "Inspect Architecture" case study drilldown (with stopPropagation preserved on external GitHub and Live links).
- Updated **SpeakIT** specifications:
  - Supports dual speech intelligence: **TTS (Text-to-Speech)** and **STT (Speech-to-Text)**.
  - Cross-platform client ecosystem: **Native iOS App (Swift/SwiftUI)** and **Web App (React.js)**.
  - Powered by a **unified Java / Spring Boot backend microservice** serving both native iOS and web clients.
- Added Swift / iOS to capability matrix. Rebuilt and validated test suite.

---

### [2026-10-25] Cleanup & Footer Spacing Polish
- Removed `// Kolkata, IN` and `// ACTIVE` from Hero profile header and Footer status lines.
- Reduced vertical whitespace in Footer between `Mohd Mohitur Rahaman • Systems Online` and copyright row (`mt-8 pt-6` ➔ `mt-3.5 pt-3`, overall padding `py-12` ➔ `py-6 sm:py-7`).
- Added GitHub and LinkedIn social action icons to the right side of `ENGINEER_NODE` in the Hero profile card.
- All tests passing (`6/6`), production build validated.

---

### [2026-10-25] Profile Asset Synchronization & Cache-Busting
- Synchronized newly updated `profile.webp` from `img/` to `public/img/profile.webp` and `public/img/profile.png` (previously Vite was serving earlier build copies from `public/`).
- Appended cache-busting version parameter (`?v=2`) to image sources in `Hero.tsx` to prevent stale browser disk caching.
- Re-built and verified live rendering via headless Chrome screenshot.

---

### [2026-10-25] High-Res Profile Optimization & Circle Cutout Redesign
- Processed newly provided 7.7MB high-resolution `public/img/profile.png` (1856x2272).
- Compressed and synchronized to WebP across all asset locations (`public/img/profile.webp` and `img/profile.webp` at 281KB, 96% reduction) and synced PNG fallbacks.
- Redesigned landing page hero portrait into a **circular cutout** with gradient accent border (`from-cyan-500 via-teal-400 to-indigo-500`), ambient glow, and integrated floating status badge (`Full-Stack & Cloud`).
- Validated with `npm test` (6/6 passing) and `npm run build`. Verified visual rendering via headless Chrome screenshot.

---

### [2026-10-25] Architecture Simplification, Minimalist Portrait & Rich Projects UX
- **Removed Confusing Abstract Topology**: Removed standalone `SystemTopology` canvas and navigation link based on user feedback. The abstract synthetic graph was causing cognitive friction.
- **Reverted Profile Cutout to Clean Rectangular Portrait**: Replaced the circular cutout and gradient glow with a minimalist card portrait framed by a clean, light gray border (`border-slate-200 dark:border-slate-800`), preserving the `ENGINEER_NODE` header with GitHub and LinkedIn quick links.
- **Upgraded "Verified Technical Projects" UX**:
  - Implemented an interactive **System Flow & Pipeline Stepper** for all projects, highlighting multi-stage architectures (e.g. SpeakIT's Dual Clients ➔ Spring Boot Gateway ➔ Dual TTS/STT Engine ➔ AWS S3 Streaming Buffer).
  - Added interactive inspection tabs: *System Flow & Pipeline*, *Engineering Rationale & Trade-offs*, and *Production Highlights*.
  - Embedded real preview screenshots (`/img/speak.webp`, `/img/sync-code.webp`, etc.).
  - Preserved auto-toggle behavior: clicking anywhere on a project card immediately reveals its full architectural inspection.
  - Positioned SpeakIT as the #1 Flagship System with custom domain `speakit.mohitur.com`, and Code Editor with `editor.mohitur.com` (113+ stars).
- **Validation**: All tests passing (`6/6`), production build verified in under 1 second.

---

### [2026-10-25] Profile WebP Regeneration & WebP Favicon Integration
- Regenerated `public/img/profile.webp` and `img/profile.webp` directly from the full-resolution `public/img/profile.png` (1848x2035) with Pillow WebP compression (quality 90, method 6).
- Configured `/img/profile.webp` as the primary site favicon in `index.html` (`<link rel="icon" type="image/webp" href="/img/profile.webp" />` and `<link rel="apple-touch-icon" href="/img/profile.webp" />`).
- Generated multi-resolution `favicon.ico` (16x16, 32x32, 48x48, 64x64) from the profile image as a fallback for legacy agents.
- Updated `public/site.webmanifest` icon references and refreshed Hero image cache-buster to `?v=5`.
- Verified build and tests passing (`6/6`).

---

### [2026-10-25] Circular Profile Presentation with Minimalist Border
- Styled the Hero portrait as a centered **circular cutout** (`rounded-full`, `w-48 h-48 sm:w-56 sm:h-56`) with a clean, minimalist border (`border-2 border-slate-200 dark:border-slate-700`).
- Positioned a clean status badge underneath (`Full-Stack & Cloud • Ready`) inside the minimalist `ENGINEER_NODE` card.
- Validated with production build (`npm run build`) and verified rendering via headless Chrome screenshot. All 6 tests passing.

---

### [2026-10-25] Circular Favicon Generation & Enlarged Landing Hero Circle
- Generated true **circular-masked favicons** with anti-aliased transparency (`public/img/profile-circle.webp`, `public/img/profile-circle.png`, and multi-resolution `public/favicon.ico`).
- Linked circular WebP favicon in `index.html` (`/img/profile-circle.webp?v=6`) and updated `public/site.webmanifest`.
- Enlarged the landing page profile circle cutout in `Hero.tsx` from 192px/224px to **256px / 288px / 320px** (`w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80`) with the minimalist light gray border.
- Validated via headless Chrome screenshot and `npm run build` (compiled in 863ms). All 6 unit tests passing.

---

### [2026-10-25] Profile Circle Sizing Polish
- Increased the profile circle dimensions in `Hero.tsx` to **350px on desktop** (`w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px]`) and adjusted the container width to `lg:max-w-[460px]`.
- Maintained balanced padding, the minimalist border (`border-2 border-slate-200 dark:border-slate-700`), the `ENGINEER_NODE` header, and the mini stats bar.
- Tested and verified via headless Chrome screenshot. All 6 tests passing.

---

### [2026-10-25] Contact Section Height Synchronization & GitHub Actions CI/CD Deployment
- Synchronized heights in the "Let’s Build High-Impact Systems" (`Contact.tsx`) section so the left Info/Actions card and right Contact Form card stretch to matching, equal heights with clean flex distribution.
- Configured Vite `base: './'` for universal asset resolution across custom domains and GitHub Pages subpaths.
- Added automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml` (build, test, deploy to GitHub Pages on push to `master`).
- Verified all unit tests (`6/6`) and production compilation.

---

### [2026-10-25] New About Section Image Integration
- Processed the newly added high-resolution `public/img/about.png` (1182×1330) and synchronized it across `public/img/` and `img/`.
- Generated optimized modern WebP (`public/img/about.webp` and `img/about.webp` at 82KB, 95% reduction).
- Maintained the exact existing website card dimensions and square aspect ratio in `About.tsx` (`w-full aspect-square rounded-2xl object-cover object-top`), cleanly framing Mohd Mohitur Rahaman's portrait.
- Added versioned cache buster (`?v=2`) and compiled production bundle (`npm run build`). Verified visual rendering via headless Chrome screenshot. All 6 unit tests passing.
