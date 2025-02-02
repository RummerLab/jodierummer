import { AtpAgent, AppBskyFeedDefs, AppBskyActorDefs } from '@atproto/api'
import { unstable_cache } from 'next/cache'

// For authenticated requests, we use the PDS endpoint
const agent = new AtpAgent({ 
  service: 'https://bsky.social',
  persistSession: (evt, sess) => {
    // Session is handled per request
    return Promise.resolve()
  }
})

interface BlueskyPost {
  text: string
  createdAt: string
  uri: string
  cid: string
  indexedAt: string
  replyCount: number
  repostCount: number
  likeCount: number
  isRepost: boolean
  author: {
    handle: string
    did: string
  }
  originalUri?: string
  embed?: {
    images?: Array<{
      thumb: string
      fullsize: string
      alt: string
    }>
  }
}

export const getBlueskyPosts = unstable_cache(
  async (): Promise<BlueskyPost[]> => {
    if (!process.env.BLUESKY_USERNAME || !process.env.BLUESKY_APP_PASSWORD) {
      throw new Error('Bluesky credentials not configured')
    }

    try {
      const { success } = await agent.login({
        identifier: process.env.BLUESKY_USERNAME,
        password: process.env.BLUESKY_APP_PASSWORD
      })

      if (!success) {
        throw new Error('Login failed')
      }

      const response = await agent.app.bsky.feed.getAuthorFeed({
        actor: process.env.BLUESKY_USERNAME,
        limit: 20
      })

      return response.data.feed
        .map((post: AppBskyFeedDefs.FeedViewPost) => {
          const record = post.post.record as any
          const embed = post.post.embed as any
          const isRepost = post.reason?.$type === 'app.bsky.feed.defs#reasonRepost'
          
          try {
            // For reposts, get the original post data
            const repostRecord = isRepost ? (record?.record as any) : null
            
            // Get the correct post data and author
            const postData = isRepost ? repostRecord : record
            const postUri = isRepost ? repostRecord?.uri : post.post.uri
            
            // Get author data - for reposts, we want the original post's author
            const postAuthor = isRepost ? post.post.author : post.post.author
            
            if (!postAuthor?.handle) {
              console.error('Missing author data for post:', post.post.uri)
              return null
            }

            const result: BlueskyPost = {
              text: record.text || '',
              createdAt: postData?.createdAt || new Date().toISOString(),
              uri: postUri || post.post.uri,
              cid: post.post.cid,
              indexedAt: post.post.indexedAt,
              replyCount: post.post.replyCount || 0,
              repostCount: post.post.repostCount || 0,
              likeCount: post.post.likeCount || 0,
              isRepost,
              author: {
                handle: postAuthor.handle,
                did: postAuthor.did
              },
              embed: embed?.images ? {
                images: embed.images.map((img: any) => ({
                  thumb: img.thumb,
                  fullsize: img.fullsize,
                  alt: img.alt || '',
                }))
              } : undefined
            }

            return result
          } catch (err) {
            console.error('Error processing post:', post.post.uri, err)
            return null
          }
        })
        .filter((post): post is BlueskyPost => post !== null)
    } catch (error) {
      console.error('Error fetching Bluesky posts:', error)
      return []
    }
  },
  ['bluesky-posts'],
  {
    revalidate: 86400, // 24 hours in seconds
    tags: ['bluesky']
  }
) 