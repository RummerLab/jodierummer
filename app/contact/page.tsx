import Link from 'next/link'
import { FaTwitter, FaYoutube, FaInstagram, FaGlobe } from 'react-icons/fa'

export const metadata = {
    title: "Contact - Dr. Jodie Rummer",
    description: "Get in touch with Dr. Jodie Rummer and connect through various platforms.",
}

const socialLinks = [
    {
        name: 'Twitter',
        href: 'https://twitter.com/jodie_rummer',
        icon: FaTwitter,
        description: 'Follow for research updates and science communication',
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@jodierummer',
        icon: FaYoutube,
        description: 'Watch research videos and presentations',
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/jodie.rummer/',
        icon: FaInstagram,
        description: 'Behind the scenes of marine research',
    },
    {
        name: 'Lab Website',
        href: 'https://rummerlab.com/',
        icon: FaGlobe,
        description: 'Visit the Rummer Lab website',
    },
    {
        name: 'PhysioShark',
        href: 'https://physioshark.org/',
        icon: FaGlobe,
        description: 'Learn about our shark research',
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
                        {socialLinks.map((link) => (
                            <div
                                key={link.name}
                                className="flex items-center py-8 first:pt-0 last:pb-0"
                            >
                                <div className="flex-shrink-0">
                                    <link.icon className="h-12 w-12 text-blue-600" aria-hidden="true" />
                                </div>
                                <div className="ml-8">
                                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                                        <Link
                                            href={link.href}
                                            className="hover:text-blue-600 dark:hover:text-blue-400"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            {link.name}
                                        </Link>
                                    </h2>
                                    <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                                        {link.description}
                                    </p>
                                </div>
                            </div>
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
                                James Cook University
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white">Department:</strong>{' '}
                                College of Science and Engineering
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white">Location:</strong>{' '}
                                Townsville, Australia
                            </p>
                        </div>
                    </div>

                    {/* Media Inquiries */}
                    <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Media Inquiries
                        </h2>
                        <p className="mt-6 text-base text-slate-600 dark:text-slate-300">
                            For media inquiries, interviews, or speaking engagements, please reach out through social media or contact the James Cook University media team.
                        </p>
                    </div>

                    {/* Google Scholar */}
                    <div className="mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Academic Profile
                        </h2>
                        <p className="mt-6 text-base text-slate-600 dark:text-slate-300">
                            View Dr. Rummer's complete publication list and academic metrics on Google Scholar.
                        </p>
                        <div className="mt-6">
                            <Link
                                href="https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ"
                                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                                target="_blank"
                                rel="noopener"
                            >
                                Google Scholar Profile →
                            </Link>
                        </div>
                    </div>

                    <Link
                        href="https://www.linkedin.com/in/jodie-rummer/"
                        target="_blank"
                        rel="noopener"
                        className="text-blue-600 hover:text-blue-500"
                    >
                        LinkedIn Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}