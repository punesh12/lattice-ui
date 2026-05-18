'use client'

import { cn } from '@punesh12/lattice-ui'

export type TocItem = { id: string; title: string; level: number }

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="sticky top-24 hidden xl:block">
      <p className="mb-3 text-sm font-medium">On this page</p>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <a
              href={`#${item.id}`}
              className={cn(
                'text-muted-foreground transition-colors hover:text-foreground',
                item.level === 2 && 'font-medium',
              )}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
