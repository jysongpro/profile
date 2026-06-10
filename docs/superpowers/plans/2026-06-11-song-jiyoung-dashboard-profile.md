# Song Jiyoung Dashboard Profile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive React + Tailwind CSS dashboard-style profile homepage for Professor Song Jiyoung.

**Architecture:** A Vite React app with focused presentational components under `src/components`. Static profile imagery lives in `public/assets`, while shared content arrays and page composition live in `src/App.jsx`.

**Tech Stack:** React, Vite, Tailwind CSS, lucide-react, recharts, framer-motion.

---

## File Structure

- `package.json`: project scripts and dependencies.
- `index.html`: Vite HTML entry.
- `vite.config.js`: Vite React plugin config.
- `tailwind.config.js`: Tailwind content paths and brand tokens.
- `postcss.config.js`: Tailwind/PostCSS setup.
- `src/main.jsx`: React root mount.
- `src/App.jsx`: page composition and shared section wrapper.
- `src/index.css`: Tailwind layers, base styles, dot grid, glow utilities.
- `src/components/Header.jsx`: responsive navigation.
- `src/components/Hero.jsx`: data-dashboard hero with profile photo.
- `src/components/ProfileCards.jsx`: four summary cards.
- `src/components/ExpertiseDashboard.jsx`: radar chart and expertise table.
- `src/components/CurriculumRoadmap.jsx`: five-step roadmap.
- `src/components/Projects.jsx`: project cards.
- `src/components/Metrics.jsx`: visual metric counters.
- `src/components/Philosophy.jsx`: quote card.
- `src/components/Contact.jsx`: contact panel and CTAs.
- `src/components/Footer.jsx`: footer.
- `public/assets/bg.png`: reference background concept.
- `public/assets/profile.jpg`: Professor Song profile photo.

## Tasks

### Task 1: Scaffold Project

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/main.jsx`
- Create: `src/index.css`

- [ ] Add Vite, React, Tailwind, lucide-react, recharts, and framer-motion configuration.
- [ ] Add global dark background, Korean font fallback, dot grid, and reusable glow styles.
- [ ] Run `npm install`.

### Task 2: Copy Assets

**Files:**
- Create: `public/assets/bg.png`
- Create: `public/assets/profile.jpg`

- [ ] Copy the design concept image and personal photo into the app's public asset folder.
- [ ] Reference assets by `/assets/bg.png` and `/assets/profile.jpg`.

### Task 3: Build Components

**Files:**
- Create all files under `src/components`
- Modify: `src/App.jsx`

- [ ] Implement responsive Header with mobile menu.
- [ ] Implement Hero as a premium AI dashboard with profile image, skill bars, mini chart, and CTA buttons.
- [ ] Implement ProfileCards, ExpertiseDashboard, CurriculumRoadmap, Projects, Metrics, Philosophy, Contact, and Footer using Korean text.
- [ ] Use lucide icons, Recharts, and framer-motion where they improve clarity.

### Task 4: Verify

**Files:**
- Modify only if verification reveals layout issues.

- [ ] Run `npm run build`.
- [ ] Start `npm run dev`.
- [ ] Open local app in browser and check desktop/mobile responsiveness.
- [ ] Fix visible overflow, missing assets, or build errors.
