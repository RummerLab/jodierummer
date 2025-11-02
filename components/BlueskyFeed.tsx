import Image from 'next/image'
import Link from 'next/link'
import { getBlueskyPosts } from '@/lib/bluesky'
import { FaReply, FaRetweet, FaHeart } from 'react-icons/fa'
import { LinkPreview } from './LinkPreview'
import { VideoPlayer } from './VideoPlayer'

export async function BlueskyFeed() {
  const posts = await getBlueskyPosts()

  if (!posts.length) {
    return (
      <div className="text-center p-8 bg-slate-50 dark:bg-slate-900 rounded-xl">
        <p className="text-slate-600 dark:text-slate-400">No posts available at the moment.</p>
      </div>
    )
  }

  interface Post {
    text: string
    repostText?: string
    embed?: {
      images?: Array<{
        thumb: string
        alt?: string
      }>
      video?: {
        thumb?: string
        uri: string
        title?: string
      }
      external?: {
        uri: string
        title: string
        description: string
        thumb?: string
      }
    }
    extractedUrl?: string
    createdAt: string
    replyCount: number
    repostCount: number
    likeCount: number
    isRepost: boolean
    aspectRatio?: {
      width: number
      height: number
    }
  }

  const renderPostContent = (post: Post, blueskyUrl: string) => {
    const hasVideo = !!post.embed?.video
    const hasExtractedUrl = !!post.extractedUrl

    return (
      <div className="space-y-4">
        {post.isRepost && (
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <FaRetweet className="h-4 w-4" />
            <span>Reposted</span>
          </div>
        )}

        {post.repostText && (
          <p className="text-slate-600 dark:text-slate-400 text-sm whitespace-pre-wrap mb-4 border-l-2 border-slate-300 dark:border-slate-700 pl-3">
            {post.repostText}
          </p>
        )}
        
        <p className="text-slate-900 dark:text-white whitespace-pre-wrap">{post.text}</p>
        
        {post.embed?.images && (
          <div className={`grid ${post.embed.images.length > 1 ? 'grid-cols-2 gap-2' : 'grid-cols-1'}`}>
            {post.embed.images.map((image, index: number) => (
              <div 
                key={index} 
                className={`relative ${post.embed!.images!.length === 1 ? 'h-48' : 'aspect-square'}`}
              >
                <Image
                  src={image.thumb}
                  alt={image.alt || ''}
                  fill
                  className={`object-contain rounded-lg ${post.embed!.images!.length === 1 ? 'object-left' : 'object-cover'}`}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        )}

        {hasVideo && post.embed?.video && (
          <VideoPlayer
            thumbnail={post.embed.video.thumb || ''}
            playlistUrl={post.embed.video.uri}
            title={post.embed.video.title}
            aspectRatio={post.aspectRatio}
          />
        )}

        {hasExtractedUrl && !hasVideo && (
          <LinkPreview 
            url={post.extractedUrl} 
            embed={post.embed?.external}
            blueskyUrl={blueskyUrl}
            createdAt={post.createdAt}
          />
        )}

        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <time dateTime={post.createdAt}>
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaReply className="h-4 w-4" />
              <span>{post.replyCount}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaRetweet className="h-4 w-4" />
              <span>{post.repostCount}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHeart className="h-4 w-4" />
              <span>{post.likeCount}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <Link
            href={blueskyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition inline-flex items-center gap-1"
          >
            View post on Bluesky
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => {
        const blueskyUrl = `https://bsky.app/profile/${post.author.handle}/post/${post.uri?.split('/')?.pop() || ''}`
        
        return (
          <article
            key={post.cid}
            className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {renderPostContent(post, blueskyUrl)}
          </article>
        )
      })}
    </div>
  )
} 