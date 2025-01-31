import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
