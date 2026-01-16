import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Benjamin Franklin Plumbing of Lancaster - The Punctual Plumber',
  description: 'Professional plumbing services in Lancaster, PA. Emergency repairs, drain cleaning, water heater installation. Call (717) 707-7811 for reliable service.',
  keywords: 'plumber Lancaster PA, emergency plumbing, drain cleaning, water heater repair, Benjamin Franklin Plumbing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}