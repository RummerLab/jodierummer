import Link from 'next/link'
import { FaTwitter, FaYoutube, FaGlobe, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  { name: 'Lab Website', href: 'https://rummerlab.com/', icon: FaGlobe },
  { name: 'PhysioShark', href: 'https://physioshark.org/', icon: FaGlobe },
  { name: 'Twitter', href: 'https://twitter.com/jodie_rummer', icon: FaTwitter },
  { name: 'YouTube', href: 'https://www.youtube.com/@jodierummer', icon: FaYoutube },
  { name: 'Instagram', href: 'https://www.instagram.com/jodie.rummer/', icon: FaInstagram },
]

const footerLinks = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Publications', href: '/publications' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-400 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">{item.name}</span>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            )
          })}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <nav className="flex justify-center space-x-6 md:order-2 mb-4">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm leading-6 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Dr. Jodie Rummer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

