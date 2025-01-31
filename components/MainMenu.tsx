'use client'

import * as React from 'react'
import Link from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { FaChevronDown } from 'react-icons/fa'

const researchLinks = [
  {
    title: 'Fish Physiology',
    href: '/research#fish-physiology',
    description: 'Understanding how fish function at cellular and systemic levels.',
  },
  {
    title: 'Climate Change Impact',
    href: '/research#climate-change',
    description: 'Investigating marine life responses to environmental changes.',
  },
  {
    title: 'Conservation Biology',
    href: '/research#conservation',
    description: 'Applying research to conservation efforts and policy.',
  },
]

const publicationsLinks = [
  {
    title: 'Journal Articles',
    href: '/publications#articles',
    description: 'Peer-reviewed research publications in scientific journals.',
  },
  {
    title: 'Book Chapters',
    href: '/publications#books',
    description: 'Contributions to academic books and compilations.',
  },
  {
    title: 'Conference Papers',
    href: '/publications#conferences',
    description: 'Research presented at international conferences.',
  },
]

export default function MainMenu() {
  return (
    <NavigationMenu.Root className="relative z-10 hidden lg:flex lg:gap-x-12">
      <NavigationMenu.List className="flex flex-row items-center gap-x-2">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              About
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors">
            Research
            <FaChevronDown
              className="h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-full w-screen sm:w-auto">
            <div className="overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-900/5">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 p-4 sm:grid-cols-2 sm:gap-y-8 sm:p-6">
                {researchLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group relative rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                      <span className="absolute inset-0" />
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
          <NavigationMenu.Trigger className="group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors">
            Publications
            <FaChevronDown
              className="h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-full w-screen sm:w-auto">
            <div className="overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-900/5">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 p-4 sm:grid-cols-2 sm:gap-y-8 sm:p-6">
                {publicationsLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group relative rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-700"
                  >
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                      <span className="absolute inset-0" />
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
              href="/women-in-science"
              className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Women in Science
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-900/5" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-lg transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
    </NavigationMenu.Root>
  )
} 