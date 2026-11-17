import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export const metadata = {
  title: 'Returns & Disputes | Ancestral Closet',
  description: 'Our 7-day return policy: if a piece arrives materially different from its listing, you can return it for a full refund.',
}

const body = { fontSize: '15px', color: '#4A3F38', lineHeight: 1.85, marginBottom: '16px' } as const
const label = { fontFamily: "'Cinzel',serif", fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: '#1a1410', marginBottom: '16px' }
const list = { paddingLeft: '22px', marginBottom: '20px' } as const
const li = { fontSize: '15px', color: '#4A3F38', lineHeight: 1.85, marginBottom: '8px' } as const

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: 'clamp(28px,4vw,40px) 0', borderBottom: '0.5px solid rgba(201,151,58,0.2)' }}>
      <h2 style={label}>{title}</h2>
      {children}
    </section>
  )
}

export default function Returns() {
  return (
    <>
      <Nav />
      <div style={{ background: '#1a1410', padding: 'clamp(36px,7vw,60px) clamp(16px,5vw,40px)', textAlign: 'center', borderBottom: '0.5px solid rgba(201,151,58,0.2)', width: '100%', boxSizing: 'border-box' as const }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,6vw,52px)', fontWeight: 300, color: '#F5E6C8' }}>
          Returns <em style={{ fontStyle: 'italic', color: '#C9973A' }}>&amp; Disputes</em>
        </h1>
        <p style={{ fontSize: '15px', color: '#9B8C80', marginTop: '14px' }}>Our buyer return and dispute policy</p>
      </div>

      <div style={{ background: '#FAF7F2', padding: 'clamp(16px,3vw,24px) clamp(16px,5vw,40px) clamp(40px,6vw,64px)', width: '100%', boxSizing: 'border-box' as const }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>

          <Section title="Our promise">
            <p style={{ ...body, fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 'clamp(18px,2.4vw,21px)', color: '#1a1410' }}>
              If a piece arrives materially different from its listing, you can report it within 7 days of delivery and, once approved, return it for a full refund of the purchase price. Every other sale is final.
            </p>
            <p style={body}>
              Every piece on Ancestral Closet is personally authenticated by our founder, graded for condition, and described in its listing, including any disclosed staining. Because each piece is one of a kind and ships directly from its owner, this policy is built around one question: is what you received what we described?
            </p>
          </Section>

          <Section title="What can be returned">
            <p style={body}>A return is approved when the piece is materially not as described in its listing. That includes:</p>
            <ul style={list}>
              <li style={li}>Staining, tears, snags, repairs or zari tarnishing that the listing did not disclose</li>
              <li style={li}>A weave, fabric or construction that differs from the listing (for example, a silk blend sold as pure silk)</li>
              <li style={li}>The wrong piece, or a piece missing parts shown in the listing</li>
              <li style={li}>Damage that happened in transit, reported with photos of the piece and its packaging</li>
            </ul>
            <p style={body}>A return is not available for:</p>
            <ul style={list}>
              <li style={li}>Change of mind, fit, or how the saree drapes with your blouse or styling</li>
              <li style={li}>Slight colour differences from screen or lighting</li>
              <li style={li}>Anything the listing disclosed, including interior stains noted in the description and the gentle age patina of a Good or Fair grade</li>
              <li style={li}>Natural irregularities of handloom weaving and hand-finished zari</li>
              <li style={li}>A piece that has been worn, washed, dry cleaned, altered or otherwise changed after delivery</li>
            </ul>
          </Section>

          <Section title="How to report a problem">
            <p style={body}>
              Email <a href="mailto:ancestralcloset@gmail.com" style={{ color: '#C9973A', borderBottom: '0.5px solid rgba(201,151,58,0.5)' }}>ancestralcloset@gmail.com</a> within 7 days of confirmed delivery. Reports made after that are not eligible for a return.
            </p>
            <p style={body}>Include:</p>
            <ol style={list}>
              <li style={li}>Your name and the piece you purchased</li>
              <li style={li}>A short description of what differs from the listing</li>
              <li style={li}>Clear photos in natural light showing the issue, plus the packaging if the piece arrived damaged</li>
            </ol>
            <p style={body}>We notify the consignor within 24 hours of your report, and we will be in touch with you within 2 business days.</p>
          </Section>

          <Section title="Returns and refunds">
            <p style={body}>We review your report against the listing, its photographs and the piece's condition grade. If the return is approved:</p>
            <ol style={list}>
              <li style={li}>Ship the piece back within 7 days of approval, in its original condition, wrapped in acid-free tissue in a rigid or padded container, using a tracked, insured method.</li>
              <li style={li}>You do not pay return shipping when the piece was not as described. The consignor covers it, and we will arrange a prepaid label or reimburse your tracked cost.</li>
              <li style={li}>Once the piece reaches the owner in the condition it left you, your full purchase price is refunded within 5 business days, to the payment method you used.</li>
            </ol>
            <p style={body}>Pieces damaged in transit are covered by the insurance on the original shipment, and we will help you with the claim.</p>
          </Section>

          <section style={{ padding: 'clamp(28px,4vw,40px) 0 0' }}>
            <h2 style={label}>If we disagree</h2>
            <p style={body}>Ancestral Closet facilitates every dispute between buyer and consignor. We are not a party to the sale, but we take part in resolving it.</p>
            <ul style={list}>
              <li style={li}><strong style={{ fontWeight: 500, color: '#1a1410' }}>Undisclosed condition:</strong> the consignor is responsible for resolving it, which can include accepting the return and refunding you.</li>
              <li style={li}><strong style={{ fontWeight: 500, color: '#1a1410' }}>Error in our listing:</strong> if the listing description was wrong in a way the consignor did not cause, Ancestral Closet takes responsibility for that error.</li>
              <li style={li}><strong style={{ fontWeight: 500, color: '#1a1410' }}>Disagreement over whether the piece matches the listing:</strong> we compare the listing, the intake photographs and your photos, then recommend a resolution to both of you in writing.</li>
            </ul>
            <p style={{ ...body, fontStyle: 'italic', color: '#6B5C50' }}>
              Authentication is a curatorial assessment made at the time of inspection. It is not a warranty against defects that arise after that date, which is why we ask for reports within 7 days of delivery.
            </p>
          </section>

        </div>
      </div>
      <WaitlistForm />
    </>
  )
}
