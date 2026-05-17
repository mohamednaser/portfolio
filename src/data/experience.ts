export type Experience = {
  period: string;
  company: string;
  url?: string;
  role: string;
  location?: string;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    period: 'Mar 2024 — present',
    company: 'Lynk',
    role: 'Technical Lead',
    location: 'Riyadh, Saudi Arabia (remote)',
    highlights: [
      'Islamic fintech platform — Murabaha commodity trading for institutional and retail clients',
      'Multi-database architecture separating business logic from financial ledger for auditability',
      'Order progression engine with queued jobs and commodity exchange integrations (DMCC, Bursa Malaysia, local markets)',
      'ZATCA e-invoice integration for Saudi tax compliance',
      'Multi-tenant request isolation and action-based architecture in Laravel',
    ],
  },
  {
    period: 'Jan 2022 — Mar 2024',
    company: 'Carefer',
    url: 'https://carefer.co/',
    role: 'Technical Team Lead',
    location: 'Saudi Arabia',
    highlights: [
      'Car maintenance automation — 50K+ monthly service orders across 5 applications',
      'Grew engineering team from 3 to 20+ while maintaining delivery quality',
      '15+ third-party API integrations; automated workflow cut average service time by 60%',
    ],
  },
  {
    period: 'Nov 2019 — Jan 2022',
    company: 'Carefer',
    url: 'https://carefer.co/',
    role: 'Senior Back-End Developer (PHP, Laravel, Zend)',
    location: 'Saudi Arabia',
    highlights: [
      'API development, dashboard maintenance, Odoo ERP integrations',
      'Monitoring tools for system health and performance',
    ],
  },
  {
    period: 'May 2020 — May 2021',
    company: 'Ynmo',
    role: 'Senior Back-End Engineer (PHP, Yii2)',
    location: 'Saudi Arabia',
    highlights: [
      'Educational platform for children with disabilities — assessment and curriculum customization (KSA & UAE)',
    ],
  },
  {
    period: 'Aug 2019 — Apr 2020',
    company: 'Mitch Designs',
    url: 'https://www.mitchdesigns.com/',
    role: 'Remote Full-Stack Developer (PHP, React)',
    location: 'Cairo, Egypt',
    highlights: ['Tazhub.com — unified public transportation ticketing hub for Egypt'],
  },
  {
    period: 'Oct 2017 — Aug 2019',
    company: 'Mitch Designs',
    url: 'https://www.mitchdesigns.com/',
    role: 'Full-Stack Developer',
    location: 'Cairo, Egypt',
  },
  {
    period: 'Mar 2017 — Aug 2017',
    company: 'Integrated Development',
    role: 'Back-End Developer (PHP)',
    location: 'Cairo, Egypt',
  },
  {
    period: 'Feb 2016 — Feb 2017',
    company: 'Nile Code',
    url: 'https://www.nilecode.com/',
    role: 'Back-End Developer (PHP)',
    location: 'Cairo, Egypt',
  },
  {
    period: 'Sep 2014 — Aug 2015',
    company: 'Brilliance Tech',
    role: 'R&D Engineer',
    location: 'Cairo, Egypt',
    highlights: [
      'Innovation projects — database architecture, PHP web services, AngularJS front end, Android integration',
    ],
  },
  {
    period: 'Jul — Aug 2014',
    company: 'Brilliance Tech',
    role: 'Trainee Web Developer (PHP)',
    location: 'Cairo, Egypt',
  },
  {
    period: '2024 — present',
    company: 'Open source & AI adoption',
    role: 'Tech lead — AI-augmented SDLC and agentic workflows',
    location: 'Remote',
    highlights: [
      'Hooks, review automation, and disciplined delivery for multi-repo engineering orgs',
    ],
  },
];

export const education = [
  {
    period: '2019 — 2020',
    school: 'Microverse',
    url: 'https://www.microverse.org/',
    detail: 'Remote Full-Stack Web Development program',
  },
  {
    period: '2012 — 2015',
    school: 'El Shorouk Academy',
    url: 'https://sha.edu.eg/',
    detail: "Bachelor's degree, Computer Science",
  },
];

export const certifications = [
  'Injaz Egypt — Start Up 2017',
  'OAuth, OpenID, and SAML Crash Course',
  'Security for Web and Mobile — training certification',
  'HackerRank — Problem Solving (Basic)',
  '10 Mistakes Leaders Should Avoid',
];

export const languages = ['English', 'Arabic'];
