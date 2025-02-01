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
        twitter: "@TeishPrescott",
        vimeoUrl: "https://vimeo.com/167221742",
    },
    {
        title: "Mudskipper Movie Trailer",
        author: "Tiffany Nay",
        twitter: "@TiffanyJNay",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-8">
                Media & Press Coverage
            </h1>

            {/* TEDx Talk Section */}
            <section aria-labelledby="tedx-title" className="mb-12">
                <h2 id="tedx-title" className="text-2xl font-semibold mb-4">TEDx Talk</h2>
                <div className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    <p>
                        On 3 October 2014, I had the distinct opportunity to give a presentation at a TEDx event hosted by{' '}
                        <Link 
                            href="http://www.jcu.edu.au/"
                            target="_blank"
                            rel="noopener"
                            className="text-blue-600 hover:text-blue-500"
                        >
                            James Cook University
                        </Link>:{' '}
                        <Link 
                            href="http://tedxjcucairns.com/about-2/"
                            target="_blank"
                            rel="noopener"
                            className="text-blue-600 hover:text-blue-500"
                        >
                            TEDxJCUCairns
                        </Link>.
                    </p>
                </div>
                <div className="aspect-video relative w-full max-w-2xl mb-6">
                    <iframe 
                        src="https://www.youtube.com/embed/-4EEP9CpI7s"
                        title="TEDx Talk: Athletes of the Great Barrier Reef by Dr. Jodie Rummer"
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="text-lg text-slate-600 dark:text-slate-300 space-y-4">
                    <p>
                        Watch my talk "Athletes of the Great Barrier Reef" presented at TEDxJCUCairns. Check it out, and share it with your friends, family, and colleagues!
                    </p>
                    <p>
                        There are some important issues in the tropics that need to be addressed globally! Spreading the word is the first step!
                    </p>
                </div>
            </section>

            {/* Science Communication Challenge Section */}
            <section aria-labelledby="scicomm-title" className="mb-12">
                <h2 id="scicomm-title" className="text-2xl font-semibold mb-4">RummerLab Science Communication Challenge</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                    The <Link href="https://twitter.com/search?q=%23RummerLab" className="text-blue-600 hover:text-blue-500">#RummerLab</Link> science 
                    communication challenge showcases PhD and MSc research through 30-second videos.
                </p>
                
                <div className="grid gap-8 md:grid-cols-2">
                    {videos.map((video) => (
                        <div key={video.title} className="space-y-4">
                            <h3 className="text-xl font-medium">{video.title}</h3>
                            <div className="flex flex-col space-y-2">
                                <p>By {video.author} {video.twitter && (
                                    <Link 
                                        href={`https://twitter.com/${video.twitter.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener"
                                        className="text-blue-600 hover:text-blue-500"
                                    >
                                        {video.twitter}
                                    </Link>
                                )}</p>
                                <Link 
                                    href={video.vimeoUrl}
                                    target="_blank"
                                    rel="noopener"
                                    className="text-blue-600 hover:text-blue-500"
                                    aria-label={`Watch ${video.title} by ${video.author} on Vimeo`}
                                >
                                    Watch on Vimeo
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Media Coverage Section */}
            <section aria-labelledby="media-coverage-title" className="mb-12">
                <h2 id="media-coverage-title" className="text-2xl font-semibold mb-4">Recent Media Coverage</h2>
                <div className="prose prose-blue dark:prose-invert max-w-none">
                    <ul className="space-y-4">
                        <li>
                            <strong>Radio National Canberra:</strong> "Ocean acidification make fish gamble with their lives – study" by Felicity Ogilvie, AM Radio with Mark Colvin, 14 April 2014
                        </li>
                        <li>
                            <strong>BBC:</strong> <Link 
                                href="http://www.bbc.com/news/magazine-26746039"
                                target="_blank"
                                rel="noopener"
                                className="text-blue-600 hover:text-blue-500"
                            >
                                "How climate change will acidify the oceans"
                            </Link> by Roger Harrabin, 26 March 2014
                        </li>
                        <li>
                            <strong>ScienceDaily:</strong> <Link 
                                href="http://www.sciencedaily.com/releases/2014/02/140211094304.htm"
                                target="_blank"
                                rel="noopener"
                                className="text-blue-600 hover:text-blue-500"
                            >
                                "Fish living near the equator will not thrive in the warmer oceans of the future"
                            </Link>, 11 Feb. 2014
                        </li>
                        <li>
                            <strong>Documentary:</strong> "Acid Ocean" produced and directed by Sally Ingleton of 360 Degree Films, screened in Australia, USA, and France
                        </li>
                        <li>
                            <strong>Seattle Times:</strong> <Link 
                                href="http://apps.seattletimes.com/reports/sea-change/2013/sep/11/pacific-ocean-perilous-turn-overview/"
                                target="_blank"
                                rel="noopener"
                                className="text-blue-600 hover:text-blue-500"
                            >
                                "Sea Change: The Pacific Ocean's Perilous Turn"
                            </Link> by Craig Welch, September 2013
                        </li>
                        <li>
                            <strong>Nature News:</strong> <Link 
                                href="http://www.nature.com/news/making-the-most-of-muscle-oxygen-1.13202?WT.mc_id=TWT_NatureNews"
                                target="_blank"
                                rel="noopener"
                                className="text-blue-600 hover:text-blue-500"
                            >
                                "Making the most of muscle oxygen"
                            </Link>, 13 June 2013
                        </li>
                        <li>
                            <strong>The Richard Dawkins Foundation:</strong> <Link 
                                href="https://richarddawkins.net/2013/06/how-fish-won-the-oxygen-war/"
                                target="_blank"
                                rel="noopener"
                                className="text-blue-600 hover:text-blue-500"
                            >
                                "How fish won the oxygen war"
                            </Link>, 18 June 2013
                        </li>
                    </ul>
                </div>
            </section>

            {/* Social Media Section */}
            <section aria-labelledby="social-media-title" className="mb-12">
                <h2 id="social-media-title" className="text-2xl font-semibold mb-4">Social Media</h2>
                <div className="flex flex-col space-y-4">
                    <Link 
                        href="https://twitter.com/physiologyfish"
                        target="_blank"
                        rel="noopener"
                        className="text-blue-600 hover:text-blue-500 flex items-center"
                    >
                        Follow @physiologyfish on Twitter
                    </Link>
                </div>
            </section>

            {/* Full Media Coverage List */}
            <section aria-labelledby="full-coverage-title">
                <h2 id="full-coverage-title" className="text-2xl font-semibold mb-4">Complete Media Coverage</h2>
                <Link 
                    href="https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 hover:text-blue-500"
                >
                    View Google Scholar Profile
                </Link>
                <Link
                    href="/uploads/3/7/2/2/37225593/press_and_media_coverage_4dec.2014.pdf"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 hover:text-blue-500"
                >
                    Download complete media coverage list (PDF)
                </Link>
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
                        uploadDate: '2014-10-03',
                        thumbnailUrl: 'https://img.youtube.com/vi/-4EEP9CpI7s/maxresdefault.jpg',
                        embedUrl: 'https://www.youtube.com/embed/-4EEP9CpI7s'
                    }
                })}
            </Script>
        </div>
    )
}
