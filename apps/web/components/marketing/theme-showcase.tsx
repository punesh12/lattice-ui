'use client'

import { useTheme } from 'next-themes'
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Switch } from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

export const ThemeShowcase = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <Card className={cn('order-2 border-2 lattice-hover-lift lg:order-1', motion.fadeInUp)}>
            <CardHeader>
              <CardTitle>Light & dark, built in</CardTitle>
              <CardDescription>
                Semantic CSS variables adapt every surface, border, and accent automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
              </div>
            </CardContent>
          </Card>

          <div className={cn('order-1 lg:order-2', motion.fadeInUp, motion.stagger(2))}>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">One toggle, every component</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              Powered by <code className="rounded bg-muted px-1.5 py-0.5 text-sm">next-themes</code> and design tokens.
              No per-component theme hacks — flip the switch and the entire UI responds.
            </p>
            <div className="mt-6 flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:border-primary/30 sm:mt-8">
              <Switch
                checked={isDark}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                aria-label="Toggle dark mode"
              />
              <span className="text-sm font-medium">{isDark ? 'Dark mode' : 'Light mode'}</span>
            </div>
            <Button
              className="mt-4 w-full sm:mt-6 sm:w-auto"
              variant="outline"
              textTone="foreground"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
            >
              Preview {isDark ? 'light' : 'dark'} theme
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
