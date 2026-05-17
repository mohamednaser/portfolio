# AgDR-0001: Adopt Astro + Tailwind for the portfolio refactor

> In the context of refactoring mnaser.me from a 2018-era jQuery + Bootstrap 4 + Prepros static site to a modern personal portfolio positioning Mohamed Naser as an AI-empowered technical lead, facing the need for a static-output framework that deploys cleanly to GitHub Pages, has zero current high/critical CVEs, supports MDX for case studies and blog posts, and offers a strong DX without a heavy runtime, I decided to adopt **Astro + Tailwind CSS** to achieve a fast, accessible, content-centric site with minimal client-side JavaScript, accepting that the team commits to Astro's release cadence and that any future move to React-heavy interactivity will require Astro Islands or a stack migration.

## Context

The portfolio refactor (see [`projects/portfolio/prd-refactor.md`](../../../../projects/portfolio/prd-refactor.md) in the ops fork) requires:

- **Static output** deployable to GitHub Pages with `mnaser.me` preserved via CNAME — no Node/PHP/Ruby at request time.
- **MDX-first authoring** for the AI case studies (PRD US-2) and existing blog posts being carried over (PRD US-5).
- **Zero high/critical CVEs at launch** and a low-CVE long tail (PRD success metric).
- **Lighthouse ≥ 90** on Performance / Best Practices / SEO and **≥ 95** on Accessibility (PRD success metrics).
- **< 150 KB gzipped homepage** (PRD non-functional requirement).
- **Single-contributor maintenance** — Mohamed is the only developer. The stack must not impose ceremony that a 1-person team can't sustain.
- **Future room** for a small amount of interactivity (case-study demos, possibly an embedded AI playground in a later phase) without rewriting the foundation.

The site is **mostly content** (bio, case studies, blog, testimonials, contact). It is not a web app. Framework choice should optimise for content authoring, build-time rendering, and zero-runtime-JS-by-default — not for interactivity primitives.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Astro + Tailwind** | Static output by default; MDX is first-class; islands architecture lets us add React/Vue/Svelte components where genuinely needed; near-zero client JS for static pages → very fast LCP; deploys cleanly to GH Pages with `astro build` → `dist/`; healthy ecosystem; mature v4+; opinionated enough to remove decisions, flexible enough to fit a content site | Mohamed's existing React/Yii muscle memory doesn't transfer directly; new framework conventions to learn; if interactivity grows beyond islands, may need stack migration |
| **Next.js + Tailwind (static export)** | Familiar React mental model; large ecosystem; great DX; can grow into interactive demos without changing frameworks | Heavier than needed for a static content site; static export has known sharp edges (image optimisation, dynamic routes) that bite GH Pages deploys; ships more client JS than necessary by default; Vercel-shaped — feels like the wrong host for GH Pages |
| **SvelteKit (static adapter)** | Excellent DX; small bundle sizes; first-class static adapter; Svelte's syntax is concise for content components | Smaller ecosystem of MDX-friendly tooling than Astro; less of the "personal site" template inventory; Mohamed has less Svelte experience |
| **Eleventy + Tailwind** | Maximally minimal; pure static; great for content sites; mature | No component model out of the box (templating-only); the case-study sections will want components and Eleventy makes that fiddly; less momentum than Astro for new projects in 2026 |
| **Hugo + Tailwind** | Fastest build in the bunch; very mature; great for blogs | Go templates feel foreign for someone in the JS ecosystem; no JSX/MDX without third-party plugins; case-study components would be painful |
| **Plain static HTML + Tailwind + Vite** | Lowest dependency footprint; full control; no framework risk | No content model; 8+ pages means copy-paste boilerplate (nav, footer, head); blog index requires hand-rolled scripts; ApexYard's case for ditching the current site is partly *because* it's hand-rolled HTML — this would recreate that |
| **Modernise current jQuery/Bootstrap site in place** | Cheapest by raw effort; no migration risk | Doesn't solve the strategic problem — the positioning, the dead PHP, the leaked API key are not framework-bound. The CVE long tail stays. The content reorganisation is just as much work. Rejected during the PRD scoping conversation on 2026-05-17. |

## Decision

**Chosen: Astro + Tailwind CSS**, because:

1. **Best fit for the workload.** The portfolio is 80% content (Markdown/MDX), 15% layout, 5% interactivity. Astro is purpose-built for that ratio. Next.js is built for the inverse.
2. **Static output is the design, not a flag.** Astro ships zero JS by default and we opt in to islands where they earn their weight. Next.js static export is a constrained mode of a server framework — the impedance mismatch with GH Pages is real and produces awkward workarounds (especially around routing and images).
3. **MDX-first.** Case studies and blog posts want frontmatter + embedded components. Astro's MDX integration is the cleanest of the candidates.
4. **Lighthouse target is materially easier to hit on Astro than on Next.js static export.** Less framework JS hydrating on first paint = better LCP / TBT.
5. **Future-proofed via islands.** If a later phase wants an interactive AI playground or a live diagram, an Astro island (React or Svelte) handles it without restructuring the foundation.
6. **One-person sustainability.** Astro's defaults are sane; there is little to configure to get to "good." A single contributor will not drown in stack maintenance.

Tailwind is paired because:

- The PRD's design direction is "fresh modern design, generous whitespace, no template aesthetic." Tailwind makes that style discipline mechanical — utility classes are checked into the markup, no SCSS pipeline to maintain (the existing Prepros 6 dependency is gone with it).
- Tailwind has zero runtime CSS-in-JS overhead.
- Pairs cleanly with Astro out of the box via `@astrojs/tailwind`.

## Consequences

**Positive**:

- All current CVE exposure (jQuery, Bootstrap, jQuery Validation, Magnific Popup, Popper, jQuery Form, Stellar, GMaps, Owl Carousel) is dropped at launch — they simply do not exist in the new stack.
- The Prepros 6 commercial-GUI build tool is dropped; SCSS goes away entirely; build runs as `astro build` in CI on any machine.
- The dead `contact_process.php` is dropped (no PHP runtime exists in Astro static output).
- Lighthouse scores will be high by construction, not by post-hoc optimisation.
- Adding a new case study or blog post is a one-file PR.

**Negative / Accepted trade-offs**:

- Learning curve: Mohamed has not shipped a production Astro site before. Mitigated by the simplicity of the target site and Astro's strong docs.
- Astro version churn: framework is < 4 years old as of writing; major versions land every 9-12 months. Accepted because the alternative (a hand-rolled HTML site) has its own churn problem (manual maintenance).
- Component reuse across stacks (if Mohamed later builds something in Next.js) is limited — Astro `.astro` components don't transfer. Accepted because the portfolio's components are not the kind worth sharing externally.
- If the interactivity scope ever explodes (full-blown SaaS-style interactions), Astro is the wrong tool. Accepted because the PRD explicitly bounds scope to a content site; if scope explodes, that's a new project warranting a new AgDR.

**Operational consequences**:

- New GitHub Actions workflow (`.github/workflows/ci.yml`) building `astro build` and deploying to `gh-pages` branch on push to `main`. Replaces whatever (if anything) the current repo does.
- New `package.json` with Astro + Tailwind + a handful of integrations (`@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/tailwind`).
- `dependabot.yml` or equivalent set up at the same time so the CVE situation does not recur silently.
- `CNAME` file preserved in `public/` so it ends up at the root of the built output.
- The repo's default branch will be renamed from `master` to `main` as part of the cutover (PRD US-1 / migration strategy).

## Artifacts

- PRD: [`projects/portfolio/prd-refactor.md`](../../../../projects/portfolio/prd-refactor.md) (ops fork)
- Dependency audit that motivated the CVE-removal half of this decision: [`projects/portfolio/dependency-audit-2026-05-17.md`](../../../../projects/portfolio/dependency-audit-2026-05-17.md) (ops fork)
- Handover assessment that originally surfaced the stack pain: [`projects/portfolio/handover-assessment.md`](../../../../projects/portfolio/handover-assessment.md) (ops fork)
- Astro release notes / version pin: to be selected at first commit; target latest stable `astro@^4` at PR-1 time
- This AgDR — commit this file as part of PR-1 (scaffolding ticket)
