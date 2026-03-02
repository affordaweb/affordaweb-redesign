import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AffordaWeb Solutions',
  description: 'Privacy policy for AffordaWeb Solutions — how we collect, use, and protect your personal information.',
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container-tight max-w-3xl">
        <h1 className="text-4xl font-bold text-dark mb-4">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: March 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          {[
            {
              title: 'Information We Collect',
              body: 'We collect information you provide directly to us, such as when you fill out our contact form or request a quote. This includes your name, email address, website URL, and project details.',
            },
            {
              title: 'How We Use Your Information',
              body: 'We use the information collected to respond to your inquiries, provide our website design services, send service-related communications, and improve our website and offerings.',
            },
            {
              title: 'Information Sharing',
              body: 'We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business.',
            },
            {
              title: 'Cookies',
              body: 'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some features of our website.',
            },
            {
              title: 'Data Security',
              body: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
            },
            {
              title: 'Contact Us',
              body: 'If you have any questions about this Privacy Policy, please contact us at hello@affordawebsolutions.com.',
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
