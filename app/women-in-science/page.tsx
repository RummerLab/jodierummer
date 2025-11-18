import Link from 'next/link'
import Script from 'next/script'

export const metadata = {
    title: "Women in Science - Dr. Jodie Rummer",
    description: "Dr. Jodie Rummer's advocacy and support for women and LGBTQIA+ individuals in scientific research and STEM fields.",
}

const achievements = [
    {
        year: "2015-2016",
        title: "UNESCO-L'Oréal Women in Science Fellowship",
        description: "Awarded the prestigious fellowship for Australia and New Zealand, bringing visibility to up-and-coming women in science.",
    },
    {
        year: "2018",
        title: "Women in Science Ambassador",
        description: "Named Women in Science Ambassador for the Australian Government Department of Industry, Innovation, & Science.",
    },
    {
        year: "2019",
        title: "Queensland Tall Poppy Scientist",
        description: "Honored as Queensland's Tall Poppy outstanding early career researcher, scientist of the year.",
    },
    {
        year: "2021",
        title: "Dare to Lead Training",
        description: "Completed Dr. Brené Brown's certified leadership training program, enhancing skills in inclusive leadership.",
    },
]

const initiatives = [
    {
        title: "Women in STEM Support",
        description: "Founding member of the Justice Equity Diversity and Inclusion (JEDI) committee at James Cook University and member of the College of Science and Engineering Diversity and Equity Committee.",
    },
    {
        title: "LGBTQIA+ Advocacy",
        description: "Provides a 'safe zone' for LGBTQIA+ scientists and allies, advocates for policy changes, and works to improve experiences of LGBTQIA+ students, faculty, and staff within STEM.",
    },
    {
        title: "Early Education",
        description: "Involved with the Girls in Science Forum, providing primary and secondary school girls worldwide opportunities to meet and be inspired by female scientists.",
    },
    {
        title: "Mentorship & Leadership",
        description: "Mentors post-graduate students and early-career researchers, with a focus on supporting women and underrepresented groups in marine science.",
    },
]

const impactAreas = [
    {
        title: "Academic Leadership",
        points: [
            "Member of the Gender Equity Action and Research (GEAR) Team for Athena Swan",
            "Advisory Board member for Women in Ocean Science",
            "Liaison for the Society for Experimental Biology women in science group",
            "Coordinates women in science events at JCU"
        ]
    },
    {
        title: "Policy & Advocacy",
        points: [
            "Advocates for policy changes to support diversity in STEM",
            "Works to improve recruitment and retention of diverse scientists",
            "Promotes visibility of women and LGBTQIA+ scientists in media",
            "Contributes to institutional diversity initiatives"
        ]
    },
    {
        title: "Community Building",
        points: [
            "Creates support networks for underrepresented groups",
            "Organizes workshops and networking events",
            "Facilitates mentoring relationships",
            "Builds online communities through social media"
        ]
    }
]

export default function WomenInSciencePage() {
    return (
        <div className="bg-white dark:bg-slate-950">
            {/* Hero section */}
            <div className="relative isolate overflow-hidden bg-linear-to-b from-blue-100/20 dark:from-blue-950/20">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Diversity in Science
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Promoting and supporting diversity, equity, and inclusion in scientific research and STEM fields, with a focus on women and LGBTQIA+ representation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Our Commitment
                    </h2>
                    <div className="mt-6 space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        <p>
                            Despite nearly equal representation at the university student level, the percentage of women in STEM fields starts to decline dramatically after post-doctoral positions. This &apos;leaky pipeline&apos; syndrome stems from various factors, ranging from discrimination to resource allocation and differences in communication and mentoring styles.
                        </p>
                        <p>
                            Dr. Rummer is committed to addressing these challenges through active involvement in initiatives that support women and other underrepresented groups in science. Her work extends from mentoring individual students to advocating for institutional policy changes.
                        </p>
                        <p>
                            As an LGBTQIA+ scientist, Dr. Rummer is also dedicated to creating an inclusive environment where brilliant LGBTQIA+ minds are not lost from STEM. This includes maintaining open dialogue about LGBTQIA+ experiences in science, providing safe spaces for discussion, and advocating for policy changes that support LGBTQIA+ scientists.
                        </p>
                    </div>
                </div>
            </div>

            {/* Achievements Timeline */}
            <div className="bg-slate-50 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Recognition & Impact
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Key achievements in promoting diversity in science.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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

            {/* Current Initiatives */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Current Initiatives
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Active programs and initiatives supporting diversity in science.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {initiatives.map((initiative) => (
                        <div key={initiative.title} className="relative flex items-center space-x-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-5 shadow-xs">
                            <div className="min-w-0 flex-1">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                    {initiative.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                                    {initiative.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Impact Areas */}
            <div className="bg-slate-50 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Areas of Impact
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Key areas where we&apos;re making a difference in promoting diversity in science.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {impactAreas.map((area) => (
                            <div key={area.title} className="lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                        {area.title}
                                    </h3>
                                    <ul role="list" className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                                        {area.points.map((point) => (
                                            <li key={point} className="flex gap-x-3">
                                                <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="mx-auto max-w-7xl px-6 py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Get Involved
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Join us in promoting diversity, equity, and inclusion in scientific research and STEM fields.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/contact"
                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
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

            {/* Add structured data */}
            <Script id="schema-diversity" type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    '@id': 'https://jodierummer.com/women-in-science/#organization',
                    name: 'Diversity in Science Initiative',
                    description: 'Promoting diversity, equity, and inclusion in scientific research and STEM fields.',
                    member: {
                        '@type': 'Person',
                        '@id': 'https://jodierummer.com/#person'
                    },
                    award: achievements.map(achievement => ({
                        '@type': 'Award',
                        name: achievement.title,
                        dateAwarded: achievement.year,
                        description: achievement.description
                    })),
                    program: initiatives.map(initiative => ({
                        '@type': 'Project',
                        name: initiative.title,
                        description: initiative.description
                    })),
                    areaServed: impactAreas.map(area => ({
                        '@type': 'Service',
                        name: area.title,
                        serviceType: 'Diversity Initiative',
                        offers: area.points.map(point => ({
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: point
                            }
                        }))
                    }))
                })}
            </Script>
        </div>
    )
}