export type SiteNavLink = {
  href: string
  label: string
  /** Opens in a new tab (e.g. Storybook, GitHub). */
  external?: boolean
}

/** Set `NEXT_PUBLIC_STORYBOOK_URL` in production when Storybook is deployed. */
export const storybookUrl = process.env.NEXT_PUBLIC_STORYBOOK_URL ?? 'http://localhost:6006'

export const siteNavLinks: SiteNavLink[] = [
  { href: '/docs', label: 'Docs' },
  { href: '/docs/components', label: 'Components' },
  { href: '/playground', label: 'Playground' },
  { href: storybookUrl, label: 'Storybook', external: true },
]
