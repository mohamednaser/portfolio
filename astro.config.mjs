import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const tailwindConfig = fileURLToPath(new URL('./tailwind.config.mjs', import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://mnaser.me',
  integrations: [
    tailwind({
      configFile: tailwindConfig,
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
  ],
  redirects: {
    '/ai': '/blog',
    '/about-us.html': '/about',
    '/about-us': '/about',
    '/contact.html': '/contact',
    '/blog.html': '/blog',
    '/single-blog.html': '/blog',
    '/portfolio.html': '/projects',
    '/services.html': '/projects',
  },
});
