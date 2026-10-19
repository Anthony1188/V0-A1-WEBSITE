import type { Metadata, Viewport } from 'next'
import { Archivo_Black, IBM_Plex_Mono, Source_Sans_3 } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const archivo = Archivo_Black({ subsets: ['latin'], weight: '400', variable: '--font-archivo', display: 'swap' })
const source = Source_Sans_3({ subsets: ['latin'], variable: '--font-source', display: 'swap' })
const plex = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-plex', display: 'swap', weight: ['400', '500', '600'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://novagentec.com'),
  title: 'NOVAGENTEC · Commercial systems',
  description: 'Brand, websites and connected systems for local businesses, growing teams and creators.',
  keywords: ['NOVAGENTEC', 'commercial systems', 'web infrastructure', 'connected operations', 'Creator Core', 'FleetFlow'],
  generator: 'NOVAGENTEC',
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
  openGraph: {
    title: 'NOVAGENTEC · Commercial systems',
    description: 'Your business. Connected.',
    type: 'website',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f3f5f4' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${source.variable} ${plex.variable}`}>
      <body><SiteHeader />{children}</body>
    </html>
  )
}
