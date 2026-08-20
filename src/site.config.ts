import type { Lang } from './i18n';

/** Locale-independent facts: URLs, handles, assets. */
export const site = {
  name: 'Mohamed Naser',
  title: 'Mohamed Naser — Technical Lead | Fintech & scalable systems',
  description:
    "I architect systems that don't blink under pressure—and lead the teams that build them. Technical Lead with 10+ years scaling fintech, mobility, and engineering cultures.",
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

/**
 * Third-party measurement. The GA4 measurement ID is public (it ships in the
 * page source), so it lives here rather than in an env var. An empty string
 * disables analytics entirely — no script tag is emitted.
 */
export const analytics = {
  googleMeasurementId: 'G-M0CCSGXYDD',
};

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
    title: 'محمد ناصر — قائد تقني | التقنية المالية والأنظمة القابلة للتوسّع',
    description:
      'أصمم أنظمة لا تنهار تحت الضغط — وأقود الفرق التي تبنيها. قائد تقني بخبرة تزيد عن ١٠ سنوات في قيادة وتوسيع الأنظمة المالية وفرق البرمجيات.',
    location: 'القاهرة، مصر',
    jobTitle: 'قائد تقني',
  },
};

/**
 * Optional scheduling link (Cal.com, ADPList, …). An empty string keeps the
 * services CTA on email — no third-party script, and no link to a booking page
 * that does not exist yet.
 */
export const bookingUrl: string = '';

export type NavItem = {
  href: string;
  labelKey: 'home' | 'about' | 'services' | 'projects' | 'blog' | 'contact';
};

/** Both locales carry the same nav; every route behind it exists in both. */
export const navByLang: Record<Lang, readonly NavItem[]> = {
  en: [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/services', labelKey: 'services' },
    { href: '/projects', labelKey: 'projects' },
    { href: '/blog', labelKey: 'blog' },
    { href: '/contact', labelKey: 'contact' },
  ],
  ar: [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/services', labelKey: 'services' },
    { href: '/projects', labelKey: 'projects' },
    { href: '/blog', labelKey: 'blog' },
    { href: '/contact', labelKey: 'contact' },
  ],
};
