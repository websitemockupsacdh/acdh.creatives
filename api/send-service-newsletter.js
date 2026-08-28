import nodemailer from 'nodemailer'

const sender = 'acdh.creatives@gmail.com'
const website = 'https://acdhcreatives.vercel.app/'

const newsletters = {
  general: { title: 'ACDH Creatives Newsletter', path: 'newsletter.html', subject: 'A note from ACDH Creatives' },
  'start-your-brand': { title: 'Start your Brand', path: 'start-your-brand.html', subject: 'Start your Brand with ACDH Creatives' },
  'social-engine': { title: 'Social Engine', path: 'social-engine.html', subject: 'Build your Social Engine' },
  'proposal-kit': { title: 'Proposal Kit', path: 'proposal-kit.html', subject: 'Make your proposals easier to trust' },
  'portrait-studio': { title: 'Portrait Studio', path: 'portrait-studio.html', subject: 'Turn stories into art that lasts' },
  'growth-radar': { title: 'Growth Radar', path: 'growth-radar.html', subject: 'Make your next move with evidence' },
  'digital-presence': { title: 'Digital Presence', path: 'digital-presence.html', subject: 'Build a website that makes room' },
}

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const emailHtml = ({ name, newsletter }) => {
  const safeName = escapeHtml(name)
  const safeTitle = escapeHtml(newsletter.title)
  const link = `${website}${newsletter.path}`
  return `<!doctype html><html lang="en"><body style="margin:0;padding:24px 0;background:#090b09;font-family:Arial,Helvetica,sans-serif;color:#f2f4ed;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center"><table role="presentation" width="600" style="width:100%;max-width:600px;background:#101210;border:1px solid #303730;"><tr><td style="padding:28px 34px;border-bottom:1px solid #303730;"><a href="${website}" style="color:#f2f4ed;text-decoration:none;font:500 18px monospace;letter-spacing:2px;"><span style="color:#00bf63;">ACDH</span> CREATIVES</a></td></tr><tr><td style="padding:52px 34px 58px;background:linear-gradient(135deg,#142118,#101210);"><p style="margin:0 0 24px;font-size:16px;">Hi ${safeName}!</p><p style="margin:0 0 14px;color:#9ca49a;font:11px monospace;letter-spacing:1px;text-transform:uppercase;">A focused note from the studio</p><h1 style="margin:0 0 22px;font-size:44px;line-height:.95;letter-spacing:-2px;">${safeTitle}</h1><p style="margin:0;color:#b4beb2;font-size:14px;line-height:1.7;">We created a focused guide for this ACDH Creatives service, including what it solves, what is included and how the packages are structured.</p><a href="${link}" style="display:inline-block;margin-top:28px;padding:15px 18px;background:#00bf63;color:#101210;font:11px monospace;text-decoration:none;text-transform:uppercase;">Open ${safeTitle} &nbsp;↗</a></td></tr><tr><td style="padding:30px 34px;color:#9ca49a;font-size:12px;line-height:1.7;">View the full newsletter in your browser: <a href="${link}" style="color:#00bf63;">${link}</a><br><br>ACDH Creatives<br>Batangas, Philippines</td></tr></table></td></tr></table></body></html>`
}

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })

  const { email, name, newsletter: newsletterSlug } = request.body || {}
  const newsletter = newsletters[newsletterSlug]
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return response.status(400).json({ error: 'Provide one valid recipient email.' })
  if (!newsletter) return response.status(400).json({ error: 'Provide a valid newsletter slug.' })

  const emailUser = process.env.GMAIL_USER || process.env.EMAIL_USER
  const emailPassword = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS
  if (!emailUser || !emailPassword) return response.status(500).json({ error: 'Email service is not configured yet.' })

  const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: emailUser, pass: emailPassword } })
  const recipientName = name || email.split('@')[0]
  try {
    await transporter.sendMail({
      from: `ACDH Creatives <${sender}>`,
      to: email,
      subject: newsletter.subject,
      text: `Hi ${recipientName}!\n\nOpen the ${newsletter.title} newsletter: ${website}${newsletter.path}\n\nACDH Creatives`,
      html: emailHtml({ name: recipientName, newsletter }),
    })
    return response.status(200).json({ sent: true, email, newsletter: newsletterSlug })
  } catch (error) {
    console.error('Service newsletter email failed:', error)
    return response.status(500).json({ error: 'The service newsletter could not be sent.' })
  }
}
