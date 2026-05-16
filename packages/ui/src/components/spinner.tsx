import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'

const spinnerVariants = cva('lattice-spin shrink-0 text-primary', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      default: 'h-5 w-5',
      lg: 'h-8 w-8',
    },
  },
  defaultVariants: { size: 'default' },
})

export interface SpinnerProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

function Spinner({ className, size, label = 'Loading', ...props }: SpinnerProps) {
  return (
    <Loader2
      data-slot="spinner"
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  )
}

export { Spinner, spinnerVariants }
