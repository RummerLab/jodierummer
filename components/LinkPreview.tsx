import Image from 'next/image'

interface ExternalEmbed {
  uri: string
  title: string
  description: string
  thumb?: string
}

interface LinkPreviewProps {
  url?: string
  embed?: ExternalEmbed
  blueskyUrl: string
  createdAt: string
}

async function getLinkPreview(url: string) {
  try {
    const response = await fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false`, {
      next: { revalidate: 86400 } // Cache for 24 hours
    })
    const data = await response.json()
    
    // If no image in the data, use the screenshot
    if (!data.data.image && data.data.screenshot) {
      data.data.image = { url: data.data.screenshot.url }
    }
    
    return data.data
  } catch (error) {
    console.error('Error fetching link preview:', error)
    return null
  }
}

export async function LinkPreview({ url, embed, blueskyUrl, createdAt }: LinkPreviewProps) {
  // If we have an embed, use that instead of fetching preview
  if (embed) {
    return (
      <a 
        href={embed.uri} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 block rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition"
      >
        <div className="flex flex-col sm:flex-row items-stretch">
          {embed.thumb && (
            <div className="relative w-full sm:w-48 h-48">
              <Image
                src={embed.thumb}
                alt={embed.title}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          )}
          <div className="p-4 flex-1 bg-white dark:bg-slate-800">
            <h3 className="font-medium text-slate-900 dark:text-white mb-2 line-clamp-2">
              {embed.title}
            </h3>
            {embed.description && (
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                {embed.description}
              </p>
            )}
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 truncate">
              {new URL(embed.uri).hostname}
            </p>
          </div>
        </div>
      </a>
    )
  }

  // If we have a URL but no embed, try microlink preview
  if (url) {
    const preview = await getLinkPreview(url)

    if (preview) {
      return (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 block rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition"
        >
          <div className="flex flex-col sm:flex-row items-stretch">
            {preview.image?.url && (
              <div className="relative w-full sm:w-48 h-48">
                <Image
                  src={preview.image.url}
                  alt={preview.title || 'Link preview'}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>
            )}
            <div className="p-4 flex-1 bg-white dark:bg-slate-800">
              {preview.title && (
                <h3 className="font-medium text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {preview.title}
                </h3>
              )}
              {preview.description && (
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {preview.description}
                </p>
              )}
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 truncate">
                {new URL(url).hostname}
              </p>
            </div>
          </div>
        </a>
      )
    }
  }

  // If no URL or preview available, show Bluesky link
  return (
    <a 
      href={blueskyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 block rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition"
    >
      <div className="p-4 bg-white dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.97 6.38L12.6 16.5c-.29.42-.77.5-1.17.2l-3.5-2.5c-.48-.34-.6-1.01-.26-1.49.34-.48 1.01-.6 1.49-.26l2.72 1.94 4.83-6.93c.34-.48 1.01-.6 1.49-.26.48.34.6 1.01.26 1.49z"/>
              </svg>
            </div>
            <span className="text-sm font-medium text-slate-900 dark:text-white">
              View on Bluesky
            </span>
          </div>
          <time dateTime={createdAt} className="text-sm text-slate-500 dark:text-slate-400">
            {new Date(createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>
      </div>
    </a>
  )
} 