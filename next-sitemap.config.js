/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://jodierummer.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'monthly',
    priority: 0.5,
    exclude: ['/private*'],
    additionalPaths: async (config) => {
        return [
            {
                loc: '/',
                changefreq: 'daily',
                priority: 1,
                lastmod: new Date().toISOString(),
            },
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
