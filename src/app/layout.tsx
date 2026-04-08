import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Ancestral Closet — Heirloom Sarees to Buy, Rent & Donate',
  description: 'A curated marketplace for luxury and heirloom sarees. Buy, rent, or donate — every piece carries a lineage, every thread a memory.',
  keywords: 'saree, heirloom saree, kanjivaram, banarasi, buy saree, rent saree, donate saree, Indian fashion',
  openGraph: {
    title: 'Ancestral Closet',
    description: 'Where Heritage Finds Its Next Story',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
