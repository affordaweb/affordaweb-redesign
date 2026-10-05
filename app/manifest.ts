import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AffordaWeb Solutions',
    short_name: 'AffordaWeb',
    description: 'Affordable website design for small businesses starting at $39/month.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0F1A',
    theme_color: '#5636D1',
    icons: [
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  }
}
