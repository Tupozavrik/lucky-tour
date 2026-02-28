import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "wpttru71",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false, // set to `false` to bypass the edge cache
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
