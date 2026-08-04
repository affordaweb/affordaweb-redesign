import { kvGet, kvIncr, kvSet } from './kv-store'
import type { LeadSource, LeadStatus } from './virtual-employee'

export type VirtualEmployeeLead = { id: string; name: string; email: string; source: LeadSource; plan?: string; message?: string; status: LeadStatus; notes: string; createdAt: string }
const indexKey = 've:lead-index'

export async function saveLead(lead: Omit<VirtualEmployeeLead, 'id' | 'status' | 'notes' | 'createdAt'>) {
  const id = crypto.randomUUID()
  const record: VirtualEmployeeLead = { ...lead, id, status: 'New', notes: '', createdAt: new Date().toISOString() }
  await kvSet(`ve:lead:${id}`, record)
  const index = (await kvGet<string[]>(indexKey)) ?? []
  await kvSet(indexKey, [id, ...index].slice(0, 500))
  return record
}
export async function listLeads() {
  const ids = (await kvGet<string[]>(indexKey)) ?? []
  const leads = await Promise.all(ids.map((id) => kvGet<VirtualEmployeeLead>(`ve:lead:${id}`)))
  return leads.filter((lead): lead is VirtualEmployeeLead => Boolean(lead))
}
export async function updateLead(id: string, changes: Pick<VirtualEmployeeLead, 'status' | 'notes'>) {
  const lead = await kvGet<VirtualEmployeeLead>(`ve:lead:${id}`)
  if (!lead) return null
  const updated = { ...lead, ...changes }
  await kvSet(`ve:lead:${id}`, updated)
  return updated
}
export async function recordKnowledgeGap(topic: string) { await kvIncr(`ve:gap:${topic}`, 60 * 60 * 24 * 90) }
export async function knowledgeGaps() {
  const topics = ['general', 'terms']
  return Promise.all(topics.map(async (topic) => ({ topic, count: (await kvGet<number>(`ve:gap:${topic}`)) ?? 0 })))
}
