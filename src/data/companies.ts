export type CompanyKind = 'employer' | 'client' | 'program';

export type Company = {
  id: string;
  name: string;
  src?: string;
  href?: string;
  background?: string;
  kind?: CompanyKind;
  /** Shown under the name (e.g. employer for a product logo on the homepage). */
  subtitle?: string;
};

export const companies = {
  lynk: {
    id: 'lynk',
    name: 'Lynk',
    src: '/images/companies/lynk-logo.png',
    href: 'https://lynk.sa/',
    kind: 'employer',
  },
  carefer: {
    id: 'carefer',
    name: 'Carefer',
    src: '/images/companies/carefer-logo.png',
    href: 'https://carefer.co/',
    background: '#FC732D',
    kind: 'employer',
  },
  ynmo: {
    id: 'ynmo',
    name: 'Ynmo',
    src: '/images/companies/ynmo-logo.png',
    href: 'https://ynmodata.com/',
    kind: 'employer',
  },
  'mitch-designs': {
    id: 'mitch-designs',
    name: 'Mitch Designs',
    src: '/images/companies/mitchdesigns-logo.png',
    href: 'https://www.mitchdesigns.com/',
    kind: 'employer',
  },
  'nile-code': {
    id: 'nile-code',
    name: 'Nile Code',
    src: '/images/companies/nilecode-logo.png',
    href: 'https://www.nilecode.com/',
    background: '#377F89',
    kind: 'employer',
  },
  'integrated-development': {
    id: 'integrated-development',
    name: 'Integrated Development',
    src: '/images/companies/integrated-development.png',
    kind: 'employer',
  },
  'brilliance-tech': {
    id: 'brilliance-tech',
    name: 'Brilliance Tech',
    src: '/images/companies/brilliance-tech-logo.png',
    kind: 'employer',
  },
  microverse: {
    id: 'microverse',
    name: 'Microverse',
    src: '/images/companies/microverse.png',
    href: 'https://www.microverse.org/',
    background: '#6F70FC',
    kind: 'program',
  },
  'johnson-johnson': {
    id: 'johnson-johnson',
    name: 'Johnson & Johnson',
    src: '/images/companies/johnson-johnson-logo.png',
    kind: 'client',
  },
  total: {
    id: 'total',
    name: 'TOTAL',
    src: '/images/companies/total-logo.png',
    background: '#000000',
    kind: 'client',
  },
  okhtein: {
    id: 'okhtein',
    name: 'Okhtein',
    src: '/images/companies/okhtein-logo.png',
    href: 'https://eg.okhtein.com/',
    kind: 'client',
  },
  personal: {
    id: 'personal',
    name: 'Personal / Open source',
  },
} as const satisfies Record<string, Company>;

export type CompanyId = keyof typeof companies;

const kindOrder: Record<CompanyKind, number> = {
  employer: 0,
  program: 1,
  client: 2,
};

/** Homepage marquee — all registered companies with logos (excludes personal; Tazhub is a Mitch Designs project, not listed here). */
export const companyLogos: Company[] = (Object.values(companies) as Company[])
  .filter((c): c is Company & { src: string } => Boolean(c.src))
  .sort((a, b) => (kindOrder[a.kind ?? 'employer'] ?? 0) - (kindOrder[b.kind ?? 'employer'] ?? 0));

export const companyKindLabels: Record<CompanyKind, string> = {
  employer: 'Employer',
  client: 'Client',
  program: 'Program',
};

export function getCompany(id: CompanyId): Company {
  return companies[id];
}
