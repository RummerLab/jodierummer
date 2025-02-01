'use client'

import * as React from 'react'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { FaChevronDown } from 'react-icons/fa'

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

export default function MainMenu() {
  return (
    <NavigationMenu.Root className="relative z-50 hidden lg:block">
      <NavigationMenu.List className="flex flex-row items-center gap-x-2">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/"
              className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/about"
              className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="relative">
          <div className="flex">
            <Link
              href="/research"
              className="group flex items-center gap-x-1 px-3 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors outline-none"
            >
              Research
            </Link>
            <NavigationMenu.Trigger className="group flex items-center px-2 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors outline-none border-l border-slate-200 dark:border-slate-700">
              <FaChevronDown
                className="h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </NavigationMenu.Trigger>
          </div>
          <NavigationMenu.Content className="absolute left-0 top-full w-[400px] rounded-lg bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-900/5 overflow-hidden data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4">
                {researchLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener" : undefined}
                    className="group relative flex flex-col rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1">
                      {item.title}
                      {item.isExternal && <span className="text-sm">↗️</span>}
                    </div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="relative">
          <div className="flex">
            <Link
              href="/publications"
              className="group flex items-center gap-x-1 px-3 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors outline-none"
            >
              Publications
            </Link>
            <NavigationMenu.Trigger className="group flex items-center px-2 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors outline-none border-l border-slate-200 dark:border-slate-700">
              <FaChevronDown
                className="h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </NavigationMenu.Trigger>
          </div>
          <NavigationMenu.Content className="absolute left-0 top-full w-[400px] rounded-lg bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-900/5 overflow-hidden data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight">
            <div className="p-4">
              <div className="grid grid-cols-1 gap-4">
                {publicationsLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener" : undefined}
                    className="group relative flex flex-col rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1">
                      {item.title}
                      {item.isExternal && <span className="text-sm">↗️</span>}
                    </div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/media"
              className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Media
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/women-in-science"
              className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Women in Science
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/contact"
              className="block px-3 py-2 text-sm font-semibold text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
} 