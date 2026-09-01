import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/services" }),
  schema: z.object({
    name: z.string(),
    featured: z.boolean().optional().default(false),
    price: z.string(),
    duration: z.string().optional(),
    badge: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    image: z.string(),
    calLink: z.string().optional(),
    bookingButtonText: z.string().default("Book Service")
  })
});

// 2. Reviews Collection Definition
const reviews = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/reviews" }),
  schema: z.object({
    name: z.string(),
    suburb: z.string().optional(),
    text: z.string(),
    rating: z.number().default(5).optional()
  })
});

// 3. Export both collections for Astro's Content Engine
export const collections = { services, reviews };
