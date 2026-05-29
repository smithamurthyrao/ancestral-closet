import type { Metadata } from 'next'
import '../styles/globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ancestral Closet — Heirloom Sarees to Buy, Rent & Donate',
  description: 'A curated marketplace for luxury and heirloom sarees. Buy, rent, or donate.',
  openGraph: { title: 'Ancestral Closet', description: 'Where Heritage Finds Its Next Story', type: 'website' },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
