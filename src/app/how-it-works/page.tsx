import Nav from '@/components/Nav'
import Link from 'next/link'
import WaitlistForm from '@/components/WaitlistForm'

const tracks = [
  {
    num: '01', name: 'Buy',
    steps: [
      'Browse our authenticated collection',
      "Read each saree's full description and provenance story",
      'Condition grading: Heirloom, Excellent, Good, Fair',
      'Secure purchase with white-glove delivery',
      'Certificate of authenticity included',
    ],
    cta: 'Browse Collection', href: '/shop',
  },
  {
    num: '02', name: 'Consign',
    steps: [
      'Reach out with details about your piece',
      'We authenticate personally at a consignor event or by appointment',
      'Accepted pieces are listed with full description and photos',
      'You receive your share of the sale price within 14 days of confirmed sale',
      'If your piece does not sell, it is returned to you',
    ],
    cta: 'Start Consigning', href: '/consign',
  },
]

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <div style={{ background: '#1a1410', padding: 'clamp(36px,7vw,60px) clamp(16px,5vw,40px)', textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' as const }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,6vw,52px)', fontWeight: 300, color: '#F5E6C8' }}>
          How <em style={{ fontStyle: 'italic', color: '#C9973A' }}>It Works</em>
        </h1>
        <p style={{ fontSize: '15px', color: '#9B8C80', marginTop: '14px' }}>Two ways to be part of the circle of heritage</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1px', background: 'rgba(201,151,58,0.15)' }}>
        {tracks.map(track => (
          <div key={track.num} style={{ background: '#1a1410', padding: 'clamp(32px,5vw,52px) clamp(20px,4vw,40px)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(36px,5vw,56px)', fontWeight: 300, color: '#C9973A', opacity: 0.25, lineHeight: 1, marginBottom: '20px' }}>{track.num}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(13px,1.8vw,15px)', letterSpacing: '0.2em', color: '#F5E6C8', marginBottom: '24px' }}>{track.name}</div>
            <ul style={{ listStyle: 'none' }}>
              {track.steps.map(step => (
                <li key={step} style={{ fontSize: '15px', color: '#9B8C80', lineHeight: 1.8, padding: '10px 0', borderBottom: '0.5px solid rgba(201,151,58,0.12)', display: 'flex', gap: '12px' }}>
                  <span style={{ color: '#C9973A', opacity: 0.6, flexShrink: 0 }}>—</span>{step}
                </li>
              ))}
            </ul>
            <Link href={track.href}>
              <span style={{ display: 'inline-block', marginTop: '28px', fontSize: '13px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C9973A', borderBottom: '0.5px solid #C9973A', paddingBottom: '3px' }}>
                {track.cta} →
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '1px', background: 'rgba(201,151,58,0.15)', borderTop: '0.5px solid rgba(201,151,58,0.15)' }}>
        {[['100%','Authenticated'],['48hr','Response Time'],['Expert','Curation'],['Personal','Authentication']].map(([num, label]) => (
          <div key={label} style={{ background: '#1a1410', padding: 'clamp(24px,3vw,36px) 16px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(22px,3vw,32px)', color: '#C9973A' }}>{num}</div>
            <div style={{ fontSize: '13px', color: '#9B8C80', letterSpacing: '0.1em', marginTop: '6px' }}>{label}</div>
          </div>
        ))}
      </div>
      <WaitlistForm />
    </>
  )
}
