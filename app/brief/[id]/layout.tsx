import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Brief | AffordaWeb Solutions',
  description: 'Fill out your project brief so we can design the perfect website for your business.',
  robots: { index: false, follow: false },
}

export default function BriefLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
