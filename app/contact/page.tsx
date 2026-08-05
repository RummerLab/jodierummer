import Link from 'next/link'
import Image from 'next/image'
import { FaYoutube, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { SiBluesky, SiResearchgate, SiGooglescholar } from 'react-icons/si'

export const metadata = {
    title: "Contact - Dr. Jodie Rummer",
    description: "Get in touch with Dr. Jodie Rummer and connect through various platforms.",
}

const socialLinks = [
    {
        name: 'Email',
        href: 'mailto:jodie.rummer@jcu.edu.au',
        icon: FaEnvelope,
        description: 'Send me an email at jodie.rummer@jcu.edu.au',
    },
    {
        name: 'Bluesky',
        href: 'https://bsky.app/profile/physiologyfish.bsky.social',
        icon: SiBluesky,
        description: 'Follow for research updates and discussions',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/rummerjodie/',
        icon: FaInstagram,
        description: 'Behind the scenes of marine research',
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@jodierummer',
        icon: FaYoutube,
        description: 'Watch research videos and presentations',
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jodie-rummer-486a9556/',
        icon: FaLinkedin,
        description: 'Connect professionally',
    },
    {
        name: 'ResearchGate',
        href: 'https://www.researchgate.net/profile/Jodie-Rummer',
        icon: SiResearchgate,
        description: 'View research profile and publications',
    },
    {
        name: 'Google Scholar',
        href: 'https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ',
        icon: SiGooglescholar,
        description: 'Access academic publications and citations',
    },
    {
        name: 'RummerLab Website',
        href: 'https://rummerlab.com/',
        component: (
            <div className="relative w-5 h-5">
                <Image
                    src="https://rummerlab.com/RummerLab_icon.svg"
                    alt="RummerLab Logo"
                    fill
                    className="object-contain brightness-[1.5] grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-200"
                    sizes="20px"
                    unoptimized
                />
            </div>
        ),
        description: 'Learn about our lab and research',
    },
    {
        name: 'PhysioShark',
        href: 'https://physioshark.org/',
        component: (
            <div className="relative w-6 h-6">
                <Image
                    src="https://physioshark.org/Physioshark_icon.svg"
                    alt="Physioshark Logo"
                    fill
                    className="object-contain brightness-[1.5] grayscale hover:grayscale-0 hover:brightness-100 transition-all duration-200"
                    sizes="24px"
                    unoptimized
                />
            </div>
        ),
        description: 'Learn about our shark research project',
    },
]

export default function ContactPage() {
    return (
        <div className="bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Get in Touch
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Connect with Dr. Jodie Rummer through various platforms and stay updated with the latest research developments.
                    </p>

                    {/* Social Links */}
                    <div className="mt-16 divide-y divide-slate-200 dark:divide-slate-800">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                target="_blank"
                                rel="noopener"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                    {item.component ? (
                                        item.component
                                    ) : (
                                        <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Academic Contact */}
                    <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Academic Contact
                        </h2>
                        <div className="mt-6 space-y-4 text-base text-slate-600 dark:text-slate-300">
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white">Position:</strong>{' '}
                                Professor of Marine Biology
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white">Institution:</strong>{' '}
                                <Link 
                                    href="https://portfolio.jcu.edu.au/researchers/jodie.rummer/"
                                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    James Cook University
                                </Link>
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white">Department:</strong>{' '}
                                College of Science and Engineering
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white">Location:</strong>{' '}
                                Townsville, Queensland, Australia
                            </p>
                        </div>
                    </div>

                    {/* Media Inquiries */}
                    <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Media Inquiries
                        </h2>
                        <p className="mt-6 text-base text-slate-600 dark:text-slate-300">
                            For media inquiries, interviews, or speaking engagements, please reach out through social media or contact the{' '}
                            <Link 
                                href="https://portfolio.jcu.edu.au/researchers/jodie.rummer/"
                                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                                target="_blank"
                                rel="noopener"
                            >
                                James Cook University
                            </Link> media team.
                        </p>
                    </div>

                    {/* Academic Profile */}
                    <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Academic Profile
                        </h2>
                        <p className="mt-6 text-base text-slate-600 dark:text-slate-300">
                            View Dr. Rummer&apos;s complete publication list and academic metrics on the following platforms:
                        </p>
                        <div className="mt-6 flex flex-col space-y-4">
                            <Link
                                href="https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ"
                                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                                target="_blank"
                                rel="noopener"
                            >
                                Google Scholar Profile →
                            </Link>
                            <Link
                                href="https://www.researchgate.net/profile/Jodie-Rummer"
                                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                                target="_blank"
                                rel="noopener"
                            >
                                ResearchGate Profile →
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/jodie-rummer-486a9556/"
                                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                                target="_blank"
                                rel="noopener"
                            >
                                LinkedIn Profile →
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}