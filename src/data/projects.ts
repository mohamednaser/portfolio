export type Project = {
  name: string;
  description: string;
  href: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'ApexYard',
    description:
      'Multi-project forge for Claude Code — SDLC hooks, roles, skills, and portfolio governance for engineering orgs.',
    href: 'https://github.com/me2resh/apexyard',
    tags: ['AI', 'SDLC', 'Claude Code', 'Open source'],
  },
  {
    name: 'Blog Generator',
    description:
      'AI-assisted content platform with subscriptions, dashboard, and production CI — built under ApexYard management.',
    href: 'https://github.com/mohamednaser/blog-generator',
    tags: ['SaaS', 'AI', 'Full stack'],
  },
  {
    name: 'mnaser.me (this site)',
    description:
      'Portfolio refactor from legacy static HTML to Astro + Tailwind with zero known CVEs at launch.',
    href: 'https://github.com/mohamednaser/portfolio',
    tags: ['Astro', 'Tailwind', 'GitHub Pages'],
  },
];
