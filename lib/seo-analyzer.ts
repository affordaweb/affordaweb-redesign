import axios from 'axios'
import * as cheerio from 'cheerio'
import type { SeoCategory, SeoCheck, SeoRecommendation } from '@/types/seo-report'

export function normalizeUrl(input: string): string {
  let url = input.trim()
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url
  return url
}

export function extractDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export function scoreToGrade(score: number): string {
  if (score >= 90) return 'A'
  if (score >= 80) return 'B'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}

export async function analyzeSeo(websiteUrl: string) {
  const url = normalizeUrl(websiteUrl)
  const domain = extractDomain(url)
  const origin = new URL(url).origin

  // ── Fetch HTML ────────────────────────────────────────────────────────────
  let html = ''
  try {
    const res = await axios.get(url, {
      timeout: 15000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; AffordaWebSEOAudit/1.0; +https://affordawebsolutions.com)',
        Accept: 'text/html,application/xhtml+xml',
      },
      maxRedirects: 5,
    })
    html = res.data
  } catch {
    throw new Error('Could not fetch website. Make sure the URL is publicly accessible.')
  }

  const $ = cheerio.load(html)

  // ── Category 1: Meta Tags (25 pts) ───────────────────────────────────────
  const metaTitle = $('title').first().text().trim()
  const metaDesc = $('meta[name="description"]').attr('content')?.trim() ?? ''

  const metaChecks: SeoCheck[] = [
    {
      label: 'Meta Title Present',
      status: metaTitle.length > 0 ? 'pass' : 'fail',
      detail: metaTitle.length > 0
        ? `Title: "${metaTitle.slice(0, 70)}${metaTitle.length > 70 ? '…' : ''}"`
        : 'No <title> tag found. Critical for search rankings.',
    },
    {
      label: 'Meta Title Length (30–70 chars)',
      status:
        metaTitle.length >= 30 && metaTitle.length <= 70
          ? 'pass'
          : metaTitle.length > 0
          ? 'warning'
          : 'fail',
      detail:
        metaTitle.length > 0
          ? `${metaTitle.length} characters. Optimal: 30–70.`
          : 'No title to evaluate.',
    },
    {
      label: 'Meta Description Present',
      status: metaDesc.length > 0 ? 'pass' : 'fail',
      detail: metaDesc.length > 0
        ? `"${metaDesc.slice(0, 100)}${metaDesc.length > 100 ? '…' : ''}"`
        : 'No meta description. Affects click-through rate from search results.',
    },
    {
      label: 'Meta Description Length (70–160 chars)',
      status:
        metaDesc.length >= 70 && metaDesc.length <= 160
          ? 'pass'
          : metaDesc.length > 0
          ? 'warning'
          : 'fail',
      detail:
        metaDesc.length > 0
          ? `${metaDesc.length} characters. Optimal: 70–160.`
          : 'No description to evaluate.',
    },
  ]

  const metaScore =
    (metaChecks[0].status === 'pass' ? 6 : 0) +
    (metaChecks[1].status === 'pass' ? 5 : metaChecks[1].status === 'warning' ? 2 : 0) +
    (metaChecks[2].status === 'pass' ? 8 : 0) +
    (metaChecks[3].status === 'pass' ? 6 : metaChecks[3].status === 'warning' ? 3 : 0)

  // ── Category 2: Content & Structure (25 pts) ─────────────────────────────
  const h1s = $('h1')
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean)
  const h2s = $('h2')
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean)
  const h3s = $('h3')
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean)

  const totalImages = $('img').length
  const imagesWithAlt = $('img[alt]').filter(
    (_, el) => ($(el).attr('alt') ?? '').trim().length > 0
  ).length
  const altRatio = totalImages > 0 ? imagesWithAlt / totalImages : 1

  const contentChecks: SeoCheck[] = [
    {
      label: 'H1 Heading Present',
      status: h1s.length > 0 ? 'pass' : 'fail',
      detail:
        h1s.length > 0
          ? `H1: "${h1s[0].slice(0, 80)}"`
          : 'No H1 found. Every page needs exactly one H1.',
    },
    {
      label: 'Single H1 Tag',
      status: h1s.length === 1 ? 'pass' : h1s.length === 0 ? 'fail' : 'warning',
      detail:
        h1s.length === 0
          ? 'No H1 found.'
          : h1s.length === 1
          ? 'Correct — exactly one H1 tag.'
          : `${h1s.length} H1 tags found. Use only one per page.`,
    },
    {
      label: 'H2 Subheadings Present (≥2)',
      status: h2s.length >= 2 ? 'pass' : h2s.length === 1 ? 'warning' : 'fail',
      detail:
        h2s.length === 0
          ? 'No H2 subheadings. Structure content to improve readability and SEO.'
          : `${h2s.length} H2 subheading${h2s.length > 1 ? 's' : ''} found.`,
    },
    {
      label: 'Image Alt Text (≥90%)',
      status: altRatio >= 0.9 ? 'pass' : altRatio >= 0.5 ? 'warning' : 'fail',
      detail:
        totalImages === 0
          ? 'No images found on page.'
          : `${imagesWithAlt}/${totalImages} images have alt text (${Math.round(altRatio * 100)}%).`,
    },
  ]

  const contentScore =
    (contentChecks[0].status === 'pass' ? 7 : 0) +
    (contentChecks[1].status === 'pass' ? 5 : contentChecks[1].status === 'warning' ? 2 : 0) +
    (contentChecks[2].status === 'pass' ? 6 : contentChecks[2].status === 'warning' ? 3 : 0) +
    (contentChecks[3].status === 'pass' ? 7 : contentChecks[3].status === 'warning' ? 3 : 0)

  // ── Category 3: Technical SEO (25 pts) ───────────────────────────────────
  const isHttps = url.startsWith('https://')
  const canonical = $('link[rel="canonical"]').attr('href') ?? ''
  const robotsMeta = $('meta[name="robots"]').attr('content') ?? ''
  const hasNoindex = robotsMeta.toLowerCase().includes('noindex')

  let robotsTxtOk = false
  try {
    const r = await axios.get(`${origin}/robots.txt`, {
      timeout: 5000,
      validateStatus: () => true,
    })
    robotsTxtOk = r.status === 200 && typeof r.data === 'string' && r.data.length > 10
  } catch {}

  let sitemapOk = false
  let sitemapUrl = `${origin}/sitemap.xml`
  try {
    // Try to extract sitemap from robots.txt
    if (robotsTxtOk) {
      const robotsRes = await axios.get(`${origin}/robots.txt`, { timeout: 5000 })
      const match = (robotsRes.data as string).match(/Sitemap:\s*(\S+)/i)
      if (match) sitemapUrl = match[1].trim()
    }
    const s = await axios.get(sitemapUrl, { timeout: 5000, validateStatus: () => true })
    sitemapOk = s.status === 200
  } catch {}

  const technicalChecks: SeoCheck[] = [
    {
      label: 'HTTPS Secure Connection',
      status: isHttps ? 'pass' : 'fail',
      detail: isHttps
        ? 'Site uses HTTPS — excellent for trust and rankings.'
        : 'Site is not using HTTPS. This is a major SEO and trust penalty.',
    },
    {
      label: 'Canonical Tag',
      status: canonical.length > 0 ? 'pass' : 'warning',
      detail:
        canonical.length > 0
          ? `Canonical URL: ${canonical}`
          : 'No canonical tag. Add one to prevent duplicate content issues.',
    },
    {
      label: 'Robots.txt Accessible',
      status: robotsTxtOk ? 'pass' : 'warning',
      detail: robotsTxtOk
        ? 'robots.txt found and accessible.'
        : 'robots.txt not found. Search crawlers may index unwanted pages.',
    },
    {
      label: 'Sitemap.xml Accessible',
      status: sitemapOk ? 'pass' : 'fail',
      detail: sitemapOk
        ? `Sitemap found: ${sitemapUrl}`
        : 'No sitemap.xml. Submit one in Google Search Console for faster indexing.',
    },
    {
      label: 'Page is Indexable (No Noindex)',
      status: hasNoindex ? 'fail' : 'pass',
      detail: hasNoindex
        ? 'Robots meta contains "noindex" — this page is BLOCKED from Google!'
        : 'Page is indexable by search engines.',
    },
  ]

  const techScore =
    (technicalChecks[0].status === 'pass' ? 5 : 0) +
    (technicalChecks[1].status === 'pass' ? 5 : 2) +
    (technicalChecks[2].status === 'pass' ? 5 : 2) +
    (technicalChecks[3].status === 'pass' ? 7 : 0) +
    (technicalChecks[4].status === 'pass' ? 3 : 0)

  // ── Category 4: Open Graph & Social (15 pts) ─────────────────────────────
  const ogTitle = $('meta[property="og:title"]').attr('content') ?? ''
  const ogDesc = $('meta[property="og:description"]').attr('content') ?? ''
  const ogImage = $('meta[property="og:image"]').attr('content') ?? ''
  const ogUrl = $('meta[property="og:url"]').attr('content') ?? ''
  const twitterCard = $('meta[name="twitter:card"]').attr('content') ?? ''
  const twitterTitle = $('meta[name="twitter:title"]').attr('content') ?? ''

  const socialChecks: SeoCheck[] = [
    {
      label: 'Open Graph Title (og:title)',
      status: ogTitle.length > 0 ? 'pass' : 'fail',
      detail:
        ogTitle.length > 0
          ? `og:title: "${ogTitle.slice(0, 70)}"`
          : 'Missing og:title. Controls how page appears on Facebook/LinkedIn.',
    },
    {
      label: 'Open Graph Description (og:description)',
      status: ogDesc.length > 0 ? 'pass' : 'fail',
      detail:
        ogDesc.length > 0
          ? `og:description: "${ogDesc.slice(0, 80)}"`
          : 'Missing og:description. Your social shares will look incomplete.',
    },
    {
      label: 'Open Graph Image (og:image)',
      status: ogImage.length > 0 ? 'pass' : 'fail',
      detail:
        ogImage.length > 0
          ? 'og:image is set — great for social sharing previews.'
          : 'Missing og:image. Social shares will appear without a preview image.',
    },
    {
      label: 'Open Graph URL (og:url)',
      status: ogUrl.length > 0 ? 'pass' : 'warning',
      detail: ogUrl.length > 0 ? `og:url: ${ogUrl}` : 'Missing og:url.',
    },
    {
      label: 'Twitter Card Meta Tag',
      status: twitterCard.length > 0 ? 'pass' : 'fail',
      detail:
        twitterCard.length > 0
          ? `twitter:card: "${twitterCard}"${twitterTitle ? ` | twitter:title: "${twitterTitle.slice(0, 50)}"` : ''}`
          : 'Missing Twitter Card tags. Your tweets will appear as plain links.',
    },
  ]

  const socialScore =
    (socialChecks[0].status === 'pass' ? 3 : 0) +
    (socialChecks[1].status === 'pass' ? 3 : 0) +
    (socialChecks[2].status === 'pass' ? 3 : 0) +
    (socialChecks[3].status === 'pass' ? 3 : 1) +
    (socialChecks[4].status === 'pass' ? 3 : 0)

  // ── Category 5: Link Structure (10 pts) ──────────────────────────────────
  const allHrefs = $('a[href]')
    .map((_, el) => $(el).attr('href') ?? '')
    .get()
  const internalLinks = allHrefs.filter(
    (h) =>
      (h.startsWith('/') || h.includes(domain)) &&
      h !== '/' &&
      h !== '#' &&
      !h.startsWith('#')
  )
  const externalLinks = allHrefs.filter(
    (h) => h.startsWith('http') && !h.includes(domain)
  )

  const linkChecks: SeoCheck[] = [
    {
      label: 'Internal Links (≥5)',
      status:
        internalLinks.length >= 5
          ? 'pass'
          : internalLinks.length > 0
          ? 'warning'
          : 'fail',
      detail:
        internalLinks.length === 0
          ? 'No internal links found. Links help search engines discover more pages.'
          : `${internalLinks.length} internal link${internalLinks.length > 1 ? 's' : ''} found.`,
    },
    {
      label: 'External Links',
      status: 'pass',
      detail:
        externalLinks.length === 0
          ? 'No external links found. Consider linking to authoritative sources where relevant.'
          : `${externalLinks.length} external link${externalLinks.length > 1 ? 's' : ''} found.`,
    },
  ]

  const linkScore =
    (linkChecks[0].status === 'pass' ? 5 : linkChecks[0].status === 'warning' ? 2 : 0) +
    5

  // ── Compile ───────────────────────────────────────────────────────────────
  const categories: SeoCategory[] = [
    { name: 'Meta Tags', score: metaScore, maxScore: 25, checks: metaChecks },
    { name: 'Content & Structure', score: contentScore, maxScore: 25, checks: contentChecks },
    { name: 'Technical SEO', score: techScore, maxScore: 25, checks: technicalChecks },
    { name: 'Open Graph & Social', score: socialScore, maxScore: 15, checks: socialChecks },
    { name: 'Link Structure', score: linkScore, maxScore: 10, checks: linkChecks },
  ]

  const seoScore = categories.reduce((acc, c) => acc + c.score, 0)
  const grade = scoreToGrade(seoScore)

  // ── Top Issues ────────────────────────────────────────────────────────────
  const allChecks = categories.flatMap((c) => c.checks)
  const topIssues = [
    ...allChecks.filter((c) => c.status === 'fail'),
    ...allChecks.filter((c) => c.status === 'warning'),
  ]
    .slice(0, 5)
    .map((c) => c.label)

  // ── Quick Wins ────────────────────────────────────────────────────────────
  const quickWins: string[] = []
  if (!metaDesc) quickWins.push('Add a meta description (under 3 minutes to fix)')
  if (!ogImage) quickWins.push('Add an og:image for social sharing previews')
  if (!twitterCard) quickWins.push('Add Twitter Card meta tags to your <head>')
  if (!canonical) quickWins.push('Add a canonical URL tag to prevent duplicate content')
  if (!sitemapOk) quickWins.push('Create and submit a sitemap.xml to Google Search Console')
  if (totalImages > 0 && altRatio < 0.9)
    quickWins.push(`Add alt text to ${totalImages - imagesWithAlt} image${totalImages - imagesWithAlt > 1 ? 's' : ''}`)
  if (h2s.length === 0) quickWins.push('Add H2 subheadings to structure your content')

  // ── Recommendations ───────────────────────────────────────────────────────
  const recommendations: SeoRecommendation[] = []

  if (!metaTitle)
    recommendations.push({
      priority: 'critical',
      title: 'Add a Meta Title',
      description:
        'Every page needs a unique, keyword-rich meta title (50–70 characters). Include your primary keyword near the beginning.',
    })
  if (!metaDesc)
    recommendations.push({
      priority: 'critical',
      title: 'Write a Meta Description',
      description:
        'Add a compelling meta description (70–160 characters). This directly affects click-through rates from Google search results.',
    })
  if (h1s.length === 0)
    recommendations.push({
      priority: 'critical',
      title: 'Add an H1 Heading',
      description:
        'Every page must have exactly one H1 tag. Include your primary keyword in the H1. This is the most important on-page SEO element.',
    })
  if (!isHttps)
    recommendations.push({
      priority: 'critical',
      title: 'Enable HTTPS / SSL',
      description:
        'Google penalizes non-HTTPS sites. An SSL certificate is free via Let\'s Encrypt and essential for SEO and user trust.',
    })
  if (!sitemapOk)
    recommendations.push({
      priority: 'high',
      title: 'Create and Submit a Sitemap',
      description:
        'Submit a sitemap.xml to Google Search Console so all your pages are discovered and indexed faster.',
    })
  if (!ogTitle || !ogDesc || !ogImage)
    recommendations.push({
      priority: 'high',
      title: 'Add Open Graph Meta Tags',
      description:
        'Open Graph tags control how your content appears when shared on Facebook, LinkedIn, and other social platforms. Missing them leads to poor social previews.',
    })
  if (!twitterCard)
    recommendations.push({
      priority: 'medium',
      title: 'Add Twitter Card Tags',
      description:
        'Twitter Card meta tags make your content display beautifully when shared on Twitter/X, increasing engagement and click-throughs.',
    })
  if (totalImages > 0 && altRatio < 0.9)
    recommendations.push({
      priority: 'medium',
      title: 'Fix Missing Image Alt Text',
      description: `${totalImages - imagesWithAlt} image${totalImages - imagesWithAlt > 1 ? 's are' : ' is'} missing alt text. Alt text helps search engines understand images and improves accessibility.`,
    })
  if (h2s.length < 2)
    recommendations.push({
      priority: 'medium',
      title: 'Add More Subheadings (H2/H3)',
      description:
        'Structure your content with H2 and H3 subheadings. This improves readability, keeps users on the page longer, and helps Google understand your content hierarchy.',
    })
  if (!canonical)
    recommendations.push({
      priority: 'low',
      title: 'Add a Canonical URL Tag',
      description:
        'A canonical tag tells search engines the preferred version of a page URL, preventing duplicate content penalties.',
    })

  return {
    normalizedUrl: url,
    domain,
    seoScore,
    grade,
    categories,
    topIssues,
    quickWins: quickWins.slice(0, 5),
    recommendations,
    meta: {
      metaTitle,
      metaDesc,
      h1s,
      h2s,
      h3s,
      canonical,
      robotsMeta,
      ogTitle,
      ogDesc,
      ogImage,
      ogUrl,
      twitterCard,
      twitterTitle,
      internalLinksCount: internalLinks.length,
      externalLinksCount: externalLinks.length,
      totalImages,
      imagesWithAlt,
      isHttps,
      robotsTxtOk,
      sitemapOk,
      sitemapUrl,
    },
  }
}
