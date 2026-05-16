import * as React from 'react'
import { X } from 'lucide-react'
import { flexRowWrapCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'
import { Button } from './button'

export interface FilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
  onClear?: () => void
  clearLabel?: string
}

function FilterBar({ className, style, children, onClear, clearLabel = 'Clear all', ...props }: FilterBarProps) {
  return (
    <div
      data-slot="filter-bar"
      className={cn('flex flex-wrap items-center gap-2', className)}
      style={{ ...flexRowWrapCenter, gap: 8, ...style }}
      {...props}
    >
      {children}
      {onClear ? (
        <Button data-slot="filter-bar-clear" type="button" variant="ghost" size="sm" onClick={onClear} className="text-muted-foreground">
          <X className="mr-1 h-3.5 w-3.5" />
          {clearLabel}
        </Button>
      ) : null}
    </div>
  )
}

export { FilterBar }
