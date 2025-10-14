import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { YouTubeEmbed } from '@next/third-parties/google'
import { Suspense } from 'react'

export const metadata = {
    title: "Media",
    description: 'Explore Dr. Jodie Rummer\'s media appearances, interviews, and science communication efforts in marine biology and climate change research.',
}

const videos = [
    {
        title: "Fish Gills",
        author: "Leteisha Prescott",
        vimeoUrl: "https://vimeo.com/167221742",
    },
    {
        title: "Mudskipper Movie Trailer",
        author: "Tiffany Nay",
        vimeoUrl: "https://vimeo.com/167221741",
    },
    {
        title: "Baby Fish Swim",
        author: "Adam Downie",
        vimeoUrl: "https://vimeo.com/167221739",
    },
    {
        title: "Hot Fish",
        author: "Monica Morin",
        vimeoUrl: "https://vimeo.com/167221740",
    }
]

function VideoSkeleton() {
    return (
        <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse">
            <div className="w-full h-full flex items-center justify-center">
                <div className="text-slate-400 dark:text-slate-500">Loading video...</div>
            </div>
        </div>
    )
}

export default function MediaPage() {
    return (
        <div className="bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-12">
                    Media & Press Coverage
                </h1>

                {/* TEDx Talk Section */}
                <section aria-labelledby="tedx-title" className="mb-20">
                    <div className="max-w-3xl">
                        <h2 id="tedx-title" className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">TEDx Talk</h2>
                        <div className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                            <p>
                                On 3 October 2014, I had the distinct opportunity to give a presentation at a TEDx event hosted by{' '}
                                <Link 
                                    href="http://www.jcu.edu.au/"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-blue-600 hover:text-blue-500 font-medium"
                                >
                                    James Cook University
                                </Link>:{' '}
                                <Link 
                                    href="http://tedxjcucairns.com/about-2/"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-blue-600 hover:text-blue-500 font-medium"
                                >
                                    TEDxJCUCairns
                                </Link>.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 sm:mt-20 lg:mt-24">
                        {/* Video Embed */}
                        <div className="mb-8">
                            <div className="aspect-video relative w-full rounded-xl overflow-hidden">
                                <Suspense fallback={<VideoSkeleton />}>
                                    <YouTubeEmbed
                                        videoid="-4EEP9CpI7s"
                                        height={480}
                                        params="rel=0"
                                        playlabel="Play Athletes of the Great Barrier Reef - TEDx Talk by Dr. Jodie Rummer"
                                    />
                                </Suspense>
                            </div>
                        </div>

                        {/* Link to Watch Page */}
                        <Link 
                            href="/watch/-4EEP9CpI7s"
                            className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium gap-2"
                        >
                            View full video page
                            <svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                                />
                            </svg>
                        </Link>
                    </div>

                    <div className="max-w-3xl">
                        <div className="text-lg text-slate-700 dark:text-slate-300 space-y-4">
                            <p>
                                Watch my talk "Athletes of the Great Barrier Reef" presented at TEDxJCUCairns. Check it out, and share it with your friends, family, and colleagues!
                            </p>
                            <p>
                                There are some important issues in the tropics that need to be addressed globally! Spreading the word is the first step!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Science Communication Challenge Section */}
                <section aria-labelledby="scicomm-title" className="mb-20">
                    <h2 id="scicomm-title" className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">RummerLab Science Communication Challenge</h2>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-3xl">
                        The #RummerLab science communication challenge showcases PhD and MSc research through 30-second videos.
                    </p>
                    
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {videos.map((video) => (
                            <div key={video.title} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 space-y-4">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{video.title}</h3>
                                <div className="flex flex-col space-y-2">
                                    <p className="text-slate-700 dark:text-slate-300">By {video.author}</p>
                                    <Link 
                                        href={video.vimeoUrl}
                                        target="_blank"
                                        rel="noopener"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
                                        aria-label={`Watch ${video.title} by ${video.author} on Vimeo`}
                                    >
                                        Watch on Vimeo
                                        <span className="ml-1">↗</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Media Coverage Section */}
                <section aria-labelledby="media-coverage-title" className="mb-20">
                    <h2 id="media-coverage-title" className="text-3xl font-semibold text-slate-900 dark:text-white mb-6">Recent Media Coverage</h2>
                    <div className="max-w-3xl">
                        <div className="text-center py-12">
                            <p className="text-slate-600 dark:text-slate-300 mb-4">
                                See media on <Link href="https://rummerlab.com/media" className="text-blue-600 hover:text-blue-500 font-medium">RummerLab</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Social Media & Full Coverage Section */}
                <section className="grid gap-8 md:grid-cols-2 mb-20">
                    {/* Social Media */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Social Media</h2>
                        <Link 
                            href="https://bsky.app/profile/physiologyfish.bsky.social/"
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium gap-2"
                        >
                            Follow @physiologyfish on Bluesky
                            <span>↗</span>
                        </Link>
                    </div>

                    {/* Full Coverage */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Complete Media Coverage</h2>
                        <div className="space-y-4">
                            <Link 
                                href="https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ"
                                target="_blank"
                                rel="noopener"
                                className="flex items-center text-blue-600 hover:text-blue-500 font-medium gap-2"
                            >
                                View Google Scholar Profile
                                <span>↗</span>
                            </Link>
                            <Link 
                                href="/files/Dr_Jodie_Rummer_Interviews_2025.pdf"
                                target="_blank"
                                rel="noopener"
                                className="flex items-center text-blue-600 hover:text-blue-500 font-medium gap-2"
                            >
                                Download Interviews (PDF)
                                <span>↗</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Structured Data for Media Page */}
                <Script id="schema-media" type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        '@id': 'https://jodierummer.com/media/#webpage',
                        name: 'Media Coverage - Dr. Jodie Rummer',
                        description: 'Media appearances, interviews, and science communication by Dr. Jodie Rummer.',
                        isPartOf: {
                            '@id': 'https://jodierummer.com/#website'
                        },
                        about: {
                            '@id': 'https://jodierummer.com/#person'
                        },
                        video: {
                            '@type': 'VideoObject',
                            name: 'Athletes of the Great Barrier Reef',
                            description: 'TEDx talk by Dr. Jodie Rummer about marine life adaptation',
                            uploadDate: '2014-11-14T00:00:00+10:00',
                            thumbnailUrl: 'https://img.youtube.com/vi/-4EEP9CpI7s/maxresdefault.jpg',
                            embedUrl: 'https://www.youtube.com/embed/-4EEP9CpI7s'
                        }
                    })}
                </Script>
            </div>
        </div>
    )
}
