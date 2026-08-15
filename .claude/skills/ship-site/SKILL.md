---
name: ship-site
description: Build, verify and deploy mnaser.me to GitHub Pages, and diagnose a failed or stale deploy. Use before pushing to master, when the live site does not reflect the latest commit, or when the CI/Deploy workflow is red.
---

# Shipping mnaser.me

`master` is production. There is no staging: a push to `master` triggers
`.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub
Pages at `https://mnaser.me`. Treat every push as a release.

## Pre-flight

```bash
npm ci            # match CI exactly; do not use plain `npm install` here
npm run lint
npm run check
npm run build
npm run preview   # spot-check the pages you changed
```

CI additionally asserts the custom domain survives the build:

```bash
test -f dist/CNAME && grep -q 'mnaser.me' dist/CNAME
```

If that fails, `public/CNAME` was deleted or edited — restore it or the custom
domain drops on the next deploy.

## Push

Push the branch you actually built. A stale local `master` from before a
history rewrite will be rejected as non-fast-forward; verify what you are
sending first:

```bash
git fetch origin
git log --oneline HEAD..origin/master   # commits you don't have
git push origin HEAD:master
```

Never `--force` to `master`. If the histories diverged, rebase onto
`origin/master` and re-run the build.

## Confirm the deploy

```bash
gh run list --repo mohamednaser/portfolio --limit 3
gh run watch --repo mohamednaser/portfolio
curl -sI https://mnaser.me/ | head -3
```

Pages can take a couple of minutes and caches aggressively — verify with a
cache-busting request before concluding a deploy failed:

```bash
curl -s "https://mnaser.me/blog/<slug>/?cb=$(date +%s)" | grep -o '<title>[^<]*'
```

## When it goes wrong

- **Build fails only in CI** — almost always a dependency or Node version drift. CI pins Node 20 and runs `npm ci`; reproduce with the same.
- **MDX parse error** — see the `new-blog-post` skill: MDX is JSX, so HTML comments, unclosed tags and string `style=` attributes break it.
- **Page deploys but looks unstyled** — custom CSS scoped incorrectly (mangled `@media`/`@keyframes` prelude), or dark rules written against `prefers-color-scheme` instead of `html.dark`.
- **404 on a new post** — `draft: true` in frontmatter, filename/slug mismatch, or the file landed outside `src/content/blog/`.
- **Roll back** — revert the offending commit and push; the deploy workflow reruns from the new `master`.
