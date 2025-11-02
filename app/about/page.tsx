import Link from 'next/link'

export const metadata = {
    title: "About Dr. Jodie Rummer",
    description: "Learn about Dr. Jodie Rummer's background, research interests, and contributions to marine biology and conservation science.",
}

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-3xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        About Dr. Jodie Rummer
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Professor of Marine Biology at James Cook University, specializing in marine biology and comparative physiology.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
                    <div className="relative lg:order-last lg:col-span-5">
                        <figure className="border-l border-blue-600 pl-8">
                            <blockquote className="text-xl font-semibold leading-8 tracking-tight text-slate-900 dark:text-white">
                                <p>
                                    &quot;Teaching about topics that I am passionate and enthusiastic about engages students and improves the overall learning process. Whether in the classroom, the laboratory, or the field, I believe it is important to teach students how to learn, not just what to learn and to remember that we are all still learning, regardless of where we are in our careers.&quot;
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 flex gap-x-4">
                                <div className="text-sm leading-6">
                                    <div className="font-semibold text-slate-900 dark:text-white">Dr. Jodie Rummer</div>
                                    <div className="text-slate-600 dark:text-slate-400">Professor of Marine Biology</div>
                                </div>
                            </figcaption>
                        </figure>

                        <div className="mt-8 flex flex-col gap-4 text-slate-600 dark:text-slate-300">
                            <div className="flex items-center gap-2">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>jodie.rummer@jcu.edu.au</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>James Cook University, Townsville, Queensland, Australia</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-xl text-base leading-7 text-slate-700 dark:text-slate-300 lg:col-span-7">
                        <div className="space-y-6">
                            <p>
                                Dr. Jodie Rummer is a Professor of Marine Biology at James Cook University (JCU). Her academic journey began in the United States with Bachelor&apos;s and Master&apos;s degrees from the University of West Florida, followed by a PhD from the University of British Columbia, and a post-doctoral fellowship in Hong Kong.
                            </p>
                            
                            <p>
                                Since joining JCU in 2011 as an Australian Research Council (ARC) Super Science Fellow, Dr. Rummer has achieved numerous milestones, including being awarded an ARC Early Career Discovery Fellow (DECRA) and promotions to Associate Professor in 2017 and full professor in 2022.
                            </p>

                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">International Recognition</h2>
                            <p>
                                Dr. Rummer serves on the editorial board for three scientific journals and is part of the UNESCO Intergovernmental Oceanographic Committee advisory panel on global deoxygenation, contributing to the United Nations Decade of Ocean Science for Sustainable Development program.
                            </p>

                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Awards and Achievements</h2>
                            <ul className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                                <li className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>UNESCO-L&apos;Oréal Women in Science Fellowship for Australia and New Zealand (2015-2016)</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Society for Experimental Biology&apos;s President&apos;s Medal (2016)</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Named one of Australia&apos;s top 5 scientists under 40 by ABC and Radio National (2016)</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Women in Science Ambassador for the Australian Government (2018)</span>
                                </li>
                                <li className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Queensland&apos;s Tall Poppy outstanding early career researcher, scientist of the year (2019)</span>
                                </li>
                            </ul>

                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Research Impact</h2>
                            <p>
                                Over her career, Dr. Rummer has researched fish buoyancy, exercise, and is a leading authority on the evolution of oxygen transport and how fish maintain performance during stress. Her team combines physiology, ecology, and evolution to address issues important to conservation, particularly focusing on the effects of climate change and other anthropogenic stressors on coral reef fishes, sharks, and rays.
                            </p>
                            
                            <p>
                                With over 150 peer-reviewed publications and presentations at more than 120 professional conferences worldwide, Dr. Rummer&apos;s research has made significant contributions to our understanding of marine ecosystems and climate change impacts.
                            </p>

                            <div className="mt-16">
                                <Link href="/about/cv" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                                    View Full CV →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}