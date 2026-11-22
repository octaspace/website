# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the marketing landing page for **OctaSpace** (a decentralized GPU cloud / compute platform), built on top of the "Launch UI" Next.js template (see `package.json` name `launch-ui` and `components/logos/launch-ui.tsx`). It is a static site: Next.js App Router with `output: 'export'` in `next.config.mjs`, deployed as static HTML/JS (see `.github/workflows/gh-pages.yml`, which builds and publishes `./out` to GitHub Pages on tag push `v*`).

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # next build (static export to ./out); postbuild runs next-sitemap
npm run start    # next start (only useful for local export preview; not used in prod)
npm run lint     # next lint
```

There is no test suite configured in this repo.

Node/GPU imagery/video assets live in `public/img/` (mp4s, screenshots) and are referenced directly with absolute `/img/...` paths — no image optimization is available since `images.unoptimized: true` (required for static export).

## Architecture

### Section components

`components/sections/*` is organized by **section category** (`hero/`, `feature/`, `bento-grid/`, `pricing/`, `navbar/`, `footer/`, `cta/`, `tabs/`, `stats/`, `items/`). The Launch UI template shipped several interchangeable variants per category; only the ones the site uses are kept (the rest were deleted, recover them from git history or the Launch UI template if a new look is wanted). Sections take their content as required props from `app/page.tsx`; they carry no placeholder defaults.

`app/layout.tsx` renders the shared chrome for every page: the `octa` brand wrapper, `Navbar` (`navbar/sticky`) and `Footer` (`footer/default`). Pages render only their `<main>`.

All outbound URLs (console, docs, render, socials) and the API base live in `config/site.ts` (`siteConfig.console.*`, `siteConfig.links.*`, `siteConfig.apiUrl`). The user panel is `https://console.octa.space` (was `cube.octa.computer`); OctaRender links go to `console.octa.space/render` too, not to the old `render.octa.space` landing.

`components/ui/*` holds the shared primitives these sections are built from (`Mockup`/`MockupFrame`, `Screenshot`, `Section`, `Navbar`, `PricingColumn`, `Tile`, etc.), plus shadcn/ui-style primitives (`button`, `sheet`, `tabs`). `components.json` configures shadcn (`style: new-york`, base color `zinc`, no class prefix); use `npx shadcn` conventions if adding new primitives.

`components/illustrations/*` and `components/logos/*` are decorative SVG/visual components (illustrations used inside feature/bento sections; logos used in navbar/footer).

### Live network data flow

`lib/octa-network.ts` fetches live stats from the public API (`oas`, `https://api.octa.space`): `GET /network` (GPUs, nodes online, countries, TFLOPS, users, `render.frames_total`) and `GET /stats/gpu/current` (per GPU model: `available`, `available_price` percentiles in micro-USD per GPU-hour). Both in parallel with a 5s timeout; on any error it falls back to `fallbackOctaNetworkSnapshot`. Pricing cards show `available_price.p10` ("From") for models with GPUs available. Response shapes are `OasWeb.Schemas.Network` and `OasWeb.Schemas.GpuCurrent` in `../oas/lib/oas_web/schemas/`. `sessions.total` is not shown: it restarted with the new platform. `app/page.tsx` fetches the snapshot server-side once and passes it as `initialSnapshot` into `NetworkSnapshotProvider` (`components/sections/network-snapshot.tsx`), a client component that re-fetches on mount and exposes it via context to `NetworkStatsGridBoxed`, `NetworkStatsStrip` and `NetworkPricing`. With `output: 'export'` the server-side fetch happens only at build time; the client re-fetch keeps numbers live after deploy (the API sends `Access-Control-Allow-Origin: *`).

### Theming via CSS custom properties, not Tailwind config

Brand colors are defined as OKLCH custom properties per "brand" (ember, fire, ultraviolet, ice, titanium, emerald, holo, electro, octa) in `styles/theme.css`, with light values under `:root` and dark overrides under `.dark`. The root layout forces dark mode unconditionally (`<html class="dark" style={{ colorScheme: "dark" }}>` in `app/layout.tsx`); there is no light/dark toggle, and `Screenshot` takes a single `src`.

Pages/sections opt into a brand palette by overriding the semantic variables (`--brand`, `--brand-foreground`, `--background`, `--primary`, `--muted`, `--radius`) inline via `style` with `light-dark()` on the wrapping element: see `octaBrand` in `app/layout.tsx`, which maps the site to the `octa` brand (`--background-octa`, `--brand-octa`, etc). To reskin to a different brand, change that mapping rather than editing Tailwind classes throughout.

`app/globals.css` is the entry point importing `styles/utils.css`, `styles/pro.css`, `styles/theme.css`, `styles/terminal.css`, and `tw-animate-css`, then defines the Tailwind v4 `@theme inline` block that wires semantic CSS vars (`--color-*`, `--radius-*`, `--spacing-container*`) into Tailwind utilities. There is no `tailwind.config.ts`/`.js` — Tailwind v4 is configured entirely through CSS (`@theme` + `@custom-variant dark`).

### SEO

`config/site.ts` holds shared site metadata (name, url, description, social links) consumed by `app/layout.tsx` for the root `Metadata` (OpenGraph/Twitter/JSON-LD for `Organization` and `WebSite`) and per-page metadata overrides (`app/page.tsx`). The privacy policy lives in the docs (`siteConfig.links.privacy`), not on this site. `next-sitemap.config.js` generates `sitemap.xml`/`robots.txt` into `./out` as a `postbuild` step; keep its `exclude` list (currently `/api/*`, `/admin/*`) in sync with real routes under `app/`.

### Lint config duplication

Both a legacy `.eslintrc.json` (used by `next lint`) and a flat `eslint.config.js` exist with overlapping rules (`unused-imports`, `simple-import-sort`). Keep both in sync if changing lint rules, or check which one is actually active before assuming a rule change took effect.
