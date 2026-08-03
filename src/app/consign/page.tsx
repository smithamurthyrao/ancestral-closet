'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export default function Consign() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: `Phone: ${phone}\n\n${message}`, saree: 'Consignment Enquiry' }),
      })
      const data = await res.json()
      if (data.success) setStatus('success')
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1a1410', padding: 'clamp(48px,8vw,80px) clamp(16px,5vw,40px)', textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' as const }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9973A', marginBottom: '20px', opacity: 0.8 }}>
          Give Your Saree a New Chapter
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,6vw,58px)', fontWeight: 300, color: '#F5E6C8', lineHeight: 1.1, marginBottom: '14px' }}>
          Consign <em style={{ fontStyle: 'italic', color: '#C9973A' }}>With Us</em>
        </h1>
        <div style={{ width: '48px', height: '0.5px', background: '#C9973A', margin: '20px auto' }} />
        <p style={{ fontSize: 'clamp(14px,2vw,16px)', color: '#6B6560', maxWidth: '560px', margin: '0 auto', lineHeight: 1.85 }}>
          Every saree in our collection has been personally authenticated by our founder. If you have a piece that deserves a new home, we would love to hear from you.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#FAF7F2', padding: 'clamp(40px,6vw,64px) clamp(16px,5vw,40px)', width: '100%', boxSizing: 'border-box' as const }}>
        <p style={{ fontFamily: "'Cinzel',serif", fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9973A', marginBottom: '32px' }}>
          THE CONSIGNMENT PROCESS
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(201,151,58,0.15)' }}>
          {[
            { num: '01', title: 'Reach Out', desc: 'Fill in the form below with details about your piece. We respond to all enquiries within 48 hours.' },
            { num: '02', title: 'Authentication', desc: 'We meet at one of our consignor events or by appointment. Each piece is personally authenticated against our curation standards by Smitha Murthy.' },
            { num: '03', title: 'Listing', desc: 'Accepted pieces are photographed, described, and listed on Ancestral Closet with your approval before going live.' },
            { num: '04', title: 'Sale & Payment', desc: 'When your piece sells, you receive 70% of the sale price within 14 days of confirmed payment.' },
          ].map(step => (
            <div key={step.num} style={{ background: '#FAF7F2', padding: 'clamp(28px,4vw,40px) clamp(20px,3vw,32px)' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '48px', fontWeight: 300, color: '#C9973A', opacity: 0.2, lineHeight: 1, marginBottom: '16px' }}>{step.num}</div>
              <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: '11px', letterSpacing: '0.2em', color: '#1a1410', marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ fontSize: '13px', color: '#6B5C50', lineHeight: 1.8 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STANDARD */}
      <section style={{ background: '#1a1410', padding: 'clamp(40px,6vw,64px) clamp(16px,5vw,40px)', width: '100%', boxSizing: 'border-box' as const }}>
        <p style={{ fontFamily: "'Cinzel',serif", fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9973A', marginBottom: '12px' }}>
          OUR STANDARD
        </p>
        <p style={{ fontSize: 'clamp(14px,2vw,16px)', color: '#F5E6C8', maxWidth: '680px', lineHeight: 1.85, marginBottom: '48px', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic' }}>
          Ancestral Closet accepts only pieces that meet our full quality threshold. Our promise to every buyer is absolute: what they receive is exactly as described, personally verified, and worthy of the Ancestral Closet name.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px,5vw,56px)' }}>

          {/* Non-negotiables */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(18px,2.5vw,22px)', fontWeight: 300, color: '#F5E6C8', marginBottom: '20px' }}>
              Non-Negotiable Requirements
            </h3>
            <p style={{ fontSize: '12px', color: '#6B6560', marginBottom: '16px', fontStyle: 'italic' }}>Every piece must clear all of the following to be considered:</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Pure silk only — no blended fabrics, no synthetic zari, no power loom construction',
                'Handwoven or handloom — machine-made pieces are not accepted regardless of price',
                'GI-tagged weave types — Kanjivaram, Banarasi, Paithani, Chanderi, Mysore Silk, Pochampally',
                'No visible damage — no visible staining, tears, snags, missing border sections, or heavy zari tarnishing',
                'No repairs — however minor or invisible, previously repaired pieces are not accepted',
                'Dry cleaned and pressed — every piece must arrive dry cleaned, ironed, and photography-ready',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: '12px', fontSize: '13px', color: '#6B6560', lineHeight: 1.7 }}>
                  <span style={{ color: '#C9973A', flexShrink: 0 }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Condition grades */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(18px,2.5vw,22px)', fontWeight: 300, color: '#F5E6C8', marginBottom: '20px' }}>
              Condition Grades
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { glyph: '✦', grade: 'Heirloom', worn: 'Unworn or worn fewer than a handful of times', price: 'Higher price point — investment or bridal tier' },
                { glyph: '◈', grade: 'Excellent', worn: 'Worn fewer than a handful of times', price: 'Accessible price point — curated everyday luxury' },
                { glyph: '◇', grade: 'Good', worn: 'Worn regularly over the years', price: 'Priced to reflect its journey' },
                { glyph: '◉', grade: 'Fair', worn: 'Well-worn with visible age patina', price: 'Entry price — beauty without premium' },
              ].map(item => (
                <div key={item.grade} style={{ borderLeft: '2px solid rgba(201,151,58,0.3)', paddingLeft: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ color: '#C9973A', fontSize: '14px' }}>{item.glyph}</span>
                    <span style={{ fontFamily: "'Cinzel',serif", fontSize: '11px', letterSpacing: '0.15em', color: '#C9973A' }}>{item.grade}</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6B6560', lineHeight: 1.6, marginBottom: '2px' }}>{item.worn}</div>
                  <div style={{ fontSize: '12px', color: '#8B7355', fontStyle: 'italic', lineHeight: 1.6 }}>{item.price}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', background: 'rgba(201,151,58,0.08)', border: '0.5px solid rgba(201,151,58,0.25)', padding: '16px' }}>
              <p style={{ fontSize: '12px', color: '#C9973A', lineHeight: 1.7, fontStyle: 'italic' }}>
                <strong>Heirloom Note:</strong> A piece may be elevated to Heirloom grade when it carries documented provenance — a landmark occasion, a family story, or photographic history — regardless of its retail price point. The story is part of what makes it precious.
              </p>
            </div>
          </div>

          {/* Commission */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(18px,2.5vw,22px)', fontWeight: 300, color: '#F5E6C8', marginBottom: '20px' }}>
              Commission
            </h3>
            <div style={{ background: 'rgba(201,151,58,0.08)', border: '0.5px solid rgba(201,151,58,0.25)', padding: '28px', marginBottom: '16px', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '64px', color: '#C9973A', lineHeight: 1 }}>70%</div>
              <div style={{ fontSize: '13px', color: '#F5E6C8', marginTop: '8px', letterSpacing: '0.1em' }}>TO YOU</div>
              <div style={{ fontSize: '12px', color: '#6B6560', marginTop: '12px', lineHeight: 1.7 }}>Paid within 14 days of confirmed sale.</div>
            </div>
            <p style={{ fontSize: '12px', color: '#6B6560', lineHeight: 1.7, fontStyle: 'italic' }}>
              Ancestral Closet retains 30% to cover authentication, listing, photography, and platform costs.
            </p>

            <div style={{ marginTop: '24px', borderTop: '0.5px solid rgba(201,151,58,0.2)', paddingTop: '20px' }}>
              <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: '10px', letterSpacing: '0.2em', color: '#C9973A', marginBottom: '12px' }}>DISCLOSURE STANDARD</h4>
              <p style={{ fontSize: '12px', color: '#6B6560', lineHeight: 1.7 }}>
                Staining not visible to the naked eye — identified only on close inspection — does not result in automatic decline. It will be disclosed transparently in the listing so buyers know exactly what they're receiving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section style={{ background: '#FAF7F2', padding: 'clamp(40px,6vw,64px) clamp(16px,5vw,40px)', width: '100%', boxSizing: 'border-box' as const }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9973A', marginBottom: '12px' }}>
            GET IN TOUCH
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(24px,4vw,36px)', fontWeight: 300, color: '#1a1410', marginBottom: '8px' }}>
            Tell Us About Your Piece
          </h2>
          <p style={{ fontSize: '14px', color: '#6B5C50', lineHeight: 1.8, marginBottom: '36px' }}>
            Share a few details about the saree you'd like to consign. We respond to all enquiries within 48 hours.
          </p>

          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontStyle: 'italic', color: '#C9973A', marginBottom: '12px' }}>
                Thank you — we'll be in touch shortly. ✦
              </p>
              <p style={{ fontSize: '13px', color: '#6B5C50' }}>We respond to all consignment enquiries within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                  style={{ padding: '13px 16px', border: '0.5px solid rgba(201,151,58,0.3)', background: '#fff', fontSize: '14px', outline: 'none', fontFamily: "'Jost',sans-serif" }} />
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
                  style={{ padding: '13px 16px', border: '0.5px solid rgba(201,151,58,0.3)', background: '#fff', fontSize: '14px', outline: 'none', fontFamily: "'Jost',sans-serif" }} />
              </div>
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone number (optional)"
                style={{ padding: '13px 16px', border: '0.5px solid rgba(201,151,58,0.3)', background: '#fff', fontSize: '14px', outline: 'none', fontFamily: "'Jost',sans-serif" }} />
              <textarea required value={message} onChange={e => setMessage(e.target.value)} rows={5}
                placeholder="Tell us about your saree — the weave type, approximate age, how many times it has been worn, and any provenance or family history you know."
                style={{ padding: '13px 16px', border: '0.5px solid rgba(201,151,58,0.3)', background: '#fff', fontSize: '14px', outline: 'none', fontFamily: "'Jost',sans-serif", resize: 'vertical' }} />
              {status === 'error' && (
                <p style={{ fontSize: '13px', color: '#8B1A1A' }}>Something went wrong. Please email us directly at ancestralcloset@gmail.com</p>
              )}
              <button type="submit" disabled={status === 'loading'}
                style={{ background: '#C9973A', color: '#1a1410', border: 'none', padding: '16px', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
                {status === 'loading' ? 'Sending...' : 'Submit Consignment Enquiry'}
              </button>
              <p style={{ fontSize: '12px', color: '#8B7355', textAlign: 'center', lineHeight: 1.7 }}>
                Or email us directly at <a href="mailto:ancestralcloset@gmail.com" style={{ color: '#C9973A' }}>ancestralcloset@gmail.com</a>
              </p>
            </form>
          )}
        </div>
      </section>

      <WaitlistForm />
    </>
  )
}
