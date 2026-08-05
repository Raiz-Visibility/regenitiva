import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.date(),
    author: z.string().default('Dr. Francis P. Lagattuta'),
    authorTitle: z.string().default('Founder, Regenitiva'),
    authorBio: z
      .string()
      .default(
        'Board certified in physical medicine and rehabilitation, electrodiagnostic medicine, pain medicine, and addiction medicine. Directed an interventional pain fellowship for over twenty years and has performed more than 2,000 regenerative procedures.'
      ),
    coverAlt: z.string().default(''),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
