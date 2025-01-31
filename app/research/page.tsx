import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: "Research - Dr. Jodie Rummer",
    description: "Explore Dr. Jodie Rummer's research in marine biology, fish physiology, and climate change adaptation.",
}

const researchAreas = [
    {
        title: "Fish Physiology",
        description: "Understanding how fish function at cellular and systemic levels, with a focus on respiratory physiology and metabolism.",
        details: [
            "Oxygen uptake and delivery mechanisms",
            "Metabolic performance under stress",
            "Cardiovascular function and adaptation",
        ]
    },
    {
        title: "Climate Change Impact",
        description: "Investigating how marine life responds to environmental changes and their capacity for adaptation.",
        details: [
            "Ocean acidification effects",
            "Temperature stress responses",
            "Behavioral adaptations",
        ]
    },
    {
        title: "Conservation Biology",
        description: "Applying physiological research to conservation efforts and policy recommendations.",
        details: [
            "Population resilience studies",
            "Habitat preservation strategies",
            "Species management recommendations",
        ]
    },
]

const currentProjects = [
    {
        title: "Coral Reef Fish Adaptation",
        description: "Investigating how reef fish species adapt to rapid environmental changes in the Great Barrier Reef.",
    },
    {
        title: "Shark Physiology",
        description: "Studying the physiological mechanisms that enable sharks to maintain performance in changing environments.",
    },
    {
        title: "Ocean Acidification",
        description: "Examining the effects of ocean acidification on marine species' development and survival.",
    },
]

export default function ResearchPage() {
    return (
        <div className="bg-white dark:bg-slate-950">
            {/* Hero section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 dark:from-blue-950/20">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Research Areas
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Dr. Rummer's research combines physiology, ecology, and conservation science to understand how marine life adapts to environmental changes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Research Areas section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {researchAreas.map((area, index) => (
                        <div key={area.title} className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    {area.title}
                                </h2>
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

            {/* Current Projects section */}
            <div className="bg-slate-50 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-blue-600">Current Research</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Active Research Projects
                        </p>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Our ongoing research projects focus on understanding marine life adaptation and conservation in the face of environmental changes.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {currentProjects.map((project) => (
                                <div key={project.title} className="flex flex-col">
                                    <dt className="text-xl font-semibold leading-7 text-slate-900 dark:text-white">
                                        {project.title}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                                        <p className="flex-auto">{project.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
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
    )
}
