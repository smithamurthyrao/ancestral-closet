import Nav from '@/components/Nav'
import Link from 'next/link'
import WaitlistForm from '@/components/WaitlistForm'

const tracks = [
  {
    num: '01', name: 'Buy',
    steps: [
      'Browse our authenticated collection',
      'Read each saree\'s provenance story',
      'Condition grading: Heirloom, Excellent, Good',
      'Secure purchase with white-glove delivery',
      'Certificate of authenticity included',
    ],
    cta: 'Browse Collection', href: '/shop',
  },
  {
    num: '02', name: 'Rent',
    steps: [
      'Choose your occasion and dates',
      'Select from rental-eligible pieces',
      'Receive via insured, tracked shipping',
      'Wear, cherish, return',
      'We handle professional restoration',
    ],
    cta: 'View Rentals', href: '/shop',
  },
  {
    num: '03', name: 'Donate',
    steps: [
      'Submit your saree for consideration',
      'Our curators review and authenticate',
      'We find the right new home',
      'You receive the story of where it went',
      'Tax documentation provided',
    ],
    cta: 'Start a Donation', href: '/#waitlist',
  },
]

const trust = [
  { num: '100%', label: 'Authenticated' },
  { num: '48hr', label: 'Response Time' },
  { num: 'Insured', label: 'Every Shipment' },
  { num: 'Expert', label: 'Curation' },
]

export default function HowItWorks() {
  return (
    <>
      <Nav />

      {/* HEADER — dark */}
      <div style={{
        background: '#1a1410', padding: '60px 40px 48px',
        textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)',
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '52px',
          fontWeight: 300, color: '#F5E6C8',
        }}>
          How <em style={{ fontStyle: 'italic', color: '#C9973A' }}>It Works</em>
        </h1>
        <p style={{ fontSize: '14px', color: '#6B6560', marginTop: '14px', letterSpacing: '0.05em' }}>
          Three ways to be part of the circle of heritage
        </p>
      </div>

      {/* TRACKS — dark */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px', background: 'rgba(201,151,58,0.15)',
      }}>
        {tracks.map(track => (
          <div key={track.num} style={{ background: '#1a1410', padding: '48px 36px' }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: '52px',
              fontWeight: 300, color: '#C9973A', opacity: 0.2,
              lineHeight: 1, marginBottom: '20px',
            }}>
              {track.num}
            </div>
            <div style={{
              fontFamily: "'Cinzel', serif", fontSize: '13px',
              letterSpacing: '0.22em', color: '#F5E6C8', marginBottom: '22px',
            }}>
              {track.name}
            </div>
            <ul style={{ listStyle: 'none' }}>
              {track.steps.map(step => (
                <li key={step} style={{
                  fontSize: '14px', color: '#6B6560', lineHeight: 1.75,
                  padding: '9px 0', borderBottom: '0.5px solid rgba(201,151,58,0.1)',
                  display: 'flex', gap: '12px',
                }}>
                  <span style={{ color: '#C9973A', opacity: 0.5, flexShrink: 0 }}>—</span>
                  {step}
                </li>
              ))}
            </ul>
            <Link href={track.href}>
              <span style={{
                display: 'inline-block', marginTop: '28px',
                fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#C9973A', borderBottom: '0.5px solid #C9973A', paddingBottom: '2px',
              }}>
                {track.cta} →
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* TRUST ROW — dark */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px', background: 'rgba(201,151,58,0.15)',
        borderTop: '0.5px solid rgba(201,151,58,0.15)',
      }}>
        {trust.map(item => (
          <div key={item.label} style={{
            background: '#1a1410', padding: '32px 16px', textAlign: 'center',
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '30px', color: '#C9973A',
            }}>{item.num}</div>
            <div style={{
              fontSize: '12px', color: '#6B6560',
              letterSpacing: '0.12em', marginTop: '6px',
            }}>{item.label}</div>
          </div>
        ))}
      </div>

      <WaitlistForm />
    </>
  )
}
