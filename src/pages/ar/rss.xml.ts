import rss from '@astrojs/rss';
import { blogPath, getBlogPosts } from '../../lib/blog';
import { site, siteMeta } from '../../site.config';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await getBlogPosts('ar');
  return rss({
    title: `${siteMeta.ar.name} — المدوّنة`,
    description: siteMeta.ar.description,
    site: context.site ?? site.url,
    xmlns: { dc: 'http://purl.org/dc/elements/1.1/' },
    customData: '<language>ar</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt ?? post.data.description,
      pubDate: post.data.pubDate,
      link: blogPath(post, 'ar'),
    })),
  });
};
