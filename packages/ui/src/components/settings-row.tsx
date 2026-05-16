import * as React from 'react'
import { cn } from '../lib/utils'

export interface SettingsRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode
  description?: React.ReactNode
  control?: React.ReactNode
}

function SettingsRow({ className, label, description, control, ...props }: SettingsRowProps) {
  return (
    <div
      data-slot="settings-row"
      className={cn('flex items-center justify-between gap-4 border-b border-border py-4 last:border-0 min-h-11', className)}
      {...props}
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">{label}</span>
        {description ? <span className="text-sm text-muted-foreground">{description}</span> : null}
      </div>
      {control ? <div data-slot="settings-row-control">{control}</div> : null}
    </div>
  )
}

export { SettingsRow }
