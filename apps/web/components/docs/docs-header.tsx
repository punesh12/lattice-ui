'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Badge, LatticeLogo } from '@punesh12/lattice-ui'
import { cn } from '@/lib/utils'
import { HeaderMenuButton } from '@/components/header-menu-button'
import { ThemeToggle } from '@/components/theme-toggle'
import { DocsNavTree } from './docs-nav-tree'
import { DocsSearch } from './docs-search'

const DocsCommand = dynamic(() => import('./docs-command').then((m) => m.DocsCommand), {
  ssr: false,
})

export function DocsHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-sticky border-b border-border bg-background/80 backdrop-blur-md">
      <div
        className="flex h-14 shrink-0 items-center gap-3 px-4 lg:gap-4 lg:px-6"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: 56,
          paddingLeft: 16,
          paddingRight: 16,
          gap: 12,
        }}
      >
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
          <LatticeLogo size="xs" showWordmark compact />
        </Link>
        <Badge
          variant="secondary"
          className="marketing-header-badge hidden shrink-0 sm:inline-flex"
        >
          v1.0
        </Badge>
        <div className="docs-header-search hidden min-w-0 flex-1 justify-center md:flex">
          <DocsSearch />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginLeft: 'auto',
            flexShrink: 0,
          }}
        >
          <a
            href="https://github.com/punesh12/lattice-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="marketing-header-desktop-cta hidden px-2 text-sm text-muted-foreground hover:text-foreground sm:inline"
            aria-label="GitHub repository"
          >
            GitHub
          </a>
          <DocsCommand />
          <ThemeToggle />
          <HeaderMenuButton
            open={mobileOpen}
            onToggle={() => setMobileOpen((open) => !open)}
            controlsId="docs-mobile-nav"
          />
        </div>
      </div>

      <div
        id="docs-mobile-nav"
        className={cn(
          'marketing-mobile-nav max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-border bg-background lattice-fade-in',
        )}
        style={{ display: mobileOpen ? 'block' : 'none' }}
      >
        <div style={{ padding: 16 }}>
          <DocsNavTree showSiteLinks onNavigate={() => setMobileOpen(false)} />
        </div>
      </div>
    </header>
  )
}
