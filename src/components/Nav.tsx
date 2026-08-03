'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/shop', label: 'Shop' },
  { href: '/consign', label: 'Consign' },
  { href: '/about', label: 'Our Story' },
  { href: '/learn', label: 'Learn' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <style>{`
        .ac-nav {
          box-sizing: border-box;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 40px;
          border-bottom: 0.5px solid rgba(201,151,58,0.25);
          background: #1a1410;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .ac-logo img { height: 56px; width: auto; mix-blend-mode: lighten; display: block; }
        .ac-nav-links { display: flex; gap: 20px; list-style: none; }
        .ac-nav-links a { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,230,200,0.6); white-space: nowrap; }
        .ac-nav-links a.active { color: #C9973A; }
        .ac-nav-cta { font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; border: 0.5px solid #C9973A; color: #C9973A; padding: 8px 18px; background: transparent; white-space: nowrap; cursor: pointer; }
        .ac-burger { display: none; background: none; border: none; cursor: pointer; padding: 4px; flex-direction: column; gap: 5px; }
        .ac-burger span { display: block; width: 22px; height: 2px; background: #C9973A; }
        .ac-mobile { display: none; flex-direction: column; background: #1a1410; padding: 20px 24px 28px; gap: 18px; border-bottom: 0.5px solid rgba(201,151,58,0.2); width: 100%; box-sizing: border-box; }
        .ac-mobile.open { display: flex; }
        .ac-mobile a { font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,230,200,0.7); padding: 6px 0; border-bottom: 0.5px solid rgba(201,151,58,0.1); }
        .ac-mobile a.active { color: #C9973A; }
        .ac-mobile-cta { width: 100%; padding: 14px; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; border: 0.5px solid #C9973A; color: #C9973A; background: transparent; margin-top: 4px; cursor: pointer; }
        @media (max-width: 900px) {
          .ac-nav { padding: 10px 16px; }
          .ac-logo img { height: 44px; }
          .ac-nav-links { display: none !important; }
          .ac-nav-cta { display: none !important; }
          .ac-burger { display: flex !important; }
        }
        @media (max-width: 600px) {
          .ac-nav { padding: 8px 16px; }
          .ac-logo img { height: 40px; }
        }
      `}</style>

      <nav className="ac-nav">
        <div className="ac-logo">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Ancestral Closet" width={180} height={72} priority />
          </Link>
        </div>
        <ul className="ac-nav-links">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active' : ''}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/#waitlist" className="ac-nav-cta">Join Waitlist</Link>
        <button className="ac-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`ac-mobile${open ? ' open' : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/#waitlist" onClick={() => setOpen(false)}>
          <button className="ac-mobile-cta">Join Waitlist</button>
        </Link>
      </div>
    </>
  )
}
