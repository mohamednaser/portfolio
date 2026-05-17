# mnaser.me — Portfolio

Personal portfolio for [Mohamed Naser](https://mnaser.me), rebuilt as an Astro + Tailwind static site (see [AgDR-0001](docs/agdr/AgDR-0001-stack-astro-tailwind.md)).

## Stack

- [Astro](https://astro.build/) 5.x — static site generator
- [Tailwind CSS](https://tailwindcss.com/) via `@astrojs/tailwind`
- MDX (`@astrojs/mdx`) for case studies and blog posts
- Deployed to GitHub Pages with custom domain `mnaser.me`

## Development

Use **Node 20 LTS** or **Node 22+**. Node 21 is unsupported by Astro and will show `EBADENGINE` warnings (CI uses Node 20).

```bash
nvm use    # or: n 20 / brew link node@20
npm install
npm run dev      # http://localhost:4321 — full site for local testing
npm run build    # outputs to dist/
npm run preview  # serve production build locally
npm run lint
npm run format
```

### Pages to smoke-test locally

| Route | Content |
|-------|---------|
| `/` | Hero, selected project cards, testimonials preview |
| `/about` | Bio arc, experience, all 9 testimonials |
| `/projects` | Public repos |
| `/blog` | Article teasers (Medium-style cards), `/rss.xml` |
| `/contact` | mailto (no PHP) |
| Toggle theme | Header moon/sun control |

## Repository layout

| Path | Purpose |
|------|---------|
| `src/` | Astro pages, layouts, components |
| `public/` | Static assets (`CNAME`, `cv.pdf`, favicon) |
| `legacy/` | Previous ThemeForest HTML site (reference until cutover) |
| `docs/agdr/` | Agent Decision Records |

## Deployment

Production still serves the legacy site from `master` until the refactor epic ([#1](https://github.com/mohamednaser/portfolio/issues/1)) cuts over to `main`. This branch (`chore/GH-3-scaffold-astro-tailwind-ci`) introduces the new stack alongside `legacy/`.

GitHub Actions (`.github/workflows/ci.yml`) runs `npm ci`, `npm run lint`, and `npm run build` on every pull request.

## License

TBD — see issue tracker.
