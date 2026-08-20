import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html } from 'satori-html';
import fs from 'node:fs/promises';
import { blogSlug, getBlogPosts } from '../../../lib/blog';

export async function getStaticPaths() {
  const enPosts = await getBlogPosts('en');
  const arPosts = await getBlogPosts('ar');

  const paths = [
    ...enPosts.map((post) => ({
      params: { lang: 'en', slug: blogSlug(post) },
      props: { post, title: post.data.searchTitle ?? post.data.title, lang: 'en' },
    })),
    ...arPosts.map((post) => ({
      params: { lang: 'ar', slug: blogSlug(post) },
      props: { post, title: post.data.searchTitle ?? post.data.title, lang: 'ar' },
    })),
  ];

  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const { title, lang } = props;
  
  // Read font file (using relative path from project root for reliability in prod)
  const fontData = await fs.readFile('./public/fonts/IBMPlexSansArabic-SemiBold.ttf');

  const isRtl = lang === 'ar';
  const direction = isRtl ? 'rtl' : 'ltr';

  const markup = html`
    <div style="display: flex; flex-direction: column; width: 1200px; height: 630px; background-color: #020617; color: white; padding: 60px; justify-content: space-between; font-family: 'IBM Plex Sans Arabic';">
      <div style="display: flex; flex-direction: column;">
        <div style="display: flex; font-size: 32px; color: #10b981; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">
          Mohamed Naser
        </div>
        <div style="display: flex; font-size: 72px; font-weight: 600; margin-top: 40px; line-height: 1.2; direction: ${direction};">
          ${title}
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #1e293b; padding-top: 40px;">
        <div style="display: flex; font-size: 32px; color: #94a3b8;">
          mnaser.me
        </div>
        <div style="font-size: 32px; color: #94a3b8; display: flex; align-items: center;">
          <div style="display: flex; width: 48px; height: 48px; border-radius: 24px; background-color: #10b981; margin-${isRtl ? 'left' : 'right'}: 16px;"></div>
          Software Engineer
        </div>
      </div>
    </div>
  `;

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'IBM Plex Sans Arabic',
        data: fontData,
        weight: 600,
        style: 'normal',
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const image = resvg.render();

  return new Response(new Uint8Array(image.asPng()), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
