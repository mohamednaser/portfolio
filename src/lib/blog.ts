import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { defaultLang, localizePath, type Lang } from '../i18n';
import { contentSlug } from './slug';

export type BlogEntry = CollectionEntry<'blog'>;

/**
 * English posts live at `src/content/blog/<slug>.mdx`; translations live in a
 * locale sub-directory, e.g. `src/content/blog/ar/<slug>.mdx`. Mirrors the
 * layout `src/lib/projects.ts` uses for the projects collection.
 */
export function blogLang(post: BlogEntry): Lang {
  return contentSlug(post.id).includes('/') ? 'ar' : defaultLang;
}

/** URL slug, with any locale directory stripped — shared across locales. */
export function blogSlug(post: BlogEntry): string {
  const path = contentSlug(post.id);
  const separator = path.lastIndexOf('/');
  return separator === -1 ? path : path.slice(separator + 1);
}

/** Locale-prefixed article URL, e.g. `/ar/blog/my-post/`. */
export function blogPath(post: BlogEntry, lang: Lang): string {
  return localizePath(`/blog/${blogSlug(post)}/`, lang);
}

/**
 * Published posts for `lang`, newest first. A post without a translation falls
 * back to its English entry so the Arabic listing is never missing an article.
 */
export async function getBlogPosts(lang: Lang): Promise<BlogEntry[]> {
  const published = await getCollection('blog', ({ data }) => !data.draft);
  const localized = new Map<string, BlogEntry>();

  for (const post of published) {
    if (blogLang(post) === defaultLang) localized.set(blogSlug(post), post);
  }
  for (const post of published) {
    if (blogLang(post) === lang) localized.set(blogSlug(post), post);
  }

  return [...localized.values()].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

/** The entry for `slug` in `lang`, falling back to English when untranslated. */
export async function getBlogPost(
  slug: string,
  lang: Lang,
): Promise<BlogEntry | undefined> {
  return (await getBlogPosts(lang)).find((post) => blogSlug(post) === slug);
}
