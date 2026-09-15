import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

/**
 * Page metadata (title, description) lives in MDX frontmatter so copy edits
 * don't require touching component code. Astro 5 Content Layer API.
 */
const pages = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ogType: z.enum(["website", "article"]).default("website"),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastModified: z.string(),
  }),
});

export const collections = { pages, legal };
