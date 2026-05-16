import * as React from 'react'
import { flexColCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'

export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}

function EmptyState({
  className,
  style,
  icon,
  title,
  description,
  action,
  ...props
}: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-border p-12 text-center',
        className,
      )}
      style={{
        ...flexColCenter,
        gap: 12,
        padding: 48,
        textAlign: 'center',
        borderRadius: 'var(--radius)',
        border: '1px dashed var(--border)',
        ...style,
      }}
      {...props}
    >
      {icon ? <div style={{ color: 'var(--muted-foreground)' }}>{icon}</div> : null}
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>{title}</h3>
      {description ? (
        <p
          style={{
            margin: 0,
            maxWidth: '24rem',
            fontSize: 14,
            color: 'var(--muted-foreground)',
            textAlign: 'center',
          }}
        >
          {description}
        </p>
      ) : null}
      {action ? <div style={{ marginTop: 8 }}>{action}</div> : null}
    </div>
  )
}

export { EmptyState }
