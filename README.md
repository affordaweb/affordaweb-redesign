# AffordaWeb Solutions — Website Redesign

Modern Next.js 14 redesign of affordawebsolutions.com

**Dev URL:** https://purple-armadillo-280403.hostingersite.com
**Production:** https://affordawebsolutions.com

## Tech Stack
- **Framework:** Next.js 14 (App Router, Static Export)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Font:** Inter (Google Fonts, variable)

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

## Deploying to Hostinger

1. Run `npm run build` — generates static files in `/out`
2. Log into Hostinger File Manager or use FTP
3. Upload the entire `/out` directory contents to `public_html`
4. Ensure `.htaccess` redirects are set for clean URLs

### Sample `.htaccess` for Hostinger
```apache
Options -MultiViews
RewriteEngine On

# Remove trailing slash (optional)
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,L]

# Serve .html files without extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# 404 fallback
ErrorDocument 404 /404.html
```

## Contact Form Setup

The contact form in `/app/contact/page.tsx` uses Formspree by default.

1. Create a free account at https://formspree.io
2. Create a new form and copy your form ID
3. Replace `your-form-id` in the form `action` attribute:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

Alternatively, use Netlify Forms (if hosting on Netlify) or EmailJS for client-side sending.

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
