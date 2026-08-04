import { NextResponse } from 'next/server'
import { adminCookieName } from '@/lib/virtual-employee-auth'
export async function POST() { const response = NextResponse.json({ success: true }); response.cookies.set(adminCookieName, '', { httpOnly: true, path: '/', maxAge: 0 }); return response }
