import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

const weavers = [
  {
    name: 'Kanjivaram', region: 'Tamil Nadu',
    desc: 'Woven in Kanchipuram by master weavers whose craft passes father to son, the Kanjivaram is defined by its heavy pure silk, contrasting borders, and gold zari. Each piece can take weeks to complete.',
    tags: ['Pure mulberry silk', 'Zari work', 'GI Tagged'],
  },
  {
    name: 'Banarasi', region: 'Uttar Pradesh',
    desc: 'The silk city of Varanasi has produced Banarasi brocades for the Mughal courts and beyond. Recognized by its opulent gold and silver threadwork, intricate floral motifs, and unmatched weight.',
    tags: ['Brocade', 'Mughal motifs', 'GI Tagged'],
  },
  {
    name: 'Paithani', region: 'Maharashtra',
    desc: 'Named for the town of Paithan on the Godavari river, this centuries-old weave is known for its distinctive peacock and lotus motifs in the pallu and pure zari borders. A Maharashtrian bridal staple.',
    tags: ['Tapestry weave', 'Peacock motif', 'GI Tagged'],
  },
  {
    name: 'Chanderi', region: 'Madhya Pradesh',
    desc: 'Light as gossamer, the Chanderi saree is hand-woven from a blend of silk and cotton. Its sheer texture and subtle coin motifs make it an elegant choice for daywear and contemporary occasions.',
    tags: ['Silk-cotton blend', 'Sheer texture', 'GI Tagged'],
  },
]

const timeline = [
  { year: '2800 BCE', text: 'The Indus Valley Civilization produces draped cotton garments — the earliest evidence of the saree form.' },
  { year: '300 BCE', text: 'Sanskrit texts and Ajanta cave paintings depict elaborate draped silk garments worn by royalty and temple dancers.' },
  { year: '1600s', text: 'The Mughal era elevates silk weaving in Varanasi; Banarasi brocades become the fabric of the imperial court.' },
  { year: '1947', text: 'At Independence, Jawaharlal Nehru champions handloom as an act of national identity. The saree becomes a symbol of free India.' },
  { year: 'Today', text: 'Ancestral Closet carries this lineage forward — ensuring the sarees that carry our family histories find new homes and new stories.' },
]

export default function Learn() {
  return (
    <>
      <Nav />

      <div style={{
        background: '#1a1410', padding: '56px 40px 44px',
        textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)',
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: '48px',
          fontWeight: 300, color: '#F5E6C8',
        }}>
          The <em style={{ fontStyle: 'italic', color: '#C9973A' }}>Living Archive</em>
        </h1>
        <p style={{
          fontSize: '13px', color: '#6B6560', maxWidth: '500px',
          margin: '16px auto 0', lineHeight: 1.85,
        }}>
          Six yards of silk carry five thousand years of civilization.
          Here is where we tell those stories.
        </p>
      </div>

      {/* Weaver grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1px', background: 'rgba(201,151,58,0.12)',
      }}>
        {weavers.map(w => (
          <div key={w.name} style={{ background: '#FAF7F2', padding: '36px 32px' }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: '24px',
              color: '#1a1410', marginBottom: '4px',
            }}>{w.name}</h3>
            <div style={{
              fontSize: '13px', color: '#C9973A', letterSpacing: '0.16em',
              textTransform: 'uppercase', marginBottom: '14px',
            }}>{w.region}</div>
            <p style={{ fontSize: '12px', color: '#6B5C50', lineHeight: 1.8 }}>{w.desc}</p>
            <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {w.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: '12px', letterSpacing: '0.12em', color: '#8B7355',
                  border: '0.5px solid rgba(201,151,58,0.2)', padding: '3px 9px',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ background: '#FAF7F2', padding: '56px 40px', borderTop: '0.5px solid rgba(201,151,58,0.15)' }}>
        <div style={{
          fontFamily: "'Cinzel', serif", fontSize: '13px',
          letterSpacing: '0.25em', color: '#C9973A', marginBottom: '36px',
        }}>
          A BRIEF HISTORY OF THE SAREE
        </div>
        <div style={{ paddingLeft: '20px', borderLeft: '0.5px solid rgba(201,151,58,0.2)' }}>
          {timeline.map(item => (
            <div key={item.year} style={{ marginBottom: '28px', paddingLeft: '20px', position: 'relative' }}>
              <div style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#C9973A', position: 'absolute', left: '-24px', top: '4px',
              }} />
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '13px', color: '#C9973A', marginBottom: '4px',
              }}>{item.year}</div>
              <div style={{ fontSize: '12px', color: '#6B5C50', lineHeight: 1.7 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <WaitlistForm />
    </>
  )
}
