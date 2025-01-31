import Image from 'next/image'

export const metadata = {
    title: "About Dr. Jodie Rummer",
    description: "Learn about Dr. Jodie Rummer's background, research interests, and contributions to marine biology.",
}

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        About Dr. Jodie Rummer
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Dr. Jodie Rummer is a leading marine biologist specializing in fish physiology and adaptation to climate change.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                    <div className="relative lg:order-last lg:col-span-5">
                        <figure className="border-l border-blue-600 pl-8">
                            <blockquote className="text-xl font-semibold leading-8 tracking-tight text-slate-900 dark:text-white">
                                <p>
                                    "Understanding how fish are responding to environmental and human-induced stress is crucial for predicting their capacity to adapt to global climate change."
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 flex gap-x-4">
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-slate-900 dark:text-white">Dr. Jodie Rummer</div>
                                    <div className="text-slate-600 dark:text-slate-400">Marine Biologist & Researcher</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="max-w-xl text-base leading-7 text-slate-700 dark:text-slate-300 lg:col-span-7">
                        <p>
                            With over 15 years of research experience, Dr. Rummer has dedicated her career to understanding how fish function, adapt, and evolve. Her work focuses on the physiological mechanisms that fish use to cope with environmental stressors, particularly in the context of climate change.
                        </p>
                        
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Research Focus</h2>
                        <p className="mt-6">
                            Dr. Rummer's research combines physiology, ecology, and conservation science to understand how fish are affected by environmental changes. Her work has been instrumental in:
                        </p>
                        <ul role="list" className="mt-8 space-y-8 text-slate-600 dark:text-slate-300">
                            <li className="flex gap-x-3">
                                <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                <span>Understanding fish respiratory physiology and metabolism</span>
                            </li>
                            <li className="flex gap-x-3">
                                <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                <span>Studying the effects of ocean acidification on marine life</span>
                            </li>
                            <li className="flex gap-x-3">
                                <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                <span>Investigating how climate change impacts coral reef ecosystems</span>
                            </li>
                        </ul>

                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Education & Achievements</h2>
                        <p className="mt-6">
                            Dr. Rummer received her Ph.D. in Biology from the University of British Columbia and has since held positions at prestigious research institutions worldwide. Her work has been recognized through numerous awards and grants, and she is a frequent speaker at international conferences.
                        </p>

                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Current Work</h2>
                        <p className="mt-6">
                            Currently based at James Cook University, Dr. Rummer leads research projects focusing on how fish populations will respond to future climate change scenarios. Her work combines laboratory and field-based research to provide comprehensive insights into fish physiology and adaptation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}