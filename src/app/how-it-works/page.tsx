import Nav from '@/components/Nav'
import Link from 'next/link'
import WaitlistForm from '@/components/WaitlistForm'

const tracks = [
  { num: '01', name: 'Buy', steps: ['Browse our authenticated collection', "Read each saree's provenance story", 'Condition grading: Heirloom, Excellent, Good, Fair', 'Secure purchase with white-glove delivery', 'Certificate of authenticity included'], cta: 'Browse Collection', href: '/shop' },
  { num: '02', name: 'Rent', steps: ['Choose your occasion and dates', 'Select from rental-eligible pieces', 'Receive via insured, tracked shipping', 'Wear, cherish, return', 'We handle professional restoration'], cta: 'View Rentals', href: '/shop' },
  { num: '03', name: 'Donate', steps: ['Submit your saree for consideration', 'Our curators review and authenticate', 'We find the right new home', 'You receive the story of where it went', 'Tax documentation provided'], cta: 'Start a Donation', href: '/#waitlist' },
]

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <div style={{ background: '#1a1410', padding: 'clamp(36px,7vw,60px) clamp(16px,5vw,40px)', textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,6vw,52px)', fontWeight: 300, color: '#F5E6C8' }}>How <em style={{ fontStyle: 'italic', color: '#C9973A' }}>It Works</em></h1>
        <p style={{ fontSize: 'clamp(13px,2vw,14px)', color: '#6B6560', marginTop: '12px' }}>Three ways to be part of the circle of heritage</p>
      </div>
      <div className="grid-3">
        {tracks.map(track => (
          <div key={track.num} style={{ background: '#1a1410', padding: 'clamp(28px,5vw,48px) clamp(16px,4vw,36px)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,5vw,52px)', fontWeight: 300, color: '#C9973A', opacity: 0.2, lineHeight: 1, marginBottom: '16px' }}>{track.num}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(11px,1.5vw,13px)', letterSpacing: '0.22em', color: '#F5E6C8', marginBottom: '20px' }}>{track.name}</div>
            <ul style={{ listStyle: 'none' }}>
              {track.steps.map(step => (
                <li key={step} style={{ fontSize: 'clamp(13px,1.8vw,14px)', color: '#6B6560', lineHeight: 1.75, padding: '8px 0', borderBottom: '0.5px solid rgba(201,151,58,0.1)', display: 'flex', gap: '10px' }}>
                  <span style={{ color: '#C9973A', opacity: 0.5, flexShrink: 0 }}>—</span>{step}
                </li>
              ))}
            </ul>
            <Link href={track.href}><span style={{ display: 'inline-block', marginTop: '24px', fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C9973A', borderBottom: '0.5px solid #C9973A', paddingBottom: '2px' }}>{track.cta} →</span></Link>
          </div>
        ))}
      </div>
      <div className="grid-4">
        {[['100%','Authenticated'],['48hr','Response Time'],['Insured','Every Shipment'],['Expert','Curation']].map(([num, label]) => (
          <div key={label} style={{ background: '#1a1410', padding: 'clamp(20px,3vw,32px) 16px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,3vw,30px)', color: '#C9973A' }}>{num}</div>
            <div style={{ fontSize: 'clamp(10px,1.5vw,12px)', color: '#6B6560', letterSpacing: '0.1em', marginTop: '4px' }}>{label}</div>
          </div>
        ))}
      </div>
      <WaitlistForm />
    </>
  )
}
