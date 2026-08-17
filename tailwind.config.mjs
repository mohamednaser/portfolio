/** @type {import('tailwindcss').Config} */
const systemSans = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'sans-serif',
];

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: systemSans,
        /** Applied to `html[lang='ar']` in global.css. */
        arabic: ['IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Geeza Pro', 'Tahoma', ...systemSans],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
