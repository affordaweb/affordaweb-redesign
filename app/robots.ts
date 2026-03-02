import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://affordawebsolutions.com/sitemap.xml',
    host: 'https://affordawebsolutions.com',
  }
}
