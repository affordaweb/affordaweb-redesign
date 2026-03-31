import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: [
      'https://www.affordawebsolutions.com/sitemap.xml',
      'https://www.affordawebsolutions.com/feed.xml',
    ],
    host: 'https://www.affordawebsolutions.com',
  }
}
