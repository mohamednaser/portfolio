import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { defaultLang, type Lang } from '../i18n';
import { contentSlug } from './slug';

export type ProjectEntry = CollectionEntry<'projects'>;

export function isPublishedProject(project: ProjectEntry): boolean {
  return project.data.published !== false;
}

/**
 * English projects live at `src/content/projects/<slug>.mdx`; translations live
 * in a locale sub-directory, e.g. `src/content/projects/ar/<slug>.mdx`.
 */
export function projectLang(project: ProjectEntry): Lang {
  return contentSlug(project.id).includes('/') ? 'ar' : defaultLang;
}

/** URL slug, with any locale directory stripped — shared across locales. */
export function projectSlug(project: ProjectEntry): string {
  const path = contentSlug(project.id);
  const separator = path.lastIndexOf('/');
  return separator === -1 ? path : path.slice(separator + 1);
}

/**
 * Published projects for `lang`, ordered. A project without a translation falls
 * back to its English entry so the Arabic listing is never missing an item.
 */
export async function getProjects(lang: Lang): Promise<ProjectEntry[]> {
  const published = (await getCollection('projects')).filter(isPublishedProject);
  const localized = new Map<string, ProjectEntry>();

  for (const project of published) {
    if (projectLang(project) === defaultLang) localized.set(projectSlug(project), project);
  }
  for (const project of published) {
    if (projectLang(project) === lang) localized.set(projectSlug(project), project);
  }

  return [...localized.values()].sort((a, b) => a.data.order - b.data.order);
}
