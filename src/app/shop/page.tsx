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

const sareeTypes = ['All', 'Kanjivaram', 'Banarasi Pure Silk', 'Banarasi Georgette', 'Paithani', 'KSIC Mysore Silk Crepe', 'KSIC Mysore Silk Georgette', 'Pochampally / Ikat Silk', 'Other']
const typeValues: Record<string, string> = {
  'All': 'all', 'Kanjivaram': 'kanjivaram', 'Banarasi Pure Silk': 'banarasi',
  'Banarasi Georgette': 'banarasi_georgette', 'Paithani': 'paithani',
  'KSIC Mysore Silk Crepe': 'mysore_crepe', 'KSIC Mysore Silk Georgette': 'mysore_georgette',
  'Pochampally / Ikat Silk': 'pochampally', 'Other': 'other',
}
const conditionLabel: Record<string, string> = {
  heirloom: 'Heirloom', excellent: 'Excellent', good: 'Good', fair: 'Fair'
}

function SareeCard({ saree }: { saree: any }) {
  const router = useRouter()
  const images = saree.images || []
  const coverImage = images[0]
  const sold = saree.sold === true

  return (
    <div
      style={{ background: '#fff', display: 'flex', flexDirection: 'column', cursor: 'pointer', opacity: sold ? 0.7 : 1, position: 'relative' }}
      onClick={() => router.push(`/shop/${saree.slug?.current}`)}
    >
      {/* Image */}
      <div style={{ aspectRatio: '4/3', position: 'relative', background: '#EDE0D0', overflow: 'hidden' }}>
        {images.length > 1 && !sold && (
          <span style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2, fontSize: '11px', background: 'rgba(26,20,16,0.7)', color: '#F5E6C8', padding: '4px 10px' }}>
            {images.length} photos
          </span>
        )}
        {/* Sold overlay */}
        {sold && (
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.45)', zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', padding: '16px 24px', border: '0.5px solid rgba(201,151,58,0.6)', background: 'rgba(26,20,16,0.75)' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '20px', fontStyle: 'italic', color: '#C9973A', letterSpacing: '0.05em' }}>
                Found Its Home
              </div>
              <div style={{ width: '32px', height: '0.5px', background: 'rgba(201,151,58,0.5)', margin: '8px auto 0' }} />
            </div>
          </div>
        )}
        {coverImage && (
          <Image src={urlFor(coverImage).width(600).height(450).fit('crop').url()} alt={coverImage.alt || saree.name} fill style={{ objectFit: 'cover', filter: sold ? 'grayscale(30%)' : 'none' }} />
        )}
      </div>

      {/* Info */}
      <div style={{ padding: 'clamp(14px,2vw,18px) clamp(14px,2.5vw,20px)', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(17px,2.5vw,20px)', color: sold ? '#8B7355' : '#1a1410', lineHeight: 1.2 }}>{saree.name}</div>
        <div style={{ fontSize: '12px', color: '#8B7355', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{saree.origin}</div>
        {!sold && saree.condition && (
          <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9973A', border: '0.5px solid rgba(201,151,58,0.4)', padding: '3px 10px', display: 'inline-block', alignSelf: 'flex-start' }}>
            {conditionLabel[saree.condition] || saree.condition}
          </div>
        )}
        {!sold && saree.description && (
          <p style={{ fontSize: '14px', color: '#6B5C50', lineHeight: 1.7, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {saree.description}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderTop: '0.5px solid rgba(201,151,58,0.12)', paddingTop: '12px', marginTop: 'auto' }}>
          <div>
            {sold ? (
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '15px', fontStyle: 'italic', color: '#8B7355' }}>Found Its Home</div>
            ) : saree.buyPrice ? (
              <div style={{ fontSize: 'clamp(16px,2vw,18px)', color: '#C9973A', fontFamily: "'Cormorant Garamond',serif" }}>${saree.buyPrice.toLocaleString()}</div>
            ) : (
              <div style={{ fontSize: '14px', color: '#8B7355', fontStyle: 'italic', fontFamily: "'Cormorant Garamond',serif" }}>Pricing on request</div>
            )}
          </div>
          {!sold && (
            <span style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9973A', borderBottom: '0.5px solid rgba(201,151,58,0.5)', paddingBottom: '2px' }}>
              View Details →
            </span>
          )}
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
  const [sortOrder, setSortOrder] = useState('default')

  useEffect(() => {
    if (!client) { setLoading(false); return }
    client.fetch(`*[_type == "saree" && available == true] | order(sold asc, order asc, _createdAt desc) {
      _id, name, slug, type, origin, listingType, condition, buyPrice, images, description, featured, sold
    }`).then((data: any[]) => {
      setSarees(data)
      setFiltered(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    let result = [...sarees]
    if (typeFilter !== 'all') result = result.filter(s => s.type === typeFilter)
    if (sortOrder === 'price-asc') result.sort((a, b) => (a.buyPrice || 0) - (b.buyPrice || 0))
    if (sortOrder === 'price-desc') result.sort((a, b) => (b.buyPrice || 0) - (a.buyPrice || 0))
    // Always keep sold items at the bottom
    result.sort((a, b) => (a.sold ? 1 : 0) - (b.sold ? 1 : 0))
    setFiltered(result)
  }, [typeFilter, sortOrder, sarees])

  const filterBtn = (active: boolean) => ({
    fontSize: '12px', letterSpacing: '0.08em', padding: '7px 16px',
    border: `0.5px solid ${active ? '#C9973A' : 'rgba(201,151,58,0.3)'}`,
    color: active ? '#C9973A' : '#6B5C50',
    background: active ? 'rgba(201,151,58,0.08)' : 'transparent',
    cursor: 'pointer' as const,
  })

  const availableCount = filtered.filter(s => !s.sold).length

  return (
    <>
      <Nav />
      <div style={{ background: '#1a1410', padding: 'clamp(28px,6vw,44px) clamp(16px,5vw,40px)', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' as const }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,5vw,44px)', fontWeight: 300, color: '#F5E6C8' }}>
          The <em style={{ fontStyle: 'italic', color: '#C9973A' }}>Collection</em>
        </h1>
        <p style={{ fontSize: '13px', color: 'rgba(245,230,200,0.4)', marginTop: '8px', letterSpacing: '0.06em' }}>
          {loading ? 'Loading...' : `${availableCount} piece${availableCount !== 1 ? 's' : ''} available`}
        </p>
      </div>

      <div style={{ background: '#FAF7F2', padding: 'clamp(14px,2vw,18px) clamp(16px,5vw,40px)', borderBottom: '0.5px solid rgba(201,151,58,0.15)', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', width: '100%', boxSizing: 'border-box' as const }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B5C50', marginRight: '4px' }}>Type</span>
        {sareeTypes.map(t => (
          <button key={t} onClick={() => setTypeFilter(typeValues[t])} style={filterBtn(typeFilter === typeValues[t])}>{t}</button>
        ))}
        <span style={{ width: '1px', height: '20px', background: 'rgba(201,151,58,0.25)', margin: '0 4px' }} />
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}
          style={{ fontSize: '12px', padding: '7px 12px', border: '0.5px solid rgba(201,151,58,0.3)', color: '#6B5C50', background: 'transparent', cursor: 'pointer', outline: 'none' }}>
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <div style={{ padding: '80px', textAlign: 'center', fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontStyle: 'italic', color: '#8B7355' }}>Loading the collection...</div>
      ) : filtered.length === 0 ? (
        <div style={{ padding: '80px', textAlign: 'center', fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontStyle: 'italic', color: '#8B7355' }}>No pieces match this filter.</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: '1px', background: 'rgba(201,151,58,0.12)', width: '100%', boxSizing: 'border-box' as const }}>
          {filtered.map(saree => <SareeCard key={saree._id} saree={saree} />)}
        </div>
      )}
      <WaitlistForm />
    </>
  )
}
