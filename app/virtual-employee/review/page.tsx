import type { Metadata } from 'next'
import VirtualEmployeeReviewQueue from '@/components/VirtualEmployeeReviewQueue'
import { isAdminConfigured } from '@/lib/virtual-employee-auth'
export const metadata: Metadata = { title: 'Virtual Employee Review Queue', robots: { index: false, follow: false } }
export default function VirtualEmployeeReviewPage() { if (!isAdminConfigured()) return <main className="py-28"><div className="container-tight"><h1 className="text-2xl font-bold">Not found</h1></div></main>; return <main className="bg-[#FAFBFF] py-28"><div className="container-tight"><VirtualEmployeeReviewQueue /></div></main> }
