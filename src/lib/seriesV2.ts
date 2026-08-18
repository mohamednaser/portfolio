import { blogSlug, getBlogPosts, type BlogEntry } from './blog';
import { localizePath, type Lang } from '../i18n';

/**
 * The Murabaha series, in reading order. The parts are three ordinary blog
 * entries — nothing in their frontmatter records the sequence — so the order
 * lives here and is shared by the series hub and the per-article prev/next.
 */
export const SERIES_SLUGS = [
  'building-sharia-compliant-state-machine',
  'scaling-mysql-fintech-murabaha',
  'queue-infrastructure-at-scale',
] as const;

export const SERIES_PATH = '/series/scaling-murabaha-v2';

export type SeriesPart = {
  post: BlogEntry;
  /** 1-based position, as shown to the reader ("Part 2"). */
  number: number;
};

/** The parts that exist in `lang`, in reading order. */
export async function getSeriesParts(lang: Lang): Promise<SeriesPart[]> {
  const posts = await getBlogPosts(lang);

  return SERIES_SLUGS.map((slug) => posts.find((post) => blogSlug(post) === slug))
    .filter((post): post is BlogEntry => Boolean(post))
    .map((post, index) => ({ post, number: index + 1 }));
}

export type SeriesPosition = {
  current: SeriesPart;
  previous?: SeriesPart;
  next?: SeriesPart;
  total: number;
  hubHref: string;
};

/** Where `post` sits in the series, or `null` when it is not part of one. */
export async function getSeriesPosition(
  post: BlogEntry,
  lang: Lang,
): Promise<SeriesPosition | null> {
  const slug = blogSlug(post);
  if (!SERIES_SLUGS.includes(slug as (typeof SERIES_SLUGS)[number])) return null;

  const parts = await getSeriesParts(lang);
  const index = parts.findIndex(({ post: part }) => blogSlug(part) === slug);
  if (index === -1) return null;

  return {
    current: parts[index],
    previous: parts[index - 1],
    next: parts[index + 1],
    total: parts.length,
    hubHref: localizePath(SERIES_PATH, lang),
  };
}
