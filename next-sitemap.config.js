/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://jodierummer.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    autoLastmod: true,
    changefreq: 'weekly',
    priority: 0.5,
    exclude: ['/private*'],
    additionalPaths: async (config) => {
        const pdfs = [
            {
                loc: '/files/rummer-cv-full-references-2024-11-15.pdf',
                changefreq: 'never',
                priority: 0.6,
                lastmod: '2024-11-15T00:00:00.000Z',
            },
            {
                loc: '/files/rummer-short-bio-2025-01-14.pdf',
                changefreq: 'never',
                priority: 0.6,
                lastmod: '2025-01-14T00:00:00.000Z',
            },
            {
                loc: '/files/athena-2-infographic-cti_revised.pdf',
                changefreq: 'never',
                priority: 0.1,
                lastmod: '2024-02-10T00:00:00.000Z',
            },
            {
                loc: '/files/press_and_media_coverage_4dec.2014.pdf',
                changefreq: 'never',
                priority: 0.1,
                lastmod: '2014-12-04T00:00:00.000Z',
            },
            {
                loc: '/files/rummer__bennett_2005.pdf',
                changefreq: 'never',
                priority: 0.1,
                lastmod: '2005-01-01T00:00:00.000Z',
            },
        ]

        return [
            {
                loc: '/',
                changefreq: 'daily',
                priority: 1,
                lastmod: new Date().toISOString(),
            },
            ...pdfs,
        ]
    },
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private'],
            },
        ],
    },
}
