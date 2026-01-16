import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Benjamin Franklin Plumbing of Lancaster | The Punctual Plumber',
  description: 'Professional plumbing services in Lancaster, PA. Emergency repairs, installations, and maintenance. Call (717) 384-1610 for reliable, punctual service.',
  keywords: 'plumber Lancaster PA, emergency plumbing, water heater repair, drain cleaning, pipe repair',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}