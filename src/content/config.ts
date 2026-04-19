import { defineCollection, z } from 'astro:content'

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
})

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
})

const services = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    content: z.string(),
    cta: z.string(),
    image: z.string(),
    image_alt: z.string(),
  }),
})

const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    quote: z.string(),
    handle: z.string(),
  }),
})

const clients = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
  }),
})

const pricing = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    content: z.string(),
    cta: z.string(),
    price: z.number(),
    services: z.array(z.object({ item: z.string() })),
  }),
})

export const collections = { pages, faq, services, testimonials, clients, pricing }