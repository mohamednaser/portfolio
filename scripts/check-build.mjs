#!/usr/bin/env node
/**
 * Static gates over `dist/`, run in CI before the Lighthouse pass.
 *
 * These are the regressions that a browser-based audit is bad at catching:
 * markup that is correct once JavaScript has run, but wrong in the HTML that
 * actually ships. Every rule here corresponds to a defect that reached
 * production at least once.
 *
 * Usage: node scripts/check-build.mjs [distDir]
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const failures = [];
const fail = (page, rule, detail) => failures.push({ page, rule, detail });

function htmlFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...htmlFiles(full));
    else if (entry.endsWith('.html')) out.push(full);
  }
  return out;
}

const pageName = (f) => '/' + relative(DIST, f).split(sep).join('/').replace(/index\.html$/, '');
const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

const pages = htmlFiles(DIST);
if (pages.length === 0) {
  console.error(`No HTML found in ${DIST}/ — did the build run?`);
  process.exit(1);
}

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const page = pageName(file);

  // Redirect stubs are intentionally thin: noindex + canonical, no content.
  const isRedirect = /http-equiv="refresh"/i.test(html);
  const noindex = /name="robots"[^>]*content="[^"]*noindex/i.test(html);

  if (!isRedirect) {
    if (!/<title>[^<]+<\/title>/.test(html)) fail(page, 'title', 'missing or empty');
    if (!/<meta name="description" content="[^"]+"/.test(html))
      fail(page, 'description', 'missing or empty');

    const h1s = html.match(/<h1[\s>]/g) ?? [];
    if (h1s.length !== 1) fail(page, 'h1', `found ${h1s.length}, expected exactly 1`);

    if (!noindex && !/<link rel="canonical"/.test(html)) fail(page, 'canonical', 'missing');

    // Every img needs alt (a11y) and intrinsic dimensions (CLS).
    for (const tag of html.match(/<img\b[^>]*>/g) ?? []) {
      const src = attr(tag, 'src') ?? '(inline)';
      if (!/\salt=/.test(tag)) fail(page, 'img-alt', src);
      if (!/\swidth=/.test(tag) || !/\sheight=/.test(tag)) fail(page, 'img-dimensions', src);
    }

    // A control whose only content is an icon must carry an accessible name.
    // Text inside an aria-hidden subtree does not count as one — the theme
    // toggle's emoji are hidden exactly so the aria-label is what gets read.
    for (const m of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/g)) {
      const [, attrs, inner] = m;
      const labelled = /aria-label=|aria-labelledby=/.test(attrs);
      const visible = inner
        .replace(/<(\w+)[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/\1>/g, '')
        .replace(/<[^>]*aria-hidden="true"[^>]*\/?>/g, '')
        .replace(/<[^>]*>/g, '')
        .trim();
      if (!labelled && visible.length === 0) fail(page, 'button-name', attrs.trim().slice(0, 60));
    }
  }

  // Structured data must parse, and an Article without a date is a
  // required-field error in Search Console rather than a warning.
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch (error) {
      fail(page, 'json-ld', `invalid JSON: ${error.message}`);
      continue;
    }
    const types = ['Article', 'BlogPosting', 'NewsArticle'];
    if (types.includes(data['@type']) && !data.datePublished)
      fail(page, 'json-ld', `${data['@type']} without datePublished`);
  }
}

/*
 * Content must be readable without JavaScript. `.fade-up` starts at opacity 0
 * and is revealed by a script; gating that rule on `html.js` is the only thing
 * keeping /, /blog and /projects from rendering blank when the module fails.
 */
const css = readdirSync(join(DIST, '_astro'))
  .filter((f) => f.endsWith('.css'))
  .map((f) => readFileSync(join(DIST, '_astro', f), 'utf8'))
  .join('\n');

if (css.includes('.fade-up') && !/html\.js\s*\.fade-up/.test(css))
  fail('(css)', 'no-js', '.fade-up hides content without an html.js guard');

for (const [selector, label] of [
  ['.fade-up', 'scroll reveal'],
  ['.hero-mesh', 'hero animation'],
]) {
  if (css.includes(selector) && !css.includes('prefers-reduced-motion'))
    fail('(css)', 'reduced-motion', `${label} has no prefers-reduced-motion guard`);
}

if (!existsSync(join(DIST, 'CNAME')) || !readFileSync(join(DIST, 'CNAME'), 'utf8').includes('mnaser.me'))
  fail('(dist)', 'cname', 'missing or wrong custom domain');

const byRule = new Map();
for (const f of failures) byRule.set(f.rule, [...(byRule.get(f.rule) ?? []), f]);

console.log(`Checked ${pages.length} pages in ${DIST}/`);
if (failures.length === 0) {
  console.log('All static build checks passed.');
  process.exit(0);
}
console.error(`\n${failures.length} problem(s):\n`);
for (const [rule, items] of byRule) {
  console.error(`  ${rule} (${items.length})`);
  for (const i of items.slice(0, 10)) console.error(`    ${i.page}  ${i.detail}`);
  if (items.length > 10) console.error(`    ... and ${items.length - 10} more`);
}
process.exit(1);
