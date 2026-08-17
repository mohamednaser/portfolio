import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const tailwindConfig = fileURLToPath(new URL('./tailwind.config.mjs', import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://mnaser.me',
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    routing: {
      // English stays at the root (`/about`); Arabic is prefixed (`/ar/about`).
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({
      configFile: tailwindConfig,
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-GB', ar: 'ar' },
      },
    }),
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
    // Murabaha series: slugs renamed to match retitled posts (Aug 2026).
    '/blog/commodity-murabaha-platform': '/blog/murabaha-as-a-state-machine',
    '/blog/scaling-murabaha-10-to-5000-orders': '/blog/mysql-under-load-sharia-compliant-pipeline',
    '/blog/scaling-queue-workers-3-to-122': '/blog/laravel-queue-workers-regulated-trade-pipeline',
  },
});
