import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { webStories } from '@/lib/web-stories-data'
import StoryViewer from './StoryViewer'

export async function generateStaticParams() {
  return webStories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const story = webStories.find((s) => s.slug === slug)
  if (!story) return {}
  return {
    title: story.name,
    description: story.description,
    alternates: { canonical: `https://www.affordawebsolutions.com/web-stories/${story.slug}` },
    openGraph: {
      type: 'website',
      title: story.name,
      description: story.description,
      url: `https://www.affordawebsolutions.com/web-stories/${story.slug}`,
      images: [{ url: story.posterImage, width: 720, height: 1280, alt: story.posterAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: story.name,
      description: story.description,
      images: [story.posterImage],
    },
  }
}

export default async function WebStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const story = webStories.find((s) => s.slug === slug)
  if (!story) notFound()

  const baseUrl = 'https://www.affordawebsolutions.com'
  const storyUrl = `${baseUrl}/web-stories/${story.slug}`

  const storySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': storyUrl,
    headline: story.name,
    description: story.description,
    url: storyUrl,
    publisher: {
      '@type': 'Organization',
      name: 'AffordaWeb Solutions',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.webp`,
        width: 874,
        height: 245,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: story.posterImage,
      width: 720,
      height: 1280,
      alt: story.posterAlt,
    },
    datePublished: story.datePublished,
    dateModified: story.dateModified,
    author: {
      '@type': 'Organization',
      name: 'AffordaWeb Solutions',
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': storyUrl,
      url: storyUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storySchema) }}
      />
      <StoryViewer story={story} />
    </>
  )
}
