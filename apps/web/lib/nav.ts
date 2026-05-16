/** Returns whether a docs nav link should render as active for the current path. */
export const isNavActive = (pathname: string, href: string): boolean => {
  if (pathname === href) return true
  if (href === '/docs' || href === '/docs/components') return pathname === href
  if (href.startsWith('/docs/components/')) return pathname === href
  return pathname.startsWith(`${href}/`)
}

/** Active state for marketing site header links. */
export const isMarketingNavActive = (pathname: string, href: string): boolean => {
  if (href === '/playground') return pathname.startsWith('/playground')
  if (href === '/docs/components') return pathname.startsWith('/docs/components')
  if (href === '/docs') {
    return (
      pathname === '/docs' ||
      (pathname.startsWith('/docs/') && !pathname.startsWith('/docs/components'))
    )
  }
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
