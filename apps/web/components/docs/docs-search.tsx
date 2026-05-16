'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { getAllDocRoutes } from '@/lib/docs'

/** Matches header control height (sm = 36px). */
const SEARCH_HEIGHT_PX = 36

export const DocsSearch = () => {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const routes = getAllDocRoutes()
  const filtered = query ? routes.filter((r) => r.title.toLowerCase().includes(query.toLowerCase())) : []

  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <Input
        type="search"
        size="sm"
        placeholder="Search docs..."
        aria-label="Search documentation"
        className={cn('rounded-full border-border/80 bg-background pl-9 shadow-sm')}
        style={{
          height: SEARCH_HEIGHT_PX,
          minHeight: SEARCH_HEIGHT_PX,
          paddingLeft: 36,
          paddingRight: 14,
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && filtered[0]) {
            router.push(filtered[0].href)
            setQuery('')
          }
        }}
      />
      {query && filtered.length > 0 ? (
        <ul className="absolute z-popover mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-popover p-1 shadow-md lattice-fade-in">
          {filtered.slice(0, 8).map((r) => (
            <li key={r.href}>
              <button
                type="button"
                className="w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
                onClick={() => {
                  router.push(r.href)
                  setQuery('')
                }}
              >
                {r.title}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
