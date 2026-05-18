'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from '@punesh12/lattice-ui/toast'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster position="top-right" closeButton />
    </ThemeProvider>
  )
}
