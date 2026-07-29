'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const client = projectId ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true }) : null
const builder = client ? imageUrlBuilder(client) : null
function urlFor(source: any) { return builder!.image(source) }

const badgeStyles: Record<string, { bg: string; color: string; border?: string }> = {
  buy:  { bg: 'rgba(139,26,26,0.85)', color: '#F5C4C4' },
  rent: { bg: 'rgba(45,107,60,0.85)',  color: '#C0DD97' },
  both: { bg: 'rgba(26,20,16,0.85)',   color: '#C9973A', border: '0.5px solid rgba(201,151,58,0.6)' },
}
const badgeLabel: Record<string, string> = { buy: 'Buy Only', rent: 'Rent Only', both: 'Buy or Rent' }
const conditionLabel: Record<string, string> = { heirloom: 'Heirloom', excellent: 'Excellent', good: 'Good', fair: 'Fair' }

function EnquiryModal({ saree, onClose }: { saree: any; onClose: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, saree: saree.name }),
      })
      const data = await res.json()
      if (data.success) setStatus('success')
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(26,20,16,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
      onClick={onClose}>
      <div style={{ background: '#FAF7F2', maxWidth: '480px', width: '100%', padding: '36px', position: 'relative' }}
        onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={{ position: 'absolute', top: '16px', right: '20px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#6B5C50' }}>✕</button>
        <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 300, color: '#1a1410', marginBottom: '6px' }}>Enquire About This Piece</h3>
        <p style={{ fontSize: '13px', color: '#8B7355', marginBottom: '24px', fontStyle: 'italic' }}>{saree.name}</p>
        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontStyle: 'italic', color: '#C9973A' }}>Thank you! We'll be in touch shortly. ✦</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <input required value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
              style={{ padding: '11px 14px', border: '0.5px solid rgba(201,151,58,0.3)', background: '#fff', fontSize: '14px', outline: 'none', fontFamily: "'Jost',sans-serif" }} />
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email"
              style={{ padding: '11px 14px', border: '0.5px solid rgba(201,151,58,0.3)', background: '#fff', fontSize: '14px', outline: 'none', fontFamily: "'Jost',sans-serif" }} />
            <textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message — feel free to ask about the saree's history, condition, or pricing."
              rows={4} style={{ padding: '11px 14px', border: '0.5px solid rgba(201,151,58,0.3)', background: '#fff', fontSize: '14px', outline: 'none', fontFamily: "'Jost',sans-serif", resize: 'vertical' }} />
            {status === 'error' && <p style={{ fontSize: '13px', color: '#8B1A1A' }}>Something went wrong. Please try again.</p>}
            <button type="submit" disabled={status === 'loading'}
              style={{ background: '#C9973A', color: '#1a1410', border: 'none', padding: '13px', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1 }}>
              {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function SareeDetail() {
  const params = useParams()
  const router = useRouter()
  const [saree, setSaree] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeImg, setActiveImg] = useState(0)
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  useEffect(() => {
    if (!client || !params.slug) return
    client.fetch(`*[_type == "saree" && slug.current == $slug][0] {
      _id, name, slug, type, origin, listingType, condition,
      buyPrice, rentPrice, images, description, provenanceStory,
      colors, featured
    }`, { slug: params.slug }).then((data: any) => {
      setSaree(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [params.slug])

  if (loading) return (
    <>
      <Nav />
      <div style={{ padding: '80px 40px', textAlign: 'center', fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontStyle: 'italic', color: '#8B7355' }}>
        Loading...
      </div>
    </>
  )

  if (!saree) return (
    <>
      <Nav />
      <div style={{ padding: '80px 40px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', color: '#8B7355' }}>Piece not found.</p>
        <button onClick={() => router.push('/shop')} style={{ marginTop: '24px', background: '#C9973A', color: '#1a1410', border: 'none', padding: '12px 28px', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer' }}>
          Back to Collection
        </button>
      </div>
    </>
  )

  const images = saree.images || []
  const badge = badgeStyles[saree.listingType] || badgeStyles.both

  return (
    <>
      <Nav />

      {/* Breadcrumb */}
      <div style={{ background: '#FAF7F2', padding: '14px clamp(16px,5vw,40px)', borderBottom: '0.5px solid rgba(201,151,58,0.12)' }}>
        <span onClick={() => router.push('/shop')} style={{ fontSize: '12px', color: '#8B7355', letterSpacing: '0.1em', cursor: 'pointer', textTransform: 'uppercase' }}>
          ← The Collection
        </span>
      </div>

      <div style={{ background: '#FAF7F2', padding: 'clamp(24px,4vw,48px) clamp(16px,5vw,40px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(24px,4vw,48px)', maxWidth: '1200px', margin: '0 auto' }}>

          {/* LEFT — Images */}
          <div>
            {/* Main image */}
            <div style={{ position: 'relative', aspectRatio: '4/3', background: '#EDE0D0', overflow: 'hidden', marginBottom: '8px' }}>
              <span style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', background: badge.bg, color: badge.color, border: badge.border || 'none' }}>
                {badgeLabel[saree.listingType]}
              </span>
              {images[activeImg] && (
                <Image src={urlFor(images[activeImg]).width(900).height(675).fit('max').url()} alt={images[activeImg].alt || saree.name} fill style={{ objectFit: 'cover' }} />
              )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {images.map((img: any, i: number) => (
                  <div key={i} onClick={() => setActiveImg(i)}
                    style={{ width: 'clamp(52px,8vw,72px)', aspectRatio: '1', position: 'relative', cursor: 'pointer', border: `2px solid ${i === activeImg ? '#C9973A' : 'transparent'}`, opacity: i === activeImg ? 1 : 0.65, transition: 'all 0.2s' }}>
                    <Image src={urlFor(img).width(144).height(144).fit('crop').url()} alt={img.alt || saree.name} fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(24px,4vw,36px)', fontWeight: 300, color: '#1a1410', lineHeight: 1.2, marginBottom: '8px' }}>
                {saree.name}
              </h1>
              <p style={{ fontSize: '12px', color: '#8B7355', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{saree.origin}</p>
            </div>

            {/* Condition + Colors */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {saree.condition && (
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#C9973A', border: '0.5px solid rgba(201,151,58,0.4)', padding: '4px 12px' }}>
                  {conditionLabel[saree.condition]}
                </span>
              )}
              {saree.colors?.map((c: string) => (
                <span key={c} style={{ fontSize: '11px', letterSpacing: '0.08em', color: '#8B7355', border: '0.5px solid rgba(201,151,58,0.2)', padding: '4px 12px' }}>{c}</span>
              ))}
            </div>

            {/* Pricing */}
            <div style={{ borderTop: '0.5px solid rgba(201,151,58,0.15)', borderBottom: '0.5px solid rgba(201,151,58,0.15)', padding: '16px 0' }}>
              {saree.buyPrice && (
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(22px,3vw,28px)', color: '#C9973A' }}>
                  ${saree.buyPrice.toLocaleString()}
                </div>
              )}
              {saree.rentPrice && (
                <div style={{ fontSize: '13px', color: '#8B7355', marginTop: '4px' }}>
                  Rent from ${saree.rentPrice} / 3 days
                </div>
              )}
              {!saree.buyPrice && !saree.rentPrice && (
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '18px', fontStyle: 'italic', color: '#8B7355' }}>Pricing on request</div>
              )}
            </div>

            {/* Description */}
            {saree.description && (
              <div>
                <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: '10px', letterSpacing: '0.2em', color: '#1a1410', marginBottom: '10px' }}>ABOUT THIS PIECE</h3>
                <p style={{ fontSize: '14px', color: '#6B5C50', lineHeight: 1.9 }}>{saree.description}</p>
              </div>
            )}

            {/* Provenance Story */}
            {saree.provenanceStory && (
              <div style={{ background: '#1a1410', padding: '24px', borderLeft: '2px solid #C9973A' }}>
                <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: '10px', letterSpacing: '0.2em', color: '#C9973A', marginBottom: '12px' }}>PROVENANCE</h3>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '16px', fontStyle: 'italic', color: '#F5E6C8', lineHeight: 1.9 }}>{saree.provenanceStory}</p>
              </div>
            )}

            {/* Enquire button */}
            <button onClick={() => setEnquiryOpen(true)}
              style={{ background: '#C9973A', color: '#1a1410', border: 'none', padding: '16px', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer', marginTop: '8px' }}>
              Enquire About This Piece
            </button>

            <p style={{ fontSize: '12px', color: '#8B7355', lineHeight: 1.7, fontStyle: 'italic' }}>
              Every piece is personally authenticated by Smitha Murthy. We respond to all enquiries within 48 hours.
            </p>
          </div>
        </div>
      </div>

      <WaitlistForm />
      {enquiryOpen && <EnquiryModal saree={saree} onClose={() => setEnquiryOpen(false)} />}
    </>
  )
}
