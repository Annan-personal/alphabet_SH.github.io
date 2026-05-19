# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> See also: `.clauderules` for mandatory agent constraints (TypeScript-only, no `any`, naming, async handling, file/component decomposition, workflow rules, language convention).

## Commands

```bash
npm start          # Vite dev server (default http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview the production build locally
npm run lint       # ESLint (flat config at eslint.config.mjs)
npm run lint:fix   # ESLint with --fix
npm run typecheck  # tsc --noEmit
npm run deploy     # Build + publish dist/ to GitHub Pages (runs predeploy automatically)
```

**ESLint setup**: ESLint 9 flat config with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. Key rules: `@typescript-eslint/no-explicit-any: error`, React Hooks rules-of-hooks/exhaustive-deps, unused vars warning (ignore prefix `_`).

## Architecture

This is a **Vite + React + TypeScript** static site for Alphabet_SH, deployed to GitHub Pages at `https://annan-personal.github.io/alphabet_SH.github.io/`.

**Routing** is defined in `src/App.tsx`. `NavBar` and `Footer` (plus `ScrollToTopButton`) wrap all routes globally. Routes:
- `/` → `pages/HomePage.tsx`
- `/services` → `pages/ServicesPage.tsx`
- `/products/product1–6` → `pages/products/Product1–6.tsx`
- `/about` → `pages/About.tsx`
- `/contact` → `pages/Contact.tsx`

The Router uses `basename={import.meta.env.BASE_URL}`, paired with `base: '/alphabet_SH.github.io/'` in `vite.config.ts`, so asset paths resolve correctly on the GitHub Pages subpath.

**`src/components/`** — reusable sections composed into pages. Two layers:
- `ui/` — animated, visual-heavy primitives (Framer Motion): `lamp.tsx`, `flip-words.tsx`, `background-boxes.tsx`, `card-hover-effect.tsx`, `animated-testimonials.tsx`, `world-map.tsx`
- Top-level components — page sections like `NavigationPicture`, `ServiceSection`, `ProductSpec`, `AzumaSection`, `AkzoNobelSection`, etc.

**`src/lib/utils.ts`** — exports `cn()` (clsx + tailwind-merge) for conditional Tailwind class merging. Use this when building new components.

**Styling** uses Tailwind CSS 3. Custom CSS variables for colors are injected via a plugin in `tailwind.config.js`. Global base styles are in `src/index.css`.

**Images** live in two places:
- `src/resources/` — imported directly in component files
- `public/` — referenced by URL path (used in a few components)

**Deployment**: `npm run deploy` runs `gh-pages -d dist`. The `base` in `vite.config.ts` and the Router `basename` together ensure correct asset paths on the subpath deployment.

## Design References

The site benchmarks against two existing players with overlapping product lines. When proposing layout, copy, information architecture, SEO patterns, or product page structure, consult these as reference points:

- **Phifer** (US) — https://www.phifer.com/
- **Gold-Screen** (CN) — https://www.gold-screen.com/
