import Link from 'next/link'
import Script from 'next/script'

export const metadata = {
    title: "Research - Dr. Jodie Rummer",
    description: "Explore Dr. Jodie Rummer's research in marine biology, fish physiology, and climate change adaptation.",
    openGraph: {
        title: "Research - Dr. Jodie Rummer",
        description: "Cutting-edge research in marine biology and climate change adaptation.",
        type: 'website',
    }
}

const researchAreas = [
    {
        title: "Ecological & Conservation Physiology",
        description: "Understanding physiological and biochemical mechanisms fish use to respond to natural and anthropogenic environmental change.",
        details: [
            "Temperature adaptation and acclimation",
            "CO2 and ocean acidification impacts",
            "Swimming performance and exercise",
            "Larval fish biology and development"
        ],
        id: "eco-physiology"
    },
    {
        title: "Climate Change Adaptation",
        description: "Investigating how marine species acclimate and adapt to climate-related stressors.",
        details: [
            "Geographic gradient studies",
            "Local extreme environment research",
            "Population-level adaptations",
            "Future climate scenario modeling"
        ],
        id: "climate-adaptation"
    },
    {
        title: "Shark & Ray Research",
        description: "Studying the physiological tolerance of sharks and rays in changing environments.",
        details: [
            "Nursery habitat research",
            "Temperature and pH tolerance",
            "Oxygen regulation studies",
            "Movement and behavior patterns"
        ],
        id: "shark-research"
    },
]

const majorGrants = [
    {
        title: "King Abdullah University of Science and Technology CRG4",
        amount: "$1,800,000 AUD",
        period: "2016-2019",
        description: "Genomic evidence for adaptation of marine fishes to ocean acidification",
    },
    {
        title: "Australian Research Council Discovery Fellowship",
        amount: "$358,536 AUD",
        period: "2015-2017",
        description: "Physiological performance of reef fishes under ocean acidification",
    },
    {
        title: "L'Oréal-UNESCO Women in Science Fellowship",
        amount: "$25,000 AUD",
        period: "2015-2016",
        description: "Growing up strong in a changing climate: Maintaining physiological performance in juvenile reef sharks",
    },
    {
        title: "Australian Research Council Super Science Fellowship",
        amount: "$835,200 AUD",
        period: "2011-2015",
        description: "Resilience of Coral Reef Ecosystems to Climate Change",
    },
]

export default function ResearchPage() {
    return (
        <>
            <div className="bg-white dark:bg-slate-950">
                {/* Hero section */}
                <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 dark:from-blue-950/20">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                Research Overview
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                                Dr. Rummer&apos;s research combines ecological and conservation physiology with an emphasis on issues affecting marine, estuarine, and freshwater fish populations. Her work focuses on understanding how fish respond to environmental change and the implications for conservation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Research Statement section */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Research Statement</h2>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-slate-600 dark:text-slate-300 mb-6">
                                My research aims to understand the physiological mechanisms that fishes use to acclimate and adapt to climate-related stressors and to make predictions as to which species and populations may be most at risk from climate change and other anthropogenic stressors.
                            </p>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">
                                My approach consists of an innovative combination of field- and laboratory-based experimentation, including harnessing geographic gradients and local extreme environments as analogues for future change, investigating the extreme performers within aquatic environments, and integrating conventional and state-of-the-art physiological, biochemical, and molecular techniques.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Research Areas section */}
                <div className="bg-slate-50 dark:bg-slate-900">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                        <h2 id="research-areas" className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-16">Research Areas</h2>
                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {researchAreas.map((area) => (
                                <div key={area.title} id={area.id} className="lg:pr-8 lg:pt-4 scroll-mt-16">
                                    <div className="lg:max-w-lg">
                                        <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                            {area.title}
                                        </h3>
                                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                                            {area.description}
                                        </p>
                                        <ul role="list" className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                                            {area.details.map((detail) => (
                                                <li key={detail} className="flex gap-x-3">
                                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Major Grants section */}
                <div id="grants" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 scroll-mt-16">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Major Research Grants</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-16">
                            Dr. Rummer&apos;s research has been supported by prestigious grants and fellowships, enabling groundbreaking work in marine biology and conservation.
                        </p>
                        <div className="grid gap-8 lg:grid-cols-2">
                            {majorGrants.map((grant) => (
                                <div key={grant.title} className="relative flex items-center space-x-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-slate-400 dark:hover:border-slate-600">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                            {grant.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                            {grant.period} • {grant.amount}
                                        </p>
                                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                            {grant.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-slate-50 dark:bg-slate-900">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                Interested in our research?
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                                Learn more about our findings and their implications for marine conservation.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    href="/publications"
                                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    View Publications
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                                >
                                    Contact Us <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add structured data */}
            <Script id="schema-research" type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ResearchProject',
                    '@id': 'https://jodierummer.com/research/#project',
                    name: 'Marine Biology Research at RummerLab',
                    description: 'Research in fish physiology, climate change impacts, and marine conservation.',
                    funder: {
                        '@type': 'Organization',
                        name: 'James Cook University'
                    },
                    member: {
                        '@type': 'Person',
                        '@id': 'https://jodierummer.com/#person'
                    },
                    location: {
                        '@type': 'Place',
                        name: 'Great Barrier Reef'
                    },
                    subjectOf: researchAreas.map(area => ({
                        '@type': 'ResearchProject',
                        name: area.title,
                        description: area.description,
                        identifier: area.id
                    })),
                    funding: majorGrants.map(grant => ({
                        '@type': 'Grant',
                        name: grant.title,
                        amount: {
                            '@type': 'MonetaryAmount',
                            currency: 'AUD',
                            value: grant.amount.replace(/[^0-9]/g, '')
                        },
                        funder: {
                            '@type': 'Organization',
                            name: grant.title.split(' ')[0]
                        },
                        description: grant.description
                    }))
                })}
            </Script>

            {/* Add breadcrumb structured data */}
            <Script id="schema-breadcrumb" type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            item: {
                                '@id': 'https://jodierummer.com',
                                name: 'Home'
                            }
                        },
                        {
                            '@type': 'ListItem',
                            position: 2,
                            item: {
                                '@id': 'https://jodierummer.com/research',
                                name: 'Research'
                            }
                        }
                    ]
                })}
            </Script>
        </>
    )
}
