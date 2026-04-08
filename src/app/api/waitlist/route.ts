import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
  const MAILCHIMP_DC = process.env.MAILCHIMP_DC

  const response = await fetch(
    `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: ['waitlist'],
      }),
    }
  )

  const data = await response.json()

  if (response.status === 200 || response.status === 204) {
    return NextResponse.json({ success: true })
  }

  if (data.title === 'Member Exists') {
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: data.detail || 'Something went wrong' }, { status: 500 })
}
