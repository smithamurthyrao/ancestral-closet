
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Our Story' },
  { href: '/learn', label: 'Learn' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
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
