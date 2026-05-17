export const site = {
  name: 'Mohamed Naser',
  title: 'Mohamed Naser — Technical lead empowering teams with AI',
  description:
    'Technical lead specialising in AI-augmented engineering: ApexYard, Claude Code adoption, and production-ready SDLC for engineering teams.',
  url: 'https://mnaser.me',
  email: 'nc_m.naser@hotmail.com',
  location: 'Cairo, Egypt',
  image: '/images/mohamed.jpg',
  social: {
    github: 'https://github.com/mohamednaser',
    linkedin: 'https://www.linkedin.com/in/mohamed-naser-amein',
    twitter: 'https://twitter.com/nc_mnaser',
    stackoverflow: 'https://stackoverflow.com/users/3258919/mohamed-naser',
    hackerrank: 'https://www.hackerrank.com/nc_mnaser',
  },
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ai', label: 'AI' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;
