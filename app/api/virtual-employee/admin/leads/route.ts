import { NextRequest, NextResponse } from 'next/server'
import { adminCookieName, verifyAdminSession } from '@/lib/virtual-employee-auth'
import { knowledgeGaps, listLeads, updateLead } from '@/lib/virtual-employee-leads'
import { leadStatuses } from '@/lib/virtual-employee'

function authorized(request: NextRequest) { return verifyAdminSession(request.cookies.get(adminCookieName)?.value) }
export async function GET(request: NextRequest) { if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }); return NextResponse.json({ leads: await listLeads(), gaps: await knowledgeGaps() }) }
export async function PATCH(request: NextRequest) {
  if (!authorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json().catch(() => null)
  if (!body || typeof body.id !== 'string' || !leadStatuses.includes(body.status) || typeof body.notes !== 'string' || body.notes.length > 2000) return NextResponse.json({ error: 'Invalid update.' }, { status: 400 })
  const lead = await updateLead(body.id, { status: body.status, notes: body.notes.trim() })
  return lead ? NextResponse.json({ lead }) : NextResponse.json({ error: 'Not found.' }, { status: 404 })
}
