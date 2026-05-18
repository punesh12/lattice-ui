'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { Button, cn } from '@punesh12/lattice-ui'

export function CodeBlock({ code, className }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div data-slot="code-block" className={cn('group relative', className)}>
      <pre className="overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">
        <code>{code}</code>
      </pre>
      <Button
        variant="ghost"
        size="icon-xs"
        className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
        aria-label="Copy code"
        onClick={copy}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </Button>
    </div>
  )
}
