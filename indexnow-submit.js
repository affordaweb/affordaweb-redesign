#!/usr/bin/env node
// IndexNow submit script
// Run after deploy: node indexnow-submit.js

const KEY = 'fad4f379663a2065610d5e3a07cec7bf'
const HOST = 'affordawebsolutions.com'
const BASE = `https://${HOST}`

const urls = [
  `${BASE}/`,
  `${BASE}/about`,
  `${BASE}/services`,
  `${BASE}/pricing`,
  `${BASE}/portfolio`,
  `${BASE}/blog`,
  `${BASE}/contact`,
  `${BASE}/blog/why-small-businesses-need-professional-website`,
  `${BASE}/blog/affordable-website-design-vs-diy-website-builder`,
  `${BASE}/blog/seo-tips-small-business-website`,
  `${BASE}/blog/website-design-subscription-model-explained`,
  `${BASE}/blog/website-speed-matters-small-business`,
  `${BASE}/blog/local-seo-guide-small-businesses`,
]

async function submit() {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${BASE}/${KEY}.txt`,
      urlList: urls,
    }),
  })
  console.log(`IndexNow response: ${res.status} ${res.statusText}`)
  if (res.status === 200) console.log('All URLs submitted successfully.')
  if (res.status === 202) console.log('URLs accepted — crawl queued.')
  if (res.status === 400) console.log('Bad request — check URL format.')
  if (res.status === 403) console.log('Key not verified — confirm key file is live at the URL above.')
}

submit().catch(console.error)
