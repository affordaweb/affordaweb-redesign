# AffordaWeb Pricing And Virtual Employee Integration

## Pricing Implemented

- Starter: $39/month
- Business: $69/month
- Virtual Employee: $149/month

## Setup Fees

- Starter: $99
- Business: $149
- Virtual Employee: $299
- Current promotion: Setup fees waived. The promotion is controlled by the centralized pricing catalog.

## Pages Modified

- Pricing, homepage, services, contact, about, portfolio, SEO audit, SEO report, city and New Jersey location pages.
- Shared metadata, manifest, LLMS route, email copy, service data, web stories, footer, contact form, and plan-related CTAs.
- New customer-facing routes: `/virtual-employee`, `/virtual-employee/demo`, and protected `/virtual-employee/review`.

## Virtual Employee

- Deterministic approved-business knowledge, not a paid AI API.
- Plan guidance compares only published plan features and always provides alternatives.
- Supports service exploration, questions, unsupported-question escalation, lead capture, Recommendation and SEO Audit handoffs, knowledge gaps, and safe demo mode.
- Review Queue supports New, Contacted, Proposal Sent, Won, and Lost statuses, source/type filtering, and internal notes.

## Analytics

- Adds privacy-safe categorical events for pricing views, plan selection, comparison, Virtual Employee demo opens, and existing free-tool handoffs.
- No visitor message or contact-field content is sent to analytics.

## Knowledge Base

- Updated for Starter $39/month, Business $69/month, Virtual Employee $149/month, normal setup fees, and the current waived-fee promotion.
- Unsupported contractual or policy questions are escalated rather than answered with invented terms.

## Costs

- Hosting and application runtime: Vercel.
- Lead/review queue storage: Vercel KV or Upstash REST.
- Notification delivery: existing Resend configuration.
- Analytics: existing GA4 configuration.
- AI API cost: $0. The Virtual Employee uses deterministic matching only.

## Verification

- `npm test`: passed, 6 tests.
- `npm run lint`: passed.
- `npx tsc --noEmit`: passed after generated route types were refreshed by the production build.
- `npm run build`: passed.

## Manual Vercel Setup Required

- `KV_REST_API_URL` and `KV_REST_API_TOKEN` for durable Review Queue records, knowledge gaps, and rate limiting.
- `RESEND_API_KEY` and `ADMIN_EMAIL` for inquiry notifications.
- A long random `VIRTUAL_EMPLOYEE_ADMIN_TOKEN` for the private Review Queue login.
- Existing `NEXT_PUBLIC_BASE_URL`, Turnstile, and GA4 variables must remain configured.
- Confirm cancellation, domain ownership, payment, and refund wording before publishing any transactional checkout flow.

## Remaining Exceptions

- The noindexed CreditSuite proposal retains its bespoke $99/month offer because it is not a public AffordaWeb plan.
- Historical price comparisons remain only where they are not described as current AffordaWeb plan prices.
- Repository credential files and the Git remote credential require rotation/removal before the next push.
