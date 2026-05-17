/** Compact status label; inline height from control-sizes for cross-app consistency. */
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { badgeSizeStyle } from '../lib/control-sizes'
import { inlineFlexCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border text-xs font-medium leading-none transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        outline: 'border-border text-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        success: 'border-transparent bg-success/15 text-success',
        warning: 'border-transparent bg-warning/15 text-warning',
        ghost: 'border-transparent bg-transparent text-muted-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

/** Props for {@link Badge}. */
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, style, variant, ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      style={{ ...inlineFlexCenter, ...badgeSizeStyle, lineHeight: 1, ...style }}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
