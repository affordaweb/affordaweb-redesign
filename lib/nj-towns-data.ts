export interface NjTown {
  name: string
  slug: string
  desc: string
  metaTitle: string
  metaDesc: string
  headline: string
  subhead: string
  cta: string
}

const rawNjTowns: NjTown[] = [
  {
    name: 'Cherry Hill',
    slug: 'cherry-hill',
    desc: 'Affordable web design for Cherry Hill businesses.',
    metaTitle: 'Affordable Web Design in Cherry Hill, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Professional website design for Cherry Hill NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Cherry Hill, NJ Small Businesses',
    subhead: 'Professional websites for Cherry Hill businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Cherry Hill Quote',
  },
  {
    name: 'Newark',
    slug: 'newark',
    desc: 'Website design for Newark small businesses.',
    metaTitle: 'Affordable Web Design in Newark, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Affordable website design for Newark NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Newark, NJ Small Businesses',
    subhead: 'Professional websites for Newark businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Newark Quote',
  },
  {
    name: 'Paterson',
    slug: 'paterson',
    desc: 'Web design services in Paterson, NJ.',
    metaTitle: 'Affordable Web Design in Paterson, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Website design for Paterson NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Paterson, NJ Small Businesses',
    subhead: 'Professional websites for Paterson businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Paterson Quote',
  },
  {
    name: 'Trenton',
    slug: 'trenton',
    desc: 'Affordable websites for Trenton businesses.',
    metaTitle: 'Affordable Web Design in Trenton, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Affordable website design for Trenton NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Trenton, NJ Small Businesses',
    subhead: 'Professional websites for Trenton businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Trenton Quote',
  },
  {
    name: 'Toms River',
    slug: 'toms-river',
    desc: 'Web design for Toms River and Ocean County.',
    metaTitle: 'Affordable Web Design in Toms River, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Website design for Toms River NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Toms River, NJ Small Businesses',
    subhead: 'Professional websites for Toms River businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Toms River Quote',
  },
  {
    name: 'Elizabeth',
    slug: 'elizabeth',
    desc: 'Professional web design in Elizabeth, NJ.',
    metaTitle: 'Affordable Web Design in Elizabeth, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Affordable website design for Elizabeth NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Elizabeth, NJ Small Businesses',
    subhead: 'Professional websites for Elizabeth businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Elizabeth Quote',
  },
  {
    name: 'Clifton',
    slug: 'clifton',
    desc: 'Website design for Clifton small businesses.',
    metaTitle: 'Affordable Web Design in Clifton, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Website design for Clifton NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Clifton, NJ Small Businesses',
    subhead: 'Professional websites for Clifton businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Clifton Quote',
  },
  {
    name: 'Hoboken',
    slug: 'hoboken',
    desc: 'Web design services in Hoboken, NJ.',
    metaTitle: 'Affordable Web Design in Hoboken, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Affordable website design for Hoboken NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Hoboken, NJ Small Businesses',
    subhead: 'Professional websites for Hoboken businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Hoboken Quote',
  },
  {
    name: 'New Brunswick',
    slug: 'new-brunswick',
    desc: 'Affordable web design in New Brunswick.',
    metaTitle: 'Affordable Web Design in New Brunswick, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Website design for New Brunswick NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for New Brunswick, NJ Small Businesses',
    subhead: 'Professional websites for New Brunswick businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free New Brunswick Quote',
  },
  {
    name: 'Atlantic City',
    slug: 'atlantic-city',
    desc: 'Web design for Atlantic City businesses.',
    metaTitle: 'Affordable Web Design in Atlantic City, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Affordable website design for Atlantic City NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Atlantic City, NJ Small Businesses',
    subhead: 'Professional websites for Atlantic City businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Atlantic City Quote',
  },
  {
    name: 'Princeton',
    slug: 'princeton',
    desc: 'Affordable websites for Princeton businesses.',
    metaTitle: 'Affordable Web Design in Princeton, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Website design for Princeton NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Princeton, NJ Small Businesses',
    subhead: 'Professional websites for Princeton businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Princeton Quote',
  },
  {
    name: 'Morristown',
    slug: 'morristown',
    desc: 'Web design services in Morristown, NJ.',
    metaTitle: 'Affordable Web Design in Morristown, NJ | $39/mo | AffordaWeb Solutions',
    metaDesc: 'Affordable website design for Morristown NJ small businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    headline: 'Affordable Web Design for Morristown, NJ Small Businesses',
    subhead: 'Professional websites for Morristown businesses. Starter plans begin at $39/month with custom design, managed hosting, and SSL. Normal setup fees are currently waived.',
    cta: 'Get a Free Morristown Quote',
  },
]

export const njTowns = rawNjTowns
