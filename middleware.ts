import { NextRequest, NextResponse } from 'next/server'

// Madera County, CA cities/communities as reported by IP geolocation
const MADERA_COUNTY_CITIES = new Set([
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
])

// Madera County approximate bounding box as a fallback
const MADERA_COUNTY_BOUNDS = {
  minLat: 36.73,
  maxLat: 37.88,
  minLng: -120.53,
  maxLng: -118.97,
}

function isInMaderaCounty(geo: NextRequest['geo']): boolean {
  if (!geo) return false

  const region = geo.region ?? ''
  if (region !== 'CA') return false

  // Check by city name
  const city = (geo.city ?? '').toLowerCase()
  if (MADERA_COUNTY_CITIES.has(city)) return true

  // Check by coordinates (bounding box)
  const lat = parseFloat(geo.latitude ?? '')
  const lng = parseFloat(geo.longitude ?? '')
  if (!isNaN(lat) && !isNaN(lng)) {
    const { minLat, maxLat, minLng, maxLng } = MADERA_COUNTY_BOUNDS
    if (lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng) {
      return true
    }
  }

  return false
}

export function middleware(request: NextRequest) {
  if (isInMaderaCounty(request.geo)) {
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>404 Not Found</title>
  <style>
    body { margin: 0; display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #fff; font-family: sans-serif; }
    p { color: #111; font-size: 1.1rem; }
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

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}
