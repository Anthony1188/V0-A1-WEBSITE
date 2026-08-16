import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'A1 Services | You Call We Haul — Junk Removal & Dumpster Rental',
    template: '%s | A1 Services',
  },
  description:
    'A1 Services provides fast, reliable junk removal, dumpster rental, hauling, and light demolition. You call, we haul. Locally owned and operated.',
  keywords: [
    'junk removal',
    'dumpster rental',
    'hauling',
    'debris removal',
    'demolition',
    'skid steer services',
    'A1 Services',
  ],
  generator: 'v0.app',
  icons: {
    icon: '/images/a1-services-logo.png',
    apple: '/images/a1-services-logo.png',
  },
  openGraph: {
    title: 'A1 Services | You Call We Haul',
    description:
      'Fast, reliable junk removal, dumpster rental, hauling, and light demolition. You call, we haul.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111318',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
