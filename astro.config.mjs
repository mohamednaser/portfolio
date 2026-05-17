import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mnaser.me',
  integrations: [tailwind(), mdx(), sitemap()],
  redirects: {
    '/about-us.html': '/about',
    '/about-us': '/about',
    '/contact.html': '/contact',
    '/blog.html': '/blog',
    '/single-blog.html': '/blog',
    '/portfolio.html': '/projects',
    '/services.html': '/projects',
  },
});
