# mnaser.me — portfolio & blog

Personal site of Mohamed Naser. Astro 5 + Tailwind 3, TypeScript, MDX content
collections. Static output, deployed to GitHub Pages on push to `master`
(custom domain `mnaser.me` via `public/CNAME`).

## Commands

```bash
npm ci             # install (CI uses this — keep package-lock.json committed)
npm run dev        # local dev server
npm run build      # static build into dist/ — run before every push
npm run check      # astro check (types, content schema)
npm run lint       # eslint
npm run format     # prettier --write .
```

CI (`.github/workflows/ci.yml`) runs `lint` + `build` and asserts
`dist/CNAME` contains `mnaser.me`. `deploy.yml` publishes `dist/` to Pages.
A red build means the site does not deploy — always build locally first.

## Layout

- `src/content.config.ts` — collection schemas (`blog`, `case-studies`, `projects`). Source of truth for frontmatter; read it before adding content.
- `src/content/blog/*.mdx` — English posts; `src/content/blog/ar/<slug>.mdx` is the Arabic twin of the same slug. `src/content/projects` follows the same layout.
- `src/components/posts/*.astro` — long-form article bodies (raw HTML + inline SVG) imported by thin MDX wrappers. Use this when a post carries custom markup MDX would choke on. Arabic bodies sit in `src/components/posts/ar/`.
- `src/lib/blog.ts` — locale-aware post lookup (`getBlogPosts`, `blogSlug`, `blogPath`). Mirrors `src/lib/projects.ts`. Never call `getCollection('blog')` in a page; it ignores locale.
- `src/pages/` — routes. `blog/[slug].astro` and `ar/blog/[slug].astro` both render `components/pages/BlogPostPage.astro`; `rss.xml.ts` and `ar/rss.xml.ts` build the two feeds.
- `src/layouts/BaseLayout.astro` — head, SEO tags, JSON-LD, dark-mode toggle.
- `src/site.config.ts` — name, URL, description, social links, nav. Change site-wide facts here, never hardcode them in pages.
- `src/data/*.ts` — experience, skills, companies, testimonials.
- `public/` — static assets served at root (`/images/blog/<slug>/...`), plus `CNAME`.

## Conventions

- **Dark mode is class-based** (`darkMode: 'class'`). The layout sets `html.dark` **and** `html[data-theme]`. Custom CSS must target `html.dark <scope>` — a bare `@media (prefers-color-scheme: dark)` block will not follow the site's toggle.
- **Scope custom post CSS** under a wrapper class (e.g. `.lynk-post`). Article CSS lives in `src/styles/posts/<name>.css`, imported by both the English and Arabic body components; never restyle `body`, `*`, or bare element selectors globally.
- **Arabic bodies also import `src/styles/posts/rtl.css`**, which mirrors the physical-direction rules (`border-left`, `padding-left`, `text-align: left`), drops the letter-spacing that breaks Arabic joining, and isolates the runs that stay LTR (code, SVG diagrams, figures). SVG diagram labels are left in English — the coordinates are authored for Latin text — so the translation goes in each figure's `aria-label` and `figcaption`.
- **Images live in `public/images/blog/<slug>/`** and are referenced by absolute path. Add `loading="lazy" decoding="async"` to anything below the fold. Never inline base64 data URIs — they block first paint and defeat caching.
- **SEO comes from frontmatter.** `description` ≤ 160 chars (search snippet), `title` ≤ 60 where possible, always set `keywords` and `coverImage` (1200×630 for social unfurls).
- Prefer editing `site.config.ts` / `src/data/*` over touching page markup for content changes.
- Do not commit `dist/` or `node_modules/`.

## Gotchas

- **MDX is JSX**: `<!-- comments -->`, unclosed `<img>`, and `style="..."` strings break the build. For heavy custom markup, put the body in `src/components/posts/X.astro` and have the `.mdx` file import and render it — `.astro` accepts raw HTML/SVG as-is.
- `@keyframes` and `@media` preludes must never be prefixed when scoping CSS (`@.lynk-post media {}` is invalid and silently dead).
- The repo was migrated from a Bootstrap template to Astro in Aug 2026. Old `*.html` files at root are legacy redirects — do not build on them.
- GitHub Pages serves `master` only; there is no staging environment. Verify with `npm run build` + `npm run preview` before pushing.
