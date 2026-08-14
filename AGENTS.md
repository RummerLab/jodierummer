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
- Team data and featured papers come from RummerLab APIs (`https://rummerlab.com/api/scholar/ynWS968AAAAJ/team` and `https://rummerlab.com/api/papers`). Do not hardcode featured publications.
- Use `git mv` when moving files.
- Complete the change: no TODOs or placeholders. File a GitHub issue for follow-up work instead of leaving TODO comments or README notes.

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


## Dependency tooling (Next.js)

Follow current Next.js docs for ESLint and TypeScript — do **not** merge Dependabot majors that the Next.js / `typescript-eslint` stack does not support yet.

- **TypeScript**: stay on **5.9.x** (Next.js requires ≥5.1; `typescript-eslint` does not support TypeScript 7 yet).
- **ESLint**: stay on **9.x** with Next.js flat config (`eslint-config-next/core-web-vitals` + `typescript` via `defineConfig`). ESLint 10 still breaks plugins shipped through `eslint-config-next`.
- Before changing ESLint/TypeScript majors, read the Next.js ESLint docs, upgrading guide, and the target major migration guide.
- Prefer Dependabot `ignore` rules for `eslint` and `typescript` semver-major until official support lands.

### Framework upgrades

```bash
npx @next/codemod@canary upgrade latest
npx @tailwindcss/upgrade
```

After either upgrade: run `npm run lint` and `npm run build`, fix failures, and update this file if versions/scripts change.


## Pull requests

Before merging any pull request:

1. **Read all comments** on the PR — conversation comments, review comments (including those on specific lines), and bot comments. Address or acknowledge them. Do not merge while review feedback is unresolved.
2. **Wait for CI to complete successfully.** GitHub Actions (and other required checks) on the PR must finish and pass. Do not merge while checks are pending, failed, cancelled, or skipped when they are required. If CI fails, fix the cause and wait for a green run before merging.
