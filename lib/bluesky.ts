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
  repostText?: string
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
    external?: {
      uri: string
      title: string
      description: string
      thumb?: string
    }
  }
  extractedUrl?: string
}

function extractUrl(text: string, facets?: any[]): string | undefined {
  // First try to get URL from facets if available
  if (facets?.length) {
    for (const facet of facets) {
      if (facet.features?.length) {
        for (const feature of facet.features) {
          // Skip mentions
          if (feature.$type === 'app.bsky.richtext.facet#mention') continue
          
          // Only process explicit links
          if (feature.$type === 'app.bsky.richtext.facet#link') {
            // Skip Bluesky links
            if (feature.uri.includes('bsky.social') || feature.uri.includes('bsky.app')) continue
            return feature.uri
          }
        }
      }
    }
  }

  // Fallback to regex extraction if no facet URL found
  // More strict URL regex that requires a valid TLD
  const urlRegex = /(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?/g
  const matches = text.match(urlRegex)
  let url = matches ? matches[0] : undefined

  // Validate the URL and skip Bluesky links
  if (url) {
    try {
      // Skip Bluesky links and mentions
      if (url.includes('bsky.app') || url.includes('.bsky.social')) return undefined

      // Check if it has a valid TLD
      const hasValidTLD = /\.[a-zA-Z]{2,}/.test(url)
      if (!hasValidTLD) return undefined

      // Add https:// if missing
      if (!url.startsWith('http')) {
        url = 'https://' + url
      }

      // Try to construct a URL to validate it
      new URL(url)
      return url
    } catch {
      return undefined
    }
  }

  return undefined
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
        .filter((post: AppBskyFeedDefs.FeedViewPost) => {
          // Filter out replies (posts that have a 'reply' property)
          const record = post.post.record as any
          return !record.reply
        })
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
            const postText = isRepost ? repostRecord?.text || '' : record.text || ''
            const repostText = isRepost ? record.text || '' : undefined
            
            // Get author data - for reposts, we want the original post's author
            const postAuthor = isRepost ? post.post.author : post.post.author
            
            if (!postAuthor?.handle) {
              console.error('Missing author data for post:', post.post.uri)
              return null
            }

            // Handle external links in embeds
            let externalEmbed = undefined
            
            if (embed?.external) {
              // Skip if it's a Bluesky link
              if (!embed.external.uri.includes('.bsky.social') && !embed.external.uri.includes('bsky.app')) {
                externalEmbed = {
                  uri: embed.external.uri,
                  title: embed.external.title,
                  description: embed.external.description,
                  thumb: embed.external.thumb
                }
              }
            }

            // Get URL from embed, repost text, or original post text
            const extractedUrl = externalEmbed?.uri || 
              (repostText && extractUrl(repostText, record?.facets)) || 
              extractUrl(postText, postData?.facets)

            const result: BlueskyPost = {
              text: postText,
              repostText,
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
              embed: embed?.images || externalEmbed ? {
                ...(embed?.images && {
                  images: embed.images.map((img: any) => ({
                    thumb: img.thumb,
                    fullsize: img.fullsize,
                    alt: img.alt || '',
                  }))
                }),
                ...(externalEmbed && { external: externalEmbed })
              } : undefined,
              extractedUrl
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