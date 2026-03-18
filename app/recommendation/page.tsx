import type { Metadata } from 'next'
import RecommendationClient from '@/components/RecommendationClient'

export const metadata: Metadata = {
  title: 'Free Website Redesign Recommendation | AffordaWeb Solutions',
  description:
    'Get a free, personalised website redesign recommendation in under 30 seconds. Tell us your business type and goals — we'll show you exactly what to fix.',
  alternates: { canonical: 'https://affordawebsolutions.com/recommendation' },
  openGraph: {
    title: 'Free Website Redesign Recommendation | AffordaWeb Solutions',
    description:
      'Instant, personalised redesign plan based on your industry and goals. No signup, no credit card — 100% free.',
    url: 'https://affordawebsolutions.com/recommendation',
    images: [{ url: 'https://affordawebsolutions.com/og-image.png', width: 1200, height: 630, alt: 'Free Website Redesign Recommendation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Redesign Recommendation | AffordaWeb Solutions',
    description: 'Personalised redesign plan in 30 seconds. Free, no signup.',
    images: ['https://affordawebsolutions.com/og-image.png'],
  },
}

export default function RecommendationPage() {
  return <RecommendationClient />
}
