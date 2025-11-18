import Link from 'next/link'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'

export const metadata = {
    title: "Dr. Jodie Rummer - Curriculum Vitae",
    description: "Detailed curriculum vitae of Dr. Jodie Rummer, including academic qualifications, employment history, awards, and professional activities.",
}

export default function CVPage() {
    return (
        <div className="bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-3xl">
                    <nav className="mb-8">
                        <Link href="/about" className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                            ← Back to About
                        </Link>
                    </nav>

                    <div className="flex justify-between items-start gap-8">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                                Curriculum Vitae
                            </h1>

                            {/* PDF Downloads */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <Link 
                                    href="/files/rummer-cv-full-references-2024-11-15.pdf"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-xs text-white bg-blue-600 hover:bg-blue-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-slate-900"
                                >
                                    <FaDownload className="mr-2 -ml-1 h-4 w-4" />
                                    Download Full CV (PDF)
                                </Link>
                                <Link 
                                    href="/files/rummer-short-bio-2025-01-14.pdf"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800 dark:focus:ring-offset-slate-900"
                                >
                                    <FaDownload className="mr-2 -ml-1 h-4 w-4" />
                                    Download Short Bio (PDF)
                                </Link>
                            </div>
                        </div>

                        <div className="relative w-40 h-40 shrink-0 hidden sm:block">
                            <Image
                                src="/jodie-rummer-logo.svg"
                                alt="Dr. Jodie Rummer Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="mt-10 space-y-16 text-base leading-7 text-slate-700 dark:text-slate-300">
                        {/* Academic Qualifications */}
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Academic Qualifications</h2>
                            <div className="mt-6 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">PhD – Zoology</h3>
                                    <p>University of British Columbia, Vancouver, B.C. CANADA</p>
                                    <p className="text-sm">November 2010</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">MSc – Biology</h3>
                                    <p>University of West Florida, Pensacola, FL USA</p>
                                    <p className="text-sm">June 2004</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">BSc – Marine Biology (honours)</h3>
                                    <p>University of West Florida, Pensacola, FL USA</p>
                                    <p className="text-sm">August 1999</p>
                                </div>
                            </div>
                        </section>

                        {/* Employment History */}
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Academic Employment History</h2>
                            <div className="mt-6 space-y-6">
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">Professor of Marine Biology (Academic E)</h3>
                                    <p>College of Science & Engineering, James Cook University, Townsville, AUSTRALIA</p>
                                    <p className="text-sm">2022 – present</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">Associate Professor of Marine Biology (Academic D)</h3>
                                    <p>College of Science & Engineering, James Cook University, Townsville, AUSTRALIA</p>
                                    <p className="text-sm">2021 – 2022</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">Associate Professor, Principal Research Fellow (Academic D)</h3>
                                    <p>ARC Centre of Excellence for Coral Reef Studies, James Cook University, Townsville, AUSTRALIA</p>
                                    <p className="text-sm">2017 – 2020</p>
                                </div>
                            </div>
                        </section>

                        {/* Leadership Roles */}
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Leadership and Administrative Roles</h2>
                            <div className="mt-6 space-y-4">
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>President – Australian Coral Reef Society (August 2024 – present)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Vice President – Australian Coral Reef Society (2023 – 2024)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Associate Editor – Proceedings of the Royal Society - Biology (2021 – present)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Editorial Board – Journal of Marine Science and Engineering (2020 – present)</span>
                                </div>
                            </div>
                        </section>

                        {/* Professional Activities */}
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Professional Activities</h2>
                            <div className="mt-6 space-y-4">
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Australian Coral Reef Society (President, 2024 – present)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Australian Society for Fish Biology (ASFB)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Oceania Chondrichthyan Society (OCS)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Society for Experimental Biology (SEB, society ambassador, co-chair women in science)</span>
                                </div>
                            </div>
                        </section>

                        {/* Training and Certifications */}
                        <section>
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Training and Certifications</h2>
                            <div className="mt-6 space-y-4">
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Dare to Lead, Dr. Brené Brown&apos;s certified leadership training (Lead with Courage, 2021)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Pathways to Impact workshop and training (Research Impact Academy, 2021)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Research Integrity training (2021)</span>
                                </div>
                                <div className="flex gap-x-3">
                                    <span className="mt-1 h-5 w-5 flex-none text-blue-600">•</span>
                                    <span>Climate Media Centre – science communication training (2021 and annually)</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
} 