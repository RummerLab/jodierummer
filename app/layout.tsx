import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import { MainNav } from './components/navigation/MainNav'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: {
    default: "Dr. Jodie Rummer | Marine Biologist & Researcher",
    template: "%s | Dr. Jodie Rummer"
  },
  description: 'Dr. Jodie Rummer is a leading marine biologist specializing in fish physiology and adaptation to climate change, with over 15 years of research experience.',
  keywords: ['Marine Biology', 'Climate Change', 'Fish Physiology', 'Great Barrier Reef', 'Research', 'TEDx Speaker'],
  metadataBase: new URL('https://jodierummer.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jodierummer.com',
    siteName: 'Dr. Jodie Rummer',
    title: 'Dr. Jodie Rummer | Marine Biologist & Researcher',
    description: 'Dr. Jodie Rummer is a leading marine biologist specializing in fish physiology and adaptation to climate change.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jodie Rummer - Marine Biologist & Researcher'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jodie Rummer | Marine Biologist & Researcher',
    description: 'Dr. Jodie Rummer is a leading marine biologist specializing in fish physiology and adaptation to climate change.',
    images: ['/twitter-image.jpg'],
    creator: '@jodie_rummer'
  },
  alternates: {
    canonical: 'https://jodierummer.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <Script id="schema-person" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': 'https://jodierummer.com/#person',
            name: 'Dr. Jodie Rummer',
            givenName: 'Jodie',
            familyName: 'Rummer',
            url: 'https://jodierummer.com',
            sameAs: [
              'https://twitter.com/jodie_rummer',
              'https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ'
            ],
            jobTitle: 'Marine Biologist',
            description: 'Dr. Jodie Rummer is a leading marine biologist specializing in fish physiology and adaptation to climate change.',
            knowsAbout: [
              'Marine Biology',
              'Fish Physiology',
              'Climate Change',
              'Great Barrier Reef',
              'Ocean Conservation'
            ],
            alumniOf: {
              '@type': 'Organization',
              name: 'James Cook University'
            },
            worksFor: {
              '@type': 'Organization',
              name: 'Rummer Lab',
              url: 'https://rummerlab.com'
            }
          })}
        </Script>
        <Script id="schema-website" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://jodierummer.com/#website',
            url: 'https://jodierummer.com',
            name: 'Dr. Jodie Rummer',
            description: 'Dr. Jodie Rummer is a leading marine biologist specializing in fish physiology and adaptation to climate change.',
            publisher: {
              '@id': 'https://jodierummer.com/#person'
            }
          })}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        <MainNav />
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
