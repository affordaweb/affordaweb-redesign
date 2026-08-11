import type { Metadata } from 'next'
import VirtualEmployeeConcierge from '@/components/VirtualEmployeeConcierge'
export const metadata: Metadata = {
  title: 'Virtual Employee',
  description: 'Explore AffordaWeb website plans with a deterministic, approved-knowledge Virtual Employee.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.affordawebsolutions.com/virtual-employee' },
}
export default function VirtualEmployeePage() { return <main className="bg-[#FAFBFF] py-28"><div className="container-tight max-w-3xl"><p className="section-label">AffordaWeb Virtual Employee</p><h1 className="mt-3 text-4xl font-bold text-gray-900">Helpful plan guidance, grounded in approved information.</h1><p className="mt-4 text-gray-600">This assistant uses published AffordaWeb information only. For custom, contractual, or unsupported questions, it connects you with a person.</p><div className="mt-8"><VirtualEmployeeConcierge /></div></div></main> }
