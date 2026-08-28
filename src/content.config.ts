import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/services" }),
  schema: z.object({
    name: z.string(),

    // -----------------------------------------------------------------------
    // ADDED LINE: Featured Service Boolean Flag
    // - z.boolean() validates that the value in the markdown file is true or false.
    // - .optional() allows files that don't have a "featured" key to pass validation.
    // - .default(false) ensures if "featured" is missing, Astro treats it as false
    //   so existing service files won't break the build.
    // -----------------------------------------------------------------------
    featured: z.boolean().optional().default(false),


    price: z.string(),
    duration: z.string().optional(),
    badge: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    image: z.string() // <-- ADD THIS LINE HERE
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
