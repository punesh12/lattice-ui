'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@lattice-ui/ui'
import { docsConfig } from '@/lib/docs'
import { isMarketingNavActive, isNavActive } from '@/lib/nav'
import { siteNavLinks } from '@/lib/site-nav'

type NavSectionProps = {
  title: string
  children: React.ReactNode
}

const NavSection = ({ title, children }: NavSectionProps) => (
  <div className="mb-6">
    <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
    <nav className="space-y-0.5">{children}</nav>
  </div>
)

type NavLinkProps = {
  href: string
  children: React.ReactNode
  onNavigate?: () => void
  activeFn?: (pathname: string, href: string) => boolean
}

const NavLink = ({ href, children, onNavigate, activeFn = isNavActive }: NavLinkProps) => {
  const pathname = usePathname()
  const active = activeFn(pathname, href)

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        'block rounded-md px-3 py-2 text-sm transition-colors',
        active ? 'bg-sidebar-accent font-medium text-foreground' : 'text-muted-foreground hover:bg-sidebar-accent hover:text-foreground',
      )}
    >
      {children}
    </Link>
  )
}

type DocsNavTreeProps = {
  onNavigate?: () => void
  showSiteLinks?: boolean
}

export function DocsNavTree({ onNavigate, showSiteLinks = false }: DocsNavTreeProps) {
  return (
    <div>
      {showSiteLinks ? (
        <NavSection title="Site">
          {siteNavLinks.map((link) => (
            <NavLink key={link.href} href={link.href} onNavigate={onNavigate} activeFn={isMarketingNavActive}>
              {link.label}
            </NavLink>
          ))}
        </NavSection>
      ) : null}
      <NavSection title="Getting Started">
        {docsConfig.gettingStarted.map((item) => (
          <NavLink key={item.href} href={item.href} onNavigate={onNavigate}>
            {item.title}
          </NavLink>
        ))}
      </NavSection>
      <NavSection title="Foundations">
        {docsConfig.foundations.map((item) => (
          <NavLink key={item.href} href={item.href} onNavigate={onNavigate}>
            {item.title}
          </NavLink>
        ))}
      </NavSection>
      <NavSection title="Components">
        <NavLink href="/docs/components" onNavigate={onNavigate}>
          Overview
        </NavLink>
        {docsConfig.components.map((item) => (
          <NavLink key={item.slug} href={`/docs/components/${item.slug}`} onNavigate={onNavigate}>
            {item.title}
          </NavLink>
        ))}
      </NavSection>
    </div>
  )
}
