import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/services" }),
  schema: z.object({
    name: z.string(),
    price: z.string(),
    duration: z.string().optional(),
    badge: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional()
  })
});

export const collections = { services };
