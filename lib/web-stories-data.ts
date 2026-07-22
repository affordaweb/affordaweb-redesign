export interface StorySlide {
  title: string
  text: string
  bgColor: string
  textColor?: string
  accentColor?: string
}

export interface WebStoryData {
  slug: string
  name: string
  description: string
  posterImage: string
  posterAlt: string
  slides: StorySlide[]
  datePublished: string
  dateModified: string
}

export const webStories: WebStoryData[] = [
  {
    slug: 'why-small-business-needs-website',
    name: 'Why Your Small Business Needs a Website',
    description: 'Discover the top reasons every small business needs a professional website to grow, build credibility, and attract customers in 2026.',
    posterImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=720&q=80',
    posterAlt: 'Laptop displaying a business website',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    slides: [
      {
        title: 'Why Your Small Business Needs a Website',
        text: 'In 2026, having a website is no longer optional — it is the foundation of your business credibility and growth.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
      {
        title: 'Customers Expect You Online',
        text: '81% of consumers search online before making a purchase. If they cannot find you, they choose a competitor who shows up.',
        bgColor: '#1A0F2E',
        accentColor: '#7C3AED',
      },
      {
        title: 'Build Trust Instantly',
        text: 'A professional website signals legitimacy. A modern, fast, well-designed site makes customers trust your business immediately.',
        bgColor: '#0F1A2E',
        accentColor: '#3B82F6',
      },
      {
        title: 'Open 24/7, No Holidays',
        text: 'Your website works around the clock — answering questions, collecting leads, and making sales while you sleep.',
        bgColor: '#1A2E0F',
        accentColor: '#10B981',
      },
      {
        title: 'Level the Playing Field',
        text: 'A great website makes a small business look as professional as a large corporation. Compete with the big players on a small budget.',
        bgColor: '#2E1A0F',
        accentColor: '#F59E0B',
      },
      {
        title: 'Ready to Get Started?',
        text: 'AffordaWeb Solutions builds custom websites for small businesses starting at $69/month. No upfront fees, no contracts.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
    ],
  },
  {
    slug: 'signs-need-website-redesign',
    name: '5 Signs You Need a Website Redesign',
    description: 'Is your website hurting your business? Learn the 5 telltale signs that it is time for a redesign.',
    posterImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=720&q=80',
    posterAlt: 'Website redesign wireframe sketch',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    slides: [
      {
        title: '5 Signs You Need a Website Redesign',
        text: 'Your website might be driving customers away without you realizing it. Here are the warning signs to watch for.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
      {
        title: '1. It Looks Outdated',
        text: 'If your site looks like it was built in 2015, visitors assume your business is outdated too. First impressions happen in 0.05 seconds.',
        bgColor: '#1A0F0F',
        accentColor: '#EF4444',
      },
      {
        title: '2. Slow Loading Speed',
        text: '53% of visitors leave if a page takes more than 3 seconds to load. Every second of delay costs you customers and hurts your SEO rankings.',
        bgColor: '#0F1A0F',
        accentColor: '#F59E0B',
      },
      {
        title: '3. Not Mobile-Friendly',
        text: 'Over 60% of web traffic comes from mobile devices. If your site is not responsive, you are ignoring more than half your potential customers.',
        bgColor: '#0F0F1A',
        accentColor: '#3B82F6',
      },
      {
        title: '4. High Bounce Rate',
        text: 'If people leave your site within seconds, your design, content, or user experience is failing. A redesign brings them back.',
        bgColor: '#1A0F1A',
        accentColor: '#EC4899',
      },
      {
        title: '5. Poor SEO Performance',
        text: 'Old sites often have broken code, missing meta tags, and slow speeds that Google penalizes. A redesign fixes your foundation.',
        bgColor: '#0F1A1A',
        accentColor: '#14B8A6',
      },
      {
        title: 'We Can Help',
        text: 'AffordaWeb Solutions offers complete website redesigns starting at $69/month. Modern, fast, SEO-optimized — with no upfront cost.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
    ],
  },
  {
    slug: 'small-business-seo-tips',
    name: 'Small Business SEO Tips That Actually Work',
    description: 'Practical, actionable SEO tips that help small businesses rank higher on Google without spending a fortune.',
    posterImage: 'https://images.unsplash.com/photo-1579532536935-619928decd08?w=720&q=80',
    posterAlt: 'SEO analytics dashboard on a screen',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    slides: [
      {
        title: 'Small Business SEO Tips',
        text: 'You do not need a huge budget to rank on Google. These proven strategies work for small businesses in any industry.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
      {
        title: 'Claim Your Google Profile',
        text: 'Google Business Profile is free and the #1 way local customers find you. Fill it out completely and post updates regularly.',
        bgColor: '#0F1A2E',
        accentColor: '#3B82F6',
      },
      {
        title: 'Target Local Keywords',
        text: 'Instead of "web design," target "web design in [your city]." Local keywords have less competition and higher conversion rates.',
        bgColor: '#1A2E0F',
        accentColor: '#22C55E',
      },
      {
        title: 'Speed Matters for SEO',
        text: 'Google ranks faster sites higher. Compress images, minimize code, and use a fast hosting provider. Every second counts.',
        bgColor: '#2E1A0F',
        accentColor: '#F59E0B',
      },
      {
        title: 'Publish Consistently',
        text: 'Blog posts, case studies, and service pages with fresh content tell Google your site is active and relevant. Aim for 2-4 posts per month.',
        bgColor: '#1A0F2E',
        accentColor: '#8B5CF6',
      },
      {
        title: 'Get Customer Reviews',
        text: 'Positive reviews on Google and Yelp directly boost your local search rankings. Ask happy customers to leave a review — most will say yes.',
        bgColor: '#0F1A1A',
        accentColor: '#14B8A6',
      },
    ],
  },
  {
    slug: 'website-cost-myths',
    name: 'Website Cost Myths Debunked',
    description: 'How much does a website really cost? We break down the myths about website pricing and show you the truth.',
    posterImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=720&q=80',
    posterAlt: 'Financial charts and graphs',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    slides: [
      {
        title: 'Website Cost Myths',
        text: 'There is a lot of misinformation about what a website should cost. Let us separate fact from fiction.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
      {
        title: 'Myth: You Need Thousands Upfront',
        text: 'Reality: Many agencies now offer monthly pricing with no upfront fees. At AffordaWeb, custom websites start at just $69/month.',
        bgColor: '#1A0F0F',
        accentColor: '#EF4444',
      },
      {
        title: 'Myth: DIY Is Cheaper',
        text: 'Reality: Wix, Squarespace, and WordPress costs add up fast — hosting, domains, plugins, templates. Plus your time. Professional design pays for itself.',
        bgColor: '#0F1A0F',
        accentColor: '#22C55E',
      },
      {
        title: 'Myth: Cheap = Low Quality',
        text: 'Reality: Affordable does not mean bad. Smart agencies use efficient workflows and modern tools to deliver high-quality sites at lower prices.',
        bgColor: '#0F0F1A',
        accentColor: '#3B82F6',
      },
      {
        title: 'Myth: You Own It Forever',
        text: 'Reality: Websites need ongoing maintenance, security updates, and content changes. Monthly plans often include all of this.',
        bgColor: '#1A0F1A',
        accentColor: '#EC4899',
      },
      {
        title: 'The Truth About Pricing',
        text: 'Custom website: $69–$149/month. Includes design, hosting, SSL, maintenance, and support. No contracts. Cancel anytime.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
    ],
  },
  {
    slug: 'benefits-affordable-web-design',
    name: 'Benefits of Affordable Web Design',
    description: 'Why affordable professional web design is the smartest investment you can make for your small business.',
    posterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=720&q=80',
    posterAlt: 'Modern office workspace with design tools',
    datePublished: '2026-07-21',
    dateModified: '2026-07-21',
    slides: [
      {
        title: 'Benefits of Affordable Web Design',
        text: 'Professional web design does not have to break the bank. Here is why affordable design is the best choice for small businesses.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
      {
        title: 'Custom Design, Not Templates',
        text: 'Affordable does not mean generic. You get a unique design tailored to your brand, your audience, and your business goals.',
        bgColor: '#0F1A2E',
        accentColor: '#3B82F6',
      },
      {
        title: 'SEO Built In From Day One',
        text: 'Cheap website builders ignore SEO. Affordable professional design includes proper structure, meta tags, and fast loading — all critical for ranking.',
        bgColor: '#1A2E0F',
        accentColor: '#10B981',
      },
      {
        title: 'Managed Hosting & Security',
        text: 'SSL certificates, software updates, backups, and security monitoring are included. One less thing for you to worry about.',
        bgColor: '#2E1A0F',
        accentColor: '#F59E0B',
      },
      {
        title: 'Ongoing Support Included',
        text: 'Need to update content, add a page, or fix an issue? Monthly plans include support so your site stays fresh and functional.',
        bgColor: '#1A0F2E',
        accentColor: '#8B5CF6',
      },
      {
        title: 'Start Today, Pay Monthly',
        text: 'No setup fees, no long-term contracts, no hidden costs. Just a professional website that helps your business grow — for $69/month.',
        bgColor: '#0F0F1A',
        accentColor: '#5636D1',
      },
    ],
  },
]
