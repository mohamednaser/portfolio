import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { contentSlug } from '../lib/slug';
import { site } from '../site.config';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: `${site.name} — Blog`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt ?? post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${contentSlug(post.id)}/`,
    })),
  });
};
