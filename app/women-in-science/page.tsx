import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: "Women in Science - Dr. Jodie Rummer",
    description: "Dr. Jodie Rummer's advocacy and support for women in scientific research and STEM fields.",
}

const achievements = [
    {
        year: "2015",
        title: "UNESCO-L'Oréal Women in Science Fellowship",
        description: "Awarded the prestigious UNESCO-L'Oréal Women in Science Fellowship for Australia and New Zealand.",
    },
    {
        year: "2016",
        title: "Top 5 Under 40",
        description: "Named one of Australia's top 5 scientists under the age of 40 by ABC and Radio National.",
    },
    {
        year: "2019",
        title: "Queensland Tall Poppy Scientist of the Year",
        description: "Honored as Queensland's Tall Poppy Outstanding Early Career Researcher Scientist of the Year.",
    },
]

const initiatives = [
    {
        title: "Mentorship Programs",
        description: "Leading mentorship programs for early-career women scientists in marine biology and related fields.",
    },
    {
        title: "Public Speaking",
        description: "Regular speaker at events promoting women's participation and leadership in scientific research.",
    },
    {
        title: "Advocacy",
        description: "Active advocate for gender equality and diversity in STEM fields through various platforms.",
    },
]

export default function WomenInSciencePage() {
    return (
        <div className="bg-white dark:bg-slate-950">
            {/* Hero section */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 dark:from-blue-950/20">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Women in Science
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Promoting and supporting women's participation and leadership in scientific research and STEM fields.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Our Mission
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Dr. Rummer is committed to advancing women's representation and success in scientific fields, particularly in marine biology and environmental science. Through mentorship, advocacy, and leadership, she works to create opportunities and support systems for women in science.
                    </p>
                </div>
            </div>

            {/* Achievements Timeline */}
            <div className="bg-slate-50 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Recognition & Impact
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Key achievements in promoting women in science.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {achievements.map((achievement) => (
                            <article
                                key={achievement.title}
                                className="flex flex-col items-start justify-between bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
                            >
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time className="text-slate-500 dark:text-slate-400">
                                        {achievement.year}
                                    </time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
                                        {achievement.title}
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                        {achievement.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Initiatives */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Current Initiatives
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Ongoing programs and activities supporting women in science.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {initiatives.map((initiative) => (
                        <div key={initiative.title} className="flex flex-col">
                            <dt className="text-xl font-semibold leading-7 text-slate-900 dark:text-white">
                                {initiative.title}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600 dark:text-slate-300">
                                <p className="flex-auto">{initiative.description}</p>
                            </dd>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-slate-50 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Get Involved
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Join us in promoting and supporting women in scientific research and STEM fields.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/contact"
                                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Contact Us
                            </Link>
                            <Link
                                href="/research"
                                className="text-sm font-semibold leading-6 text-slate-900 dark:text-white"
                            >
                                Learn More <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}