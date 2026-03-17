import { NextResponse } from 'next/server'

export async function GET() {
  const url   = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    return NextResponse.json({
      status: 'missing_env',
      has_url: !!url,
      has_token: !!token,
      all_env_keys: Object.keys(process.env).filter(k => k.toLowerCase().includes('upstash') || k.toLowerCase().includes('redis') || k.toLowerCase().includes('kv')),
    })
  }

  try {
    // Test SET
    const setRes = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['SET', 'debug:test', 'hello', 'EX', '60']),
    })
    const setData = await setRes.json()

    // Test GET
    const getRes = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['GET', 'debug:test']),
    })
    const getData = await getRes.json()

    return NextResponse.json({
      status: 'ok',
      set_result: setData.result,
      get_result: getData.result,
      url_preview: url.slice(0, 40) + '...',
    })
  } catch (err: unknown) {
    return NextResponse.json({ status: 'error', message: String(err) })
  }
}
