'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppContact from '@/components/WhatsAppContact'

const EXCLUDED_PATHS = ['/pitch-creditsuite', '/web-stories']

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
      <WhatsAppContact />
    </>
  )
}
