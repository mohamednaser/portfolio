/// <reference types="astro/client" />

/**
 * Injected by `/pagefind/pagefind-ui.js`, which Pagefind generates into
 * `dist/` at build time — so it exists at runtime but never at type-check
 * time. `src/components/Search.astro` guards on it before constructing.
 */
declare const PagefindUI: new (options: Record<string, unknown>) => void;
