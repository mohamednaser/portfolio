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

/** Routes that exist in English only — the blog and its series hubs are not localised yet. */
const englishOnly = [/^\/blog(\/|$)/, /^\/series(\/|$)/, /^\/rss\.xml$/];

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
 * The equivalent of `pathname` in `target`. English-only routes (blog) fall
 * back to the Arabic home page rather than linking to a page that never builds.
 */
export function alternatePath(pathname: string, target: Lang): string {
  const base = stripLang(pathname);
  if (target !== defaultLang && englishOnly.some((pattern) => pattern.test(base))) {
    return localizePath('/', target);
  }
  return localizePath(base, target);
}

/** True when `pathname` has no counterpart outside the default locale. */
export function isEnglishOnlyPath(pathname: string): boolean {
  return englishOnly.some((pattern) => pattern.test(stripLang(pathname)));
}
