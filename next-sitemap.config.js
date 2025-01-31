/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://jodierummer.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'monthly',
    priority: 0.7,
    exclude: ['/private*'],
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
