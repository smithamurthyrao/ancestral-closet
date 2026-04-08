'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'Our Story' },
    { href: '/learn', label: 'Learn' },
  ]

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 40px', borderBottom: '0.5px solid rgba(201,151,58,0.25)',
      background: '#1a1410', position: 'sticky', top: 0, zIndex: 100,
    }}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Ancestral Closet"
          width={200}
          height={80}
          style={{ objectFit: 'contain', height: '64px', width: 'auto', mixBlendMode: 'lighten' }}
          priority
        />
      </Link>

      <ul style={{ display: 'flex', gap: '28px', listStyle: 'none' }}>
        {links.map(link => (
          <li key={link.href}>
            <Link href={link.href} style={{
              fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase',
              color: pathname === link.href ? '#C9973A' : 'rgba(245,230,200,0.6)',
              transition: 'color 0.2s',
            }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/#waitlist">
        <button style={{
          fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase',
          border: '0.5px solid #C9973A', color: '#C9973A', padding: '9px 22px',
          background: 'transparent', cursor: 'pointer',
        }}>
          Join Waitlist
        </button>
      </Link>
    </nav>
  )
}
