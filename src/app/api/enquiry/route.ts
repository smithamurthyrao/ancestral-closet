import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, message, saree } = await request.json()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY

  if (!RESEND_API_KEY) {
    // Fallback: just return success (email not configured yet)
    console.log('Enquiry received:', { name, email, message, saree })
    return NextResponse.json({ success: true })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Ancestral Closet <onboarding@resend.dev>',
      to: ['ancestralcloset@gmail.com'],
      reply_to: email,
      subject: `Enquiry about: ${saree}`,
      html: `
        <h2>New Enquiry — Ancestral Closet</h2>
        <p><strong>Saree:</strong> ${saree}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }),
  })

  if (res.ok) return NextResponse.json({ success: true })
  return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
}
