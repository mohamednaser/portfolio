/**
 * Locale plumbing for the bilingual site.
 *
 * English is the default locale and lives at the root (`/about`); Arabic is
 * prefixed (`/ar/about`). Routing is manual — one thin page file per locale
 * under `src/pages/` and `src/pages/ar/`, both rendering the same shared page
 * component from `src/components/pages/`.
 */

export const languages = {
  en: {
    label: 'English',
    short: 'EN',
    htmlLang: 'en',
    dir: 'ltr',
    ogLocale: 'en_GB',
  },
  ar: {
    label: 'العربية',
    short: 'ع',
    htmlLang: 'ar',
    dir: 'rtl',
    ogLocale: 'ar_EG',
  },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const langCodes = Object.keys(languages) as Lang[];

/**
 * Routes with no translated counterpart, and the nearest page to send a reader
 * to instead. Article bodies and series hubs stay in English — only the blog
 * index around them is localised — so they fall back to the blog index in the
 * target locale.
 */
const untranslated: { pattern: RegExp; fallback: string }[] = [
  { pattern: /^\/blog\/.+/, fallback: '/blog/' },
  { pattern: /^\/series(\/|$)/, fallback: '/blog/' },
  { pattern: /^\/rss\.xml$/, fallback: '/blog/' },
];

export function isLang(value: string): value is Lang {
  return value in languages;
}

/** Derive the active locale from a request/page URL. */
export function getLangFromUrl(url: URL): Lang {
  const segment = url.pathname.split('/')[1] ?? '';
  return isLang(segment) && segment !== defaultLang ? segment : defaultLang;
}

/** Remove a locale prefix, yielding the canonical (English) path. */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/(ar)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Prefix a root-relative path with a locale. The default locale stays bare. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return path === '/' ? `/${lang}/` : `/${lang}${path}`;
}

/**
 * The equivalent of `pathname` in `target`. A page with no translation resolves
 * to its declared fallback rather than a URL that never builds.
 */
export function alternatePath(pathname: string, target: Lang): string {
  const base = stripLang(pathname);
  const missing = untranslated.find((route) => route.pattern.test(base));
  return localizePath(missing && target !== defaultLang ? missing.fallback : base, target);
}

/** True when `pathname` has no counterpart outside the default locale. */
export function isUntranslatedPath(pathname: string): boolean {
  return untranslated.some((route) => route.pattern.test(stripLang(pathname)));
}
