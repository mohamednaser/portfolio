export type Stat = {
  /** Short enough to read at a glance — this is a proof band, not a table. */
  value: string;
  label: string;
};

/**
 * The homepage proof band. Every figure traces to a system in `experience.ts`
 * or to a published article; nothing here is rounded up for effect.
 */
export const stats: Stat[] = [
  { value: '10+', label: 'Years shipping production systems' },
  { value: '20+', label: 'Engineers in a team that started at 3' },
  { value: '50K+', label: 'Monthly orders on platforms I architected' },
  { value: '99.94%', label: 'Success rate at 5,200 trades a day' },
];
