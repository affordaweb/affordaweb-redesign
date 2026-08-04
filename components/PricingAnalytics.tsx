'use client'
import { useEffect } from 'react'
export default function PricingAnalytics() { useEffect(() => { (window as unknown as { gtag?: Function }).gtag?.('event', 'pricing_viewed') }, []); return null }
