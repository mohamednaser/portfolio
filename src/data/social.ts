import { site } from '../site.config';

export type SocialIconId =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'stackoverflow'
  | 'medium'
  | 'hackerrank'
  | 'rss'
  | 'email';

export type SocialLink = {
  id: SocialIconId;
  label: string;
  href: string;
  external: boolean;
};

/** Official / recognizable brand colors for social icons. */
export const socialBrandColors: Record<SocialIconId, string> = {
  github: '#181717',
  linkedin: '#0A66C2',
  x: '#000000',
  stackoverflow: '#F48024',
  medium: '#000000',
  hackerrank: '#00EA64',
  rss: '#F26522',
  email: '#059669',
};

export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: site.social.github, external: true },
  { id: 'linkedin', label: 'LinkedIn', href: site.social.linkedin, external: true },
  { id: 'x', label: 'X (Twitter)', href: site.social.twitter, external: true },
  {
    id: 'stackoverflow',
    label: 'Stack Overflow',
    href: site.social.stackoverflow,
    external: true,
  },
  { id: 'medium', label: 'Medium', href: site.social.medium, external: true },
  { id: 'hackerrank', label: 'HackerRank', href: site.social.hackerrank, external: true },
];

export const rssLink: SocialLink = {
  id: 'rss',
  label: 'RSS feed',
  href: '/rss.xml',
  external: false,
};

export const emailLink: SocialLink = {
  id: 'email',
  label: 'Email',
  href: `mailto:${site.email}`,
  external: false,
};

/** Profile URLs for JSON-LD `sameAs` (excludes duplicate LinkedIn paths). */
export const sameAsUrls = socialLinks.map((link) => link.href);
