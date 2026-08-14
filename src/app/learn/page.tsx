import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

const weavers = [
  { name: 'Kanjivaram', region: 'Tamil Nadu', desc: 'Woven in Kanchipuram by master weavers whose craft passes father to son. Defined by its heavy pure mulberry silk, contrasting borders woven as a separate piece and interlocked, and gold zari that carries real weight. Each piece can take weeks to complete. There is no shortcut to a Kanjivaram — and that is exactly the point.', tags: ['Pure mulberry silk', 'Zari work', 'GI Tagged'] },
  { name: 'Banarasi', region: 'Uttar Pradesh', desc: 'The silk city of Varanasi has produced Banarasi brocades since the Mughal court elevated them to the fabric of empire. Recognized by opulent gold and silver threadwork, intricate floral jaal motifs, and an unmatched weight and drape. Pure silk and georgette variants each carry the tradition in a different register.', tags: ['Brocade', 'Mughal motifs', 'GI Tagged'] },
  { name: 'Paithani', region: 'Maharashtra', desc: 'Named for the town of Paithan on the Godavari river, this centuries-old tapestry weave is known for its distinctive peacock and lotus motifs in the pallu and pure zari borders. A Maharashtrian bridal staple and one of India\'s most recognized regional silks.', tags: ['Tapestry weave', 'Peacock motif', 'GI Tagged'] },
  { name: 'Mysore Silk', region: 'Karnataka', desc: 'Produced under the KSIC mark by Karnataka Silk Industries Corporation, Mysore Silk is distinguished by its pure mulberry silk and the characteristic sheen that comes from its tightly twisted threads. Available in crepe and georgette weaves, each carrying the KSIC certification as a guarantee of authenticity.', tags: ['KSIC certified', 'Pure mulberry silk', 'GI Tagged'] },
  { name: 'Pochampally / Ikat Silk', region: 'Telangana', desc: 'Pochampally Ikat is defined by its resist-dyeing technique — threads are dyed before weaving, creating the characteristic blurred geometric patterns that emerge only as the cloth is assembled. Each piece is a feat of pre-planning and precision that cannot be replicated by machine.', tags: ['Ikat technique', 'Geometric patterns', 'GI Tagged'] },
  { name: 'Uppada Silk', region: 'Andhra Pradesh', desc: 'Woven in the coastal village of Uppada, this silk is prized for its extraordinary lightness and fine texture. The jamdani weave technique used by Uppada weavers creates intricate motifs that seem to float on the surface of the fabric — a characteristic entirely unlike any other Indian silk.', tags: ['Jamdani weave', 'Featherweight', 'GI Tagged'] },
  { name: 'Sambalpuri Ikat', region: 'Odisha', desc: 'Sambalpuri silk uses the traditional Bandha technique — a form of resist dyeing applied to both warp and weft threads before weaving. The result is a double-ikat fabric with deeply saturated, perfectly symmetrical patterns. Each piece takes weeks to produce and is entirely unique.', tags: ['Double Ikat', 'Bandha technique', 'GI Tagged'] },
  { name: 'Patola', region: 'Gujarat', desc: 'The double ikat Patola of Patan is among the most technically demanding textiles in the world. Produced by only a handful of families in Patan, Gujarat, it requires both warp and weft threads to be individually resist-dyed before weaving — creating mirror-perfect geometric patterns that have been prized by royalty across Asia for centuries.', tags: ['Double ikat', 'Royal heritage', 'GI Tagged'] },
]

const timeline = [
  { year: '2800 BCE', text: 'The Indus Valley Civilization produces draped cotton garments — the earliest evidence of the saree form.' },
  { year: '300 BCE', text: 'Sanskrit texts and Ajanta cave paintings depict elaborate draped silk garments worn by royalty and temple dancers.' },
  { year: '1600s', text: 'The Mughal era elevates silk weaving in Varanasi; Banarasi brocades become the fabric of the imperial court.' },
  { year: '1947', text: 'At Independence, Nehru champions handloom as national identity. The saree becomes a symbol of free India.' },
  { year: 'Today', text: 'Ancestral Closet carries this lineage forward — ensuring the sarees that carry our family histories find new homes and new stories.' },
]

export default function Learn() {
  return (
    <>
      <Nav />
      <div style={{ background: '#1a1410', padding: 'clamp(36px,7vw,56px) clamp(16px,5vw,40px)', textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' as const }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,6vw,48px)', fontWeight: 300, color: '#F5E6C8' }}>
          The <em style={{ fontStyle: 'italic', color: '#C9973A' }}>Living Archive</em>
        </h1>
        <p style={{ fontSize: '15px', color: '#9B8C80', maxWidth: '520px', margin: '16px auto 0', lineHeight: 1.85 }}>
          Six yards of silk carry five thousand years of civilization. Here is where we tell those stories.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1px', background: 'rgba(201,151,58,0.12)' }}>
        {weavers.map(w => (
          <div key={w.name} style={{ background: '#FAF7F2', padding: 'clamp(24px,4vw,36px) clamp(16px,4vw,32px)' }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,3vw,24px)', color: '#1a1410', marginBottom: '4px' }}>{w.name}</h3>
            <div style={{ fontSize: '11px', color: '#C9973A', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '14px' }}>{w.region}</div>
            <p style={{ fontSize: '14px', color: '#4A3F38', lineHeight: 1.85 }}>{w.desc}</p>
            <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {w.tags.map(tag => <span key={tag} style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#8B7355', border: '0.5px solid rgba(201,151,58,0.25)', padding: '3px 10px' }}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#FAF7F2', padding: 'clamp(36px,6vw,56px) clamp(16px,5vw,40px)', borderTop: '0.5px solid rgba(201,151,58,0.15)', width: '100%', boxSizing: 'border-box' as const }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '10px', letterSpacing: '0.25em', color: '#C9973A', marginBottom: '36px' }}>A BRIEF HISTORY OF THE SAREE</div>
        <div style={{ paddingLeft: '20px', borderLeft: '0.5px solid rgba(201,151,58,0.25)' }}>
          {timeline.map(item => (
            <div key={item.year} style={{ marginBottom: '28px', paddingLeft: '20px', position: 'relative' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C9973A', position: 'absolute', left: '-24px', top: '4px' }} />
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '14px', color: '#C9973A', marginBottom: '6px', letterSpacing: '0.05em' }}>{item.year}</div>
              <div style={{ fontSize: '15px', color: '#4A3F38', lineHeight: 1.8 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <WaitlistForm />
    </>
  )
}
