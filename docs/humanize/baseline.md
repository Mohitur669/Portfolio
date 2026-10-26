# Baseline Audit & State of Portfolio

**Date:** 2026-10-26  
**Subject:** Mohd Mohitur Rahaman Portfolio (`https://mohitur.com/`)  
**Repository Branch:** `master` (HEAD `a1eb08f`)

---

## 1. Initial State Assessment

Prior to this intervention, the portfolio suffered from:
1. **Generic AI Output Characteristics:**
   - Overuse of generic, buzzword-heavy copy ("cutting-edge", "seamlessly orchestrating", "high-impact systems", "full-duplex streaming").
   - Lack of Mohd Mohitur Rahaman's distinctive personal voice: software engineer from Kolkata with an 8.92 CGPA Pure Mathematics degree from Malda College and a 9.04 CGPA MCA from KIIT Bhubaneswar.
2. **Readability & Dark Mode Contrast Issues:**
   - Low-contrast text labels (`text-slate-400` on `#0b0f19`) failing WCAG 2.2 contrast standards.
   - Text rendering lacked editorial hierarchy, relying heavily on standard neo-brutalist / generic tech SaaS gradients.
3. **Architecture Section Deficiencies:**
   - A generic "SYSTEM SCHEMATIC • LIVE DATA PATH" that simulated fake network packet animations rather than clearly explaining real architectural decisions and constraints.
4. **Interactive Form Inconsistencies:**
   - Contact form message field was rendered as a `<textarea>` instead of the user's required single-line scrollable `<input id="contact-message">`.

---

## 2. Technical Inventory

- **Framework:** React 18.3.1 + TypeScript 5.7.3 + Vite 6.1.0
- **Styling:** Tailwind CSS 3.4.17
- **Icons:** `lucide-react`
- **Testing:** Vitest 5.0.5 + Playwright 1.64.1
- **Deployment Target:** Vercel (`vercel.json`)
- **Canonical Domain:** `https://mohitur.com/` (with `https://portfolio.mohitur.com/` redirecting)

---

## 3. Core Baseline Metrics

- **Dark Mode Body Contrast:** Previously ~3.8:1 (FAILED WCAG AA).
- **Mobile Viewports (360px & 390px):** Layout suffered from wide tables and squeezed badges.
- **Rule 5 Compliance:** Profile card and photo in About section required permanent visibility across all responsive breakpoints.
- **AI Slop Count:** 14 phrases flagged across data and UI copy.
