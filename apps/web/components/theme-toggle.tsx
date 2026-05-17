'use client'

import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@lattice-ui/ui'
import { setThemeWithTransition } from '@/lib/set-theme-with-transition'
import { getNextTheme, type AppTheme } from '@/lib/theme'

const iconStyle: React.CSSProperties = {
  width: 16,
  height: 16,
  flexShrink: 0,
}

function ThemeIcon({ theme }: { theme: AppTheme | undefined }) {
  if (theme === 'system') {
    return <Monitor style={iconStyle} aria-hidden />
  }
  if (theme === 'dark') {
    return <Moon style={iconStyle} aria-hidden />
  }
  return <Sun style={iconStyle} aria-hidden />
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const activeTheme = (theme ?? 'system') as AppTheme

  const cycleTheme = () => {
    setThemeWithTransition(setTheme, getNextTheme(theme))
  }

  const label =
    activeTheme === 'system'
      ? 'Theme: system preference'
      : activeTheme === 'dark'
        ? 'Theme: dark'
        : 'Theme: light'

  return (
    <Button
      data-slot="theme-toggle"
      variant="ghost"
      size="icon-sm"
      aria-label={label}
      title={label}
      onClick={cycleTheme}
      className="theme-toggle-btn"
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      {mounted ? (
        <ThemeIcon theme={activeTheme} />
      ) : (
        <Sun style={{ ...iconStyle, opacity: 0.5 }} aria-hidden />
      )}
    </Button>
  )
}
