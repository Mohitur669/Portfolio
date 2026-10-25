# Mobile & Tablet Responsive Fix — Change Log

## Rules & Constraints
- **Branch:** `master`
- **Owner permission required before any git commit, push, branch, tag, or merge.**
- **Desktop visual baseline must remain pixel-identical (1024px+).**
- **Strictly no redesign, no brand changes, no business logic changes, no hacks.**

---

## Phase 0: Baseline & Recon
- Initialized `docs/mobile-responsive-fix/change-log.md` and `docs/mobile-responsive-fix/baseline.md`.
- Recorded initial git status on `master`.
- Audited Tailwind configuration, breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`).
- Installed `@playwright/test` for automated headless multi-viewport screenshot verification and regression guard.
- Captured baseline screenshots for all required viewports (320, 360, 375, 390, 412, 430, 600, 768, 820, 1024, 1280, 1440, 1920), device profiles (iPhone SE, iPhone 14, Pixel 7, Galaxy S9+, iPad Mini Portrait & Landscape), and open interactive states.
- Executed mobile Lighthouse baseline audit: Performance: 84, Accessibility: 95, Best Practices: 100, SEO: 100, LCP: 4.4s, CLS: 0.004, TBT: 0ms.

---

## Phase 1: Mobile & Tablet UX Audit
- Audited horizontal overflow, viewport chrome, touch targets, and typography across 320px–820px viewports.
- Generated `docs/mobile-responsive-fix/audit.md` cataloging 11 prioritized issues (`MOB-01` through `MOB-11`).

---

## Phase 2 & 3: Foundation, Layout Stacking & Component Refinements
1. **Foundation (`index.html`, `src/index.css`)**:
   - Added `viewport-fit=cover` to `<meta name="viewport">` for edge-to-edge support on Dynamic Island and notched devices.
   - Removed `overflow-x-hidden` from `<body>` in `index.html` to eliminate artificial overflow masking.
   - Added safe-area utility classes (`.safe-top`, `.safe-bottom`, `.safe-left`, `.safe-right`) in `src/index.css`.
   - Added `min-h-[100dvh]` with `100vh` fallback in `src/index.css` for dynamic mobile address bar resizing.

2. **Hero Stacking Order (`src/components/hero/Hero.tsx`)**:
   - Swapped mobile visual stacking order using Tailwind standard utilities:
     - Profile / Engineer Node card column: `order-1 lg:order-2`.
     - Hero Headline & Introduction text column: `order-2 lg:order-1`.
   - On mobile phones (< 1024px), the Engineer Node with profile picture appears at the top above the intro text.
   - On desktop (>= 1024px), side-by-side layout remains 100% pixel-identical.

3. **Compact Dropdown Filters on Mobile (`Projects.tsx`, `Skills.tsx`)**:
   - In `Projects.tsx`: Introduced a touch-friendly `<select>` dropdown (`md:hidden`) with `Filter` and `ChevronDown` icons for mobile category selection. Desktop pill group preserved with `hidden md:flex`.
   - In `Skills.tsx`: Introduced a touch-friendly `<select>` dropdown (`md:hidden`) for tech stack filtering. Desktop pill group preserved with `hidden md:flex`.

4. **Form Inputs & iOS Safari Zoom Guard (`Contact.tsx`)**:
   - Upgraded input and textarea font-size to `text-base md:text-sm` and verification to `text-base md:text-xs`. This satisfies iOS Safari's 16px threshold and prevents viewport auto-zooming on focus.
   - Added `inputMode="numeric"` and `pattern="[0-9]*"` to the math verification challenge to summon the numeric keypad on touch devices.

5. **Navigation & Command Palette Mobile Touch Target Guard (`App.tsx`, `CommandPalette.tsx`)**:
   - Added a dedicated 44×44px Command Palette launch button (`Search` icon) in the mobile header so touch users can easily invoke the quick action launcher.
   - Added body scroll locking when the mobile hamburger navigation drawer is open.
   - Increased mobile navigation drawer touch targets to minimum 44px height (`min-h-[44px]`).
   - Adapted Command Palette modal padding, input font-size (16px to prevent zoom), item touch height (44px), and bottom helper text for touch devices without keyboard shortcut keys.

6. **Project Action Buttons & Initial State Polish (`Projects.tsx`, `SystemTopology.tsx`)**:
   - Disabled auto-selection / auto-expansion of SpeakIT in `Projects.tsx`: initialized `expandedProjectId` to `null` so all project cards are clean and collapsed on initial load.
   - Renamed `"Live App"` button label to `"Visit"` for a direct, clean CTA.
   - Renamed `"Inspect Architecture"` expander toggle to `"Read More"` (and `"Read Less"` when expanded).

7. **Hero Mobile Visual Flow & Direct CTA Placement (`Hero.tsx`)**:
   - On mobile viewports (`< 1024px`), positioned the primary CTAs (*"View Projects & Architecture"*, *"Let's Talk"*, *"Resume"*, and direct email) directly below the `ENGINEER_NODE` profile card (`lg:hidden`).
   - On desktop viewports (`>= 1024px`), CTAs remain in the left-hand column (`hidden lg:flex`), preserving exact baseline layout.

8. **Security Verification Challenge One-Liner (`Contact.tsx`)**:
   - Changed container from `flex-col sm:flex-row` to `flex-row items-center justify-between gap-2.5`.
   - Used responsive prompt (`Security: 3 + 4 = ?` on mobile, full text on `sm:`) with `w-20 sm:w-24 shrink-0` input to ensure the entire security challenge renders cleanly on a single horizontal row across all phone screens down to 320px.

9. **Dropdown Mobile Overflow Protection (`App.tsx`, `Projects.tsx`, `Skills.tsx`)**:
   - Mobile navigation drawer in `App.tsx`: Added `max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain` so the menu never overflows the viewport on short screens or in landscape orientation.
   - Filter dropdowns in `Projects.tsx` and `Skills.tsx`: Added `w-full max-w-full truncate` containment to prevent any select picker overflowing horizontally.

10. **Clean Mobile Hamburger Menu Naming (`App.tsx`)**:
    - Removed code comments/numbers (`// 00.`, `// 01.`, etc.) from mobile navigation drawer items.
    - Updated items to clean, standard text: `Home`, `About`, `Skills`, `Projects`, `Journey`, `Contact`, `Download Resume (PDF)`.

11. **URL Visibility & Deep-Dive Tab Overflow Fix (`Projects.tsx`)**:
    - Removed raw domain badges (`speakit.mohitur.com`, `editor.mohitur.com`) from project card title headers.
    - Changed CTA in Production Highlights tab from `Open Live Deployment (domain)` to clean `Open Live Deployment`.
    - Added `overflow-x-auto no-scrollbar max-w-full pb-1` with `whitespace-nowrap shrink-0` to the architectural deep-dive tabs (*System Flow & Pipeline*, *Engineering Rationale & Trade-offs*, *Production Highlights*) to completely prevent horizontal overflow on mobile screens.

12. **Footer Attribution Clean-up (`Footer.tsx`)**:
    - Removed `"Designed & Engineered with ❤️"` attribution line per user instruction, preserving copyright and security badge.
    - Cleaned up unused `Heart` icon import.

13. **Desktop Regression Guard Verification**:
    - Executed `npm run test:desktop-regression`:
      - 1024px Viewport: **PASS (DIFF 0.0220%)**
      - 1280px Viewport: **PASS (DIFF 0.0176%)**
      - 1440px Viewport: **PASS (DIFF 0.0052%)**
      - 1920px Viewport: **PASS (DIFF 0.0039%)**
      - 1024px Fullpage: **PASS (DIFF 0.0008%)**
      - 1280px Fullpage: **PASS (DIFF 0.0029%)**
      - 1440px Fullpage: **PASS (DIFF 0.0057%)**
      - Command Palette State: **PASS (DIFF 0.0000%)**
      - Contact Error State: **PASS (DIFF 0.0000%)**
      - 404 Route: **PASS (DIFF 0.0000%)**
      - Styleguide Route: **PASS (DIFF 0.0000%)**


---

### Phase Mobile Dropdown & Architectural Tabs Overflow Fix: Complete

- **Issue Resolved**:
  - The project category filter, skills filter, and architectural navigation tabs in expanded project cards were causing right-side overflow on mobile and tablet screens.
  - On iOS/WebKit devices, `<select>` controls without explicit `box-sizing: border-box` could expand by their horizontal padding beyond 100% width, and font sizes below 16px triggered auto-zoom on focus.
  - Inside expanded project cards, the architectural navigation tabs ("Pipeline Flow", "Decisions & Trade-offs", "Production Highlights") wrapped alongside the metrics badge in an unconstrained flex row, pushing elements up to 715px across on mobile screens.

- **Changes Applied**:
  1. `src/components/sections/Projects.tsx`:
     - Added `box-border`, `min-w-0`, `overflow-hidden`, and explicit inline `boxSizing: 'border-box'` / `maxWidth: '100%'` to the mobile category filter dropdown.
     - Changed select font size from `text-xs` (12px) to `text-base sm:text-xs` (16px on mobile) to eliminate iOS Safari focus zoom.
     - Replaced the overflowing mobile tabs row inside expanded project cards with a clean, compact dropdown selector on mobile (`md:hidden`) with matching icons and zero rightward overflow.
     - Constrained tablet & desktop pills (`hidden md:flex`) with `min-w-0`, responsive label switching (`lg:hidden` / `lg:inline`), and placed the metrics badge on its own line below `lg:` (`self-start lg:self-auto`).
  2. `src/components/sections/Skills.tsx`:
     - Added identical `box-border`, `min-w-0`, `overflow-hidden`, and `text-base sm:text-xs` sizing to the tech stack filter dropdown.
  3. `src/index.css`:
     - Added global base safety rule: `select, input, textarea { box-sizing: border-box; max-width: 100%; }`.

- **Verification Results**:
  - Headless Chrome across all mobile viewports (320px, 360px, 375px, 390px, 412px, 430px, 768px):
    - `docScrollWidth === viewport.width` (0px horizontal overflow).
    - 0 overflowing DOM elements both before and after project card expansion.
  - Desktop Regression Guard (`npm run test:desktop-regression`):
    - 1024px Viewport: **PASS (DIFF 0.0220%)**
    - 1280px Viewport: **PASS (DIFF 0.0000%)**
    - 1440px Viewport: **PASS (DIFF 0.0000%)**
    - 1920px Viewport: **PASS (DIFF 0.0039%)**
    - 1024px Fullpage: **PASS (DIFF 0.0031%)**
    - 1280px Fullpage: **PASS (DIFF 0.0072%)**
    - 1440px Fullpage: **PASS (DIFF 0.0018%)**
    - Command Palette: **PASS (DIFF 0.0000%)**
    - Contact Error: **PASS (DIFF 0.0000%)**
    - 404 Route: **PASS (DIFF 0.0000%)**
    - Styleguide Route: **PASS (DIFF 0.0043%)**
    - Overall: **100% PASSED**.


---

### Update: Mobile Header Dark Mode Toggle & Brand Name One-Liner

- **Issue Addressed**:
  - Top bar on mobile had 3 control buttons crowding the user's name, causing "Mohd Mohitur Rahaman" to wrap into 2 lines on small screens.
  - The dark mode toggle button needed to be moved into the mobile hamburger menu so the top navigation remains spacious and uncluttered.

- **Changes Applied**:
  - `src/App.tsx`:
    - Header theme button scoped to desktop only (`hidden md:flex`), preserving desktop layout pixel-identically.
    - Added dedicated theme toggle row inside the mobile hamburger menu dropdown (`min-h-[44px]`), displaying the active Sun/Moon icon, label, and "Dark" / "Light" badge.
    - Set the top header brand link and name to `min-w-0 shrink whitespace-nowrap text-sm sm:text-base md:text-lg truncate`, guaranteeing the full name stays on a single line ("one-liner") on all mobile devices (320px–430px) without line wraps.

- **Verification**:
  - Mobile viewports (320px, 360px, 375px, 390px): Name height = 20px (single line confirmed).
  - Theme toggle functionality verified inside mobile hamburger menu.
  - Desktop regression test passed 100% across all viewports and states.


---

### Update: Mobile Header Brand Name Font Size Enhancement

- **Changes Applied**:
  - `src/App.tsx`:
    - Updated mobile brand name font size to `text-[17px] sm:text-lg`.
    - At 17px, the full name "Mohd Mohitur Rahaman" is ~21% larger and more prominent while remaining completely on a single line (height = 28px) with 0 line wraps on all mobile devices (360px–430px).
    - Preserved `truncate` and `whitespace-nowrap` for ultra-narrow screens (320px).
    - On tablet and desktop (`sm:` / `md:`), smoothly scales to `text-lg` (18px), matching the desktop baseline.

- **Verification**:
  - Verified across 320px, 360px, 375px, 390px, 412px, 430px: 100% single line confirmed, no truncation above 360px.
  - Desktop Regression Guard: **100% PASSED** (0 visual diffs).
