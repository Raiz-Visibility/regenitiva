// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for the sitemap and canonical links.
  site: 'https://www.regenitiva.com',
  integrations: [
    sitemap({
      // Keep the hidden, force-noindexed Service Areas page out of the sitemap.
      filter: (page) => !page.includes('/service-areas'),
    }),
  ],
});
