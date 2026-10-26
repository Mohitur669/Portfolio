# Humanization & Systems Upgrade Change Log

**Branch:** `master` (working tree)  
**Date:** 2026-10-26

---

## Changes Implemented

### 1. Academic Credentials Box & CTA Button Width Alignment
- Wrapped the academic credentials note (`KIIT Bhubaneswar • MCA (9.04 CGPA) • Malda College • B.Sc. Mathematics (8.92 CGPA)`) and the CTA buttons (`Read Project Notes`, `How Systems Work`, `Resume PDF`, `Mail icon`) in a unified `w-full max-w-2xl` container.
- Made the academic credentials box wider (`w-full`), fitting on a single, spacious row on desktop and tablet screens without awkward wrapping.
- Applied flexible sizing (`flex-1` on the 3 primary action buttons + `shrink-0` on the 44px email button) so the collective width of the 4 buttons **matches the exact width of the credentials box to the pixel** across all breakpoints.

### 2. Section Sequence Reordering
- Placed the Architecture section (`#architecture` / `SystemTopology`) directly **after** the About section ("From Proof-Based Mathematics to Backend Systems"):
  - Sequence: `Hero` → `About` → `Architecture` → `Skills` → `Projects` → `Experience` → `Contact`.
- Synchronized navigation order across desktop nav, mobile dropdown drawer, and Cmd+K command palette.

### 3. Profile Photo Enlargement
- **Hero Profile Card:** Enlarged the circular portrait cutout from 240px–272px (`w-60`/`w-68`) to **272px–384px** (`w-68`/`sm:w-80`/`md:w-88`/`xl:w-92`), and expanded the card container to `max-w-md sm:max-w-lg`.
- **About Section Profile Card:** Expanded the photo container from `max-w-sm` (384px) to **`max-w-md sm:max-w-lg lg:max-w-none`** with high-resolution rendering (`width="480" height="480"`), making the portrait prominent and clearly framed.

### 4. Execution Path Step-by-Step (Column-Wise Layout)
- Refactored "Execution Path (Step-by-Step)" in `src/components/hero/SystemTopology.tsx` from vertical rows into an interactive multi-column grid:
  - Responsive layout: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5`.
  - Each step is a distinct column featuring step badge (`01`–`04`), layer eyebrow, node name, subtitle, and directional progression arrow pointing to the next step.

### 5. Dark Mode Readability & Contrast Hardening
- Mapped `obsidian` and enhanced `slate` colors in `tailwind.config.js`.
- Configured high-contrast typographic tiers in `src/index.css`:
  - Headings: Pure White `#ffffff` (**18.92:1** contrast).
  - Body Copy: `#f0f6fc` (**17.39:1** on canvas, **15.89:1** on cards).
  - Secondary Text: `#e2e8f0` (**14.03:1** on cards).
  - Metadata: `#8b949e` (**6.15:1** on canvas).
  - Accents: Teal 300 (`#5eead4`, **12.79:1**) and Amber 300 (`#fcd34d`, **13.12:1**).

### 6. Technical Stack & Skills Overhaul (Removed Junior/Outdated Skills, Added Modern Backend/Cloud Stack, Fixed Broken Icons)
- **Removed Deprecated & Junior Items:**
  - Removed `SQLite`, `HTML5`, `CSS3`, `React`, and `Tableau` from technical stack items and domain groupings.
- **Fixed Broken Icons:**
  - Added official vector SVG `postgresql.svg` (`#4169E1`) to `public/img/tech/postgresql.svg` and updated paths to absolute root `/img/tech/...`.
  - Added official vector SVG `tailwind.svg` (`#06B6D4`) to `public/img/tech/tailwind.svg`.
  - Added `onError` fallback handling so no broken image box ever renders in the browser.
- **Added Official Icons & Restructured into 6 Core Domains:**
  1. **Languages/Core:** Java (`java.svg`), SQL (PostgreSQL) (`postgresql.svg`), Data Structures & Algorithms (`dsa.svg`), Object-Oriented Programming (OOP) (`oop.svg`).
  2. **Frameworks/Backend:** Spring Boot 3 (`spring.svg`), Spring MVC (`spring-mvc.svg`), Spring Security (`spring-security.svg`), Hibernate ORM (`hibernate.svg`), Microservices Architecture (`microservices.svg`).
  3. **Cloud/DevOps:** AWS (EC2, S3, Lambda, IAM, SNS, CloudWatch, Polly, Bedrock) (`aws.svg`), Docker (`docker.svg`), Git (`git.svg`), CI/CD (`cicd.svg`), Maven (`maven.svg`).
  4. **APIs/Web:** RESTful APIs (`rest-api.svg`), Swagger/OpenAPI (`swagger.svg`).
  5. **AI/GenAI:** AWS Bedrock (`bedrock.svg`), LLM API integration (ElevenLabs, Sarvam AI) (`llm.svg`).
  6. **Tools/Practices:** Postman (`postman.svg`), Agile/Scrum (`agile.svg`), Tailwind CSS (`tailwind.svg`).
- **Domain Taxonomy & Unit Tests Updated:**
  - `src/data/skills.ts`: Aligned domain taxonomy into the 6 designated categories.
  - `src/__tests__/data.test.ts`: Updated category assertions to verify all 6 domains and items.

### 7. Header Minimalism, Hero Email Button Label & SpeakIT Dual-Client Architecture
- **Minimal Top Bar Controls (`src/App.tsx`):**
  - Theme toggle redesigned as a clean, minimal icon button without a heavy border box (`p-2 text-slate-500 hover:text-ink`).
  - Resume button redesigned from a heavy black/white solid block (`bg-ink`) into an elegant, minimal outline link with subtle icon (`px-2.5 py-1.5 border font-mono text-xs text-slate-700`).
- **Hero Email Button Label (`src/components/hero/Hero.tsx`):**
  - Added visible text label `Email` alongside the `<Mail>` icon (`<Mail className="w-3.5 h-3.5" /> <span>Email</span>`).
  - Styled all 4 buttons with `flex-1`, equal height, and identical typography, maintaining exact pixel width parity with the credentials box above (`diff: 0px`).
- **SpeakIT Dual-Client Architecture (`src/data/topology.ts`, `src/data/projects.ts`, `src/components/hero/SystemTopology.tsx`):**
  - Specifically for SpeakIT, split the initial client tier into two distinct, dedicated client applications:
    1. **iOS Application:** Swift • SwiftUI • AVFoundation audio streaming buffers & background playback.
    2. **Web Application:** Web Audio API & browser client interface.
  - Added `node-client-ios` (`Smartphone` icon) and `node-client-web` (`Monitor` icon) to system topology and updated SpeakIT's execution path and project inspector stages.

### 8. About Section Portrait Color Restoration
- Removed the Tailwind CSS `filter grayscale contrast-[1.05]` filter on the portrait in [`About.tsx`](file:///Users/mohitur/Desktop/git-projects/portfolio/src/components/sections/About.tsx).
- The image now displays in its authentic, natural full color directly matching the hero portrait.

### 9. SpeakIT Pipeline 4-Column Layout & Tech Stack Unified Dropdown
- **SpeakIT Execution Path 4-Column Layout (`src/data/topology.ts`, `src/data/projects.ts`, `src/components/hero/SystemTopology.tsx`):**
  - Unified the execution path to **4 stages in a single row on desktop (`lg:grid-cols-4`)**, matching Sync Code and Olympic Query.
  - Stage 01 explicitly showcases both client applications: `iOS & Web Applications` (`node-client-speakit`, subtitle `iOS App (Swift) • Web App`), combining the native iOS client (SwiftUI/AVFoundation) and web client.
  - Progression: `01 iOS & Web Applications` → `02 Backend API Gateway` → `03 Speech Synthesis Service` → `04 Data & Storage Layer`.
- **Technologies & Working Stack Unified Dropdown Filter (`src/components/sections/Skills.tsx`):**
  - Replaced the horizontal row of category buttons on desktop with a clean, unified `<select id="tech-stack-category-filter">` dropdown matching the mobile pattern across all viewports.
  - Styled with custom filter icon, monospace typography, chevron indicator, and immediate interactive card filtering.

### 10. Contact Message Field Height & Individual Service Breakdown for AWS & AI/GenAI
- **Contact Message Field Height (`src/components/sections/Contact.tsx`):**
  - Maintained the single-line scrollable text `<input id="contact-message" type="text" ... />` while expanding its vertical height to `min-h-[64px] sm:min-h-[72px]` with `py-4 sm:py-5`, providing generous vertical presence.
- **AI/GenAI Stack Breakdown (`src/components/sections/Skills.tsx`, `src/data/skills.ts`):**
  - Replaced the grouped `LLM API integration (ElevenLabs, Sarvam AI)` card with dedicated, distinct cards and icons:
    1. **AWS Bedrock:** Enterprise foundation model deployment (`bedrock.svg`).
    2. **LLM API Integration:** Streaming completions, multi-model agentic pipelines (`llm.svg`).
    3. **ElevenLabs:** Neural speech synthesis, streaming audio generation (`elevenlabs.svg`).
    4. **Sarvam AI:** Indic language foundation models, regional speech synthesis (`sarvam.svg`).
- **AWS Cloud Stack Breakdown (`src/components/sections/Skills.tsx`, `src/data/skills.ts`):**
  - Replaced the parenthetical string `AWS (EC2, S3, Lambda, IAM, SNS, CloudWatch, Polly, Bedrock)` with individual, dedicated cards and vector icons:
    1. **AWS EC2:** Virtual compute instances (`aws-ec2.svg`).
    2. **AWS S3:** Scalable object storage and streaming buffers (`aws-s3.svg`).
    3. **AWS Lambda:** Serverless event-driven compute (`aws-lambda.svg`).
    4. **AWS IAM:** Least-privilege role policies and credentials (`aws-iam.svg`).
    5. **AWS SNS:** Decoupled pub/sub messaging and notifications (`aws-sns.svg`).
    6. **AWS CloudWatch:** Metrics, logs, and alarms observability (`aws-cloudwatch.svg`).
    7. **AWS Polly:** Text-to-speech voice synthesis (`aws-polly.svg`).
    8. Plus `Docker`, `Git`, `CI/CD`, and `Maven`.

### 11. Project Previews Repair, Mobile Hero Photo Priority, Agile Removal & CGPA Placement
- **Project Previews Repair (`src/data/projects.ts`, `src/components/sections/Projects.tsx`, `public/img/`):**
  - Resolved 404 broken image paths by connecting actual image assets (`/img/sync-code.webp`, `/img/olympic.webp`, `/img/amazon.webp`, `/img/covid19.webp`) and creating aliases.
  - Removed the `filter grayscale contrast-[1.05]` filter on project preview thumbnails in [`Projects.tsx`](file:///Users/mohitur/Desktop/git-projects/portfolio/src/components/sections/Projects.tsx), rendering screenshots in full vibrant color.
  - Verified in browser: All 5 project previews render with status 200 and full resolution (904px–1280px).
- **Mobile Hero Profile Photo Position (`src/components/hero/Hero.tsx`):**
  - Updated grid column ordering so that on mobile screens (`< lg`), the hero profile photo card is positioned on top (`order-1 lg:order-2`), while the headline, value statement, credentials, and CTAs appear right below it (`order-2 lg:order-1`).
- **Agile & Scrum Removal from Tech Stack (`src/components/sections/Skills.tsx`, `src/data/skills.ts`):**
  - Completely removed `Agile/Scrum` from `TECH_STACK_ITEMS` and `SKILL_CATEGORIES`.
- **CGPA Selective Removal (`src/components/hero/Hero.tsx`):**
  - Removed CGPA scores from the `#home` intro credentials box (`KIIT Bhubaneswar • Master of Computer Applications (MCA) • Malda College • B.Sc. Mathematics (Hons)`).
  - Preserved full official CGPA scores in the dedicated Education & Experience section (`#experience`) with `CGPA: 9.04 / 10` for KIIT MCA and `CGPA: 8.92 / 10` for Malda College B.Sc Mathematics.

### 12. Profile Photos Significant Upscaling
- **Hero Profile Cutout (`src/components/hero/Hero.tsx`):**
  - Expanded circular frame to explicit high-resolution sizes:
    - Mobile (360px–390px): **`280px × 280px`** (prominently centered at the top of the mobile screen).
    - Tablet (768px): **`340px–380px`**.
    - Desktop (1024px): **`360px × 360px`**.
    - Large Desktop (1280px–1440px): **`410px × 410px`** (verified in Chrome).
  - Expanded card container to `max-w-md sm:max-w-lg lg:max-w-xl`.
- **About Section Profile Photo (`src/components/sections/About.tsx`):**
  - Expanded container to `max-w-lg sm:max-w-xl lg:max-w-none` with high-resolution rendering (`width="540" height="540"`), measuring **`441px × 441px`** on desktop.

### 13. Verification & Tests
- `npx tsc --noEmit`: 0 errors (PASS).
- `npm test`: 6 / 6 Vitest tests passed (PASS).
- `npm run build`: Clean production build (PASS).
- `node scripts/contrast-check.mjs`: 11 / 11 checks passed (PASS).
- `node scripts/slop-scan.mjs`: 0 violations (PASS).
- `node scripts/e2e-humanize.mjs`: 5 / 5 viewports passed in light & dark mode (PASS).
- Playwright Verification:
  - Top bar resume button is minimal (no `bg-ink`).
  - Hero email button displays visible text label `Email`.
  - Credentials box and CTAs container exact width match (`diff: 0px`).
  - SpeakIT pipeline displays both `iOS Application` and `Web Application`.
