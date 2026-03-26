import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '600', '700'],
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['700'],
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.affordawebsolutions.com'),
  title: {
    default: 'AffordaWeb Solutions | Affordable Website Design & Hosting',
    template: '%s | AffordaWeb Solutions',
  },
  description:
    'Professional, affordable website design starting at $69/mo — fully managed with hosting, SSL, and unlimited updates included. Serving small businesses nationwide.',
  keywords: [
    'affordable website design',
    'affordable web design services',
    'website design with hosting',
    'monthly website design',
    'website design subscription',
    'website maintenance services',
    'small business website design',
    'cheap website design',
    'professional website design',
    'web design for small businesses',
    'affordable web design new jersey',
    'affordable web design nj',
    'website design new jersey',
    'web design nj',
    'affordable website nj',
    'web hosting new jersey',
    'web hosting nj',
    'affordable web design new york',
    'affordable web design nyc',
    'website design new york',
    'affordable web solutions',
    'affordable web design services',
    'budget website design',
    'inexpensive web design',
    'affordable seo new jersey',
    'seo services new jersey',
    'website redesign services',
    'affordable web design philippines',
  ],
  authors: [{ name: 'AffordaWeb Solutions' }],
  creator: 'AffordaWeb Solutions',
  publisher: 'AffordaWeb Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.affordawebsolutions.com',
    siteName: 'AffordaWeb Solutions',
    title: 'AffordaWeb Solutions | Affordable Website Design & Hosting',
    description:
      'Professional, affordable website design starting at $69/mo — fully managed with hosting, SSL, and unlimited updates included.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AffordaWeb Solutions - Affordable Website Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AffordaWeb Solutions | Affordable Website Design & Hosting',
    description:
      'Professional, affordable website design starting at $69/mo with hosting included.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.affordawebsolutions.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="google-site-verification" content="DG-GODzNLnGKfj_js2yulxg6DkVsiHzD0ptOpg8fpsI" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXB7GSP9');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.affordawebsolutions.com/#organization',
                  name: 'AffordaWeb Solutions',
                  url: 'https://www.affordawebsolutions.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.affordawebsolutions.com/logo.webp',
                    width: 874,
                    height: 245,
                  },
                  email: 'hello@affordawebsolutions.com',
                  description:
                    'Professional, affordable website design and hosting for small businesses starting at $69/month.',
                  sameAs: [],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: 'hello@affordawebsolutions.com',
                    availableLanguage: 'English',
                  },
                },
                {
                  '@type': 'LocalBusiness',
                  '@id': 'https://www.affordawebsolutions.com/#business',
                  name: 'AffordaWeb Solutions',
                  url: 'https://www.affordawebsolutions.com',
                  description:
                    'Affordable website design services for small businesses with hosting, SSL, and maintenance included.',
                  priceRange: '$69 - $149/month',
                  email: 'hello@affordawebsolutions.com',
                  openingHours: 'Mo-Fr 09:00-17:00',
                  currenciesAccepted: 'USD',
                  paymentAccepted: 'Credit Card',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.affordawebsolutions.com/#website',
                  url: 'https://www.affordawebsolutions.com',
                  name: 'AffordaWeb Solutions',
                  publisher: {
                    '@id': 'https://www.affordawebsolutions.com/#organization',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXB7GSP9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
