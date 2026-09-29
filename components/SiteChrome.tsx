'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VirtualEmployeeChat from '@/components/VirtualEmployeeChat'

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
      <main className="flex-grow overflow-x-clip">{children}</main>
      <Footer />
      <VirtualEmployeeChat />
    </>
  )
}
