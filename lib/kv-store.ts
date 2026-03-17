/**
 * KV Storage abstraction.
 *
 * Production: Upstash Redis via REST API
 *   - Set up: Vercel dashboard → Storage → Upstash → Create Redis DB → Connect to project
 *   - Env vars auto-added: UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN
 *
 * Development: in-memory Map fallback (resets on restart — fine for testing)
 */

interface MemEntry { value: unknown; expires?: number }
const mem = new Map<string, MemEntry>()

async function upstash<T = unknown>(...args: (string | number)[]): Promise<T | null> {
  const url   = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(args),
    })
    const data = await res.json()
    return data.result ?? null
  } catch {
    return null
  }
}

export async function kvSet(key: string, value: unknown, ttlSeconds?: number) {
  const serialized = JSON.stringify(value)
  if (ttlSeconds) {
    const result = await upstash('SET', key, serialized, 'EX', ttlSeconds)
    if (result !== null) return
  } else {
    const result = await upstash('SET', key, serialized)
    if (result !== null) return
  }
  // Memory fallback
  const expires = ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined
  mem.set(key, { value, expires })
}

export async function kvGet<T>(key: string): Promise<T | null> {
  const result = await upstash<string>('GET', key)
  if (result !== null) {
    try { return JSON.parse(result) as T } catch { return result as unknown as T }
  }
  // Memory fallback
  const entry = mem.get(key)
  if (!entry) return null
  if (entry.expires && Date.now() > entry.expires) { mem.delete(key); return null }
  return entry.value as T
}

export async function kvIncr(key: string, ttlSeconds?: number): Promise<number> {
  const newVal = await upstash<number>('INCR', key)
  if (newVal !== null) {
    if (ttlSeconds && newVal === 1) await upstash('EXPIRE', key, ttlSeconds)
    return newVal
  }
  // Memory fallback
  const entry = mem.get(key)
  const val = ((entry?.value as number) ?? 0) + 1
  const expires = entry?.expires ?? (ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined)
  mem.set(key, { value: val, expires })
  return val
}
