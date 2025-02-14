/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://jodierummer.com',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/404', '/500'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://jodierummer.com/server-sitemap.xml'],
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/404', '/500', '/_next', '/api'],
            },
        ],
    },
    generateIndexSitemap: false,
}
