import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO — dark */}
      <section style={{
        background: '#1a1410', padding: '80px 40px 72px',
        textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)',
      }}>
        <Image
          src="/logo.png"
          alt="Ancestral Closet"
          width={320}
          height={260}
          style={{ objectFit: 'contain', height: '220px', width: 'auto', margin: '0 auto 36px', display: 'block', mixBlendMode: 'lighten' }}
          priority
        />
        <p style={{
          fontSize: '12px', letterSpacing: '0.26em', textTransform: 'uppercase',
          color: '#C9973A', marginBottom: '22px', opacity: 0.85,
        }}>
          Curated · Authenticated · Cherished
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(38px, 6vw, 68px)',
          fontWeight: 300, color: '#F5E6C8', lineHeight: 1.1, marginBottom: '14px',
        }}>
          Where <em style={{ fontStyle: 'italic', color: '#C9973A' }}>Heritage</em><br />
          Finds Its Next Story
        </h1>
        <div style={{ width: '52px', height: '0.5px', background: '#C9973A', margin: '22px auto' }} />
        <p style={{
          fontSize: '16px', color: '#6B6560', maxWidth: '500px',
          margin: '0 auto 40px', lineHeight: 1.85, letterSpacing: '0.02em',
        }}>
          A curated marketplace for luxury and heirloom sarees — to buy, rent, or donate.
          Every piece carries a lineage. Every thread, a memory.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/shop">
            <button style={{
              background: '#C9973A', color: '#1a1410', border: 'none',
              fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '16px 36px', cursor: 'pointer',
            }}>
              Browse the Collection
            </button>
          </Link>
          <Link href="/how-it-works">
            <button style={{
              background: 'transparent', color: '#F5E6C8',
              border: '0.5px solid rgba(245,230,200,0.3)',
              fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '15px 36px', cursor: 'pointer',
            }}>
              How It Works
            </button>
          </Link>
        </div>
      </section>

      {/* THREE PILLARS — dark */}
      <section style={{ background: '#1a1410' }}>
        <p style={{
          fontSize: '12px', letterSpacing: '0.24em', textTransform: 'uppercase',
          color: '#C9973A', padding: '52px 40px 0', opacity: 0.7,
        }}>
          Three Ways to Participate
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'rgba(201,151,58,0.15)', marginTop: '24px',
        }}>
          {[
            { glyph: '◈', title: 'Buy', desc: 'Acquire an authenticated heirloom. Each saree is curated, condition-graded, and arrives with its provenance story.' },
            { glyph: '◇', title: 'Rent', desc: 'Wear a masterpiece for your occasion. Return it so another family can make their own memories.' },
            { glyph: '◉', title: 'Donate', desc: 'Give your saree a second life. We find it the right home, and your story continues.' },
          ].map(item => (
            <div key={item.title} style={{ background: '#1a1410', padding: '44px 32px', textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: '36px',
                color: '#C9973A', marginBottom: '16px',
              }}>{item.glyph}</div>
              <h3 style={{
                fontFamily: "'Cinzel', serif", fontSize: '13px',
                letterSpacing: '0.2em', color: '#F5E6C8', marginBottom: '14px',
              }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#6B6560', lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <WaitlistForm />
    </>
  )
}
