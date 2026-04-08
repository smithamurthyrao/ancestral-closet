import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

const builder = projectId && client ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource) {
  if (!builder) return { url: () => '' }
  return builder.image(source)
}

export async function getSarees() {
  if (!client) return []
  try {
    return await client.fetch(`
      *[_type == "saree" && available == true] | order(order asc, _createdAt desc) {
        _id,
        name,
        slug,
        type,
        origin,
        listingType,
        condition,
        buyPrice,
        rentPrice,
        images,
        description,
        featured,
      }
    `)
  } catch {
    return []
  }
}
