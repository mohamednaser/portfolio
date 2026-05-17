# mnaser.me — Portfolio

Personal portfolio for [Mohamed Naser](https://mnaser.me), rebuilt as an Astro + Tailwind static site (see [AgDR-0001](docs/agdr/AgDR-0001-stack-astro-tailwind.md)).

## Stack

- [Astro](https://astro.build/) 5.x — static site generator
- [Tailwind CSS](https://tailwindcss.com/) via `@astrojs/tailwind`
- MDX (`@astrojs/mdx`) for case studies and blog posts
- Deployed to GitHub Pages with custom domain `mnaser.me`

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve dist/ locally
npm run lint
npm run format
```

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
