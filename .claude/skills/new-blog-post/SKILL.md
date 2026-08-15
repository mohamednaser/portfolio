---
name: new-blog-post
description: Create or update a blog post on mnaser.me — scaffolds the MDX entry with schema-valid frontmatter, SEO metadata, cover image and assets, then verifies it builds and appears in the index, RSS and sitemap. Use when adding an article, importing a draft from elsewhere, or editing an existing post's metadata.
---

# Publishing a post on mnaser.me

## 1. Read the schema first

`src/content.config.ts` is authoritative. Never guess frontmatter fields — a
mismatch fails `astro check` and the build. Current `blog` fields:

| Field | Required | Notes |
|---|---|---|
| `title` | yes | ≤ 60 chars reads best in search results |
| `description` | yes | **≤ 160 chars** — this is the meta description and listing snippet |
| `excerpt` | no | longer teaser for the index card; falls back to `description` |
| `pubDate` | yes | `YYYY-MM-DD` |
| `updatedDate` | no | set when materially revising a published post |
| `draft` | no | `true` hides it from listings |
| `coverImage` | no | path under `/public`, e.g. `/images/blog/<slug>/cover.jpg` |
| `keywords` | no | array of strings; feeds JSON-LD |
| `external`, `mediumUrl`, `linkedinUrl`, `canonicalUrl` | no | for posts published primarily elsewhere — set `canonicalUrl` so Google credits the original |
| `readingTime` | no | e.g. `'12 min read'` (≈ 225 words/min) |

The filename is the slug: `src/content/blog/<slug>.mdx` → `/blog/<slug>/`.
Pick a slug that reads as a search query, hyphenated, no dates or stop words.

## 2. Choose the body format

**Plain MDX** for ordinary prose — headings, lists, code fences, links. Preferred:
it inherits site typography and dark mode for free.

**Astro component body** when the post needs custom markup (inline SVG diagrams,
styled callout blocks, tables with classes). MDX is JSX and will reject
`<!-- comments -->`, unclosed `<img>`, and string `style=` attributes. Instead:

```
src/components/posts/MyPost.astro   ← raw HTML/SVG body + <style is:global>
src/content/blog/my-post.mdx        ← frontmatter + import + <Body />
```

The `.mdx` wrapper is then just:

```mdx
import Body from '../../components/posts/MyPost.astro';

<Body />
```

Scope every custom rule under one wrapper class (`.my-post`), and bind dark
variants to the site's strategy — `html.dark .my-post, html[data-theme='dark'] .my-post`.
A bare `prefers-color-scheme` block ignores the site's toggle. Never scope
`@media`/`@keyframes` preludes themselves.

## 3. Assets

Put images in `public/images/blog/<slug>/`, reference by absolute path
(`/images/blog/<slug>/figure-1.png`), and add `loading="lazy" decoding="async"`
below the fold. Never embed base64 data URIs. Provide a `coverImage` at
1200×630 for social unfurls, and meaningful `alt` text on every image.

## 4. Verify before pushing

```bash
npm run check && npm run build
```

Then confirm the post actually wired up:

```bash
grep -c "<slug>" dist/blog/index.html dist/rss.xml dist/sitemap-0.xml
grep -o '<title>[^<]*' dist/blog/<slug>/index.html
```

Check the built page has exactly one `<h1>`, a canonical link, OG tags and
JSON-LD — all supplied by `BaseLayout` from frontmatter, so a missing tag
means a missing field.

## 5. Ship

Commit content and assets together with a message naming the post. Push to
`master` only when the build is green — `master` is production (see the
`ship-site` skill for the deploy check).
