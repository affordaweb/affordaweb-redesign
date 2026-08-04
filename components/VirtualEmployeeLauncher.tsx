'use client'
import Link from 'next/link'
export default function VirtualEmployeeLauncher({ className = '' }: { className?: string }) { return <Link href="/virtual-employee" onClick={() => (window as unknown as { gtag?: Function }).gtag?.('event', 've_demo_opened')} className={`btn-primary ${className}`}>Try the Virtual Employee</Link> }
