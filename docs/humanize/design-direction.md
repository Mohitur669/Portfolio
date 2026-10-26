# Design Direction: Technical Journal & Engineering Workbench

## 1. Aesthetic Vision
A calm, legible, editorial technical portfolio that reflects an engineer with a mathematical background. It borrows from technical laboratory notebooks, mathematical monographs, and clean systems architecture dashboards.

---

## 2. Typography
- **Headings & Display:** Newsreader (Editorial Serif) paired with Inter Display for crisp mathematical and technical headers.
- **Body:** Inter (Neo-grotesque Sans-Serif), optimized for sustained reading and high legibility across screens.
- **Monospace:** JetBrains Mono for system metrics, endpoints, and architectural annotations.
- **Self-Hosted:** Fonts are hosted locally in `/public/fonts/` as `.woff2` files to prevent third-party font tracking and reduce layout shifts.

---

## 3. Color Tokens & Theme Architecture
- **Light Theme (Paper Journal):**
  - Background: `#f8fafc` / `#ffffff`
  - Text Primary: `#0f172a` (Slate 900)
  - Text Secondary: `#334155` (Slate 700)
  - Muted: `#64748b` (Slate 500)
- **Dark Theme (Deep Slate / Obsidian):**
  - Canvas: `#111215` (Deep Obsidian)
  - Elevated Card: `#161922`
  - Text Primary: `#f4f4f6` (17.05:1 contrast)
  - Text Secondary: `#e2e4e9` (14.72:1 contrast)
  - Muted Text: `#cbd5e1` (12.62:1 contrast)

---

## 4. Layout & Interaction Model
- **Hero:** Side-by-side presentation on desktop: personal narrative on the left, authenticated profile portrait card with location and social links on the right.
- **Architecture Stepper:** Dedicated `#architecture` section walking through SpeakIT, Sync Code, Olympic Query, and Web Scraper pipelines with explicit technical trade-offs.
- **Project Inspector:** Filterable card grid with expandable modal details, pipeline flowcharts, decisions, and constraints.
- **About:** Permanent profile card with `/img/about.webp` cutout, Kolkata location, and academic field note.
- **Contact:** Single-line scrollable text input (`#contact-message`) with mathematical verification challenge.
