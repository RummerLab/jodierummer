'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaChevronDown } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import MainMenu from './MainMenu'


const researchLinks = [
  {
    title: 'Research Areas',
    href: '/research#research-areas',
    description: 'Explore our key research areas in fish physiology and climate change.',
    isExternal: false,
  },
  {
    title: 'Current Projects',
    href: '/research#projects',
    description: 'Learn about our ongoing research initiatives and findings.',
    isExternal: false,
  },
  {
    title: 'RummerLab',
    href: 'https://rummerlab.com',
    description: 'Visit the Rummer Lab website for detailed research information.',
    isExternal: true,
  },
  {
    title: 'PhysioShark',
    href: 'https://physioshark.org',
    description: 'Discover our shark physiology research program.',
    isExternal: true,
  },
]

const publicationsLinks = [
  {
    title: 'Featured Publications',
    href: '/publications#featured',
    description: 'Browse our most impactful and recent research publications.',
    isExternal: false,
  },
  {
    title: 'Journal Articles',
    href: '/publications#articles',
    description: 'View peer-reviewed research publications in scientific journals.',
    isExternal: false,
  },
  {
    title: 'Book Chapters',
    href: '/publications#books',
    description: 'Read our contributions to academic books and compilations.',
    isExternal: false,
  },
  {
    title: 'Google Scholar',
    href: 'https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ',
    description: 'Access complete publication list and citation metrics.',
    isExternal: true,
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSubmenu = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-semibold text-xl text-slate-900 dark:text-white">Dr. Jodie Rummer</span>
          </Link>
        </div>
        
        <MainMenu />

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <ThemeToggle />
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              <HiMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/80 z-[100]" onClick={() => setMobileMenuOpen(false)} />
          
          {/* Menu panel */}
          <div className="fixed inset-0 z-[101] bg-white dark:bg-slate-900">
            <div className="flex h-full flex-col bg-white dark:bg-slate-900">
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                    <span className="font-semibold text-xl text-slate-900 dark:text-white">Dr. Jodie Rummer</span>
                  </Link>
                  <button
                    type="button"
                    className="rounded-md p-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/80"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <HiX className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Menu content */}
              <div className="flex-1 px-6 py-8 bg-white dark:bg-slate-900 overflow-y-auto">
                <nav className="flex flex-col gap-y-6">
                  {/* Main navigation with Research and Publications sections in correct order */}
                  <div className="space-y-2">
                    <Link
                      href="/"
                      className="block rounded-lg px-4 py-3.5 text-lg font-medium text-slate-900 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    
                    <Link
                      href="/about"
                      className="block rounded-lg px-4 py-3.5 text-lg font-medium text-slate-900 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About
                    </Link>

                    {/* Research Section */}
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <Link
                          href="/research"
                          onClick={() => {
                            setExpandedSection(null)
                            setMobileMenuOpen(false)
                          }}
                          className="flex-1 px-4 py-3 text-lg font-medium text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          Research
                        </Link>
                        <button
                          onClick={() => toggleSubmenu('research')}
                          className="px-4 py-3 text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border-l border-slate-200 dark:border-slate-700"
                          aria-expanded={expandedSection === 'research'}
                        >
                          <FaChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expandedSection === 'research' ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {expandedSection === 'research' && (
                        <div className="pl-4 pb-2">
                          {researchLinks.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              target={item.isExternal ? "_blank" : undefined}
                              rel={item.isExternal ? "noopener" : undefined}
                              className="flex flex-col px-4 py-3 text-sm text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              <span className="font-semibold flex items-center gap-1">
                                {item.title}
                                {item.isExternal && <span className="text-sm">↗️</span>}
                              </span>
                              <span className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Publications Section */}
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <Link
                          href="/publications"
                          onClick={() => {
                            setExpandedSection(null)
                            setMobileMenuOpen(false)
                          }}
                          className="flex-1 px-4 py-3 text-lg font-medium text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          Publications
                        </Link>
                        <button
                          onClick={() => toggleSubmenu('publications')}
                          className="px-4 py-3 text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border-l border-slate-200 dark:border-slate-700"
                          aria-expanded={expandedSection === 'publications'}
                        >
                          <FaChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              expandedSection === 'publications' ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {expandedSection === 'publications' && (
                        <div className="pl-4 pb-2">
                          {publicationsLinks.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              target={item.isExternal ? "_blank" : undefined}
                              rel={item.isExternal ? "noopener" : undefined}
                              className="flex flex-col px-4 py-3 text-sm text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              <span className="font-semibold flex items-center gap-1">
                                {item.title}
                                {item.isExternal && <span className="text-sm">↗️</span>}
                              </span>
                              <span className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/media"
                      className="block rounded-lg px-4 py-3.5 text-lg font-medium text-slate-900 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Media
                    </Link>
                    
                    <Link
                      href="/women-in-science"
                      className="block rounded-lg px-4 py-3.5 text-lg font-medium text-slate-900 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Women in Science
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="block rounded-lg px-4 py-3.5 text-lg font-medium text-slate-900 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}