import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | AffordaWeb Solutions',
  description: 'Terms of service for AffordaWeb Solutions website design and hosting plans.',
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-bold text-dark mb-4">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: March 2025</p>

        <div className="space-y-8">
          {[
            {
              title: '1. Services',
              body: 'AffordaWeb Solutions provides website design, hosting, SEO optimization, and maintenance services as described in the selected plan. Services are provided on a monthly subscription basis.',
            },
            {
              title: '2. Payment',
              body: 'Monthly fees are billed in advance. Payment is due at the start of each billing cycle. Failure to pay may result in suspension of services.',
            },
            {
              title: '3. Cancellation',
              body: 'You may cancel your plan at any time with 30 days written notice. Upon cancellation, we will provide an export of your website content. No refunds are issued for partial months.',
            },
            {
              title: '4. Content Ownership',
              body: 'You retain ownership of all content you provide. AffordaWeb Solutions owns the design work until full payment is received, at which point ownership transfers to the client.',
            },
            {
              title: '5. Acceptable Use',
              body: 'You agree not to use our services for any unlawful purpose or in violation of any applicable laws. We reserve the right to terminate service for violations of this policy.',
            },
            {
              title: '6. Limitation of Liability',
              body: 'AffordaWeb Solutions is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid in the previous 30 days.',
            },
            {
              title: '7. Changes to Terms',
              body: 'We reserve the right to modify these terms at any time. We will notify clients of significant changes via email. Continued use of our services constitutes acceptance of the updated terms.',
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h2 className="text-xl font-bold text-dark mb-3">{title}</h2>
              <p className="text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
