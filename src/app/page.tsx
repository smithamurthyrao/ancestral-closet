import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <>
      <Nav />
      <section style={{ background: '#1a1410', padding: 'clamp(48px,8vw,80px) clamp(16px,5vw,40px)', textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' as const }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: 'clamp(20px,4vw,36px)' }}>
          <Image src="/logo.png" alt="Ancestral Closet" width={320} height={260} priority
            style={{ height: 'clamp(110px,18vw,220px)', width: 'auto', objectFit: 'contain', mixBlendMode: 'lighten' }} />
        </div>
        <p style={{ fontSize: '13px', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#C9973A', marginBottom: '20px', opacity: 0.85 }}>
          Curated · Authenticated · Cherished
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,6vw,68px)', fontWeight: 300, color: '#F5E6C8', lineHeight: 1.1, marginBottom: '16px' }}>
          Where <em style={{ fontStyle: 'italic', color: '#C9973A' }}>Heritage</em><br />Finds Its Next Story
        </h1>
        <div style={{ width: '48px', height: '0.5px', background: '#C9973A', margin: '22px auto' }} />
        <p style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#9B8C80', maxWidth: '520px', margin: '0 auto clamp(28px,5vw,40px)', lineHeight: 1.85 }}>
          A curated marketplace for luxury and heirloom sarees — to buy or consign. Every piece carries a lineage. Every thread, a memory.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/shop">
            <button style={{ background: '#C9973A', color: '#1a1410', border: 'none', fontSize: 'clamp(12px,1.5vw,14px)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: 'clamp(13px,2vw,17px) clamp(24px,4vw,40px)', cursor: 'pointer' }}>
              Browse the Collection
            </button>
          </Link>
          <Link href="/how-it-works">
            <button style={{ background: 'transparent', color: '#F5E6C8', border: '0.5px solid rgba(245,230,200,0.4)', fontSize: 'clamp(12px,1.5vw,14px)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: 'clamp(12px,2vw,16px) clamp(24px,4vw,40px)', cursor: 'pointer' }}>
              How It Works
            </button>
          </Link>
        </div>
      </section>

      <section style={{ background: '#1a1410', width: '100%', boxSizing: 'border-box' as const }}>
        <p style={{ fontSize: '13px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#C9973A', padding: 'clamp(32px,6vw,52px) clamp(16px,5vw,40px) 0', opacity: 0.8 }}>
          Two Ways to Participate
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: '1px', background: 'rgba(201,151,58,0.15)', marginTop: '20px' }}>
          {[
            { glyph: '◈', title: 'Buy', desc: 'Acquire an authenticated heirloom. Each saree is curated, condition-graded, and arrives with its provenance story.', href: '/shop', cta: 'Browse the Collection' },
            { glyph: '◉', title: 'Consign', desc: 'Have a beautiful saree that deserves a new home? We authenticate, list, and sell it on your behalf. You receive the greater share of the sale price.', href: '/consign', cta: 'Learn About Consigning' },
          ].map(item => (
            <div key={item.title} style={{ background: '#1a1410', padding: 'clamp(32px,5vw,48px) clamp(20px,4vw,36px)', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,40px)', color: '#C9973A', marginBottom: '16px' }}>{item.glyph}</div>
              <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(12px,1.8vw,14px)', letterSpacing: '0.2em', color: '#F5E6C8', marginBottom: '14px' }}>{item.title}</h3>
              <p style={{ fontSize: 'clamp(14px,1.8vw,15px)', color: '#9B8C80', lineHeight: 1.85, marginBottom: '24px' }}>{item.desc}</p>
              <Link href={item.href}>
                <span style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9973A', borderBottom: '0.5px solid #C9973A', paddingBottom: '3px' }}>{item.cta} →</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <WaitlistForm />
    </>
  )
}
