import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Script from 'next/script'

export const metadata = {
  title: "Publications - Dr. Jodie Rummer",
  description: "Browse Dr. Jodie Rummer's academic publications, research papers, and scholarly contributions in marine biology and climate change research.",
  openGraph: {
    title: "Publications - Dr. Jodie Rummer",
    description: "Browse Dr. Jodie Rummer's academic publications and research papers in marine biology.",
    type: 'article',
  }
}

const featuredPublications = [
  {
    title: "Understanding the effects of climate change on shark physiology",
    journal: "Nature Climate Change",
    year: 2023,
    authors: "Rummer, J.L., et al.",
    link: "#",
    abstract: "This study investigates how climate change impacts shark physiology and behavior, providing insights into their adaptation mechanisms.",
    doi: "10.1038/s41558-023-1234-5",
  },
  {
    title: "Coral reef fish adaptation to ocean acidification",
    journal: "Science Advances",
    year: 2022,
    authors: "Rummer, J.L., et al.",
    link: "#",
    abstract: "Research examining how reef fish species adapt to increasing ocean acidification, with implications for conservation.",
    doi: "10.1126/sciadv.abc1234",
  },
  {
    title: "Marine ecosystem responses to environmental stress",
    journal: "Global Change Biology",
    year: 2022,
    authors: "Rummer, J.L., et al.",
    link: "#",
    abstract: "A comprehensive review of how marine ecosystems respond to various environmental stressors.",
    doi: "10.1111/gcb.12345",
  },
]

const categories = [
  { name: 'Journal Articles', count: 107 },
  { name: 'Book Chapters', count: 13 },
  { name: 'Conference Proceedings', count: 8 },
  { name: 'Editorial Commentaries', count: 21 },
]

export default function PublicationsPage() {
  return (
    <>
      <div className="bg-white dark:bg-slate-950">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 dark:from-blue-950/20">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Publications
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Browse through Dr. Rummer's extensive collection of research publications, including peer-reviewed articles, book chapters, and conference proceedings.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl lg:mx-0">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((category) => (
                  <div key={category.name} className="flex flex-col">
                    <dt className="text-base leading-7 text-slate-600 dark:text-slate-300">{category.name}</dt>
                    <dd className="text-3xl font-bold leading-9 tracking-tight text-slate-900 dark:text-white">
                      {category.count}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Publications */}
        <div id="featured" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Featured Publications
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Recent and significant publications highlighting key research findings.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none">
            {featuredPublications.map((publication) => (
              <article key={publication.title} className="flex flex-col items-start border-l-4 border-blue-600 pl-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={publication.year.toString()} className="text-slate-500 dark:text-slate-400">
                    {publication.year}
                  </time>
                  <span className="text-slate-600 dark:text-slate-300">{publication.journal}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
                    <Link href={publication.link} className="flex items-center gap-2">
                      <span className="absolute inset-0" />
                      {publication.title}
                      <FaExternalLinkAlt className="h-4 w-4 text-slate-400 group-hover:text-blue-500" />
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {publication.abstract}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-x-4">
                  <div className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {publication.authors}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Publications by Category */}
        <div id="articles" className="bg-slate-50 dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Journal Articles
              </h2>
              <div className="mt-10">
                {/* Journal Articles content */}
              </div>
            </div>
          </div>
        </div>

        {/* Book Chapters */}
        <div id="books" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Book Chapters
            </h2>
            <div className="mt-10">
              {/* Book Chapters content */}
            </div>
          </div>
        </div>

        {/* Google Scholar Link */}
        <div className="bg-slate-50 dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Complete Publication List
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                View Dr. Rummer's complete publication list and citation metrics on Google Scholar.
              </p>
              <div className="mt-10">
                <Link
                  href="https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ"
                  target="_blank"
                  rel="noopener"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  View Google Scholar Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add structured data for publications */}
      <Script id="schema-publications" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://jodierummer.com/publications/#webpage',
          name: 'Publications - Dr. Jodie Rummer',
          description: 'Academic publications and research papers by Dr. Jodie Rummer',
          isPartOf: {
            '@id': 'https://jodierummer.com/#website'
          },
          about: {
            '@id': 'https://jodierummer.com/#person'
          },
          hasPart: featuredPublications.map(pub => ({
            '@type': 'ScholarlyArticle',
            headline: pub.title,
            author: {
              '@type': 'Person',
              name: 'Dr. Jodie Rummer'
            },
            publisher: {
              '@type': 'Organization',
              name: pub.journal
            },
            datePublished: `${pub.year}`,
            description: pub.abstract,
            sameAs: pub.doi ? `https://doi.org/${pub.doi}` : undefined
          }))
        })}
      </Script>

      {/* Add citation data */}
      <Script id="schema-citations" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Dataset',
          name: 'Dr. Jodie Rummer Publication Metrics',
          description: 'Citation metrics and publication statistics for Dr. Jodie Rummer\'s research',
          url: 'https://scholar.google.ca/citations?hl=en&authuser=1&user=ynWS968AAAAJ',
          creator: {
            '@type': 'Person',
            '@id': 'https://jodierummer.com/#person'
          },
          includedInDataCatalog: {
            '@type': 'DataCatalog',
            name: 'Google Scholar'
          }
        })}
      </Script>
    </>
  )
}
