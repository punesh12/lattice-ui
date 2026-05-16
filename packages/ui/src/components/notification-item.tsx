import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const notificationItemVariants = cva(
  'flex gap-3 rounded-lg border p-4 transition-colors duration-150',
  {
    variants: {
      variant: {
        default: 'border-border bg-card',
        unread: 'border-primary/30 bg-primary/5',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface NotificationItemProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof notificationItemVariants> {
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  time?: React.ReactNode
  action?: React.ReactNode
}

function NotificationItem({
  className,
  variant,
  icon,
  title,
  description,
  time,
  action,
  ...props
}: NotificationItemProps) {
  return (
    <div
      data-slot="notification-item"
      className={cn(notificationItemVariants({ variant }), className)}
      {...props}
    >
      {icon ? <div className="shrink-0 text-muted-foreground">{icon}</div> : null}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm font-medium">{title}</p>
          {time ? <span className="shrink-0 text-xs text-muted-foreground">{time}</span> : null}
        </div>
        {description ? <p className="mt-0.5 text-sm text-muted-foreground">{description}</p> : null}
        {action ? <div className="mt-2">{action}</div> : null}
      </div>
    </div>
  )
}

export { NotificationItem, notificationItemVariants }
