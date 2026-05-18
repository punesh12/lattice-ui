import Link from 'next/link'
import { LatticeLogo, Separator } from '@punesh12/lattice-ui'

const links = {
  Product: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Playground', href: '/playground' },
  ],
  Resources: [
    { label: 'Installation', href: '/docs/installation' },
    { label: 'Theming', href: '/docs/theming' },
    { label: 'Colors', href: '/docs/colors' },
  ],
}

export const Footer = () => (
  <footer className="border-t border-border px-4 py-10 sm:px-6 sm:py-12">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <LatticeLogo size="xs" showWordmark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Structured components for modern interfaces. Open source and built for React 19.
          </p>
        </div>
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <p className="text-sm font-semibold">{title}</p>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className="my-8" />
      <p className="text-center text-xs text-muted-foreground sm:text-sm">
        © {new Date().getFullYear()} Lattice UI. All rights reserved.
      </p>
    </div>
  </footer>
)
