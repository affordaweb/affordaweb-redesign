'use client'
import { useRef, useEffect } from 'react'

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (ref.current) {
            ref.current.style.transform = `translateY(${window.scrollY * 0.15}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none"
      style={{ inset: '-120px 0', willChange: 'transform' }}
      aria-hidden="true"
    >
      {/* Animated gradient layer */}
      <div className="hero-gradient-shift absolute inset-0" />
      {/* Floating blobs */}
      <div className="hblob hblob-1" />
      <div className="hblob hblob-2" />
      <div className="hblob hblob-3" />
      {/* Drifting dot grid */}
      <div className="hero-dots-move absolute inset-0" />
    </div>
  )
}
