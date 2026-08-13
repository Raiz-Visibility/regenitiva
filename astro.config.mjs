// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical site URL — used for the sitemap and canonical links.
  // TODO: confirm www vs non-www before allowing search indexing at launch.
  site: 'https://regenitiva.com',
  integrations: [
    sitemap({
      // Keep hidden/internal pages out of the sitemap. These are also
      // force-noindexed in code: the blog, the Service Areas page, and the
      // internal /tokens design-system reference.
      filter: (page) =>
        !page.includes('/blog') &&
        !page.includes('/service-areas') &&
        !page.includes('/tokens'),
    }),
  ],
});
