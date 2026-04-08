'use client'
import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" style={{
      background: '#1a1410', padding: '64px 40px', textAlign: 'center',
    }}>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: '32px',
        fontWeight: 300, color: '#F5E6C8', marginBottom: '10px',
      }}>
        Be the First to Know
      </h2>
      <p style={{ fontSize: '14px', color: '#6B6560', marginBottom: '28px', lineHeight: 1.7 }}>
        New arrivals, rare finds, and stories from the loom — delivered to you.
      </p>

      {status === 'success' ? (
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '20px',
          fontStyle: 'italic', color: '#C9973A',
        }}>
          You're on the list. We'll be in touch. ✦
        </p>
      ) : (
        <>
          <form onSubmit={handleSubmit} style={{ display: 'flex', maxWidth: '400px', margin: '0 auto' }}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === 'loading'}
              style={{
                flex: 1, background: 'rgba(255,255,255,0.06)',
                border: '0.5px solid rgba(201,151,58,0.3)', borderRight: 'none',
                color: '#F5E6C8', padding: '12px 16px', fontSize: '14px', outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: '#C9973A', color: '#1a1410', border: 'none',
                padding: '12px 24px', fontSize: '13px', letterSpacing: '0.12em',
                textTransform: 'uppercase', cursor: status === 'loading' ? 'wait' : 'pointer',
                opacity: status === 'loading' ? 0.7 : 1,
              }}
            >
              {status === 'loading' ? '...' : 'Join'}
            </button>
          </form>
          {status === 'error' && (
            <p style={{ fontSize: '13px', color: '#E8A0A0', marginTop: '12px' }}>
              {errorMsg}
            </p>
          )}
        </>
      )}
    </section>
  )
}
