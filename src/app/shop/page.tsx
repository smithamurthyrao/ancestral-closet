import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'
import { getSarees, urlFor } from '@/../../sanity/lib/client'
import Image from 'next/image'

const badgeStyles: Record<string, { bg: string; color: string; border?: string }> = {
  buy:      { bg: 'rgba(139,26,26,0.75)',   color: '#F5C4C4' },
  rent:     { bg: 'rgba(45,107,60,0.75)',    color: '#C0DD97' },
  both:     { bg: 'rgba(26,20,16,0.75)',     color: '#C9973A', border: '0.5px solid rgba(201,151,58,0.5)' },
  heirloom: { bg: 'rgba(26,20,16,0.75)',     color: '#C9973A', border: '0.5px solid rgba(201,151,58,0.5)' },
}

const badgeLabel: Record<string, string> = {
  buy: 'Buy Only', rent: 'Rent Only', both: 'Buy or Rent',
}

const conditionLabel: Record<string, string> = {
  heirloom: 'Heirloom', excellent: 'Excellent', good: 'Good', fair: 'Fair',
}

const glyphs = ['◎', '◈', '◇', '◉', '◎', '◈', '◇', '◉', '◎', '◈', '◇', '◉']

export const revalidate = 60

export default async function Shop() {
  let sarees: any[] = []
  let hasSarees = false

  try {
    sarees = await getSarees()
    hasSarees = sarees && sarees.length > 0
  } catch {
    hasSarees = false
  }

  const placeholders = [
    { listingType: 'both', condition: 'heirloom', name: 'Kanjivaram Silk', origin: 'Tamil Nadu' },
    { listingType: 'buy',  condition: 'excellent', name: 'Banarasi Brocade', origin: 'Varanasi' },
    { listingType: 'rent', condition: 'good',      name: 'Kanjivaram Silk', origin: 'Tamil Nadu' },
    { listingType: 'both', condition: 'heirloom',  name: 'Paithani Silk', origin: 'Maharashtra' },
    { listingType: 'rent', condition: 'excellent', name: 'Chanderi Silk', origin: 'Madhya Pradesh' },
    { listingType: 'buy',  condition: 'good',      name: 'Banarasi Brocade', origin: 'Varanasi' },
  ]

  return (
    <>
      <Nav />

      {/* HEADER */}
      <div style={{
        background: '#1a1410', padding: '44px 40px 32px',
        borderBottom: '0.5px solid rgba(201,151,58,0.2)',
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '42px',
          fontWeight: 300, color: '#F5E6C8',
        }}>
          The <em style={{ fontStyle: 'italic', color: '#C9973A' }}>Collection</em>
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(245,230,200,0.35)', marginTop: '6px', letterSpacing: '0.06em' }}>
          {hasSarees ? `${sarees.length} authenticated piece${sarees.length !== 1 ? 's' : ''}` : 'Curated pieces arriving soon'}
        </p>
      </div>

      {/* COMING SOON BANNER — only show if no listings yet */}
      {!hasSarees && (
        <div style={{
          background: 'rgba(201,151,58,0.06)', borderBottom: '0.5px solid rgba(201,151,58,0.15)',
          padding: '20px 40px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap',
        }}>
          <p style={{ fontSize: '14px', color: '#6B5C50', lineHeight: 1.7, maxWidth: '600px' }}>
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', color: '#C9973A', fontStyle: 'italic' }}>
              Professional photography is underway.
            </em>{' '}
            Each piece is authenticated and will be listed with its full provenance story,
            condition grade, and pricing. Join the waitlist to be notified first.
          </p>
          <a href="/#waitlist">
            <button style={{
              background: '#C9973A', color: '#1a1410', border: 'none',
              fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase',
              padding: '12px 24px', cursor: 'pointer', whiteSpace: 'nowrap',
            }}>
              Join Waitlist
            </button>
          </a>
        </div>
      )}

      {/* GRID */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gap: '1px', background: 'rgba(201,151,58,0.12)',
      }}>
        {hasSarees
          ? sarees.map((saree, i) => {
              const badge = badgeStyles[saree.listingType] || badgeStyles.both
              const coverImage = saree.images?.[0]
              return (
                <div key={saree._id} style={{ background: '#fff' }}>
                  <div style={{ aspectRatio: '4/3', position: 'relative', background: '#EDE0D0', overflow: 'hidden' }}>
                    <span style={{
                      position: 'absolute', top: '10px', left: '10px', zIndex: 2,
                      fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                      padding: '3px 9px', background: badge.bg, color: badge.color,
                      border: badge.border || 'none',
                    }}>
                      {badgeLabel[saree.listingType]}
                    </span>
                    {saree.condition === 'heirloom' && (
                      <span style={{
                        position: 'absolute', top: '10px', right: '10px', zIndex: 2,
                        fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase',
                        padding: '3px 9px', background: 'rgba(26,20,16,0.7)', color: '#C9973A',
                        border: '0.5px solid rgba(201,151,58,0.4)',
                      }}>
                        Heirloom
                      </span>
                    )}
                    {coverImage && (
                      <Image
                        src={urlFor(coverImage).width(600).height(450).fit('crop').url()}
                        alt={coverImage.alt || saree.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div style={{ padding: '16px 18px 20px' }}>
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '18px', color: '#1a1410', marginBottom: '4px',
                    }}>{saree.name}</div>
                    <div style={{
                      fontSize: '11px', color: '#8B7355', letterSpacing: '0.1em',
                      textTransform: 'uppercase', marginBottom: '10px',
                    }}>{saree.origin}</div>
                    {saree.description && (
                      <p style={{
                        fontSize: '13px', color: '#6B5C50', lineHeight: 1.65,
                        marginBottom: '12px',
                        display: '-webkit-box', WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      }}>{saree.description}</p>
                    )}
                    <div style={{
                      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                      borderTop: '0.5px solid rgba(201,151,58,0.12)', paddingTop: '10px',
                    }}>
                      <div>
                        {saree.buyPrice && (
                          <div style={{ fontSize: '16px', color: '#C9973A', fontFamily: "'Cormorant Garamond', serif" }}>
                            ${saree.buyPrice.toLocaleString()}
                          </div>
                        )}
                        {saree.rentPrice && (
                          <div style={{ fontSize: '11px', color: '#8B7355', marginTop: '2px' }}>
                            Rent from ${saree.rentPrice}/3 days
                          </div>
                        )}
                      </div>
                      <span style={{
                        fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: '#C9973A', borderBottom: '0.5px solid rgba(201,151,58,0.4)',
                        paddingBottom: '1px', cursor: 'pointer',
                      }}>
                        Enquire →
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          : placeholders.map((item, i) => {
              const badge = badgeStyles[item.listingType]
              return (
                <div key={i} style={{ background: '#fff' }}>
                  <div style={{
                    aspectRatio: '4/3', background: '#EDE0D0',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    position: 'relative', gap: '12px',
                  }}>
                    <span style={{
                      position: 'absolute', top: '10px', left: '10px',
                      fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '3px 9px', background: badge.bg, color: badge.color,
                      border: badge.border || 'none',
                    }}>
                      {badgeLabel[item.listingType]}
                    </span>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', color: '#8B6914', opacity: 0.15 }}>
                      {glyphs[i]}
                    </span>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: '12px',
                      fontStyle: 'italic', color: '#8B6914', opacity: 0.6, letterSpacing: '0.1em',
                    }}>
                      Photography coming soon
                    </span>
                  </div>
                  <div style={{ padding: '16px 18px 20px' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#1a1410', marginBottom: '4px' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '11px', color: '#8B7355', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                      {item.origin}
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      borderTop: '0.5px solid rgba(201,151,58,0.12)', paddingTop: '10px',
                    }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '14px', color: '#8B7355', fontStyle: 'italic' }}>
                        Pricing on request
                      </span>
                      <a href="/#waitlist" style={{
                        fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: '#C9973A', borderBottom: '0.5px solid rgba(201,151,58,0.4)', paddingBottom: '1px',
                      }}>
                        Notify Me
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
        }
      </div>

      <WaitlistForm />
    </>
  )
}
