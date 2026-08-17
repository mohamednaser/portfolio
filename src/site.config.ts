import type { Lang } from './i18n';

/** Locale-independent facts: URLs, handles, assets. */
export const site = {
  name: 'Mohamed Naser',
  title: 'Mohamed Naser — Problem Solver | Experienced Developer | AI for Teams',
  description:
    'Experienced developer and problem solver across fintech, mobility, and platforms — empowering teams and products with AI. Technical Lead at Lynk; writes on Medium.',
  url: 'https://mnaser.me',
  email: 'nc_m.naser@hotmail.com',
  location: 'Cairo, Egypt',
  image: '/images/mohamed.jpg',
  social: {
    github: 'https://github.com/mohamednaser',
    linkedin: 'https://www.linkedin.com/in/mohamed-naser-amein/',
    linkedinRecommendations:
      'https://www.linkedin.com/in/mohamed-naser-amein/details/recommendations/?detailScreenTabIndex=0',
    medium: 'https://medium.com/@m_naser',
    twitter: 'https://twitter.com/nc_mnaser',
    stackoverflow: 'https://stackoverflow.com/users/3258919/mohamed-naser',
    hackerrank: 'https://www.hackerrank.com/nc_mnaser',
  },
} as const;

export type SiteMeta = {
  name: string;
  title: string;
  description: string;
  location: string;
  jobTitle: string;
};

/** Per-locale identity and default SEO copy. */
export const siteMeta: Record<Lang, SiteMeta> = {
  en: {
    name: site.name,
    title: site.title,
    description: site.description,
    location: site.location,
    jobTitle: 'Technical Lead',
  },
  ar: {
    name: 'محمد ناصر',
    title: 'محمد ناصر — حلّال مشكلات | مطوّر خبير | الذكاء الاصطناعي للفرق',
    description:
      'مطوّر خبير وحلّال مشكلات في التقنية المالية والتنقّل والمنصّات — أُمكّن الفرق والمنتجات بالذكاء الاصطناعي. قائد تقني في Lynk، وأكتب على Medium.',
    location: 'القاهرة، مصر',
    jobTitle: 'قائد تقني',
  },
};

export type NavItem = {
  href: string;
  labelKey: 'home' | 'about' | 'projects' | 'blog' | 'contact';
};

/**
 * Nav is per-locale because the blog is English-only for now — the Arabic site
 * intentionally omits it rather than linking to pages that are not translated.
 */
export const navByLang: Record<Lang, readonly NavItem[]> = {
  en: [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/projects', labelKey: 'projects' },
    { href: '/blog', labelKey: 'blog' },
    { href: '/contact', labelKey: 'contact' },
  ],
  ar: [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/projects', labelKey: 'projects' },
    { href: '/contact', labelKey: 'contact' },
  ],
};
