import assert from 'node:assert/strict'
import test from 'node:test'
import { answerQuestion, leadStatuses, recommendPlan } from '../lib/virtual-employee'
import { createAdminSession, verifyAdminSession, verifyAdminToken } from '../lib/virtual-employee-auth'

test('matches published pricing questions without inventing prices', () => {
  const answer = answerQuestion('What is the monthly price and setup fee?')
  assert.equal(answer.kind, 'answer')
  assert.match(answer.text, /Starter: \$39\/mo/)
  assert.match(answer.text, /Setup fees are currently waived/)

  const plural = answerQuestion('What are your prices?')
  assert.equal(plural.kind, 'answer')
  assert.equal(plural.topic, 'pricing')
  assert.match(plural.text, /Business: \$69\/mo/)
})

test('guidance only selects catalog plans from explicit options', () => {
  assert.equal(recommendPlan({ pages: 'up-to-5', updates: 'one', seo: false, virtualEmployee: false }).plan, 'starter')
  assert.equal(recommendPlan({ pages: 'up-to-10', updates: 'unlimited', seo: true, virtualEmployee: false }).plan, 'business')
  assert.equal(recommendPlan({ pages: 'up-to-5', updates: 'one', seo: false, virtualEmployee: true }).plan, 'virtual-employee')
  assert.equal(recommendPlan({ pages: 'more-than-10', updates: 'one', seo: false, virtualEmployee: false }).plan, null)
})

test('unsupported guarantees are declined and published policies are quoted safely', () => {
  assert.equal(answerQuestion('Can you guarantee rankings?').kind, 'unsupported')
  assert.equal(answerQuestion('What is your cancellation policy?').topic, 'terms')
  assert.match(answerQuestion('What is your cancellation policy?').text, /30 days written notice/)
  assert.equal(answerQuestion('Who owns my website content?').href, '/terms')
})

test('answers common website questions from approved site content', () => {
  const timeline = answerQuestion('How long does a website take to launch?')
  assert.equal(timeline.topic, 'timeline')
  assert.match(timeline.text, /10 to 15 business days/)

  const hosting = answerQuestion('Do I need separate hosting and SSL?')
  assert.equal(hosting.topic, 'hosting')
  assert.match(hosting.text, /one 1 GB professional email account/)

  const updates = answerQuestion('What counts as a routine content update?')
  assert.equal(updates.topic, 'maintenance')
  assert.match(updates.text, /do not include new page design/)
})

test('provides specific plan details and routes custom work to the team', () => {
  const starter = answerQuestion('What is included in the Starter plan?')
  assert.equal(starter.kind, 'answer')
  assert.match(starter.text, /Up to 5 website pages/)
  assert.equal(starter.href, '/pricing')

  const ecommerce = answerQuestion('Can you build an online store?')
  assert.equal(ecommerce.topic, 'ecommerce')
  assert.equal(ecommerce.href, '/contact')
})

test('covers published company, scope, tools, and regional information', () => {
  assert.equal(answerQuestion('Who is AffordaWeb?').topic, 'company')
  assert.equal(answerQuestion('Do you include a contact form?').topic, 'contact-form')
  assert.equal(answerQuestion('Can you write my content and build an integration?').topic, 'custom-scope')
  assert.equal(answerQuestion('Do you serve Houston?').href, '/houston')
  assert.equal(answerQuestion('Tell me about the free website recommendation tool').href, '/recommendation')
  assert.equal(answerQuestion('Where can I read website guides?').href, '/blog')
})

test('does not infer unpublished facts or ambiguous service areas', () => {
  assert.equal(answerQuestion('What is your phone number?').kind, 'unsupported')
  assert.equal(answerQuestion('Who is your CEO?').kind, 'unsupported')
  assert.equal(answerQuestion('How much is the Premium plan?').kind, 'unsupported')
  assert.equal(answerQuestion('I need help in Montgomery County, Pennsylvania.').href, '/philadelphia')
  assert.equal(answerQuestion('I need help in Orange County, Florida.').kind, 'unsupported')
})

test('admin sessions require a configured secret and expire', () => {
  const previous = process.env.VIRTUAL_EMPLOYEE_ADMIN_TOKEN
  process.env.VIRTUAL_EMPLOYEE_ADMIN_TOKEN = 'test-secret-token'
  const session = createAdminSession(1_000)
  assert.ok(session)
  assert.equal(verifyAdminSession(session, 2_000), true)
  assert.equal(verifyAdminSession(session, 1_000 + 60 * 60 * 9 * 1000), false)
  assert.equal(verifyAdminToken('test-secret-token'), true)
  assert.equal(verifyAdminToken('wrong-token'), false)
  if (previous === undefined) delete process.env.VIRTUAL_EMPLOYEE_ADMIN_TOKEN
  else process.env.VIRTUAL_EMPLOYEE_ADMIN_TOKEN = previous
})

test('review queue statuses are constrained to the approved workflow', () => {
  assert.deepEqual(leadStatuses, ['New', 'Contacted', 'Proposal Sent', 'Won', 'Lost'])
})
