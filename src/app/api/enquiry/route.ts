import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, message, saree } = await request.json()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY

  if (!RESEND_API_KEY) {
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
      subject: `New Enquiry: ${saree}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1a1410;">
          <h2 style="color: #C9973A; font-weight: normal; letter-spacing: 0.1em; border-bottom: 1px solid #C9973A; padding-bottom: 12px;">
            New Enquiry — Ancestral Closet
          </h2>
          <p style="margin: 20px 0 4px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #8B7355;">Saree</p>
          <p style="font-size: 18px; font-style: italic; color: #1a1410;">${saree}</p>
          <p style="margin: 20px 0 4px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #8B7355;">From</p>
          <p style="font-size: 16px;">${name}</p>
          <p style="font-size: 14px; color: #8B7355;">${email}</p>
          <p style="margin: 20px 0 4px; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #8B7355;">Message</p>
          <p style="font-size: 15px; line-height: 1.8; background: #FAF7F2; padding: 16px; border-left: 3px solid #C9973A;">${message}</p>
          <p style="margin-top: 32px; font-size: 12px; color: #8B7355; border-top: 1px solid #EDE0D0; padding-top: 16px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    }),
  })

  if (res.ok) return NextResponse.json({ success: true })
  const err = await res.json()
  console.error('Resend error:', err)
  return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
}
