import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free SEO Audit | AffordaWeb Solutions",
  description:
    "Get a free SEO analysis of your website. We check 20+ factors including meta tags, content structure, technical SEO, Open Graph, and link profile. Instant preview, full report delivered to your inbox.",
  alternates: { canonical: "https://affordawebsolutions.com/seo-audit/" },
  openGraph: {
    title: "Free SEO Audit | AffordaWeb Solutions",
    description:
      "Run a free SEO audit on your website. See your SEO score, top issues, and quick wins instantly.",
    url: "https://affordawebsolutions.com/seo-audit/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free SEO Audit | AffordaWeb Solutions",
    description: "Get a free SEO analysis — score, issues, and actionable recommendations.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Free SEO Audit Tool",
  description:
    "A free SEO analysis tool that checks meta tags, content structure, technical SEO, Open Graph tags, and link profile.",
  url: "https://affordawebsolutions.com/seo-audit/",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free SEO audit preview",
  },
  provider: {
    "@type": "ProfessionalService",
    name: "AffordaWeb Solutions",
    url: "https://affordawebsolutions.com/",
    email: "hello@affordawebsolutions.com",
  },
}

export default function SeoAuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
