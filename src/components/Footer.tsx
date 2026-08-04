import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1a1410', borderTop: '0.5px solid rgba(201,151,58,0.2)', padding: 'clamp(28px,5vw,40px) clamp(16px,5vw,40px)', width: '100%', boxSizing: 'border-box' as const }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        {/* Brand */}
        <div>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: '12px', letterSpacing: '0.2em', color: '#C9973A', marginBottom: '6px' }}>ANCESTRAL CLOSET</p>
          <p style={{ fontSize: '13px', color: '#6B6560', lineHeight: 1.6 }}>Curated · Authenticated · Cherished</p>
        </div>

        {/* Social */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="https://www.instagram.com/ancestralcloset" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,230,200,0.55)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
            Instagram
          </a>
          <span style={{ color: 'rgba(201,151,58,0.2)' }}>·</span>
          <a href="https://www.facebook.com/ancestralcloset" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(245,230,200,0.55)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            Facebook
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div style={{ width: '100%', borderTop: '0.5px solid rgba(201,151,58,0.1)', paddingTop: '18px', marginTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <p style={{ fontSize: '12px', color: 'rgba(245,230,200,0.3)' }}>© {new Date().getFullYear()} Ancestral Closet. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'rgba(245,230,200,0.3)' }}>Every piece authenticated by our founder</p>
      </div>
    </footer>
  )
}
