import { defineCollection, z } from 'astro:content';

const memories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['milestone', 'travel', 'daily', 'special']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { memories };
