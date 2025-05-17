import '../styles/globals.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Day 1 - Programmer Page',
  description: '100 Days of Code - Day 1 Simple Portfolio Page',
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
