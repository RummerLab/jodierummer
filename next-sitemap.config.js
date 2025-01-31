/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://jodierummer.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/private*'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://jodierummer.com/server-sitemap.xml'],
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private'],
            },
        ],
    },
}
