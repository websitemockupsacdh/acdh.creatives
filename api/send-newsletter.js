import nodemailer from 'nodemailer'

const sender = 'acdh.creatives@gmail.com'
const website = 'https://acdhcreatives.vercel.app/'
const recipients = [
  { email: 'decastromoon@gmail.com', name: 'Moon' },
  { email: 'jhonsandrelm@gmail.com', name: 'Jhonsandrel' },
]

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const newsletterEmail = (name) => {
  const safeName = escapeHtml(name)
  const link = (label, href) => `<a href="${href}" style="color:#00bf63;text-decoration:none;">${label} ↗</a>`
  const service = (number, title, text) => `<tr><td style="width:42px;padding:18px 0;vertical-align:top;color:#00bf63;font:11px monospace;border-top:1px solid #303730;">${number}</td><td style="padding:18px 0;border-top:1px solid #303730;"><strong style="color:#f2f4ed;font-size:16px;">${title}</strong><br><span style="color:#9ca49a;font-size:12px;line-height:1.5;">${text}</span></td></tr>`

  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Exciting news from ACDH Creatives</title></head><body style="margin:0;padding:20px 0;background:#090b09;font-family:Arial,Helvetica,sans-serif;color:#f2f4ed;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center"><table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#101210;border:1px solid #303730;"><tr><td style="padding:28px 34px;border-bottom:1px solid #303730;"><a href="${website}"><strong style="color:#00bf63;font:500 18px monospace;letter-spacing:2px;">ACDH</strong><span style="color:#f2f4ed;font:500 18px monospace;letter-spacing:2px;"> CREATIVES</span></a></td></tr><tr><td style="padding:52px 34px 58px;background:#142118;"><p style="margin:0 0 24px;color:#f2f4ed;font-size:16px;">Hi ${safeName}!</p><p style="margin:0 0 14px;color:#9ca49a;font:11px monospace;letter-spacing:1px;text-transform:uppercase;">A note from the studio</p><h1 style="margin:0 0 22px;color:#f2f4ed;font-size:44px;line-height:.95;letter-spacing:-2px;">I have exciting<br><span style="color:#00bf63;">news for you.</span></h1><p style="margin:0;color:#b4beb2;font-size:14px;line-height:1.7;">ACDH Creatives is now offering practical creative and digital services to help your business look credible, communicate clearly and move forward.</p><a href="${website}#contact" style="display:inline-block;margin-top:26px;padding:15px 18px;background:#00bf63;color:#101210;font:11px monospace;text-decoration:none;text-transform:uppercase;">Start a project &nbsp;↗</a></td></tr><tr><td style="padding:34px;"><p style="margin:0;color:#00bf63;font:11px monospace;letter-spacing:1px;text-transform:uppercase;">Services built around you</p><h2 style="margin:17px 0 14px;color:#f2f4ed;font-size:34px;line-height:.98;letter-spacing:-1.5px;">Make your next<br><span style="color:#00bf63;">move clearer.</span></h2><p style="margin:0 0 24px;color:#9ca49a;font-size:14px;line-height:1.7;">From a new identity to a complete online presence, here is how we can help:</p><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${service('01','Branding & identity','Logos, color systems and practical brand guidelines for a credible first impression.')}${service('02','Marketing & social','On-brand content systems, pubmats, campaigns and calendars that keep you visible.')}${service('03','Documents & decks','Polished proposals, company profiles and presentations ready to share.')}${service('04','Website development','Responsive business websites designed to turn attention into inquiries.')}</table><a href="${website}#services" style="display:inline-block;margin-top:25px;color:#00bf63;font:11px monospace;text-transform:uppercase;text-decoration:none;">Explore all services &nbsp;↗</a></td></tr><tr><td style="padding:40px 34px;background:#18251a;border-block:1px solid #303730;"><p style="margin:0;color:#00bf63;font:11px monospace;letter-spacing:1px;text-transform:uppercase;">Studio promo · limited slots</p><h2 style="margin:17px 0 15px;color:#f2f4ed;font-size:32px;line-height:1;letter-spacing:-1px;">Bring the rough idea.<br><span style="color:#00bf63;">We will shape it.</span></h2><p style="margin:0;color:#b4beb2;font-size:14px;line-height:1.7;">Book a service inquiry and tell us what you are building. We will help you find the clearest, most useful way to bring it to life.</p><a href="${website}#contact" style="display:inline-block;margin-top:24px;padding:15px 18px;background:#00bf63;color:#101210;font:11px monospace;text-decoration:none;text-transform:uppercase;">Book a service &nbsp;↗</a><p style="margin:18px 0 0;color:#9ca49a;font:10px monospace;">Replies available every day · Batangas, PH</p></td></tr><tr><td style="padding:34px;text-align:center;border-top:1px solid #303730;"><p style="margin:0 0 14px;color:#f2f4ed;font:500 16px monospace;letter-spacing:1px;">ACDH CREATIVES</p><p style="margin:0;color:#9ca49a;font:11px monospace;line-height:1.8;">Creative & digital services · Batangas, Philippines<br>${link('Visit the website', website)} &nbsp; ${link('Contact us', `${website}#contact`)}<br><a href="mailto:${sender}" style="color:#9ca49a;">${sender}</a></p></td></tr></table></td></tr></table></body></html>`
}

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })

  const emailUser = process.env.GMAIL_USER || process.env.EMAIL_USER
  const emailPassword = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS
  if (!emailUser || !emailPassword) return response.status(500).json({ error: 'Email service is not configured yet.' })

  const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: emailUser, pass: emailPassword } })
  try {
    await Promise.all(recipients.map(({ email, name }) => transporter.sendMail({
      from: `ACDH Creatives <${sender}>`,
      to: email,
      subject: 'Exciting news from ACDH Creatives',
      text: `Hi ${name}!\n\nI have exciting news for you. ACDH Creatives is now offering branding, marketing, documents, website development and other digital services.\n\nBook a service: ${website}#contact\nVisit the website: ${website}\n\nACDH Creatives`,
      html: newsletterEmail(name),
    })))
    return response.status(200).json({ sent: recipients.map(({ email }) => email) })
  } catch (error) {
    console.error('Newsletter email failed:', error)
    return response.status(500).json({ error: 'The newsletter could not be sent.' })
  }
}
