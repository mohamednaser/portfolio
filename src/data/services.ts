/**
 * What I do for people, in two grains: `pillars` frame the work on the
 * homepage, `offerings` are the concrete engagements on `/services`.
 */

export type Pillar = {
  title: string;
  description: string;
};

export type Offering = {
  /** Stable anchor target — the homepage pillars deep-link into these. */
  id: string;
  title: string;
  tagline: string;
  /** "Good fit if" bullets. Written as situations, not job titles. */
  audience: string[];
  /** The deliverable. One sentence, no hedging. */
  outcome: string;
};

export const pillars: Pillar[] = [
  {
    title: 'Architecture under load',
    description:
      'Systems that hold their shape when traffic, money, and regulators arrive at once — state machines, ledgers, queues, and the database work underneath them.',
  },
  {
    title: 'Teams that ship predictably',
    description:
      'Growing an engineering team without losing delivery quality: review discipline, a release process people actually follow, and ownership that survives turnover.',
  },
  {
    title: 'Regulated fintech',
    description:
      'Sharia-compliant trading flows, ZATCA e-invoicing, auditable ledgers, and integrations with exchanges that do not forgive a bad retry.',
  },
  {
    title: 'AI-augmented delivery',
    description:
      'Putting AI where it pays — specs, review, and tests — and keeping it away from the parts that have to stay deterministic.',
  },
];

export const offerings: Offering[] = [
  {
    id: 'architecture-review',
    title: 'Architecture review',
    tagline:
      'A deep read of one system that is slowing down, falling over, or about to be scaled past what it was built for.',
    audience: [
      'Latency or error rates have started climbing and nobody can say why',
      'A platform is about to take several times its current load',
      'You want a second opinion before committing to a rewrite',
    ],
    outcome:
      'A written findings document: what breaks first, what to fix this month, and what can safely wait.',
  },
  {
    id: 'fractional-lead',
    title: 'Fractional technical lead',
    tagline: 'Embedded with your team for a fixed window to get delivery back under control.',
    audience: [
      'The team is growing faster than its process',
      'The lead seat is empty, or newly filled and unsupported',
      'Releases slip and the reasons only surface afterwards',
    ],
    outcome:
      'Review discipline, a release process the team keeps after I leave, and clear ownership of every critical path.',
  },
  {
    id: 'mentoring',
    title: 'Mentoring',
    tagline:
      'One-to-one sessions about the step you are standing on right now, not a generic career ladder.',
    audience: [
      'A senior engineer moving into a lead role',
      'A backend engineer going deeper on scale, queues, and databases',
      'Anyone weighing the IC track against management',
    ],
    outcome:
      'A concrete plan for the next quarter, and someone to check it against when it stops working.',
  },
];
