/** Strip `.md` / `.mdx` from content collection entry ids for URLs. */
export function contentSlug(id: string): string {
  return id.replace(/\.mdx?$/, '');
}
