/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rummerlab.com',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'physiology.org',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: '**.cdninstagram.com',
            },
            {
                protocol: 'https',
                hostname: '**.bsky.app',
            },
            {
                protocol: 'https',
                hostname: '**.microlink.io',
            },
            {
                protocol: 'https',
                hostname: '**.youtube.com',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
        ],
    },
    redirects: async () => [
        {
            source: '/index.html',
            destination: '/',
            permanent: true,
        },
        {
            source: '/about.html',
            destination: '/about',
            permanent: true,
        },
        {
            source: '/about-me.html',
            destination: '/about',
            permanent: true,
        },
        {
            source: '/contact.html',
            destination: '/contact',
            permanent: true,
        },
        {
            source: '/lab.html',
            destination: 'https://rummerlab.com/rummerlab',
            permanent: true,
        },
        {
            source: '/media.html',
            destination: '/media',
            permanent: true,
        },
        {
            source: '/publications.html',
            destination: '/publications',
            permanent: true,
        },
        {
            source: '/collaborators.html',
            destination: 'https://rummerlab.com/collaborators',
            permanent: true,
        },
        {
            source: '/research.html',
            destination: '/research',
            permanent: true,
        },
        {
            source: '/research-theme-1.html',
            destination: 'https://rummerlab.com/environmental-stressors',
            permanent: true,
        },
        {
            source: '/research-theme-2.html',
            destination: 'https://rummerlab.com/in-vivo-protocols',
            permanent: true,
        },
        {
            source: '/research-theme-3.html',
            destination: 'https://rummerlab.com/future-environments',
            permanent: true,
        },
        {
            source: '/women-in-science.html',
            destination: '/women-in-science',
            permanent: true,
        },
        {
            source: '/uploads/3/7/2/2/37225593/rummer__bennett_2005.pdf',
            destination: '/files/rummer__bennett_2005.pdf',
            permanent: true,
        },
        {
            source: '/uploads/3/7/2/2/37225593/press_and_media_coverage_4dec.2014.pdf',
            destination: '/files/press_and_media_coverage_4dec.2014.pdf',
            permanent: true,
        },
        {
            source: '/uploads/3/7/2/2/37225593/athena-2-infographic-cti_revised.pdf',
            destination: '/files/athena-2-infographic-cti_revised.pdf',
            permanent: true,
        },
        {
            source: '/uploads/3/7/2/2/37225593/rummer_cv_oct._2014.pdf',
            destination: '/about/cv',
            permanent: true,
        },
        {
            source: '/uploads/3/7/2/2/37225593/rummer_cv_sept._2014.pdf',
            destination: '/about/cv',
            permanent: true,
        },
    ],
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
}

module.exports = nextConfig
