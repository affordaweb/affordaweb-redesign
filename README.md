# AffordaWeb Solutions — Website Redesign

Modern Next.js 15 redesign of affordawebsolutions.com

**Dev URL:** https://affordaweb-redesign-98r2cuai3.vercel.app
**Production:** https://affordawebsolutions.com

## Tech Stack
- **Framework:** Next.js 15 (App Router, Static Export)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Font:** Inter (Google Fonts, variable)
- **Hosting:** Vercel

## Color System
| Role | Hex | Usage |
|---|---|---|
| Primary (Purple) | `#5636D1` | Brand, headings, links |
| Pink | `#E2498A` | Accents, gradients |
| **Cyan (NEW)** | `#06B6D4` | Buttons, CTAs, icons, hovers |
| Dark | `#0F0F1A` | Backgrounds, hero |
| Surface | `#F8F7FF` | Section backgrounds |

## Pages
| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/services` | `app/services/page.tsx` |
| `/pricing` | `app/pricing/page.tsx` |
| `/about` | `app/about/page.tsx` |
| `/portfolio` | `app/portfolio/page.tsx` |
| `/blog` | `app/blog/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/privacy` | `app/privacy/page.tsx` |
| `/terms` | `app/terms/page.tsx` |

## Getting Started

```bash
npm install
npm run dev       # Development server at http://localhost:3000
npm run build     # Production static build → /out directory
```

## Deploying to Vercel

The repo is connected to Vercel via GitHub integration. Every push to `main` triggers an automatic deployment.

## Contact Form Setup

The contact form in `components/ContactForm.tsx` uses **Web3Forms** for email delivery with honeypot spam protection.

- **Access Key:** configured in the component
- **Emails to:** hello@affordawebsolutions.com
- **CC:** va.saifcastle@gmail.com

## SEO Configuration

- Metadata defined per-page in each `page.tsx` file
- Sitemap auto-generated at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Schema markup (Organization, LocalBusiness, FAQPage, Service) in `layout.tsx` and individual pages
- Open Graph + Twitter Card meta tags on all pages

## Customization

### Update contact email
Search for `hello@affordawebsolutions.com` and replace with actual email.

### Add real portfolio images
Replace placeholder divs in `app/portfolio/page.tsx` with actual `<Image>` components pointing to real screenshots.

### Blog posts
Create `app/blog/[slug]/page.tsx` for individual blog post pages with full content.

### Logo
Replace the text logo in `components/Header.tsx` and `components/Footer.tsx` with an `<Image>` component once logo file is available.
