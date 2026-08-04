import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers — allow everything except API and Next.js internals
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/virtual-employee/review/', '/virtual-employee/demo/'],
      },
      // Explicitly allow AI crawlers that check robots.txt
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
    ],
    sitemap: [
      'https://www.affordawebsolutions.com/sitemap.xml',
    ],
    host: 'https://www.affordawebsolutions.com',
  }
}
