import type { Metadata } from 'next'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/ibm-plex-mono/400.css'
import './globals.css'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: {
    default: 'Lattice UI',
    template: '%s — Lattice UI',
  },
  description: 'Production-quality React component library with full light and dark theme support.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen"
        suppressHydrationWarning
        style={
          {
            '--font-sans': '"Inter", system-ui, sans-serif',
            '--font-mono': '"IBM Plex Mono", monospace',
          } as React.CSSProperties
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
