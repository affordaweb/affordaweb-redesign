/**
 * KV Storage abstraction.
 * Production: Vercel KV (requires KV_REST_API_URL + KV_REST_API_TOKEN env vars)
 * Development: in-memory Map fallback
 */

interface MemEntry { value: unknown; expires?: number }
const mem = new Map<string, MemEntry>()

async function getKV() {
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    const { kv } = await import('@vercel/kv')
    return kv
  }
  return null
}

export async function kvSet(key: string, value: unknown, ttlSeconds?: number) {
  const kv = await getKV()
  if (kv) {
    if (ttlSeconds) {
      await kv.set(key, value, { ex: ttlSeconds })
    } else {
      await kv.set(key, value)
    }
  } else {
    const expires = ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined
    mem.set(key, { value, expires })
  }
}

export async function kvGet<T>(key: string): Promise<T | null> {
  const kv = await getKV()
  if (kv) return kv.get<T>(key)
  const entry = mem.get(key)
  if (!entry) return null
  if (entry.expires && Date.now() > entry.expires) { mem.delete(key); return null }
  return entry.value as T
}

export async function kvIncr(key: string, ttlSeconds?: number): Promise<number> {
  const kv = await getKV()
  if (kv) {
    const val = await kv.incr(key)
    if (ttlSeconds && val === 1) await kv.expire(key, ttlSeconds)
    return val
  }
  const entry = mem.get(key)
  const newVal = ((entry?.value as number) ?? 0) + 1
  const expires = entry?.expires ?? (ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined)
  mem.set(key, { value: newVal, expires })
  return newVal
}
