'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

interface VideoPlayerProps {
  thumbnail: string
  playlistUrl: string
  title?: string
  aspectRatio?: {
    width: number
    height: number
  }
}

export function VideoPlayer({ thumbnail, playlistUrl, title, aspectRatio }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)

  // Calculate padding based on aspect ratio
  const paddingPercentage = aspectRatio 
    ? (aspectRatio.height / aspectRatio.width) * 100 
    : 56.25 // Default 16:9 ratio

  const handlePlay = () => {
    setHasClicked(true)
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setHasClicked(false)
  }

  return (
    <div 
      className={`relative w-full rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 transition-all duration-300 ${
        isPlaying ? 'w-full' : 'max-w-md mx-auto'
      }`}
      style={{ 
        paddingBottom: isPlaying 
          ? `${paddingPercentage}%` 
          : `${Math.min(paddingPercentage, 56.25)}%` // Cap height in preview mode
      }}
    >
      {!hasClicked ? (
        <button
          onClick={handlePlay}
          className="absolute inset-0 w-full h-full group"
          aria-label="Play video"
        >
          <Image
            src={thumbnail}
            alt={title || 'Video thumbnail'}
            fill
            className="object-cover transition group-hover:opacity-90"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center transition group-hover:bg-black/60 group-hover:scale-110">
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-xs font-medium line-clamp-2">
                {title}
              </p>
            </div>
          )}
        </button>
      ) : (
        <div className="absolute inset-0">
          <ReactPlayer
            url={playlistUrl}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls
            pip
            stopOnUnmount
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
            config={{
              file: {
                forceHLS: true,
                attributes: {
                  poster: thumbnail
                }
              }
            }}
          />
        </div>
      )}
    </div>
  )
} 