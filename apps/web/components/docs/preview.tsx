'use client'

import { cn } from '@/lib/utils'

const previewAlignStyle = (align: 'center' | 'start'): React.CSSProperties => ({
  display: 'flex',
  alignItems: align === 'center' ? 'center' : 'flex-start',
  justifyContent: align === 'center' ? 'center' : 'flex-start',
})

export function Preview({
  children,
  className,
  style,
  checkerboard,
  align = 'center',
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  checkerboard?: boolean
  align?: 'center' | 'start'
}) {
  return (
    <div
      data-slot="preview"
      className={cn(
        'relative flex min-h-[112px] w-full rounded-lg border border-border p-4',
        align === 'center' ? 'items-center justify-center' : 'items-start justify-start',
        checkerboard &&
          'bg-muted/50 bg-[linear-gradient(45deg,var(--muted)_25%,transparent_25%),linear-gradient(-45deg,var(--muted)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,var(--muted)_75%),linear-gradient(-45deg,transparent_75%,var(--muted)_75%)] bg-[length:16px_16px] bg-[position:0_0,0_8px,8px_-8px,-8px_0px]',
        !checkerboard && 'bg-card shadow-sm',
        className,
      )}
      style={{
        ...previewAlignStyle(align),
        position: 'relative',
        minHeight: 112,
        width: '100%',
        padding: 16,
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        backgroundColor: checkerboard ? undefined : 'var(--card)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
