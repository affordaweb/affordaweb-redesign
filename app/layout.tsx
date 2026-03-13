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
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['600', '700', '800'],
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://affordawebsolutions.com'),
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
    url: 'https://affordawebsolutions.com',
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
    canonical: 'https://affordawebsolutions.com',
  },
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
    shortcut: '/logo.webp',
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
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NXB7GSP9');`}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VJ2TSW7W93" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'granted',
              ad_storage: 'denied',
            });
            gtag('config', 'G-VJ2TSW7W93');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://affordawebsolutions.com/#organization',
                  name: 'AffordaWeb Solutions',
                  url: 'https://affordawebsolutions.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://affordawebsolutions.com/logo.webp',
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
                  '@id': 'https://affordawebsolutions.com/#business',
                  name: 'AffordaWeb Solutions',
                  url: 'https://affordawebsolutions.com',
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
                  '@id': 'https://affordawebsolutions.com/#website',
                  url: 'https://affordawebsolutions.com',
                  name: 'AffordaWeb Solutions',
                  publisher: {
                    '@id': 'https://affordawebsolutions.com/#organization',
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
