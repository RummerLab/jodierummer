import { Metadata, ResolvingMetadata } from 'next'
import { YouTubeEmbed } from '@next/third-parties/google'
import { Suspense } from 'react'
import Script from 'next/script'

interface YouTubeOEmbed {
  title: string
  author_name: string
  author_url: string
  type: string
  height: number
  width: number
  version: string
  provider_name: string
  provider_url: string
  thumbnail_height: number
  thumbnail_width: number
  thumbnail_url: string
  html: string
}

interface YouTubeVideoResponse {
  items: Array<{
    id: string
    snippet: {
      publishedAt: string
      title: string
      description: string
    }
    contentDetails: {
      duration: string
    }
  }>
}

interface PageProps {
  params: Promise<{ videoId: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getVideoData(videoId: string) {
  try {
    // Fetch basic metadata from oEmbed
    const oembedResponse = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { next: { revalidate: 86400 } }
    )
    
    if (!oembedResponse.ok) {
      throw new Error('Failed to fetch video data from oEmbed')
    }

    const oembedData: YouTubeOEmbed = await oembedResponse.json()

    // Fetch additional metadata from YouTube Data API
    const apiKey = process.env.YOUTUBE_API_KEY
    if (!apiKey) {
      console.warn('YouTube API key is not configured, using fallback data')
      return {
        id: videoId,
        title: oembedData.title,
        description: `Watch "${oembedData.title}" by ${oembedData.author_name}. This video explores marine biology and climate change research.`,
        thumbnail: oembedData.thumbnail_url.replace('hqdefault', 'maxresdefault'),
        url: `https://www.youtube.com/embed/${videoId}`,
        uploadDate: '2014-10-03', // Fallback date
        duration: 'PT18M' // Fallback duration
      }
    }

    const ytResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&id=${videoId}&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    )

    if (!ytResponse.ok) {
      throw new Error('Failed to fetch video data from YouTube API')
    }

    const ytData: YouTubeVideoResponse = await ytResponse.json()
    
    if (!ytData.items?.[0]) {
      throw new Error('No video found with the provided ID')
    }

    const video = ytData.items[0]

    return {
      id: videoId,
      title: oembedData.title,
      description: `Watch "${oembedData.title}" by ${oembedData.author_name}. This video explores marine biology and climate change research.`,
      thumbnail: oembedData.thumbnail_url.replace('hqdefault', 'maxresdefault'),
      url: `https://www.youtube.com/embed/${videoId}`,
      uploadDate: video.snippet.publishedAt.split('T')[0],
      duration: video.contentDetails.duration
    }
  } catch (error) {
    console.error('Error fetching video data:', error)
    return null
  }
}

export async function generateMetadata(
  { params, searchParams }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  const video = await getVideoData(resolvedParams.videoId)
  
  if (!video) {
    return {
      metadataBase: new URL('https://jodierummer.com'),
      title: 'Video Not Found',
      description: 'The requested video could not be found.',
      robots: {
        index: false,
        follow: true
      }
    }
  }

  return {
    metadataBase: new URL('https://jodierummer.com'),
    title: video.title,
    description: video.description,
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: video.title,
      description: video.description,
      type: 'video.other',
      videos: [{
        url: `https://www.youtube.com/watch?v=${video.id}`,
        width: 1920,
        height: 1080,
        type: 'text/html'
      }],
      images: [{
        url: video.thumbnail,
        width: 1920,
        height: 1080,
        type: 'image/jpeg'
      }]
    },
    twitter: {
      card: 'player',
      title: video.title,
      description: video.description,
      images: [video.thumbnail],
    }
  }
}

function VideoSkeleton() {
  return (
    <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse">
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-slate-400 dark:text-slate-500">Loading video...</div>
      </div>
    </div>
  )
}

export default async function WatchPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  const video = await getVideoData(resolvedParams.videoId)

  if (!video) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Video Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            The requested video could not be found.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          {video.title}
        </h1>

        <div className="aspect-video mb-8">
          <Suspense fallback={<VideoSkeleton />}>
            <YouTubeEmbed
              videoid={resolvedParams.videoId}
              height={480}
              params="rel=0"
              playlabel={`Play ${video.title}`}
            />
          </Suspense>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p>{video.description}</p>
        </div>

        <Script id="video-schema" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: video.title,
            description: video.description,
            thumbnailUrl: video.thumbnail,
            uploadDate: video.uploadDate,
            duration: video.duration,
            embedUrl: video.url,
            contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
            '@id': `https://jodierummer.com/watch/${video.id}#video`,
            author: {
              '@type': 'Person',
              name: 'Dr. Jodie Rummer',
              '@id': 'https://jodierummer.com/#person'
            }
          })}
        </Script>
      </article>
    </div>
  )
} 