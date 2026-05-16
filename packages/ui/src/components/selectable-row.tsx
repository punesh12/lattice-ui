import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const selectableRowVariants = cva(
  'flex w-full cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11',
  {
    variants: {
      state: {
        default: 'border-border bg-background hover:bg-accent',
        selected: 'border-primary bg-primary/10 text-primary',
        error: 'border-error bg-error/10 text-error',
      },
    },
    defaultVariants: { state: 'default' },
  },
)

export interface SelectableRowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof selectableRowVariants> {}

const SelectableRow = React.forwardRef<HTMLButtonElement, SelectableRowProps>(
  ({ className, state, ...props }, ref) => (
    <button data-slot="selectable-row" type="button" ref={ref} className={cn(selectableRowVariants({ state }), className)} {...props} />
  ),
)
SelectableRow.displayName = 'SelectableRow'

export { SelectableRow, selectableRowVariants }
