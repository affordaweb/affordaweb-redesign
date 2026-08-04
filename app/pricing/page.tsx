import type { Metadata } from 'next'
import Link from 'next/link'
import InnerHeroBg from '@/components/InnerHeroBg'
import { comparisonFeatures, pricingPlans, routineUpdateDefinition, scopeExclusions, SETUP_FEE_PROMOTION_ACTIVE, setupFeeLabel } from '@/lib/pricing'
import VirtualEmployeeLauncher from '@/components/VirtualEmployeeLauncher'
import PricingAnalytics from '@/components/PricingAnalytics'

export const metadata: Metadata = {
  title: 'Website Plans & Virtual Employee Pricing | From $39/mo',
  description: 'AffordaWeb plans start at $39/month. Choose Starter, Business, or Virtual Employee with clear monthly pricing and currently waived setup fees.',
  alternates: { canonical: 'https://www.affordawebsolutions.com/pricing' },
  openGraph: { type: 'website', title: 'Website Plans & Virtual Employee Pricing | From $39/mo', description: 'Starter, Business, and Virtual Employee plans with clear monthly pricing.', url: 'https://www.affordawebsolutions.com/pricing' },
}

const generalFaqs = [
  ['What is included in the monthly price?', 'Each plan includes the items shown in the comparison. Any work outside that scope is discussed and approved separately.'],
  ['Is the setup fee waived?', 'Yes. The normal setup fee is currently waived for each plan. This promotion can be removed when it is no longer available.'],
  ['What counts as a routine update?', routineUpdateDefinition],
  ['What are the cancellation and domain policies?', <>Please refer to the approved <Link href="/terms" className="font-medium text-primary-600 hover:underline">Terms of Service</Link>, or contact our team for help with your specific situation.</>],
]

const virtualEmployeeFaqs = [
  ['Is this just a chatbot?', 'No. The Virtual Employee is designed around an approved knowledge base, a review queue for responses needing approval, and knowledge-gap reporting so the information can improve over time.'],
  ['How does the approved knowledge base work?', 'It uses business information you approve. Content outside that knowledge base should be reviewed instead of treated as an authoritative answer.'],
  ['What is the review queue?', 'It is the workflow for responses or questions that need human review before they are treated as approved business information.'],
  ['What are knowledge gaps?', 'They are questions the approved knowledge base cannot answer well. They are surfaced so your team can decide whether to add or clarify information.'],
]

function Value({ value }: { value: string | boolean }) {
  if (typeof value === 'string') return <span className="text-xs sm:text-sm text-white/70 whitespace-nowrap">{value}</span>
  return value ? <span className="text-emerald-400 text-lg" aria-label="Included">✓</span> : <span className="text-white/25" aria-label="Not included">—</span>
}

export default function PricingPage() {
  const offers = pricingPlans.map((plan) => ({
    '@type': 'Offer',
    name: `${plan.name} plan`,
    price: plan.monthlyPrice,
    priceCurrency: 'USD',
    billingDuration: 'P1M',
    priceSpecification: { '@type': 'UnitPriceSpecification', price: plan.monthlyPrice, priceCurrency: 'USD', referenceQuantity: { '@type': 'QuantitativeValue', unitCode: 'MON' } },
    url: `https://www.affordawebsolutions.com/pricing#${plan.id}`,
  }))
  const faqSchema = [...generalFaqs, ...virtualEmployeeFaqs].map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: typeof answer === 'string' ? answer : 'Please refer to the approved Terms of Service or contact our team.' } }))

  return <>
    <PricingAnalytics />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [{ '@type': 'Product', name: 'AffordaWeb Website Plans', offers }, { '@type': 'FAQPage', mainEntity: faqSchema }] }) }} />

    <section className="relative overflow-hidden pt-[170px] pb-[88px] text-center" style={{ background: '#0F0F1A' }}>
      <InnerHeroBg page="pricing" />
      <div className="container-tight relative z-10">
        <p className="section-label-white">Clear Monthly Pricing</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5" style={{ letterSpacing: '-0.025em' }}>More Than a Website.</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>Choose a professional website plan, or add a governed Virtual Employee that works from knowledge your business approves.</p>
        <p className="text-sm mt-6" style={{ color: 'rgba(255,255,255,0.55)' }}>Plans from $39/mo {SETUP_FEE_PROMOTION_ACTIVE ? '· Setup fees currently waived' : ''}</p>
      </div>
    </section>

    <section className="section-pad bg-white" aria-labelledby="plans-heading">
      <div className="container-tight"><div className="text-center mb-12"><p className="section-label">Choose Your Plan</p><h2 id="plans-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">Website support that fits where you are now</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => <article key={plan.id} id={plan.id} className={`flex flex-col rounded-2xl p-7 border ${plan.featured ? 'bg-primary-600 border-primary-600 shadow-pricing' : 'bg-white border-gray-100 shadow-card'}`}>
            {plan.featured && <span className="self-start text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-white text-primary-600 mb-4">Most popular</span>}
            <p className={`text-xs font-bold uppercase tracking-widest ${plan.featured ? 'text-white/60' : 'text-gray-400'}`}>{plan.name}</p>
            <div className={`mt-3 text-5xl font-bold ${plan.featured ? 'text-white' : 'text-gray-900'}`}>${plan.monthlyPrice}<span className="text-sm font-medium">/mo</span></div>
            <p className={`mt-3 text-sm leading-relaxed min-h-12 ${plan.featured ? 'text-white/75' : 'text-gray-500'}`}>{plan.description}</p>
            <p className={`mt-4 text-xs font-medium ${plan.featured ? 'text-cyan-100' : 'text-primary-600'}`}>{setupFeeLabel(plan)}</p>
            <ul className="mt-6 space-y-3 flex-grow">{plan.inclusions.map((item) => <li key={item} className={`flex gap-2 text-sm ${plan.featured ? 'text-white' : 'text-gray-700'}`}><span className="text-emerald-400">✓</span>{item}</li>)}</ul>
            <Link href={`/contact?plan=${plan.id}`} className={plan.featured ? 'mt-7 inline-flex justify-center rounded-full bg-white px-5 py-3 font-semibold text-primary-600' : 'btn-secondary mt-7 justify-center'}>Choose {plan.name}</Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-pad relative overflow-hidden" style={{ background: '#0F0F1A' }} aria-labelledby="ve-heading"><div className="container-tight relative z-10 max-w-5xl"><div className="grid lg:grid-cols-2 gap-12 items-start"><div><p className="section-label-white">Virtual Employee</p><h2 id="ve-heading" className="text-3xl sm:text-4xl font-bold text-white mb-5">A helpful presence, governed by your business.</h2><p className="text-white/60 leading-relaxed">The Virtual Employee is not positioned as an unattended chatbot. It is built around the information you approve and a process that keeps your team in control.</p><VirtualEmployeeLauncher className="mt-6" /></div><div className="grid sm:grid-cols-2 gap-4">{[['1', 'Approved knowledge base', 'Start with information your business has reviewed.'], ['2', 'Helpful responses', 'Visitors get answers grounded in that approved knowledge.'], ['3', 'Review queue', 'Questions that need review are routed for human input.'], ['4', 'Knowledge gaps', 'Unanswered questions reveal what information to add next.']].map(([number, title, body]) => <div key={number} className="rounded-2xl p-5 border border-white/10 bg-white/5"><span className="text-cyan-400 font-bold">{number}</span><h3 className="text-white font-semibold mt-2">{title}</h3><p className="text-sm text-white/55 mt-2">{body}</p></div>)}</div></div></div></section>

    <section className="section-pad bg-white" aria-labelledby="comparison-heading"><div className="container-tight max-w-6xl"><div className="text-center mb-10"><p className="section-label">Compare Plans</p><h2 id="comparison-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">See the details before you choose</h2></div><div className="overflow-x-auto rounded-2xl border border-gray-200"><table className="w-full min-w-[720px] text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-5 text-gray-500">Feature</th>{pricingPlans.map((plan) => <th key={plan.id} className="p-5 text-center text-gray-900">{plan.name}<span className="block text-xs font-normal text-gray-500 mt-1">${plan.monthlyPrice}/mo</span></th>)}</tr></thead><tbody>{comparisonFeatures.map((feature, index) => <tr key={feature.label} className={index % 2 ? 'bg-gray-50/60' : ''}><td className="p-4 sm:p-5 font-medium text-gray-700">{feature.label}</td><td className="p-4 text-center"><Value value={feature.starter} /></td><td className="p-4 text-center"><Value value={feature.business} /></td><td className="p-4 text-center"><Value value={feature.virtualEmployee} /></td></tr>)}</tbody></table></div><div className="mt-8 grid md:grid-cols-2 gap-5 text-sm text-gray-600"><div className="rounded-2xl p-6 bg-primary-50 border border-primary-100"><h3 className="font-bold text-gray-900 mb-2">Routine update scope</h3><p>{routineUpdateDefinition}</p></div><div className="rounded-2xl p-6 bg-gray-50 border border-gray-100"><h3 className="font-bold text-gray-900 mb-2">Scope exclusions</h3><ul className="space-y-2">{scopeExclusions.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div></section>

    <section className="section-pad bg-[#FAFBFF]" aria-labelledby="faq-heading"><div className="container-tight max-w-3xl"><div className="text-center mb-10"><p className="section-label">Questions</p><h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900">Pricing and Virtual Employee FAQs</h2></div><h3 className="font-bold text-gray-900 mb-4">General</h3><div className="space-y-3 mb-10">{generalFaqs.map(([question, answer], index) => <details key={index} className="rounded-2xl bg-white border border-gray-100 p-5"><summary className="cursor-pointer font-semibold text-gray-900">{question}</summary><div className="pt-3 text-sm leading-relaxed text-gray-600">{answer}</div></details>)}</div><h3 className="font-bold text-gray-900 mb-4">Virtual Employee</h3><div className="space-y-3">{virtualEmployeeFaqs.map(([question, answer]) => <details key={question} className="rounded-2xl bg-white border border-gray-100 p-5"><summary className="cursor-pointer font-semibold text-gray-900">{question}</summary><p className="pt-3 text-sm leading-relaxed text-gray-600">{answer}</p></details>)}</div><div className="text-center mt-10"><Link href="/contact" className="btn-primary">Talk with our team</Link></div></div></section>
  </>
}
