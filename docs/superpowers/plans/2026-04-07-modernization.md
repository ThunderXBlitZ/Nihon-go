# Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade japan-lingo to modern standards: patched Next.js, Tailwind v4, Biome, and strict TypeScript builds.

**Architecture:** Config-only changes — no application logic is touched. Each task is independently verifiable by running `npm run build` or `npm run dev`. The most complex change is the Tailwind v4 migration, which moves all theme config from `tailwind.config.js` into `app/globals.css` using the new CSS-first `@theme inline` syntax.

**Tech Stack:** Next.js 15 (App Router), React 19, Tailwind CSS v4, shadcn/ui, Biome 1.x, TypeScript 5

---

## Task 1: Dependency & Config Fixes

**Files:**
- Modify: `package.json`
- Modify: `next.config.mjs`
- Delete: `styles/globals.css`

- [ ] **Step 1: Upgrade Next.js and remove the unoptimized images flag**

Run:
```bash
npm install next@^15
```

Then open `next.config.mjs` and replace its entire content with:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig
```

- [ ] **Step 2: Delete the duplicate CSS file**

```bash
rm styles/globals.css
```

- [ ] **Step 3: Verify the build still passes**

```bash
npm run build
```

Expected: build succeeds, same 5 routes as before (`/`, `/_not-found`, `/hiragana`, `/practice`, `/vocabulary`)

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json next.config.mjs
git rm styles/globals.css
git commit -m "chore: upgrade Next.js, remove build escape hatches and unused CSS"
```

---

## Task 2: Tailwind v4 Migration

**Files:**
- Modify: `package.json`
- Modify: `postcss.config.mjs`
- Rewrite: `app/globals.css`
- Delete: `tailwind.config.js`

**Background:** Tailwind v4 is CSS-first. There is no `tailwind.config.js` — all theme tokens live in `app/globals.css` inside a `@theme inline { }` block. Colors use `oklch()` color space. Animations are handled by the `tw-animate-css` package instead of `tailwindcss-animate`.

- [ ] **Step 1: Swap Tailwind packages**

```bash
npm uninstall tailwindcss tailwindcss-animate
npm install tailwindcss@^4.0.0 @tailwindcss/postcss tw-animate-css
```

- [ ] **Step 2: Update postcss.config.mjs**

Replace the entire file content:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
export default config
```

- [ ] **Step 3: Rewrite app/globals.css**

Replace the entire file content. This preserves all existing color values (converted from HSL to oklch) and wires them into Tailwind v4's `@theme inline` system so utilities like `bg-background`, `text-primary`, `border-border` keep working:

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
}

@layer base {
  :root {
    --background: oklch(1 0 0);
    --foreground: oklch(0.145 0.004 264);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0.145 0.004 264);
    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.145 0.004 264);
    --primary: oklch(0.529 0.213 16);
    --primary-foreground: oklch(0.972 0.016 354);
    --secondary: oklch(0.961 0.002 264);
    --secondary-foreground: oklch(0.211 0.005 264);
    --muted: oklch(0.961 0.002 264);
    --muted-foreground: oklch(0.502 0.003 264);
    --accent: oklch(0.961 0.002 264);
    --accent-foreground: oklch(0.211 0.005 264);
    --destructive: oklch(0.628 0.23 29);
    --border: oklch(0.902 0.004 264);
    --input: oklch(0.902 0.004 264);
    --ring: oklch(0.529 0.213 16);
    --radius: 0.5rem;
  }

  .dark {
    --background: oklch(0.126 0.007 257);
    --foreground: oklch(0.961 0 0);
    --card: oklch(0.199 0.008 260);
    --card-foreground: oklch(0.961 0 0);
    --popover: oklch(0.185 0 0);
    --popover-foreground: oklch(0.961 0 0);
    --primary: oklch(0.529 0.213 16);
    --primary-foreground: oklch(0.972 0.016 354);
    --secondary: oklch(0.265 0.003 264);
    --secondary-foreground: oklch(0.988 0 0);
    --muted: oklch(0.265 0 0);
    --muted-foreground: oklch(0.669 0.005 264);
    --accent: oklch(0.253 0.007 42);
    --accent-foreground: oklch(0.988 0 0);
    --destructive: oklch(0.425 0.17 29);
    --border: oklch(0.265 0.003 264);
    --input: oklch(0.265 0.003 264);
    --ring: oklch(0.529 0.213 16);
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```

- [ ] **Step 4: Delete tailwind.config.js**

```bash
rm tailwind.config.js
```

- [ ] **Step 5: Verify the build passes**

```bash
npm run build
```

Expected: build succeeds with all 5 routes. If you see errors like `Unknown utility class`, a color token is missing from `@theme inline` — add the missing `--color-<name>: var(--<name>)` line to the `@theme inline` block.

- [ ] **Step 6: Spot-check the visual output**

```bash
npm run dev
```

Open `http://localhost:3000` in a browser. Verify:
- Landing page renders with the reddish-pink primary color on buttons
- `/hiragana` — cards render, tabs are visible
- `/practice` — quiz renders, buttons are styled

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json postcss.config.mjs app/globals.css
git rm tailwind.config.js
git commit -m "chore: migrate to Tailwind v4 with CSS-first config"
```

---

## Task 3: Biome Setup

**Files:**
- Create: `biome.json`
- Modify: `package.json`

- [ ] **Step 1: Install Biome**

```bash
npm install --save-dev @biomejs/biome@^1.9.0
```

- [ ] **Step 2: Create biome.json**

Create the file at the project root with this content:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": false,
    "ignore": ["node_modules", ".next", "public"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "trailingCommas": "all",
      "jsxQuoteStyle": "double"
    }
  }
}
```

- [ ] **Step 3: Add scripts to package.json**

In `package.json`, update the `"scripts"` block to:

```json
"scripts": {
  "build": "next build",
  "dev": "next dev",
  "start": "next start",
  "lint": "biome lint .",
  "format": "biome format --write .",
  "check": "biome check --write ."
}
```

- [ ] **Step 4: Run the initial check to see what needs fixing**

```bash
npx biome check .
```

This will report lint and formatting issues without writing changes. Review the output — most will be formatting (spacing, quotes, trailing commas). The `--write` flag on `check` auto-fixes safe issues.

- [ ] **Step 5: Auto-fix all safe issues**

```bash
npm run check
```

Expected: Biome formats all `.ts`/`.tsx`/`.js` files and reports any remaining lint errors that require manual attention. If there are `noUnusedVariables` or `noExplicitAny` errors in `components/ui/`, they may need minor fixes.

- [ ] **Step 6: Verify build still passes after Biome reformatting**

```bash
npm run build
```

Expected: build succeeds.

- [ ] **Step 7: Commit**

```bash
git add biome.json package.json package-lock.json
git add app/ components/ hooks/ lib/
git commit -m "chore: add Biome for linting and formatting, apply initial format pass"
```

---

## Task 4: TypeScript Target Update

**Files:**
- Modify: `tsconfig.json`

- [ ] **Step 1: Update the compiler target**

In `tsconfig.json`, change `"target": "ES6"` to `"target": "ES2017"`:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "target": "ES2017",
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 2: Verify build passes with strict type checking active**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors. If you see type errors, they were previously hidden by `ignoreBuildErrors: true` — fix them before proceeding.

- [ ] **Step 3: Commit**

```bash
git add tsconfig.json
git commit -m "chore: update TypeScript target to ES2017"
```

---

## Task 5: Final Verification

- [ ] **Step 1: Run full check**

```bash
npm run check && npm run build
```

Expected: Biome reports no errors, build succeeds.

- [ ] **Step 2: Start dev server and verify all pages**

```bash
npm run dev
```

Open these URLs and confirm each renders correctly:
- `http://localhost:3000` — landing page, buttons styled with primary color
- `http://localhost:3000/hiragana` — cards grid, tabs switch correctly
- `http://localhost:3000/vocabulary` — cards grid, search input visible
- `http://localhost:3000/practice` — quiz renders and is interactive

- [ ] **Step 3: Confirm no console errors in the browser DevTools**

Open DevTools → Console tab. There should be no red errors. Warnings about missing pages (`/katakana`, `/grammar`) are expected — those pages don't exist yet.
