import * as React from 'react'
import { cn } from '../lib/utils'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode
}

function Divider({ className, label, ...props }: DividerProps) {
  if (label) {
    return (
      <div data-slot="divider" className={cn('relative flex items-center py-2', className)} {...props}>
        <div className="flex-1 border-t border-border" />
        <span className="px-3 text-xs font-medium text-muted-foreground">{label}</span>
        <div className="flex-1 border-t border-border" />
      </div>
    )
  }

  return <div data-slot="divider" className={cn('h-px w-full bg-border', className)} {...props} />
}

export { Divider }
