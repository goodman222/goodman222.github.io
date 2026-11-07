# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site of a freelance web developer (Russian-language UI). Goal: win freelance orders and job offers by showcasing projects. Single landing page in a "bento grid" style: light theme, minimalism.

Stack: Nuxt 4 (Vue 3, `<script setup lang="ts">`) + Tailwind CSS 4 via `@tailwindcss/vite` (no `tailwind.config` — config lives in CSS). Deployed as a static site.

## Commands

```bash
npm install        # also runs `nuxt prepare` (generates .nuxt types)
npm run dev        # dev server on http://localhost:3000
npm run generate   # static build → .output/public (`dist` is a symlink to it)
npm run preview    # serve the production build
```

No tests or linter are configured. `npm run generate` is the check that everything compiles and prerenders.

## Architecture

- **Content is data-driven.** All texts, projects, services and contacts live in `app/data/site.ts` (typed `Project` / `Service`, `profile`, `contacts`). Components import from `~/data/site` and only render. Change content there, not in templates.
- **Design tokens** are defined once in the `@theme` block of `app/assets/css/main.css` (`--color-bg`, `--color-ink`, `--color-muted`, `--color-accent`, `--color-accent-soft`, `--radius-card`, font Onest). They become utilities like `bg-bg`, `text-ink`, `text-muted`, `bg-accent-soft`, `rounded-card`. Reuse them instead of hardcoded colors.
- **Shared component classes** (`.card`, `.btn`, `.btn-light`, `.tag`, `.label`) are in `@layer components` in the same file. Utilities override them (e.g. `card bg-ink`, `card !p-3`).
- **Page composition**: `app/app.vue` → `<NuxtPage/>` → `app/pages/index.vue`, which stacks the section components (`SiteHeader`, `HeroBento`, `ProjectsSection`, `ServicesSection`, `ContactSection`, `SiteFooter`). Components are auto-imported by Nuxt; data files are not, so import them explicitly.
- **Project cards**: `ProjectCard` renders `ProjectShot`: a tinted frame (`project.tint`) with a browser window (or phone frame if `device: 'phone'`) holding `project.image` from `public/projects/`. Desktop screenshots are shown whole (sized via container query units `cqw/cqh`); phone screenshots are cropped from the top. Missing/broken image → pseudo-content placeholder. `featured: true` makes the card full-width (md: 2 cols stacked, lg: 3 cols side-by-side). Cards without `url` are not links. Tint → Tailwind classes map in `ProjectShot.vue` must stay static strings (Tailwind scans source; don't build class names dynamically).
- Head/meta (title, description, `lang="ru"`, Google Fonts link) is in `nuxt.config.ts` → `app.head`.

## Other files

`v1-classic.html`, `v2-editorial.html`, `v3-bento.html` in the root are the original static design mockups (three options). Variant 3 (bento) was chosen and implemented; the others are kept only for reference.

## Conventions

- UI copy is in Russian.
- Mobile-first responsive layout with `sm:` / `md:` / `lg:` breakpoints; content width `max-w-[1200px]` with `px-4 sm:px-6` gutters.
