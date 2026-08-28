const website = 'https://acdhcreatives.vercel.app/'

const newsletters = {
  general: 'newsletter.html',
  'start-your-brand': 'start-your-brand.html',
  'social-engine': 'social-engine.html',
  'proposal-kit': 'proposal-kit.html',
  'portrait-studio': 'portrait-studio.html',
  'growth-radar': 'growth-radar.html',
  'digital-presence': 'digital-presence.html',
}

export default function handler(request, response) {
  const slug = request.query?.newsletter
  const path = newsletters[slug]
  if (!path) return response.status(400).send('Invalid newsletter.')

  const start = Date.now()
  response.redirect(302, `${website}${path}?promoStart=${start}`)
}
