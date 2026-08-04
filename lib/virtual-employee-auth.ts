import { createHmac, timingSafeEqual } from 'crypto'

const COOKIE_NAME = 'affordaweb_ve_admin'
const MAX_AGE_SECONDS = 60 * 60 * 8

function secret() { return process.env.VIRTUAL_EMPLOYEE_ADMIN_TOKEN }
function signature(payload: string, key: string) { return createHmac('sha256', key).update(payload).digest('base64url') }

export function isAdminConfigured() { return Boolean(secret()) }
export function createAdminSession(now = Date.now()) {
  const key = secret()
  if (!key) return null
  const payload = Buffer.from(JSON.stringify({ exp: now + MAX_AGE_SECONDS * 1000 })).toString('base64url')
  return `${payload}.${signature(payload, key)}`
}
export function verifyAdminSession(value: string | undefined, now = Date.now()) {
  const key = secret()
  if (!key || !value) return false
  const [payload, received] = value.split('.')
  if (!payload || !received) return false
  const expected = signature(payload, key)
  if (received.length !== expected.length || !timingSafeEqual(Buffer.from(received), Buffer.from(expected))) return false
  try { return JSON.parse(Buffer.from(payload, 'base64url').toString()).exp > now } catch { return false }
}
export function verifyAdminToken(value: unknown) {
  const key = secret()
  if (!key || typeof value !== 'string' || value.length !== key.length) return false
  return timingSafeEqual(Buffer.from(value), Buffer.from(key))
}
export const adminCookieName = COOKIE_NAME
export const adminSessionMaxAge = MAX_AGE_SECONDS
