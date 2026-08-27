import nodemailer from 'nodemailer'

const recipient = 'acdh.creatives@gmail.com'

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
    await transporter.sendMail({
      from: `ACDH Creative <${process.env.GMAIL_USER}>`,
      to: recipient,
      cc: email,
      replyTo: email,
      subject: `New service inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget || 'Not specified'}\n\nProject details:\n${details}`,
    })
    return response.status(200).json({ sent: true })
  } catch (error) {
    console.error('Book service email failed:', error)
    return response.status(500).json({ error: 'The inquiry could not be sent. Please try again.' })
  }
}