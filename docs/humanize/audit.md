# Humanization & Architecture Audit

## 1. Voice and Tone Audit

| Area | Before (AI Slop / Generic) | After (Human, Honest, Specific) |
| :--- | :--- | :--- |
| **Hero Title** | "Architecting High-Throughput Cloud Backends & Distributed Systems" | "Software engineer based in Kolkata. I build backend systems and cloud services in Java, Spring Boot, and AWS, with a background in pure mathematics." |
| **About Narrative** | Generic claims about building scalable software and passion for tech. | Specific journey from Malda College (B.Sc Hons in Pure Math, 8.92 CGPA) to KIIT (MCA, 9.04 CGPA), grounding systems engineering in mathematical proof methods, invariants, and discrete math. |
| **Real-Time Editor** | "Seamless full-duplex socket streaming" | Honest trade-offs: "Maintained ephemeral room state entirely in Node.js server memory to keep keystroke latency low, rather than writing each edit to a database." |
| **SpeakIT Speech Platform** | "Revolutionary cross-platform audio intelligence" | Specific architecture: Unified Spring Boot backend serving both native Swift (iOS) and React (Web), using AWS S3 buffers for audio playback. |
| **Amazon Web Scraper** | "High-scale e-commerce intelligence" | Factual details: BeautifulSoup DOM extraction, User-Agent rotation to handle rate limits, exporting to Pandas CSV. 6 GitHub stars, 4 forks. |

---

## 2. Accessibility & Contrast Audit (WCAG 2.2)

- **Canvas Backgrounds:**
  - Light mode: `#f8fafc` / `#ffffff`
  - Dark mode: `#111215` (Deep Obsidian) / `#161922` (Card surface)
- **Contrast Ratios:**
  - Dark Mode Body Copy (`#f4f4f6` on `#111215`): **17.05:1** (Target: ≥ 7:1) — **PASS**
  - Dark Mode Secondary Labels (`#e2e4e9` on `#111215`): **14.72:1** (Target: ≥ 4.5:1) — **PASS**
  - Dark Mode Muted Text (`#cbd5e1` on `#111215`): **12.62:1** (Target: ≥ 3:1) — **PASS**
  - Light Mode Primary (`#0f172a` on `#ffffff`): **17.85:1** — **PASS**
  - Light Mode Secondary (`#334155` on `#ffffff`): **10.35:1** — **PASS**
  - Interactive Hit Targets: Min-height 44px (`min-h-[44px]`) on buttons, inputs, links.

---

## 3. SEO & Structured Data Audit

- Canonical Link: `https://mohitur.com/` verified in `<head>` and tested in Playwright.
- Title Tag: `Mohd Mohitur Rahaman — Backend & Cloud Systems Engineer`
- Schema.org: `ProfilePage` with `Person` as `mainEntity`, listing verified official handles (GitHub, LinkedIn, Twitter, Instagram).
- Open Graph & Twitter Cards: Configured with `@mohitur02` and verified URLs.
- Sitemap: `https://mohitur.com/sitemap.xml`
- Robots: Directs search engines to canonical sitemap.
