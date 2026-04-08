'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const EXCLUDED_PATHS = ['/pitch-creditsuite']

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isExcluded = EXCLUDED_PATHS.some((p) => pathname.startsWith(p))

  if (isExcluded) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  )
}
