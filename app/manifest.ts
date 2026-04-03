import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AffordaWeb Solutions',
    short_name: 'AffordaWeb',
    description: 'Affordable website design for small businesses starting at $69/month.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0F1A',
    theme_color: '#5636D1',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
  }
}
