// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for the sitemap and canonical links.
  site: 'https://www.regenitiva.com',
  integrations: [
    sitemap({
      // Keep hidden pages out of the sitemap. These are also force-noindexed
      // in code: the blog and the Service Areas page.
      filter: (page) =>
        !page.includes('/blog') &&
        !page.includes('/service-areas'),
    }),
  ],
});
