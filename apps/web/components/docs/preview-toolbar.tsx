'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CodeBlock } from './code-block'
import { Preview } from './preview'

export function PreviewToolbar({
  children,
  code,
  checkerboard,
  align = 'start',
  previewClassName,
}: {
  children: React.ReactNode
  code: string
  checkerboard?: boolean
  align?: 'center' | 'start'
  previewClassName?: string
}) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview')

  return (
    <div
      data-slot="preview-toolbar"
      className="my-6 overflow-hidden rounded-lg border border-border"
    >
      <div className="flex border-b border-border bg-muted/30">
        {(['preview', 'code'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              'px-4 py-2.5 text-sm font-medium capitalize transition-colors',
              tab === t
                ? 'border-b-2 border-primary text-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {t}
          </button>
        ))}
      </div>
      {tab === 'preview' ? (
        <Preview
          checkerboard={checkerboard}
          align={align}
          className={cn('rounded-none border-0 shadow-none', previewClassName)}
        >
          {children}
        </Preview>
      ) : (
        <CodeBlock code={code} className="rounded-none border-0" />
      )}
    </div>
  )
}
