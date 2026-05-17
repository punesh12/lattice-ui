'use client'

import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'
import { setThemeWithTransition } from '@/lib/set-theme-with-transition'
import { getThemeModeLabel, THEME_OPTIONS, type AppTheme } from '@/lib/theme'

const themeIconStyle: React.CSSProperties = { width: 16, height: 16 }

function ThemeOptionIcon({ value }: { value: AppTheme }) {
  if (value === 'system') return <Monitor style={themeIconStyle} aria-hidden />
  if (value === 'dark') return <Moon style={themeIconStyle} aria-hidden />
  return <Sun style={themeIconStyle} aria-hidden />
}

export const ThemeShowcase = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const activeTheme = (theme ?? 'system') as AppTheme
  const selectTheme = (next: AppTheme) => setThemeWithTransition(setTheme, next)

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Card className={cn('order-2 border-2 lattice-hover-lift lg:order-1', motion.fadeInUp)}>
            <CardHeader>
              <CardTitle>Light, dark & system</CardTitle>
              <CardDescription>
                Semantic CSS variables adapt every surface, border, and accent automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div
                  className="rounded-lg border border-border p-4 transition-transform duration-200 hover:scale-[1.02]"
                  style={{ background: 'var(--background)', color: 'var(--foreground)' }}
                >
                  <div className="mb-2 h-2 w-12 rounded" style={{ background: 'var(--primary)' }} />
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded" style={{ background: 'var(--muted)' }} />
                    <div className="h-2 w-4/5 rounded" style={{ background: 'var(--muted)' }} />
                  </div>
                  <p className="mt-3 text-xs opacity-60">Light</p>
                </div>
                <div
                  className="rounded-lg border p-4 transition-transform duration-200 hover:scale-[1.02]"
                  style={{
                    background: '#18181b',
                    borderColor: 'rgba(255,255,255,0.1)',
                    color: '#fafafa',
                  }}
                >
                  <div className="mb-2 h-2 w-12 rounded bg-[#6366f1]" />
                  <div className="space-y-2">
                    <div className="h-2 w-full rounded bg-[#27272a]" />
                    <div className="h-2 w-4/5 rounded bg-[#27272a]" />
                  </div>
                  <p className="mt-3 text-xs text-zinc-400">Dark</p>
                </div>
                <div
                  className="rounded-lg border border-dashed border-border p-4 transition-transform duration-200 hover:scale-[1.02]"
                  style={{ background: 'var(--muted)', color: 'var(--foreground)' }}
                >
                  <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Monitor style={{ width: 14, height: 14 }} aria-hidden />
                    System
                  </div>
                  <div className="space-y-2">
                    <div
                      className="h-2 w-full rounded"
                      style={{ background: 'color-mix(in srgb, var(--primary) 40%, var(--muted))' }}
                    />
                    <div className="h-2 w-3/5 rounded" style={{ background: 'var(--border)' }} />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">Matches OS</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className={cn('order-1 lg:order-2', motion.fadeInUp, motion.stagger(2))}>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              One toggle, every component
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              Powered by <code className="rounded bg-muted px-1.5 py-0.5 text-sm">next-themes</code>{' '}
              and design tokens. Pick light, dark, or follow your system preference.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8">
              <div
                className="flex flex-wrap gap-2 rounded-lg border border-border p-3"
                role="group"
                aria-label="Theme preference"
              >
                {THEME_OPTIONS.map((option) => (
                  <Button
                    key={option.value}
                    type="button"
                    variant={mounted && activeTheme === option.value ? 'default' : 'outline'}
                    size="sm"
                    textTone={mounted && activeTheme === option.value ? undefined : 'foreground'}
                    className="theme-toggle-btn gap-2"
                    style={{ cursor: 'pointer' }}
                    aria-pressed={mounted && activeTheme === option.value}
                    onClick={() => selectTheme(option.value)}
                  >
                    <ThemeOptionIcon value={option.value} />
                    {option.label}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {mounted ? getThemeModeLabel(activeTheme, resolvedTheme) : 'Loading theme…'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
