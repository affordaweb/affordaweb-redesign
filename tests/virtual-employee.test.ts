import assert from 'node:assert/strict'
import test from 'node:test'
import { answerQuestion, leadStatuses, recommendPlan } from '../lib/virtual-employee'
import { createAdminSession, verifyAdminSession, verifyAdminToken } from '../lib/virtual-employee-auth'

test('matches published pricing questions without inventing prices', () => {
  const answer = answerQuestion('What is the monthly price and setup fee?')
  assert.equal(answer.kind, 'answer')
  assert.match(answer.text, /Starter: \$39\/mo/)
  assert.match(answer.text, /Setup fees are currently waived/)
})

test('guidance only selects catalog plans from explicit options', () => {
  assert.equal(recommendPlan({ pages: 'up-to-5', updates: 'one', seo: false, virtualEmployee: false }).plan, 'starter')
  assert.equal(recommendPlan({ pages: 'up-to-10', updates: 'unlimited', seo: true, virtualEmployee: false }).plan, 'business')
  assert.equal(recommendPlan({ pages: 'up-to-5', updates: 'one', seo: false, virtualEmployee: true }).plan, 'virtual-employee')
  assert.equal(recommendPlan({ pages: 'more-than-10', updates: 'one', seo: false, virtualEmployee: false }).plan, null)
})

test('unsupported and contractual questions are declined safely', () => {
  assert.equal(answerQuestion('Can you guarantee rankings?').kind, 'unsupported')
  assert.equal(answerQuestion('What is your cancellation policy?').topic, 'terms')
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
