import type { Metadata } from 'next'
import VirtualEmployeeConcierge from '@/components/VirtualEmployeeConcierge'
export const metadata: Metadata = { title: 'Virtual Employee Demo', robots: { index: false, follow: false } }
export default function VirtualEmployeeDemoPage() { return <main className="bg-[#FAFBFF] py-28"><div className="container-tight max-w-3xl"><h1 className="text-4xl font-bold text-gray-900">Virtual Employee Demo</h1><p className="mt-3 text-gray-600">Use the live deterministic engine safely. Demo requests never create leads or send email.</p><div className="mt-8"><VirtualEmployeeConcierge demo /></div></div></main> }
