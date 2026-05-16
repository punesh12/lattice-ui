import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react'
import { cn } from '../lib/utils'

const alertVariants = cva('relative flex w-full gap-3 rounded-lg border px-4 py-3', {
  variants: {
    variant: {
      default: 'border-border bg-background text-foreground',
      info: 'border-info/30 bg-info/10 text-foreground',
      success: 'border-success/30 bg-success/10 text-foreground',
      warning: 'border-warning/30 bg-warning/10 text-foreground',
      error: 'border-error/30 bg-error/10 text-foreground',
    },
  },
  defaultVariants: { variant: 'default' },
})

const iconVariants = {
  default: 'text-foreground',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
} as const

const icons = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
  error: AlertCircle,
} as const

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant = 'default', children, ...props }, ref) => {
  const resolved = variant ?? 'default'
  const Icon = icons[resolved]
  return (
    <div data-slot="alert" ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
      <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', iconVariants[resolved])} />
      <div className="min-w-0 flex-1 space-y-1">{children}</div>
    </div>
  )
})
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 data-slot="alert-title" ref={ref} className={cn('font-medium leading-snug tracking-tight', className)} {...props} />
  ),
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div data-slot="alert-description" ref={ref} className={cn('text-sm leading-relaxed text-muted-foreground', className)} {...props} />
  ),
)
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription, alertVariants }
