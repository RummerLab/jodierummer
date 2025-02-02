import { BskyAgent } from '@atproto/api'

const agent = new BskyAgent({ service: 'https://bsky.social' })

interface BlueskyPost {
  text: string
  createdAt: string
  uri: string
  cid: string
  indexedAt: string
  replyCount: number
  repostCount: number
  likeCount: number
  embed?: {
    images?: Array<{
      thumb: string
      fullsize: string
      alt: string
    }>
  }
}

export async function getBlueskyPosts(): Promise<BlueskyPost[]> {
  if (!process.env.BLUESKY_USERNAME || !process.env.BLUESKY_APP_PASSWORD) {
    throw new Error('Bluesky credentials not configured')
  }

  try {
    await agent.login({
      identifier: process.env.BLUESKY_USERNAME,
      password: process.env.BLUESKY_APP_PASSWORD,
    })

    const response = await agent.getAuthorFeed({
      actor: process.env.BLUESKY_USERNAME,
      limit: 20,
    })

    return response.data.feed.map((post) => {
      const record = post.post.record as any
      const embed = post.post.embed as any

      return {
        text: record.text || '',
        createdAt: record.createdAt || new Date().toISOString(),
        uri: post.post.uri,
        cid: post.post.cid,
        indexedAt: post.post.indexedAt,
        replyCount: post.post.replyCount || 0,
        repostCount: post.post.repostCount || 0,
        likeCount: post.post.likeCount || 0,
        embed: embed?.images ? {
          images: embed.images.map((img: any) => ({
            thumb: img.thumb,
            fullsize: img.fullsize,
            alt: img.alt || '',
          }))
        } : undefined,
      }
    })
  } catch (error) {
    console.error('Error fetching Bluesky posts:', error)
    return []
  }
} 