# dev-rafi

Personal portfolio for **Tanvir Hasan** — Senior Backend Software Engineer, Cloud-Native & Distributed Systems.

Live: https://Rafi-201.github.io/dev-rafi

## Stack

React 18 · TypeScript · Vite 6 · Tailwind CSS v4 · framer-motion · lucide-react / react-icons

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run lint     # eslint
npm run preview  # serve the production build locally
```

## Editing content

All copy lives in `src/data/` — components read from it, so you never edit JSX to
update the site:

| File | What it holds |
| --- | --- |
| `data/profile.ts` | Name, role, contact links, resume path, hero metrics, nav |
| `data/experience.ts` | Roles, education, leadership |
| `data/projects.ts` | Case studies (problem / approach / results) and side projects |
| `data/skills.ts` | Skill groups and their icons |

Design tokens (colours, fonts) are defined in the `@theme` block at the top of
`src/index.css`. Tailwind v4 reads its config from CSS — there is no
`tailwind.config.js`.

## Before you ship — outstanding TODOs

Search the repo for `TODO(rafi)`:

1. **`src/data/profile.ts`** — confirm the LinkedIn URL; add a Calendly link to
   enable the "Book a call" card.
2. **`src/data/projects.ts`** — add the GitHub repo and a demo for the
   multi-agent platform. This is the highest-value missing link on the site.
3. **`src/components/Contact.tsx`** — paste a free
   [Web3Forms](https://web3forms.com) access key into `WEB3FORMS_ACCESS_KEY`.
   Until then the form falls back to opening a pre-filled email.
4. **`public/og-image.png`** — re-export from `og-image.svg` whenever the
   headline metrics change (headless Chrome/Edge `--screenshot` at 1200×630).
5. **`public/tanvir-hasan-resume.pdf`** — replace whenever the resume changes.
6. **`public/llms.txt`** — plain-text profile for AI assistants and recruiter
   tools. Hand-written, so update it alongside `src/data/*.ts`.

## Deployment

Pushing to `master` triggers `.github/workflows/cd.yml`, which builds and
publishes `dist/` via the official GitHub Pages actions.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub
Actions**.
