import nodemailer from 'nodemailer'

const recipient = 'acdh.creatives@gmail.com'
const website = 'https://acdhcreatives.vercel.app/'

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

const confirmationEmail = ({ name, email, service, budget, details }) => {
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    service: escapeHtml(service),
    budget: escapeHtml(budget || 'Not specified'),
    details: escapeHtml(details).replaceAll('\n', '<br>'),
  }

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ACDH Creatives Inquiry Received</title></head>
<body style="margin:0;padding:20px 0;background:#0b0b0b;font-family:Arial,Helvetica,sans-serif;color:#fff;-webkit-font-smoothing:antialiased;">
  <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid #222;border-radius:8px;overflow:hidden;">
    <div style="background:#e5e5e5;color:#000;padding:12px 20px;font-family:monospace;font-size:13px;border-bottom:1px solid #ccc;">
      <strong>FROM:</strong> ACDH Creatives &lt;acdh.creatives@gmail.com&gt; | <strong>TO:</strong> ${safe.name}<br>
      <strong>SUBJECT:</strong> Re: ${safe.service} Inquiry Received - ACDH Creatives
    </div>
    <div style="padding:40px 30px;">
      <h1 style="font-size:32px;line-height:1.15;margin:0 0 10px;color:#fff;">Your Project Inquiry Details</h1>
      <h2 style="font-size:28px;line-height:1.2;margin:0 0 30px;color:#c2ff3d;">Here are the details we received:</h2>
      <div style="background:#181818;border:1px solid #282828;border-radius:8px;padding:24px;margin-bottom:25px;">
        <table role="presentation" width="100%" style="border-collapse:collapse;"><tr>
          <td width="50%" valign="top" style="padding:0 15px 20px 0;"><div style="font-family:monospace;font-size:11px;color:#a1a1a1;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Your Name</div><div style="background:#1a1a1a;border-bottom:1px solid #333;padding:10px;font-size:14px;color:#fff;">${safe.name}</div></td>
          <td width="50%" valign="top" style="padding:0 0 20px 0;"><div style="font-family:monospace;font-size:11px;color:#a1a1a1;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Email Address</div><div style="background:#1a1a1a;border-bottom:1px solid #333;padding:10px;font-size:14px;color:#fff;">${safe.email}</div></td>
        </tr><tr>
          <td width="50%" valign="top" style="padding:0 15px 20px 0;"><div style="font-family:monospace;font-size:11px;color:#a1a1a1;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">What Can I Help With?</div><div style="background:#1a1a1a;border-bottom:1px solid #333;padding:10px;font-size:14px;color:#fff;">${safe.service}</div></td>
          <td width="50%" valign="top" style="padding:0 0 20px 0;"><div style="font-family:monospace;font-size:11px;color:#a1a1a1;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Estimated Budget</div><div style="background:#1a1a1a;border-bottom:1px solid #333;padding:10px;font-size:14px;color:#fff;">${safe.budget}</div></td>
        </tr></table>
        <div style="font-family:monospace;font-size:11px;color:#a1a1a1;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Tell Me About It</div>
        <div style="background:#1a1a1a;border-bottom:1px solid #333;padding:10px;font-size:14px;line-height:1.5;color:#fff;">${safe.details}</div>
        <a href="${website}#contact" style="display:block;background:#c2ff3d;color:#000;text-align:center;padding:14px 0;font-family:monospace;font-weight:700;font-size:13px;text-decoration:none;border-radius:4px;margin-top:20px;">VIEW FULL REQUEST &amp; CONTACT ACDH ↗</a>
      </div>
      <p style="font-size:14px;line-height:1.6;color:#ccc;margin:0 0 40px;"><strong style="color:#fff;">Next Steps:</strong> Your inquiry has been received. Monica will review the details and reply within 24 hours to continue the conversation and schedule a short discovery call.</p>
      <div style="border-top:1px solid #222;padding-top:25px;text-align:center;">
        <div style="font-family:monospace;font-weight:900;font-size:18px;letter-spacing:-1px;color:#fff;margin-bottom:15px;"><span style="color:#c2ff3d;">A</span>CDH CREATIVES</div>
        <div style="margin-bottom:15px;"><a href="${website}#about" style="color:#a1a1a1;text-decoration:none;font-size:13px;margin:0 6px;">About</a><a href="${website}#services" style="color:#a1a1a1;text-decoration:none;font-size:13px;margin:0 6px;">Services</a><a href="${website}#work" style="color:#a1a1a1;text-decoration:none;font-size:13px;margin:0 6px;">Mockup Websites</a><a href="${website}#products" style="color:#a1a1a1;text-decoration:none;font-size:13px;margin:0 6px;">Digital Books</a><a href="${website}#contact" style="color:#a1a1a1;text-decoration:none;font-size:13px;margin:0 6px;">Contact</a></div>
        <p style="font-size:11px;color:#666;line-height:1.5;margin:0;">You received this email because you submitted an inquiry.<br>Add <a href="mailto:acdh.creatives@gmail.com" style="color:#888;">acdh.creatives@gmail.com</a> to your safe sender list.</p>
      </div>
    </div>
  </div>
</body></html>`
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, service, budget, details } = request.body || {}
  if (!name || !email || !service || !details) {
    return response.status(400).json({ error: 'Please complete all required fields.' })
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return response.status(500).json({ error: 'Email service is not configured yet.' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    const text = `Your project inquiry has been received by ACDH Creatives.\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget || 'Not specified'}\n\nProject details:\n${details}\n\nMonica will reply within 24 hours.\n${website}`
    await transporter.sendMail({
      from: `ACDH Creative <${process.env.GMAIL_USER}>`,
      to: recipient,
      cc: email,
      replyTo: email,
      subject: `Re: ${service} Inquiry Received - ACDH Creatives`,
      text,
      html: confirmationEmail({ name, email, service, budget, details }),
    })
    return response.status(200).json({ sent: true })
  } catch (error) {
    console.error('Book service email failed:', error)
    return response.status(500).json({ error: 'The inquiry could not be sent. Please try again.' })
  }
}