/** Keyboard key hint styled with inline flex centering for docs and shortcuts UI. */
import * as React from 'react'
import { inlineFlexCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {}

function Kbd({ className, style, ...props }: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground',
        className,
      )}
      style={{
        ...inlineFlexCenter,
        height: 20,
        minWidth: 20,
        minHeight: 20,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 4,
        border: '1px solid var(--border)',
        backgroundColor: 'var(--muted)',
        color: 'var(--muted-foreground)',
        fontFamily: 'var(--font-mono)',
        fontSize: 10,
        fontWeight: 500,
        lineHeight: 1,
        ...style,
      }}
      {...props}
    />
  )
}

export { Kbd }
