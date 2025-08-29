import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FinApp - Personal Finance Manager',
  description: 'Simulare investiții și management financiar personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  )
}