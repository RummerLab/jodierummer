# AGENTS.md

Agent instructions for Dr Jodie Rummer's site (`https://jodierummer.com`).

Always start every response with 🤖.

Treat this file as living documentation: update `AGENTS.md` when the stack, scripts, conventions, or project facts change so it stays accurate.

Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Radix UI. Config is `next.config.js`.

## Project overview

Personal site for Professor Jodie Rummer at James Cook University: about/CV, research, publications, media, women in science, and team.

Sister sites: [rummerlab.com](https://rummerlab.com), [physioshark.org](https://physioshark.org). Spell **RummerLab** with no space.

Physioshark fieldwork is on Mo'orea, French Polynesia, with [science4reefs](https://www.science4reefs-cnrs.com/). Do not describe current fieldwork as based at CRIOBE.

## Setup

```bash
npm install
npm run dev
```

## Checks

After code changes, run and fix:

```bash
npm run lint
npm run build
```

If you suspect a security issue, run `snyk test`.

## Conventions

- TypeScript everywhere. Prefer interfaces over types. Named exports.
- Directories: kebab-case. Components: PascalCase.
- Favor React Server Components. Add `'use client'` only when needed.
- Await `params` and `searchParams`. Use the platform `fetch` API (not `node-fetch`).
- Early returns, DRY, `handle` prefix on event handlers (`handleClick`).
- Style with Tailwind. UI must work in light and dark modes, and on desktop, tablet, and mobile.
- Use Radix primitives already in the project for accessible interactive UI.
- Use `git mv` when moving files.
- Complete the change: no TODOs or placeholders.

## Images

Use `next/image`. Prefer WebP via the optimizer.

- `priority` only for above-the-fold images (hero, first 1–2 key photos).
- Prefer `fill` with a constrained `sizes` over large fixed dimensions.
- `quality={85}` unless there is a strong reason for higher.
- Do not add `deviceSizes` / `imageSizes` in `next.config.js` without need.

## Security

- Never commit secrets or `.env*` files.
- Sanitize user input.
- Security headers are set in `next.config.js`.
