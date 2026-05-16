'use client'

import { useState } from 'react'
import { cn } from '@lattice-ui/ui'
import { CodeBlock } from './code-block'

const managers = ['npm', 'pnpm', 'yarn', 'bun'] as const

export function CodeTabs({ commands }: { commands: Record<(typeof managers)[number], string> }) {
  const [active, setActive] = useState<(typeof managers)[number]>('pnpm')

  return (
    <div data-slot="code-tabs" className="space-y-2">
      <div className="flex gap-1 rounded-lg border border-border p-1">
        {managers.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setActive(m)}
            className={cn(
              'rounded-md px-3 py-1.5 text-xs font-medium capitalize transition-colors',
              active === m ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {m}
          </button>
        ))}
      </div>
      <CodeBlock code={commands[active]} />
    </div>
  )
}
