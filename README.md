# InTalent Asia — Modern Frontend Application

A production-ready, highly polished, colorful, and fully responsive **React (Vite + Tailwind CSS)** application for **InTalent Asia**, engineered for local and global hiring.

---

## 🚀 Key Highlights & Architectural Features

1. **Modular Component Architecture:**
   - `Navbar.jsx`: Sticky header with dynamic dark/light logo switching, mega-dropdown for 17+ services, quick telephone contact, and responsive mobile drawer.
   - `HeroVideo.jsx`: Embedded right below the sticky navbar. Features a high-definition recruitment video container with custom play/pause, scrub bar, mute/unmute, and fullscreen controls, backed by professional overlay typography and telemetry badges.
   - `Certifications.jsx`: Showcases official ISO certifications (ISO 9001, ISO 27001, ISO 27701, ISO 45001) and the Clutch 2026 Awards banner with official badges.
   - `RecruitmentApproach.jsx`: 4 core metrics (Successful Hires, Shortlist Turnaround, Repeat Business, Delivery Accuracy) and an interactive 5-step hiring process stepper.
   - `ValueProp.jsx`: Asymmetric bento-grid layout with corporate visuals, zero-cost-to-candidate badges, and specialized industry domain chips.
   - `Specialists.jsx`: 3 solution pillars (Talent Acquisition, Workforce Solutions, Business Solutions) with interactive category switching and a 20+ countries global markets matrix.
   - `InsightsAndFAQ.jsx`: 2026 thought leadership articles, high-conversion hiring banner, and expandable FAQ accordions.
   - `Footer.jsx`: Full official InTalent Asia representation, Sri Lanka headquarters details, policies, social links, and back-to-top button.
   - `ContactModal.jsx`: Priority talent brief modal with instant role consultation submission.

2. **Luxury Theme Switcher (Dark & Light Mode):**
   - Built on React Context API (`ThemeContext.jsx`) and Tailwind's `class` dark mode.
   - Rich dark palette: `#070F1E` (deep space background), `#0A192F` (elevated card surface), Royal Blue `#2563EB`, and Teal `#0D9488`.
   - Crisp light palette: Clean slate surfaces (`#F8FAFC`, `#FFFFFF`), balanced contrast, and vibrant accents.
   - Automatically switches official logo asset between light (`logo-light.webp`) and dark (`logo-dark.webp`).

3. **Content & Asset Fidelity:**
   - 100% authentic copy, headings, and structure extracted from the official InTalent Asia site.
   - All official ISO vector badges and Clutch award seals placed in `public/assets/`.
   - Clean variable naming in `src/data/content.js` (`ASSETS`) for effortless replacement with custom local files.

---

## 🛠️ Quick Start

```bash
# Navigate to the project directory
cd "C:\Users\Thila\.gemini\antigravity\scratch\intalent-asia"

# Start the Vite development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Asset Configuration

All images and placeholders are centrally managed in `src/data/content.js`:

```javascript
export const ASSETS = {
  LOGO_LIGHT: '/assets/logo-light.webp',
  LOGO_DARK: '/assets/logo-dark.webp',
  HERO_VIDEO_URL: 'https://...',
  HERO_VIDEO_POSTER: 'https://...',
  // ...easily swap with local files in /public/assets/
};
```
