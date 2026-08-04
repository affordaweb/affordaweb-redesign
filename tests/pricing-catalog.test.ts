import assert from 'node:assert/strict'
import test from 'node:test'
import { pricingPlans } from '../lib/pricing'

test('website plan catalog uses the published names and monthly prices', () => {
  assert.deepEqual(
    pricingPlans.map(({ name, monthlyPrice }) => [name, monthlyPrice]),
    [['Starter', 39], ['Business', 69], ['Virtual Employee', 149]],
  )
})
