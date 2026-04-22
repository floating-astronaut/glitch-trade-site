import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      industry: z.string(),
      // Headline metric shown on index cards + case page hero.
      headline: z.string(),
      // Supporting metrics (2–4 recommended).
      metrics: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .min(1)
        .max(6),
      summary: z.string(),
      services: z.array(z.string()),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      // Short tag list shown on cards + detail pages. Keep to 1–3.
      tags: z.array(z.string()).default([]),
      author: z.string().default('Glitch Executor Labs'),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      // Reading-time estimate in minutes, displayed on cards.
      readingMinutes: z.number().int().positive().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { 'case-studies': caseStudies, blog };
