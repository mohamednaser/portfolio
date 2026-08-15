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

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;
