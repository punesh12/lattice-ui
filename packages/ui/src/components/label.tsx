/** Radix Label for associating copy with a control via htmlFor / implicit nesting. */
import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const labelVariants = cva(
  'text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      size: {
        sm: 'text-xs',
        default: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: { size: 'default' },
  },
)

/** Props for {@link Label}. */
export interface LabelProps
  extends
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, size, ...props }, ref) => (
    <LabelPrimitive.Root
      data-slot="label"
      ref={ref}
      className={cn(labelVariants({ size, className }))}
      {...props}
    />
  ),
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label, labelVariants }
