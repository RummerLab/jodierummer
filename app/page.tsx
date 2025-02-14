import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { BlueskyFeed } from '@/components/BlueskyFeed'
import { YouTubeEmbed } from '@next/third-parties/google'
import { Suspense } from 'react'

export const metadata = {
  title: "Dr Jodie Rummer - Marine Biologist, TEDx Speaker, and Fish Friend",
  description: 'Dr. Jodie Rummer is a leading marine biologist specializing in fish physiology and adaptation to climate change.',
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

export default function Home() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Dr. Jodie Rummer
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Marine Biologist, TEDx Speaker, and Fish Physiologist studying how fish are responding to climate change
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/about"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                About Me
              </Link>
              <Link
                href="/research"
                className="text-sm font-semibold leading-6 text-slate-900 dark:text-white"
              >
                View Research <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/images/dr-jodie-rummer.jpg"
                alt="Dr. Jodie Rummer, Marine Biologist and Researcher"
                width={500}
                height={600}
                className="w-full h-auto max-h-[500px] sm:max-h-[500px] lg:h-[600px] rounded-2xl bg-slate-50 object-cover object-top shadow-xl ring-1 ring-slate-400/10"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Featured</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Watch my TEDx talk: Athletes of the Great Barrier Reef
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            With over 400 million years of evolution, fish represent one of the most successful adaptive radiation events in vertebrate history. 
            Yet, we do not fully understand how fish are responding to environmental and human-induced stress and their capacity to adapt to global climate change.
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <Suspense fallback={<VideoSkeleton />}>
            <YouTubeEmbed
              videoid="-4EEP9CpI7s"
              height={480}
              params="rel=0&modestbranding=1"
              playlabel="Play Athletes of the Great Barrier Reef - TEDx Talk by Dr. Jodie Rummer"
            />
          </Suspense>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/research" className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 px-8 pb-8 pt-40">
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900/40" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/30 via-slate-900/20" />
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                Research
                <span className="inline-flex items-center ml-2 text-blue-400 group-hover:translate-x-1 transition-transform">
                  <FaArrowRight className="h-5 w-5" />
                </span>
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Explore my research on fish physiology and climate change adaptation</p>
            </Link>

            <Link href="/publications" className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 px-8 pb-8 pt-40">
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900/40" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/30 via-slate-900/20" />
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                Publications
                <span className="inline-flex items-center ml-2 text-blue-400 group-hover:translate-x-1 transition-transform">
                  <FaArrowRight className="h-5 w-5" />
                </span>
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">View my published research and academic contributions</p>
            </Link>

            <Link href="/women-in-science" className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-slate-900 px-8 pb-8 pt-40">
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-900 via-slate-900/40" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/30 via-slate-900/20" />
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                Women in Science
                <span className="inline-flex items-center ml-2 text-blue-400 group-hover:translate-x-1 transition-transform">
                  <FaArrowRight className="h-5 w-5" />
                </span>
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">Supporting and inspiring women in scientific research</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
            Latest Updates
          </h2>
          <BlueskyFeed />
        </div>
      </div>
    </div>
  )
}
