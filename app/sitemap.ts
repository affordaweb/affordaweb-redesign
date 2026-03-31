import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.affordawebsolutions.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recommendation`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/seo-audit`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/new-jersey`,
      lastModified: new Date('2026-03-23'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fresno`,
      lastModified: new Date('2026-03-27'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/houston`,
      lastModified: new Date('2026-03-29'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/los-angeles`,
      lastModified: new Date('2026-03-29'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/philadelphia`,
      lastModified: new Date('2026-03-29'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/affordable-web-design-company`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/affordable-web-design-for-small-businesses`,
      lastModified: new Date('2026-03-30'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Blog posts
    {
      url: `${baseUrl}/blog/why-small-businesses-need-professional-website`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/affordable-website-design-vs-diy-website-builder`,
      lastModified: new Date('2025-01-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/seo-tips-small-business-website`,
      lastModified: new Date('2025-02-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/website-design-subscription-model-explained`,
      lastModified: new Date('2025-02-12'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/website-speed-matters-small-business`,
      lastModified: new Date('2025-02-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/local-seo-guide-small-businesses`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-choose-web-design-company-small-business`,
      lastModified: new Date('2025-03-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/website-maintenance-why-it-matters`,
      lastModified: new Date('2025-03-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/mobile-website-design-guide`,
      lastModified: new Date('2025-03-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-much-does-a-website-cost`,
      lastModified: new Date('2025-03-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/who-updates-a-website-after-the-web-designer-finishes`,
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/website-maintenance-requirements`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/web-design-vs-web-hosting`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/web-design-competitor-comparison`,
      lastModified: new Date('2026-03-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
