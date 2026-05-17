import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertCircle, CheckCircle2, Info, TriangleAlert } from 'lucide-react'
import { cn } from '../lib/utils'

const ALERT_ICON_SIZE = 16
const ALERT_TITLE_LINE_HEIGHT = 20

const alertVariants = cva('relative w-full rounded-lg border px-4 py-3', {
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

const iconColors = {
  default: 'var(--foreground)',
  info: 'var(--info)',
  success: 'var(--success)',
  warning: 'var(--warning)',
  error: 'var(--error)',
} as const

const icons = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: TriangleAlert,
  error: AlertCircle,
} as const

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

function hasAlertTitle(children: React.ReactNode) {
  return React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === AlertTitle,
  )
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', children, style, ...props }, ref) => {
    const resolved = variant ?? 'default'
    const Icon = icons[resolved]
    const titleLineHeight = hasAlertTitle(children) ? ALERT_TITLE_LINE_HEIGHT : 22

    return (
      <div
        data-slot="alert"
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        style={{
          display: 'flex',
          width: '100%',
          gap: 12,
          alignItems: 'flex-start',
          boxSizing: 'border-box',
          ...style,
        }}
        {...props}
      >
        <span
          data-slot="alert-icon"
          aria-hidden
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            width: ALERT_ICON_SIZE,
            height: titleLineHeight,
          }}
        >
          <Icon
            style={{
              width: ALERT_ICON_SIZE,
              height: ALERT_ICON_SIZE,
              color: iconColors[resolved],
            }}
          />
        </span>
        <div
          data-slot="alert-content"
          style={{
            minWidth: 0,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {children}
        </div>
      </div>
    )
  },
)
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, style, ...props }, ref) => (
    <h5
      data-slot="alert-title"
      ref={ref}
      className={cn('font-medium leading-snug tracking-tight', className)}
      style={{
        margin: 0,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: `${ALERT_TITLE_LINE_HEIGHT}px`,
        letterSpacing: '-0.01em',
        color: 'var(--foreground)',
        ...style,
      }}
      {...props}
    />
  ),
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, style, ...props }, ref) => (
  <div
    data-slot="alert-description"
    ref={ref}
    className={cn('text-sm leading-relaxed text-muted-foreground', className)}
    style={{
      margin: 0,
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--muted-foreground)',
      ...style,
    }}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription, alertVariants }
