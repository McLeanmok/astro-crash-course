import {defineCollection, z} from "astro:content";

// Posts
const postsCollection = defineCollection({
    schema:  z.object({
        title: z.string(),
        author: z.string(),
        date: z.string(),
        image: z.string(),
    })
})

// Tibits
const tibitsCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        wordCount: z.string(),
        image: z.string(),
    })
})

export const collections = {
    posts: postsCollection,
    tibits: tibitsCollection,
}