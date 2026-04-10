# Modernization Design

**Date:** 2026-04-07
**Project:** japan-lingo (Nihongo Navigator)
**Status:** Approved

## Overview

Upgrade the project to modern standards: patch the Next.js security vulnerability, migrate to Tailwind v4 (CSS-first config), add Biome for linting and formatting, tighten TypeScript build strictness, and remove v0.dev export artifacts.

## Section 1: Dependency & Config Fixes

- Upgrade Next.js from `15.2.6` to latest secure `15.x` patch
- Remove `ignoreBuildErrors: true` from `next.config.mjs` — TypeScript errors must fail the build
- Remove `images: { unoptimized: true }` from `next.config.mjs` — v0.dev artifact, not suitable for production
- Delete `styles/globals.css` — duplicate of `app/globals.css`, unused

## Section 2: Tailwind v4 Migration

Tailwind v4 is CSS-first — configuration moves entirely into CSS.

- Remove `tailwind.config.js`
- Update `postcss.config.mjs` to use `@tailwindcss/postcss` instead of the old `tailwindcss` PostCSS plugin
- In `app/globals.css`, replace `@tailwind base/components/utilities` with `@import "tailwindcss"`
- Move all theme tokens (colors, border radius, keyframes, animations) into a `@theme { }` block in `globals.css`
- Replace `tailwindcss-animate` — Tailwind v4 has built-in animation support via `tailwindcss/animate`
- Update shadcn/ui CSS variable references: v4 uses `--color-*` naming conventions, so the CSS custom properties in `globals.css` need to match the new convention
- Install: `tailwindcss@^4`, `@tailwindcss/postcss`; uninstall `tailwindcss-animate`

## Section 3: Biome Setup

Replace the absent ESLint/Prettier setup with Biome — a single Rust-based tool for both linting and formatting.

- Install `@biomejs/biome` as a dev dependency
- Create `biome.json` at project root:
  - Formatter: 2-space indent, double quotes, trailing commas (matches current code style)
  - Linter: recommended rules + React rules (no unused imports, no implicit `any`, basic a11y)
  - Import organizer enabled
- Add to `package.json` scripts:
  - `"lint": "biome lint ."`
  - `"format": "biome format --write ."`
  - `"check": "biome check --write ."` (primary daily-use command — lint + format together)
- Remove any ESLint packages if present (none currently installed, nothing to remove)

## Section 4: TypeScript Tightening

- `strict: true` is already set in `tsconfig.json` — no change needed
- Update `"target"` from `"ES6"` to `"ES2017"` — enables async/await without downleveling, matches modern browser baseline
- With `ignoreBuildErrors` removed, existing pages must pass type checking — audit confirms they are clean

## Out of Scope

- Switching to Vite (decided against — Next.js App Router is appropriate)
- Adding new pages or features
- Upgrading React (already on v19)
- Dark mode toggle (layout doesn't include ThemeProvider wiring yet)
