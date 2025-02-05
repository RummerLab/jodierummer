import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

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

                    <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden mb-8">
                        <div className="aspect-video relative w-full max-w-4xl mx-auto">
                            <iframe 
                                src="https://www.youtube.com/embed/-4EEP9CpI7s"
                                title="TEDx Talk: Athletes of the Great Barrier Reef by Dr. Jodie Rummer"
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
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
                    <div className="max-w-3xl space-y-6">
                        <ul className="space-y-6">
                            <li className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                                <p className="text-slate-900 dark:text-white mb-2">
                                    <strong className="text-slate-900 dark:text-white">Radio National Canberra:</strong>
                                    <span className="text-slate-700 dark:text-slate-300"> "Ocean acidification make fish gamble with their lives – study" by Felicity Ogilvie, AM Radio with Mark Colvin, 14 April 2014</span>
                                </p>
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                                <p className="text-slate-900 dark:text-white mb-2">
                                    <strong className="text-slate-900 dark:text-white">BBC:</strong>{' '}
                                    <Link 
                                        href="http://www.bbc.com/news/magazine-26746039"
                                        target="_blank"
                                        rel="noopener"
                                        className="text-blue-600 hover:text-blue-500 font-medium"
                                    >
                                        "How climate change will acidify the oceans"
                                    </Link>
                                    <span className="text-slate-700 dark:text-slate-300"> by Roger Harrabin, 26 March 2014</span>
                                </p>
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                                <p className="text-slate-900 dark:text-white mb-2">
                                    <strong className="text-slate-900 dark:text-white">ScienceDaily:</strong>{' '}
                                    <Link 
                                        href="http://www.sciencedaily.com/releases/2014/02/140211094304.htm"
                                        target="_blank"
                                        rel="noopener"
                                        className="text-blue-600 hover:text-blue-500 font-medium"
                                    >
                                        "Fish living near the equator will not thrive in the warmer oceans of the future"
                                    </Link>
                                    <span className="text-slate-700 dark:text-slate-300">, 11 Feb. 2014</span>
                                </p>
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                                <p className="text-slate-900 dark:text-white mb-2">
                                    <strong className="text-slate-900 dark:text-white">Documentary:</strong>
                                    <span className="text-slate-700 dark:text-slate-300"> "Acid Ocean" produced and directed by Sally Ingleton of 360 Degree Films, screened in Australia, USA, and France</span>
                                </p>
                            </li>
                            <li className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                                <p className="text-slate-900 dark:text-white mb-2">
                                    <strong className="text-slate-900 dark:text-white">Seattle Times:</strong>{' '}
                                    <Link 
                                        href="http://apps.seattletimes.com/reports/sea-change/2013/sep/11/pacific-ocean-perilous-turn-overview/"
                                        target="_blank"
                                        rel="noopener"
                                        className="text-blue-600 hover:text-blue-500 font-medium"
                                    >
                                        "Sea Change: The Pacific Ocean's Perilous Turn"
                                    </Link>
                                    <span className="text-slate-700 dark:text-slate-300"> by Craig Welch, September 2013</span>
                                </p>
                            </li>
                        </ul>
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
                                className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium gap-2"
                            >
                                View Google Scholar Profile
                                <span>↗</span>
                            </Link>
                            <div>
                                <Link
                                    href="/uploads/3/7/2/2/37225593/press_and_media_coverage_4dec.2014.pdf"
                                    target="_blank"
                                    rel="noopener"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium gap-2"
                                >
                                    Download complete media coverage list (PDF)
                                    <span>↗</span>
                                </Link>
                            </div>
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
