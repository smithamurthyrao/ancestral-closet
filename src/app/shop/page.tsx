'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'
import Image from 'next/image'
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
const sareeTypes = ['All', 'Kanjivaram', 'Banarasi', 'Paithani', 'Chanderi', 'Mysore Silk', 'Pochampally', 'Other']
const typeValues: Record<string, string> = {
  'All': 'all', 'Kanjivaram': 'kanjivaram', 'Banarasi': 'banarasi',
  'Paithani': 'paithani', 'Chanderi': 'chanderi', 'Mysore Silk': 'mysore',
  'Pochampally': 'pochampally', 'Other': 'other'
}

function SareeCard({ saree }: { saree: any }) {
  const router = useRouter()
  const badge = badgeStyles[saree.listingType] || badgeStyles.both
  const images = saree.images || []
  const coverImage = images[0]

  return (
    <div style={{ background: '#fff', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
      onClick={() => router.push(`/shop/${saree.slug?.current}`)}>

      {/* Main image */}
      <div style={{ aspectRatio: '4/3', position: 'relative', background: '#EDE0D0', overflow: 'hidden' }}>
        <span style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 2, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 9px', background: badge.bg, color: badge.color, border: badge.border || 'none' }}>
          {badgeLabel[saree.listingType]}
        </span>
        {images.length > 1 && (
          <span style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2, fontSize: '10px', background: 'rgba(26,20,16,0.7)', color: '#F5E6C8', padding: '3px 9px' }}>
            {images.length} photos
          </span>
        )}
        {coverImage && (
          <Image src={urlFor(coverImage).width(600).height(450).fit('crop').url()} alt={coverImage.alt || saree.name} fill style={{ objectFit: 'cover', transition: 'transform 0.3s' }} />
        )}
      </div>

      {/* Info */}
      <div style={{ padding: 'clamp(12px,2vw,16px) clamp(12px,2.5vw,18px)', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(16px,2.5vw,19px)', color: '#1a1410', lineHeight: 1.2 }}>{saree.name}</div>
        <div style={{ fontSize: '11px', color: '#8B7355', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{saree.origin}</div>
        {saree.description && (
          <p style={{ fontSize: '13px', color: '#6B5C50', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {saree.description}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderTop: '0.5px solid rgba(201,151,58,0.12)', paddingTop: '10px', marginTop: 'auto' }}>
          <div>
            {saree.buyPrice && <div style={{ fontSize: 'clamp(15px,2vw,17px)', color: '#C9973A', fontFamily: "'Cormorant Garamond',serif" }}>${saree.buyPrice.toLocaleString()}</div>}
            {saree.rentPrice && <div style={{ fontSize: '11px', color: '#8B7355', marginTop: '2px' }}>Rent ${saree.rentPrice}/3 days</div>}
            {!saree.buyPrice && !saree.rentPrice && <div style={{ fontSize: '13px', color: '#8B7355', fontStyle: 'italic', fontFamily: "'Cormorant Garamond',serif" }}>Pricing on request</div>}
          </div>
          <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9973A', borderBottom: '0.5px solid rgba(201,151,58,0.4)', paddingBottom: '1px' }}>
            View Details →
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const [sarees, setSarees] = useState<any[]>([])
  const [filtered, setFiltered] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [typeFilter, setTypeFilter] = useState('all')
  const [listingFilter, setListingFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('default')

  useEffect(() => {
    if (!client) { setLoading(false); return }
    client.fetch(`*[_type == "saree" && available == true] | order(order asc, _createdAt desc) {
      _id, name, slug, type, origin, listingType, condition, buyPrice, rentPrice, images, description, featured
    }`).then((data: any[]) => {
      setSarees(data)
      setFiltered(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    let result = [...sarees]
    if (typeFilter !== 'all') result = result.filter(s => s.type === typeFilter)
    if (listingFilter !== 'all') result = result.filter(s => s.listingType === listingFilter || s.listingType === 'both')
    if (sortOrder === 'price-asc') result.sort((a, b) => (a.buyPrice || a.rentPrice || 0) - (b.buyPrice || b.rentPrice || 0))
    if (sortOrder === 'price-desc') result.sort((a, b) => (b.buyPrice || b.rentPrice || 0) - (a.buyPrice || a.rentPrice || 0))
    setFiltered(result)
  }, [typeFilter, listingFilter, sortOrder, sarees])

  const filterBtn = (active: boolean) => ({
    fontSize: '11px', letterSpacing: '0.08em', padding: '6px 14px',
    border: `0.5px solid ${active ? '#C9973A' : 'rgba(201,151,58,0.25)'}`,
    color: active ? '#C9973A' : '#8B7355',
    background: active ? 'rgba(201,151,58,0.08)' : 'transparent',
    cursor: 'pointer' as const,
  })

  return (
    <>
      <Nav />

      <div style={{ background: '#1a1410', padding: 'clamp(28px,6vw,44px) clamp(16px,5vw,40px)', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' as const }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(26px,5vw,42px)', fontWeight: 300, color: '#F5E6C8' }}>
          The <em style={{ fontStyle: 'italic', color: '#C9973A' }}>Collection</em>
        </h1>
        <p style={{ fontSize: '12px', color: 'rgba(245,230,200,0.35)', marginTop: '6px', letterSpacing: '0.06em' }}>
          {loading ? 'Loading...' : `${filtered.length} authenticated piece${filtered.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      <div style={{ background: '#FAF7F2', padding: 'clamp(12px,2vw,16px) clamp(16px,5vw,40px)', borderBottom: '0.5px solid rgba(201,151,58,0.12)', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', width: '100%', boxSizing: 'border-box' as const }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B7355', marginRight: '4px' }}>Type</span>
        {sareeTypes.map(t => (
          <button key={t} onClick={() => setTypeFilter(typeValues[t])} style={filterBtn(typeFilter === typeValues[t])}>{t}</button>
        ))}
        <span style={{ width: '1px', height: '20px', background: 'rgba(201,151,58,0.2)', margin: '0 4px' }} />
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B7355', marginRight: '4px' }}>Listing</span>
        {[['all','All'],['buy','Buy'],['rent','Rent']].map(([v, l]) => (
          <button key={v} onClick={() => setListingFilter(v)} style={filterBtn(listingFilter === v)}>{l}</button>
        ))}
        <span style={{ width: '1px', height: '20px', background: 'rgba(201,151,58,0.2)', margin: '0 4px' }} />
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}
          style={{ fontSize: '11px', padding: '6px 10px', border: '0.5px solid rgba(201,151,58,0.25)', color: '#8B7355', background: 'transparent', cursor: 'pointer', outline: 'none' }}>
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <div style={{ padding: '60px', textAlign: 'center', fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontStyle: 'italic', color: '#8B7355' }}>
          Loading the collection...
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ padding: '60px', textAlign: 'center', fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontStyle: 'italic', color: '#8B7355' }}>
          No pieces match this filter.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '1px', background: 'rgba(201,151,58,0.12)', width: '100%', boxSizing: 'border-box' as const }}>
          {filtered.map(saree => <SareeCard key={saree._id} saree={saree} />)}
        </div>
      )}

      <WaitlistForm />
    </>
  )
}
