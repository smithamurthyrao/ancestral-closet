import Image from 'next/image'
import Nav from '@/components/Nav'
import WaitlistForm from '@/components/WaitlistForm'

export default function About() {
  return (
    <>
      <Nav />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
        <div style={{ background: '#1a1410', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(36px,6vw,60px) clamp(16px,5vw,48px)', borderRight: '0.5px solid rgba(201,151,58,0.2)' }}>
          <div style={{ textAlign: 'center' }}>
            <Image src="/logo.png" alt="Ancestral Closet" width={200} height={200}
              style={{ objectFit: 'contain', width: 'clamp(100px,18vw,180px)', height: 'auto', margin: '0 auto 24px', mixBlendMode: 'lighten' }} />
            <p style={{ fontSize: '11px', color: 'rgba(245,230,200,0.3)', letterSpacing: '0.2em' }}>EST. 2025</p>
            <div style={{ marginTop: '28px', fontFamily: "'Cormorant Garamond',serif", fontSize: '15px', color: '#C9973A', opacity: 0.75, fontStyle: 'italic', lineHeight: 2 }}>
              "Every saree is a<br />conversation across<br />generations."
            </div>
          </div>
        </div>
        <div style={{ background: '#FAF7F2', padding: 'clamp(36px,6vw,60px) clamp(16px,5vw,48px)' }}>
          <blockquote style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(16px,2.5vw,22px)', fontWeight: 300, fontStyle: 'italic', color: '#1a1410', lineHeight: 1.6, marginBottom: '28px', borderLeft: '2px solid #C9973A', paddingLeft: '20px' }}>
            "I didn't set out to build a marketplace. I set out to build something worthy of the sarees themselves — a platform where luxury, cultural heritage, and personal history are treated with the care they deserve."
          </blockquote>
          <p style={{ fontSize: 'clamp(14px,1.8vw,15px)', color: '#4A3F38', lineHeight: 1.9, marginBottom: '18px' }}>
            India's great weaving traditions — Kanjivaram, Banarasi, Paithani, and the rest — represent centuries of craft, knowledge, and artistry passed down through families and communities. A handwoven silk saree is not fast fashion. It is cultural patrimony in six yards of thread.
          </p>
          <p style={{ fontSize: 'clamp(14px,1.8vw,15px)', color: '#4A3F38', lineHeight: 1.9, marginBottom: '18px' }}>
            Ancestral Closet exists to honour that. Every piece we accept is personally authenticated — not by an algorithm, not by a checklist alone, but by someone who understands what she is holding and what it represents. We curate with intention, present with care, and ensure that every buyer knows exactly what they are acquiring and why it matters.
          </p>
          <p style={{ fontSize: 'clamp(14px,1.8vw,15px)', color: '#4A3F38', lineHeight: 1.9 }}>
            Because the question every South Asian family eventually faces deserves a better answer than a trunk in the attic: <em style={{ color: '#8B1A1A', fontStyle: 'italic' }}>what do we do with her sarees?</em>
          </p>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(17px,2vw,20px)', fontStyle: 'italic', color: '#C9973A', marginTop: '32px' }}>— Smitha Murthy, Founder</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1px', background: 'rgba(201,151,58,0.12)' }}>
        {[
          ['Preserve', "Great weaves deserve careful stewardship. We authenticate, document, and present each piece with the rigour its heritage demands."],
          ['Connect', "We bridge the woman who wore it first and the woman who will carry it forward. Every transaction is a transfer of story, not just silk."],
          ['Honour', "We refuse to treat handwoven silk as inventory. Each piece is singular. Each listing is an act of cultural preservation."],
        ].map(([title, body]) => (
          <div key={title} style={{ background: '#FAF7F2', padding: 'clamp(28px,4vw,40px) clamp(16px,4vw,32px)' }}>
            <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: '11px', letterSpacing: '0.22em', color: '#1a1410', marginBottom: '14px' }}>{title}</h4>
            <p style={{ fontSize: '15px', color: '#4A3F38', lineHeight: 1.8 }}>{body}</p>
          </div>
        ))}
      </div>
      <WaitlistForm />
    </>
  )
}
