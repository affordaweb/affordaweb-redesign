'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { WebStoryData } from '@/lib/web-stories-data'

function useProgress(
  total: number,
  current: number,
  onComplete: () => void,
) {
  const [progress, setProgress] = useState(0)
  const frameRef = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    startRef.current = performance.now()
    setProgress(0)

    const animate = (now: number) => {
      const elapsed = now - startRef.current
      const pct = Math.min(elapsed / 6000, 1)
      setProgress(pct)
      if (pct < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        onComplete()
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [current, total, onComplete])

  return progress
}

export default function StoryViewer({ story }: { story: WebStoryData }) {
  const router = useRouter()
  const [slide, setSlide] = useState(0)
  const total = story.slides.length

  const goNext = useCallback(() => {
    if (slide < total - 1) {
      setSlide((s) => s + 1)
    } else {
      router.push('/')
    }
  }, [slide, total, router])

  const progress = useProgress(total, slide, goNext)

  const goPrev = useCallback(() => {
    if (slide > 0) setSlide((s) => s - 1)
  }, [slide])

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        goNext()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    },
    [goNext, goPrev],
  )

  const s = story.slides[slide]

  return (
    <div
      className="fixed inset-0 flex flex-col"
      style={{ backgroundColor: s.bgColor }}
      onKeyDown={handleKey}
      tabIndex={0}
      role="region"
      aria-label="Web Story"
    >
      {/* Progress bar */}
      <div className="flex gap-1 px-2 pt-2 pb-1 z-20">
        {story.slides.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1 rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                backgroundColor: s.accentColor || '#5636D1',
                width: i === slide ? `${progress * 100}%` : i < slide ? '100%' : '0%',
              }}
            />
          </div>
        ))}
      </div>

      {/* Top bar: logo + close */}
      <div className="flex items-center justify-between px-4 py-2 z-20">
        <Link href="/" className="text-white text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity">
          AffordaWeb
        </Link>
        <button
          onClick={() => router.push('/')}
          className="w-8 h-8 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Close story"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center z-10 select-none">
        <div className="max-w-md mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-5"
            style={{ color: s.accentColor || '#5636D1' }}
          >
            {s.title}
          </h2>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: s.textColor || 'rgba(255,255,255,0.85)' }}
          >
            {s.text}
          </p>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex items-center justify-between px-4 py-4 z-20">
        <button
          onClick={goPrev}
          disabled={slide === 0}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-0"
          style={{
            backgroundColor: slide > 0 ? 'rgba(255,255,255,0.1)' : 'transparent',
            color: 'rgba(255,255,255,0.7)',
          }}
          aria-label="Previous slide"
        >
          Back
        </button>

        <span className="text-xs text-white/40 font-medium">
          {slide + 1} / {total}
        </span>

        <button
          onClick={goNext}
          className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
          style={{
            backgroundColor: s.accentColor || '#5636D1',
            color: '#fff',
          }}
          aria-label={slide < total - 1 ? 'Next slide' : 'Finish'}
        >
          {slide < total - 1 ? 'Next' : 'Done'}
        </button>
      </div>

      {/* Click areas for next/prev */}
      <button
        onClick={goPrev}
        className="absolute left-0 top-0 bottom-20 w-1/4 z-10"
        aria-label="Previous slide"
      />
      <button
        onClick={goNext}
        className="absolute right-0 top-0 bottom-20 w-3/4 z-10"
        aria-label="Next slide"
      />
    </div>
  )
}
