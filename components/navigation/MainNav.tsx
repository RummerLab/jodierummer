'use client'

import Link from 'next/link'
import { useState } from 'react'

const navigation = {
    main: [
        { name: 'About', href: '/about' },
        { 
            name: 'Research',
            href: '/research',
            dropdown: [
                { name: 'Overview', href: '/research' },
                { name: 'Ecological & Conservation Physiology', href: '/research#eco-physiology' },
                { name: 'Climate Change Adaptation', href: '/research#climate-adaptation' },
                { name: 'Shark & Ray Research', href: '/research#shark-research' },
                { name: 'Major Grants', href: '/research#grants' }
            ]
        },
        { name: 'Publications', href: '/publications' },
        { name: 'Women in Science', href: '/women-in-science' },
        { name: 'Contact', href: '/contact' },
    ]
}

export function MainNav() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    return (
        <nav className="bg-white dark:bg-slate-900 shadow-sm fixed w-full z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
                                Dr. Jodie Rummer
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {navigation.main.map((item) => (
                                <div key={item.name} className="relative inline-block text-left"
                                    onMouseEnter={() => setOpenDropdown(item.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}>
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-slate-200"
                                    >
                                        {item.name}
                                        {item.dropdown && (
                                            <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </Link>
                                    {item.dropdown && openDropdown === item.name && (
                                        <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                            <div className="py-1">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
} 