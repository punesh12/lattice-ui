'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Badge, Button, LatticeLogo } from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { HeaderMenuButton } from '@/components/header-menu-button'
import { isMarketingNavActive } from '@/lib/nav'
import { siteNavLinks } from '@/lib/site-nav'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinkStyle = (active: boolean): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  paddingTop: 18,
  paddingBottom: 16,
  fontSize: 14,
  lineHeight: 1,
  textDecoration: 'none',
  borderBottom: active ? '2px solid var(--primary)' : '2px solid transparent',
  marginBottom: -1,
  color: active ? 'var(--foreground)' : 'var(--muted-foreground)',
  fontWeight: active ? 600 : 500,
  transition: 'color 0.15s ease, border-color 0.15s ease',
})

type NavLinkItemProps = {
  href: string
  label: string
  onNavigate?: () => void
  mobile?: boolean
}

const NavLinkItem = ({ href, label, onNavigate, mobile }: NavLinkItemProps) => {
  const pathname = usePathname()
  const active = isMarketingNavActive(pathname, href)

  if (mobile) {
    return (
      <Link
        href={href}
        data-slot="marketing-nav-link"
        data-active={active ? 'true' : 'false'}
        onClick={onNavigate}
        className={cn(
          'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
          active ? 'bg-accent font-semibold text-foreground' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
        )}
      >
        {label}
      </Link>
    )
  }

  return (
    <Link href={href} data-slot="marketing-nav-link" data-active={active ? 'true' : 'false'} style={navLinkStyle(active)}>
      {label}
    </Link>
  )
}

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="marketing-header sticky top-0 z-sticky border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div
        className="marketing-header-row mx-auto flex max-w-6xl items-center gap-3 px-4 sm:gap-4 sm:px-6"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          maxWidth: '72rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 56,
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
          <LatticeLogo size="xs" showWordmark compact />
        </Link>
        <Badge variant="secondary" className="marketing-header-badge hidden shrink-0 sm:inline-flex">
          v1.0
        </Badge>

        <nav data-slot="marketing-nav" className="marketing-header-nav" aria-label="Main">
          {siteNavLinks.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div
          className="marketing-header-actions ml-auto flex shrink-0 items-center gap-2"
          style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto', flexShrink: 0 }}
        >
          <ThemeToggle />
          <Button variant="outline" size="sm" className="marketing-header-desktop-cta" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button size="sm" className="marketing-header-desktop-cta" asChild>
            <Link href="/docs">Get started</Link>
          </Button>
          <HeaderMenuButton
            open={mobileOpen}
            onToggle={() => setMobileOpen((open) => !open)}
            controlsId="mobile-nav"
          />
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn('marketing-mobile-nav border-t border-border bg-background lattice-fade-in')}
        style={{ display: mobileOpen ? 'block' : 'none' }}
      >
        <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '16px' }}>
          {siteNavLinks.map((link) => (
            <NavLinkItem
              key={link.href}
              href={link.href}
              label={link.label}
              mobile
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                GitHub
              </a>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/docs" onClick={() => setMobileOpen(false)}>
                Get started
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
