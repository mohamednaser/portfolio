import rss from '@astrojs/rss';
import { blogPath, getBlogPosts } from '../lib/blog';
import { site } from '../site.config';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const posts = await getBlogPosts('en');
  return rss({
    title: `${site.name} — Blog`,
    description: site.description,
    site: context.site ?? site.url,
    customData: '<language>en-GB</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt ?? post.data.description,
      pubDate: post.data.pubDate,
      link: blogPath(post, 'en'),
    })),
  });
};
