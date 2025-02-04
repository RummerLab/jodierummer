import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Script from 'next/script'

export const metadata = {
  title: "Publications - Dr. Jodie Rummer",
  description: "Academic publications, journal articles, and book chapters by Dr. Jodie Rummer on marine biology, fish physiology, and climate change impacts.",
  openGraph: {
    title: "Publications - Dr. Jodie Rummer",
    description: "Browse Dr. Jodie Rummer's academic publications and research papers in marine biology.",
    type: 'article',
  }
}

// This will be replaced with API data later
const publications = {
  journalArticles: [
    {
      id: 'article-1',
      title: 'Mechanisms for measuring and maintaining oxygen homeostasis in fishes',
      authors: 'Rummer, J.L., Brauner, C.J.',
      journal: 'Journal of Experimental Biology',
      year: 2024,
      volume: '227',
      issue: '2',
      doi: '10.1242/jeb.245312',
      abstract: 'Understanding how fishes maintain oxygen delivery during environmental stress is crucial for predicting their responses to climate change.',
      keywords: ['oxygen transport', 'fish physiology', 'climate change', 'adaptation']
    },
    {
      id: 'article-2',
      title: 'Ocean acidification does not impair the behaviour of coral reef fishes',
      authors: 'Clark, T.D., Raby, G.D., Roche, D.G., Binning, S.A., Speers-Roesch, B., Jutfelt, F., Rummer, J.L.',
      journal: 'Nature',
      year: 2020,
      volume: '577',
      pages: '370-375',
      doi: '10.1038/s41586-019-1903-y',
      abstract: 'A comprehensive multi-year study showing that ocean acidification has minimal direct impacts on the behavior of coral reef fishes.',
      keywords: ['ocean acidification', 'coral reef fish', 'behavior', 'climate change']
    }
  ],
  bookChapters: [
    {
      id: 'chapter-1',
      title: 'Physiological responses of fishes to climate change',
      authors: 'Rummer, J.L., Munday, P.L.',
      book: 'Fish Physiology: Climate Change',
      editors: 'Farrell, A.P., Brauner, C.J.',
      publisher: 'Academic Press',
      year: 2023,
      pages: '145-178',
      doi: '10.1016/bs.fp.2023.01.001',
      abstract: 'A comprehensive review of how fishes respond physiologically to climate change stressors.',
      keywords: ['climate change', 'fish physiology', 'adaptation', 'review']
    }
  ]
}

const categories = [
  { name: 'Journal Articles', count: 107 },
  { name: 'Book Chapters', count: 13 },
  { name: 'Conference Proceedings', count: 8 },
  { name: 'Editorial Commentaries', count: 21 },
]

export default function PublicationsPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 dark:from-blue-950/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Publications
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Dr. Rummer's research has been published in leading scientific journals, contributing to our understanding of marine biology, fish physiology, and climate change impacts.
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

      {/* Journal Articles section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
            Journal Articles
          </h2>
          <div className="space-y-8">
            {publications.journalArticles.map((article) => (
              <article key={article.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-slate-50 dark:bg-slate-800" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={article.year.toString()} className="text-slate-500 dark:text-slate-400">
                      {article.year}
                    </time>
                    <span className="text-slate-500 dark:text-slate-400">{article.journal}</span>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
                      <a href={`https://doi.org/${article.doi}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                        {article.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {article.authors}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {article.abstract}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.keywords.map((keyword) => (
                      <span key={keyword} className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Book Chapters section */}
      <div className="bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Book Chapters
            </h2>
            <div className="space-y-8">
              {publications.bookChapters.map((chapter) => (
                <article key={chapter.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-white dark:bg-slate-800" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10 dark:ring-slate-100/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={chapter.year.toString()} className="text-slate-500 dark:text-slate-400">
                        {chapter.year}
                      </time>
                      <span className="text-slate-500 dark:text-slate-400">{chapter.book}</span>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
                        <a href={`https://doi.org/${chapter.doi}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                          {chapter.title}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {chapter.authors}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        In: {chapter.editors} (Eds.), {chapter.publisher}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {chapter.abstract}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {chapter.keywords.map((keyword) => (
                        <span key={keyword} className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add structured data */}
      <Script id="schema-publications" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://jodierummer.com/publications/#page',
          name: 'Publications by Dr. Jodie Rummer',
          description: 'Academic publications, journal articles, and book chapters by Dr. Jodie Rummer.',
          author: {
            '@id': 'https://jodierummer.com/#person'
          },
          hasPart: [
            ...publications.journalArticles.map(article => ({
              '@type': 'ScholarlyArticle',
              headline: article.title,
              author: article.authors.split(', ').map(author => ({
                '@type': 'Person',
                name: author
              })),
              datePublished: article.year,
              publisher: article.journal,
              description: article.abstract,
              sameAs: `https://doi.org/${article.doi}`
            })),
            ...publications.bookChapters.map(chapter => ({
              '@type': 'Chapter',
              headline: chapter.title,
              author: chapter.authors.split(', ').map(author => ({
                '@type': 'Person',
                name: author
              })),
              datePublished: chapter.year,
              publisher: chapter.publisher,
              description: chapter.abstract,
              sameAs: `https://doi.org/${chapter.doi}`
            }))
          ]
        })}
      </Script>
    </div>
  )
}
