import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    /** Listing snippet and meta description (keep under ~160 chars for SEO). */
    description: z.string(),
    /** Optional longer teaser for the blog index card. Falls back to description. */
    excerpt: z.string().optional(),
    /**
     * Short, query-shaped title used only for the document `<title>`, i.e. the
     * search result line. The headline keeps its editorial voice on the page and
     * in Open Graph; this is what someone typing "mysql lock wait timeout" sees.
     * Aim for <= 44 characters, since the site name is appended.
     */
    searchTitle: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().optional().default(false),
    /** Resolved via Astro assets. */
    coverImage: image().optional(),
    /**
     * Publication line shown above the title, e.g. "LYNK Engineering · Murabaha
     * Platform". The series position ("Part 2 of 3") is appended from the series
     * data rather than written here, so it cannot drift.
     */
    kicker: z.string().optional(),
    /** SEO / JSON-LD keywords. Never rendered — see `tags` for the visible chips. */
    keywords: z.array(z.string()).default([]),
    /**
     * Short, human-facing topic labels shown on the card and article header.
     * Kept separate from `keywords` so search phrases stay out of the page body.
     */
    tags: z.array(z.string()).default([]),
    /** When true, on-site page is a teaser + outbound links (no full article body). */
    external: z.boolean().optional().default(false),
    mediumUrl: z.string().url().optional(),
    linkedinUrl: z.string().url().optional(),
    /** Canonical URL when the primary publication is elsewhere (e.g. Medium). */
    canonicalUrl: z.string().url().optional(),
    readingTime: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(99),
    context: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const projectLink = z.object({
  label: z.string(),
  href: z.string().url(),
});

const companyIds = [
  'lynk',
  'carefer',
  'mitch-designs',
  'microverse',
  'nile-code',
  'brilliance-tech',
  'integrated-development',
  'ynmo',
  'johnson-johnson',
  'total',
  'okhtein',
  'personal',
] as const;

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    company: z.enum(companyIds),
    /** When false, project is omitted from listings and has no public page. */
    published: z.boolean().default(true),
    /** Employer when client logo is shown (e.g. J&J work done at Nile Code). */
    employer: z.enum(companyIds).optional(),
    order: z.number().default(99),
    featured: z.boolean().default(true),
    period: z.string().optional(),
    role: z.string().optional(),
    status: z.enum(['active', 'paused', 'archived']).default('active'),
    stack: z.array(z.string()).default([]),
    achievements: z.array(z.string()).default([]),
    links: z.array(projectLink).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, 'case-studies': caseStudies, projects };
