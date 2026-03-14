# Portfolio (Astro + Tailwind + TypeScript)

## Setup

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` - local dev server
- `npm run build` - production build
- `npm run preview` - preview build
- `npm run check` - Astro type/content checks

## Structure

- `src/pages/index.astro`: home page
- `src/pages/projects/index.astro`: projects listing
- `src/pages/projects/[slug].astro`: one page per project
- `src/data/projects.ts`: centralized project content
- `src/layouts/BaseLayout.astro`: HTML shell
- `src/styles/global.css`: global style and theme
