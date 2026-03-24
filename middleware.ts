import { NextRequest, NextResponse } from 'next/server'

// Known Madera County cities (lowercase)
const MADERA_COUNTY_CITIES = [
  'madera',
  'chowchilla',
  'madera acres',
  'oakhurst',
  'coarsegold',
  'north fork',
  'bass lake',
  'ahwahnee',
  'raymond',
  'fairmead',
  'bonadelle ranchos',
  'yosemite lakes',
  'berenda',
  'borden',
  'ripperdan',
]

// Normalize helper
function normalize(value?: string) {
  return (value || '').toLowerCase().trim()
}

function isInMaderaCounty(geo: any): boolean {
  if (!geo) return false

  const region = normalize(geo.region)
  const city = normalize(geo.city)

  // Must be California
  if (region !== 'ca') return false

  // Exact match
  if (MADERA_COUNTY_CITIES.includes(city)) return true

  // Fuzzy match (VERY important for real-world data)
  for (const c of MADERA_COUNTY_CITIES) {
    if (city.includes(c)) return true
  }

  return false
}

export function middleware(request: NextRequest) {
  // Enforce non-www canonical domain
  const host = request.headers.get('host') || ''
  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone()
    url.host = host.slice(4)
    return NextResponse.redirect(url, { status: 301 })
  }

  const geo = (request as any).geo

  // 🔥 Safe guard: never break site if geo is missing
  try {
    if (isInMaderaCounty(geo)) {
      return new NextResponse(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 Not Found</title>
  <style>
    body {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: #fff;
      font-family: sans-serif;
    }
    p {
      color: #111;
      font-size: 1.1rem;
    }
  </style>
</head>
<body>
  <p>Site doesn't exist.</p>
</body>
</html>`,
        {
          status: 404,
          headers: { 'Content-Type': 'text/html' },
        }
      )
    }
  } catch (err) {
    // 🔥 Never break the site if something fails
    return NextResponse.next()
  }

  return NextResponse.next()
}

// Apply to all pages except static assets
export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
