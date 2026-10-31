# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Bill Syahputra (billsyah.com). Plain vanilla JS + Vite 7 — no framework, no TypeScript, no test suite, no linter.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the built `dist/`

## Architecture

**Multi-page app, not an SPA.** `vite.config.js` declares two Rollup inputs, and each one is a separate HTML page:
- `index.html` → `src/index.js` (home page)
- `resume/index.html` → `resume/resume.js` (resume page, served at `/resume/`)

Navigation between pages uses plain `<a href="/">` / `<a href="/resume/">` links, so there is no client-side router. To add a page, create `<name>/index.html` plus its entry script and register it in `rollupOptions.input`.

**Rendering pattern.** Each entry script builds the whole page in one template literal and assigns it to `document.querySelector('#app').innerHTML`. Components in `src/components/` are functions that return HTML strings and are interpolated with `${Heading()}`. Components have no state, props or event handling.

**Styling.** Each component imports its own stylesheet from `src/styles/` (for example, `Heading.js` imports `heading.css`), so Vite bundles CSS along with JS imports. Global styles live in `src/styles/index.css` (home) and `src/styles/resume.css` (resume). Page content, including all resume text, is hardcoded in the entry scripts.

**Assets.** Images are imported through JS (`import myImage from './assets/profile.png'`) so Vite fingerprints them. Footer icons are inlined as base64 data URIs.

## Known issues / gotchas

- **The build currently fails.** `src/components/ResumeDownload.js` imports `../assets/resume.pdf`, but `.gitignore` excludes `resume.pdf`, and the only tracked copy is `public/resume.pdf`. Either put a copy at `src/assets/resume.pdf` or change the link to the public path `/resume.pdf` (no import).
- The `<link rel="stylesheet">` and favicon paths in `index.html` (`style/index.css`, `./assets/img/...`) and `resume/index.html` (`./src/styles/resume.css`) point to files that don't exist. Vite only warns about them, and styles reach the page through JS imports anyway.
- `src/components/PersonalLink.js` is an older version of `LinkFooter.js` and isn't imported anywhere.
