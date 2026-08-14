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

      {/* HERO — dark */}
      <section style={{ background: '#1a1410', padding: 'clamp(48px,8vw,80px) clamp(16px,5vw,40px)', textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' as const }}>
        <p style={{ fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9973A', marginBottom: '20px', opacity: 0.85 }}>
          Give Your Saree a New Chapter
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,6vw,58px)', fontWeight: 300, color: '#F5E6C8', lineHeight: 1.1, marginBottom: '14px' }}>
          Consign <em style={{ fontStyle: 'italic', color: '#C9973A' }}>With Us</em>
        </h1>
        <div style={{ width: '48px', height: '0.5px', background: '#C9973A', margin: '22px auto' }} />
        <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#9B8C80', maxWidth: '560px', margin: '0 auto', lineHeight: 1.85 }}>
          Every saree in our collection has been personally authenticated by our founder. If you have a piece that deserves a new home, we would love to hear from you.
        </p>
      </section>

      {/* PROCESS — light, all dark ink for readability */}
      <section style={{ background: '#FAF7F2', padding: 'clamp(40px,6vw,64px) clamp(16px,5vw,40px)', width: '100%', boxSizing: 'border-box' as const }}>
        <p style={{ fontFamily: "'Cinzel',serif", fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#1a1410', marginBottom: '36px' }}>
          THE CONSIGNMENT PROCESS
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(201,151,58,0.2)' }}>
          {[
            { num: '01', title: 'Reach Out', desc: 'Fill in the form below with details about your piece. We respond to all enquiries within 48 hours.' },
            { num: '02', title: 'Authentication', desc: 'We meet at one of our consignor events or by appointment. Each piece is personally authenticated by Smitha Murthy.' },
            { num: '03', title: 'Listing', desc: 'Accepted pieces are photographed, described, and listed on Ancestral Closet with your approval before going live.' },
            { num: '04', title: 'Sale & Payment', desc: 'When your piece sells, you receive your share of the sale price within 14 days of confirmed payment.' },
          ].map(step => (
            <div key={step.num} style={{ background: '#FAF7F2', padding: 'clamp(28px,4vw,40px) clamp(20px,3vw,32px)' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '52px', fontWeight: 300, color: '#1a1410', opacity: 0.12, lineHeight: 1, marginBottom: '16px' }}>{step.num}</div>
              <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: '12px', letterSpacing: '0.2em', color: '#1a1410', marginBottom: '14px' }}>{step.title}</h3>
              <p style={{ fontSize: '15px', color: '#4A3F38', lineHeight: 1.85 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STANDARDS — dark, improved font sizes and contrast */}
      <section style={{ background: '#1a1410', padding: 'clamp(40px,6vw,64px) clamp(16px,5vw,40px)', width: '100%', boxSizing: 'border-box' as const }}>
        <p style={{ fontFamily: "'Cinzel',serif", fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9973A', marginBottom: '14px' }}>
          OUR STANDARD
        </p>
        <p style={{ fontSize: 'clamp(16px,2vw,18px)', color: '#D4C4B0', maxWidth: '680px', lineHeight: 1.85, marginBottom: '52px', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic' }}>
          Ancestral Closet accepts only pieces that meet our full quality threshold. Our promise to every buyer is absolute: what they receive is exactly as described, personally verified, and worthy of the Ancestral Closet name.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(40px,5vw,60px)' }}>

          {/* Non-negotiables */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,2.5vw,24px)', fontWeight: 300, color: '#F5E6C8', marginBottom: '8px' }}>
              Non-Negotiable Requirements
            </h3>
            <p style={{ fontSize: '14px', color: '#9B8C80', marginBottom: '20px', fontStyle: 'italic' }}>Every piece must clear all of the following to be considered:</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Pure silk only — no blended fabrics, no synthetic zari, no power loom construction',
                'Handwoven or handloom — machine-made pieces are not accepted regardless of price',
                'GI-tagged weave types only — Kanjivaram, Banarasi, Paithani, Mysore Silk, Pochampally / Ikat Silk, Uppada Silk, Sambalpuri Ikat, Patola',
                'No visible damage — no staining, tears, snags, missing border sections, or heavy zari tarnishing',
                'No repairs — however minor or invisible, previously repaired pieces are not accepted',
                'Dry cleaned and pressed — every piece must arrive dry cleaned, ironed, and photography-ready',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: '14px', fontSize: '15px', color: '#C8B89A', lineHeight: 1.75 }}>
                  <span style={{ color: '#C9973A', flexShrink: 0, marginTop: '2px' }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Condition grades */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,2.5vw,24px)', fontWeight: 300, color: '#F5E6C8', marginBottom: '24px' }}>
              Condition Grades
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { glyph: '✦', grade: 'Heirloom', worn: 'Unworn or worn fewer than a handful of times', price: 'Higher price point — investment or bridal tier' },
                { glyph: '◈', grade: 'Excellent', worn: 'Worn fewer than a handful of times', price: 'Accessible price point — curated everyday luxury' },
                { glyph: '◇', grade: 'Good', worn: 'Worn regularly over the years', price: 'Priced to reflect its journey' },
                { glyph: '◉', grade: 'Fair', worn: 'Well-worn with visible age patina', price: 'Entry price — beauty without premium' },
              ].map(item => (
                <div key={item.grade} style={{ borderLeft: '2px solid rgba(201,151,58,0.4)', paddingLeft: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span style={{ color: '#C9973A', fontSize: '16px' }}>{item.glyph}</span>
                    <span style={{ fontFamily: "'Cinzel',serif", fontSize: '12px', letterSpacing: '0.15em', color: '#C9973A' }}>{item.grade}</span>
                  </div>
                  <div style={{ fontSize: '15px', color: '#C8B89A', lineHeight: 1.7, marginBottom: '4px' }}>{item.worn}</div>
                  <div style={{ fontSize: '14px', color: '#9B8C80', fontStyle: 'italic', lineHeight: 1.6 }}>{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment — no percentages */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,2.5vw,24px)', fontWeight: 300, color: '#F5E6C8', marginBottom: '20px' }}>
              Our Commitment to You
            </h3>
            <p style={{ fontSize: '16px', color: '#D4C4B0', lineHeight: 1.9, marginBottom: '28px', fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic' }}>
              "We believe the woman who loved this saree first deserves to be honoured. Our consignment structure reflects that."
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {[
                'Your piece is listed with its full story and authenticated provenance',
                'You approve the listing before it goes live',
                'You receive the greater share of every sale',
                'Payment within 14 days of confirmed sale',

              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: '14px', fontSize: '15px', color: '#C8B89A', lineHeight: 1.75 }}>
                  <span style={{ color: '#C9973A', flexShrink: 0 }}>—</span>{item}
                </div>
              ))}
            </div>
            <div style={{ borderTop: '0.5px solid rgba(201,151,58,0.25)', paddingTop: '20px' }}>
              <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: '11px', letterSpacing: '0.2em', color: '#C9973A', marginBottom: '12px' }}>DISCLOSURE STANDARD</h4>
              <p style={{ fontSize: '15px', color: '#C8B89A', lineHeight: 1.8 }}>
                Staining not visible to the naked eye — identified only on close inspection — does not result in automatic decline. It will be disclosed transparently in the listing so buyers know exactly what they are receiving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM — light */}
      <section style={{ background: '#FAF7F2', padding: 'clamp(40px,6vw,64px) clamp(16px,5vw,40px)', width: '100%', boxSizing: 'border-box' as const }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#1a1410', marginBottom: '12px' }}>
            GET IN TOUCH
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(26px,4vw,38px)', fontWeight: 300, color: '#1a1410', marginBottom: '10px' }}>
            Tell Us About Your Piece
          </h2>
          <p style={{ fontSize: '16px', color: '#4A3F38', lineHeight: 1.85, marginBottom: '36px' }}>
            Share a few details about the saree you'd like to consign. We respond to all enquiries within 48 hours.
          </p>

          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '24px', fontStyle: 'italic', color: '#C9973A', marginBottom: '12px' }}>
                Thank you — we'll be in touch shortly. ✦
              </p>
              <p style={{ fontSize: '15px', color: '#6B5C50' }}>We respond to all consignment enquiries within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                  style={{ padding: '14px 16px', border: '0.5px solid rgba(201,151,58,0.35)', background: '#fff', fontSize: '15px', outline: 'none', fontFamily: "'Jost',sans-serif", color: '#1a1410' }} />
                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
                  style={{ padding: '14px 16px', border: '0.5px solid rgba(201,151,58,0.35)', background: '#fff', fontSize: '15px', outline: 'none', fontFamily: "'Jost',sans-serif", color: '#1a1410' }} />
              </div>
              <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone number (optional)"
                style={{ padding: '14px 16px', border: '0.5px solid rgba(201,151,58,0.35)', background: '#fff', fontSize: '15px', outline: 'none', fontFamily: "'Jost',sans-serif", color: '#1a1410' }} />
              <textarea required value={message} onChange={e => setMessage(e.target.value)} rows={5}
                placeholder="Tell us about your saree — the weave type, approximate age, how many times it has been worn, and any provenance or family history you know."
                style={{ padding: '14px 16px', border: '0.5px solid rgba(201,151,58,0.35)', background: '#fff', fontSize: '15px', outline: 'none', fontFamily: "'Jost',sans-serif", resize: 'vertical', color: '#1a1410' }} />
              {status === 'error' && (
                <p style={{ fontSize: '14px', color: '#8B1A1A' }}>Something went wrong. Please email us directly at ancestralcloset@gmail.com</p>
              )}
              <button type="submit" disabled={status === 'loading'}
                style={{ background: '#C9973A', color: '#1a1410', border: 'none', padding: '16px', fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
                {status === 'loading' ? 'Sending...' : 'Submit Consignment Enquiry'}
              </button>
              <p style={{ fontSize: '14px', color: '#6B5C50', textAlign: 'center', lineHeight: 1.7 }}>
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
