export type Experience = {
  period: string;
  company: string;
  url?: string;
  role: string;
  location?: string;
};

export const experience: Experience[] = [
  {
    period: '2024 — present',
    company: 'Technical leadership & AI adoption',
    role: 'Tech lead — AI-augmented SDLC, ApexYard, Claude Code',
    location: 'Remote',
  },
  {
    period: '2019 — 2024',
    company: 'Carefer',
    url: 'https://carefer.co/',
    role: 'Senior back-end developer',
    location: 'Remote',
  },
  {
    period: '2017 — 2020',
    company: 'Mitch Designs',
    url: 'https://www.mitchdesigns.com/',
    role: 'Senior full-stack developer',
    location: 'Cairo, Egypt',
  },
  {
    period: '2016 — 2017',
    company: 'Nile Code',
    url: 'https://www.nilecode.com/',
    role: 'Junior web developer',
    location: 'Cairo, Egypt',
  },
  {
    period: '2014 — 2015',
    company: 'Brilliance Tech',
    role: 'Junior web developer',
    location: 'Cairo, Egypt',
  },
];

export const education = [
  {
    period: '2019 — 2020',
    school: 'Microverse',
    url: 'https://www.microverse.org/',
    detail: 'Remote software development program (Ruby track)',
  },
  {
    period: '2012 — 2015',
    school: 'El Shorouk Academy',
    url: 'https://sha.edu.eg/',
    detail: 'Computer Science & Information Technology',
  },
];
