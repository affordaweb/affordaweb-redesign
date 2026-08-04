import { NextRequest, NextResponse } from 'next/server'
import { adminCookieName, adminSessionMaxAge, createAdminSession, isAdminConfigured, verifyAdminToken } from '@/lib/virtual-employee-auth'

export async function POST(request: NextRequest) {
  if (!isAdminConfigured()) return NextResponse.json({ error: 'Admin review is not configured.' }, { status: 404 })
  const body = await request.json().catch(() => null)
  if (!verifyAdminToken(body?.token)) return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
  const response = NextResponse.json({ success: true })
  response.cookies.set(adminCookieName, createAdminSession()!, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', path: '/', maxAge: adminSessionMaxAge })
  return response
}
