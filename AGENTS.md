# AGENTS.md

Instructions for coding agents working on Dr Jodie Rummer's site (`https://jodierummer.com`).

Always start every response with 🤖.

This is a Next.js 16 (App Router) + React 19 TypeScript site. Designs must work in light and dark modes and on desktop, tablet, and mobile.

- Do not use `node-fetch`. Use the Next.js `fetch` API.
- Always use `git mv` when moving files.
- Always spell **RummerLab** without a space (not "Rummer Lab").

## Project overview

Personal site for Professor Jodie Rummer (James Cook University): research, publications, CV, media, women in science, and team.

Related sites: [rummerlab.com](https://rummerlab.com), [physioshark.org](https://physioshark.org).

## Setup commands

```bash
npm install
npm run dev
```

## Testing instructions

Run these after any code changes, and fix failures before finishing:

```bash
npm run lint
npm run build
```

## Code style

- Use TypeScript for all code; prefer interfaces over types.
- Minimize `'use client'`; favor React Server Components.
- Use early returns and follow DRY.
- Directories: kebab-case (`components/research-section`).
- React components: PascalCase (`HeroSection.tsx`).
- Favor named exports for components and utilities.

## Next.js and React

- Use `cache: 'force-cache'` or `'no-store'` explicitly on fetch requests.
- Use SEO-optimized metadata (`generateMetadata` in layouts/pages).
- Preload important resources (hero images, fonts).
- Use `Suspense` for async work and lazy loading.
- Favor `useOptimistic` and `useFormStatus` for mutations and forms.
- Minimize client-side state; prefer URL state (`nuqs`) when needed.
- Do not use `getStaticProps` (Pages Router). This project uses the App Router.

## UI, a11y, and performance

- Tailwind, mobile-first. Use Shadcn UI and Radix for accessible components.
- Interactive elements must be keyboard-accessible.
- Prioritize readability: large text, spacing, high contrast.
- Semantic HTML, WCAG 2.1 contrast, correct ARIA on custom components.
- Optimize images with Next.js `<Image>` (prefer WebP). Lazy-load non-critical UI. Dynamic-import heavy components.
- Prefer built-in Next.js features over new third-party dependencies.
- Use `next/font` to reduce layout shift.

## Security

- Sanitize user inputs to prevent XSS.
- Use error boundaries for UI failures.
- Store secrets in environment variables; never commit them.
- Security headers are configured in `next.config.js`.
