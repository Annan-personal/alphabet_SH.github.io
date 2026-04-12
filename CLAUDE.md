# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build → build/
npm run deploy     # Build + push to GitHub Pages (runs predeploy automatically)
npm test           # Jest tests in watch mode
```

## Architecture

This is a **Create React App** static site for Alphabet_SH, deployed to GitHub Pages at `https://annan-personal.github.io/alphabet_SH.github.io/`.

**Routing** is defined in `src/App.tsx`. `NavBar` and `Footer` wrap all routes globally. Routes:
- `/` → `pages/HomePage.tsx`
- `/products`, `/products/product1–6` → `pages/products/Product1–6.tsx`
- `/about`, `/contact` → `pages/About.tsx`, `pages/Contact.tsx`

**`src/components/`** — reusable sections composed into pages. Two layers:
- `ui/` — animated, visual-heavy primitives (Framer Motion): `lamp.tsx`, `flip-words.tsx`, `background-boxes.tsx`, `card-hover-effect.tsx`, `animated-testimonials.tsx`, `world-map.tsx`
- Top-level components — page sections like `NavigationPicture`, `ServiceSection`, `ProductSpec`, `AzumaSection`, `AkzoNobelSection`, etc.

**`src/lib/utils.ts`** — exports `cn()` (clsx + tailwind-merge) for conditional Tailwind class merging. Use this when building new components.

**Styling** uses Tailwind CSS 3. Custom CSS variables for colors are injected via a plugin in `tailwind.config.js`. Global base styles are in `src/index.css`.

**Images** live in two places:
- `src/resources/` — imported directly in component files
- `public/` — referenced by URL path (used in a few components)

**Deployment**: `npm run deploy` runs `gh-pages -d build`. The `homepage` field in `package.json` and `basename={process.env.PUBLIC_URL}` in the Router ensure correct asset paths on the subpath deployment.
