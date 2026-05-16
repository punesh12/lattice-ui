import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ComponentDoc } from '@/lib/docs'

export function DocPager({ prev, next }: { prev: ComponentDoc | null; next: ComponentDoc | null }) {
  return (
    <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
      {prev ? (
        <Link
          href={`/docs/components/${prev.slug}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          {prev.title}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/docs/components/${next.slug}`}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          {next.title}
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}
