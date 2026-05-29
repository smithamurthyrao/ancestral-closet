import Image from 'next/image'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export default function About() {
  return (
    <>
      <Nav />
      <div className="split">
        <div style={{ background: '#1a1410', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(36px,6vw,60px) clamp(16px,5vw,48px)', borderRight: '0.5px solid rgba(201,151,58,0.2)' }}>
          <div style={{ textAlign: 'center' }}>
            <Image src="/logo.png" alt="Ancestral Closet" width={200} height={200}
              style={{ objectFit: 'contain', width: 'clamp(100px,18vw,180px)', height: 'auto', margin: '0 auto 24px', mixBlendMode: 'lighten' }} />
            <p style={{ fontSize: '10px', color: 'rgba(245,230,200,0.3)', letterSpacing: '0.2em' }}>EST. 2025</p>
            <div style={{ marginTop: '24px', fontFamily: "'Cormorant Garamond',serif", fontSize: '13px', color: '#C9973A', opacity: 0.65, fontStyle: 'italic', lineHeight: 2 }}>
              "Every saree is a<br />conversation across<br />generations."
            </div>
          </div>
        </div>
        <div style={{ background: '#FAF7F2', padding: 'clamp(36px,6vw,60px) clamp(16px,5vw,48px)' }}>
          <blockquote style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(15px,2.5vw,21px)', fontWeight: 300, fontStyle: 'italic', color: '#1a1410', lineHeight: 1.55, marginBottom: '24px', borderLeft: '2px solid #C9973A', paddingLeft: '18px' }}>
            "I didn't set out to build a marketplace. I set out to make sure my grandmother's saree found someone who would love it as much as she did."
          </blockquote>
          <p style={{ fontSize: 'clamp(13px,1.8vw,14px)', color: '#6B5C50', lineHeight: 1.9, marginBottom: '16px' }}>Ancestral Closet was born from a simple observation: the most precious sarees in South Asian households are often folded away — too beautiful to wear, too meaningful to sell, too heavy with memory to donate to a stranger.</p>
          <p style={{ fontSize: 'clamp(13px,1.8vw,14px)', color: '#6B5C50', lineHeight: 1.9, marginBottom: '16px' }}>I spent thirty years in technology and product leadership, building platforms that connected people at scale. Then I turned that same lens to something closer to my heart: cultural heritage, sustainable fashion, and the stories woven into six yards of silk.</p>
          <p style={{ fontSize: 'clamp(13px,1.8vw,14px)', color: '#6B5C50', lineHeight: 1.9 }}>This is my second mountain. And it starts with the question every South Asian family knows: <em style={{ color: '#8B1A1A' }}>what do we do with her sarees?</em></p>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(16px,2vw,19px)', fontStyle: 'italic', color: '#C9973A', marginTop: '24px' }}>— Smitha Murthy, Founder</div>
        </div>
      </div>
      <div className="grid-3">
        {[['Preserve',"Every heirloom deserves careful documentation. We authenticate, restore, and record each piece's provenance."],
          ['Connect','We bridge generations — the grandmother who wore it, and the woman who will make it her own.'],
          ['Sustain','Circular fashion at its most meaningful. We keep luxury textiles in use and support the communities who created them.']
        ].map(([title, body]) => (
          <div key={title} style={{ background: '#FAF7F2', padding: 'clamp(24px,4vw,36px) clamp(16px,4vw,28px)' }}>
            <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(10px,1.5vw,11px)', letterSpacing: '0.22em', color: '#1a1410', marginBottom: '12px' }}>{title}</h4>
            <p style={{ fontSize: 'clamp(12px,1.8vw,13px)', color: '#6B5C50', lineHeight: 1.75 }}>{body}</p>
          </div>
        ))}
      </div>
      <WaitlistForm />
    </>
  )
}
