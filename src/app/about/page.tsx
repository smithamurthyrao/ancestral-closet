import Image from 'next/image'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export default function About() {
  return (
    <>
      <Nav />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '480px' }}>
        {/* Visual side */}
        <div style={{
          background: '#1a1410', display: 'flex', alignItems: 'center',
          justifyContent: 'center', padding: '60px 40px',
          borderRight: '0.5px solid rgba(201,151,58,0.2)',
        }}>
          <div style={{ textAlign: 'center' }}>
            <Image src="/logo.png" alt="Ancestral Closet" width={200} height={200}
              style={{ objectFit: 'contain', width: '180px', height: 'auto', margin: '0 auto 24px', display: 'block' }}
            />
            <p style={{ fontSize: '13px', color: 'rgba(245,230,200,0.3)', letterSpacing: '0.2em' }}>
              EST. 2025
            </p>
            <div style={{
              marginTop: '32px', fontFamily: "'Cormorant Garamond', serif",
              fontSize: '13px', color: '#C9973A', opacity: 0.65,
              fontStyle: 'italic', lineHeight: 2,
            }}>
              "Every saree is a<br />conversation across<br />generations."
            </div>
          </div>
        </div>

        {/* Text side */}
        <div style={{ background: '#FAF7F2', padding: '60px 48px' }}>
          <blockquote style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: '21px',
            fontWeight: 300, fontStyle: 'italic', color: '#1a1410',
            lineHeight: 1.55, marginBottom: '28px',
            borderLeft: '2px solid #C9973A', paddingLeft: '20px',
          }}>
            "I didn't set out to build a marketplace. I set out to make sure my grandmother's
            saree found someone who would love it as much as she did."
          </blockquote>

          <p style={{ fontSize: '13px', color: '#6B5C50', lineHeight: 1.9, marginBottom: '16px' }}>
            Ancestral Closet was born from a simple observation: the most precious sarees in South
            Asian households are often folded away — too beautiful to wear, too meaningful to sell,
            too heavy with memory to donate to a stranger.
          </p>
          <p style={{ fontSize: '13px', color: '#6B5C50', lineHeight: 1.9, marginBottom: '16px' }}>
            I spent thirty years in technology and product leadership, building platforms that
            connected people at scale. Then I turned that same lens to something closer to my heart:
            cultural heritage, sustainable fashion, and the stories woven into six yards of silk.
          </p>
          <p style={{ fontSize: '13px', color: '#6B5C50', lineHeight: 1.9 }}>
            This is my second mountain. And it starts with the question every South Asian family
            knows: <em style={{ color: '#8B1A1A', fontStyle: 'italic' }}>what do we do with her sarees?</em>
          </p>

          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: '19px',
            fontStyle: 'italic', color: '#C9973A', marginTop: '28px',
          }}>
            — Smitha Murthy, Founder
          </div>
        </div>
      </div>

      {/* Mission row */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px', background: 'rgba(201,151,58,0.15)',
        borderTop: '0.5px solid rgba(201,151,58,0.15)',
      }}>
        {[
          { title: 'Preserve', body: 'Every heirloom deserves careful documentation. We authenticate, restore, and record each piece\'s provenance.' },
          { title: 'Connect', body: 'We bridge generations — the grandmother who wore it, and the woman who will make it her own.' },
          { title: 'Sustain', body: 'Circular fashion at its most meaningful. We keep luxury textiles in use and support the communities who created them.' },
        ].map(item => (
          <div key={item.title} style={{ background: '#FAF7F2', padding: '36px 28px' }}>
            <h4 style={{
              fontFamily: "'Cinzel', serif", fontSize: '13px',
              letterSpacing: '0.22em', color: '#1a1410', marginBottom: '12px',
            }}>{item.title}</h4>
            <p style={{ fontSize: '12px', color: '#6B5C50', lineHeight: 1.75 }}>{item.body}</p>
          </div>
        ))}
      </div>

      <WaitlistForm />
    </>
  )
}
