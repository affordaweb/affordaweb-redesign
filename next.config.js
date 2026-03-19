/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
      { protocol: 'https', hostname: 'www.affordawebsolutions.com' },
    ],
  },
  async redirects() {
    return [
      // Old WordPress trailing-slash URLs → canonical Next.js paths
      { source: '/services/', destination: '/services', permanent: true },
      { source: '/portfolio/', destination: '/portfolio', permanent: true },
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/pricing/', destination: '/pricing', permanent: true },
      { source: '/blog/', destination: '/blog', permanent: true },
      // Old WordPress sub-service pages → /services
      { source: '/services/website-maintenance/', destination: '/services', permanent: true },
      { source: '/services/website-maintenance', destination: '/services', permanent: true },
      { source: '/services/seo-optimization/', destination: '/services', permanent: true },
      { source: '/services/seo-optimization', destination: '/services', permanent: true },
      { source: '/services/website-redesign-services/', destination: '/services', permanent: true },
      { source: '/services/website-redesign-services', destination: '/services', permanent: true },
      // Old WordPress location/landing pages → /services
      { source: '/service_area/website-design-with-hosting-and-seo-in-new-jersey/', destination: '/services', permanent: true },
      { source: '/service_area/website-design-with-hosting-and-seo-in-new-jersey', destination: '/services', permanent: true },
      { source: '/web-design-services-in-new-jersey/', destination: '/services', permanent: true },
      { source: '/web-design-services-in-new-jersey', destination: '/services', permanent: true },
      { source: '/affordable-web-design-services-in-dubai/', destination: '/services', permanent: true },
      { source: '/affordable-web-design-services-in-dubai', destination: '/services', permanent: true },
      { source: '/affordable-web-design-services-in-new-york/', destination: '/services', permanent: true },
      { source: '/affordable-web-design-services-in-new-york', destination: '/services', permanent: true },
      { source: '/affordable-web-design-services-in-manila/', destination: '/services', permanent: true },
      { source: '/affordable-web-design-services-in-manila', destination: '/services', permanent: true },
      // Old standalone landing pages → relevant pages
      { source: '/budget-website-design/', destination: '/pricing', permanent: true },
      { source: '/budget-website-design', destination: '/pricing', permanent: true },
      { source: '/affordable-web-solutions/', destination: '/services', permanent: true },
      { source: '/affordable-web-solutions', destination: '/services', permanent: true },
      { source: '/web-design-for-startups/', destination: '/services', permanent: true },
      { source: '/web-design-for-startups', destination: '/services', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',        value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'Referrer-Policy',         value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',      value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-DNS-Prefetch-Control',  value: 'on' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
