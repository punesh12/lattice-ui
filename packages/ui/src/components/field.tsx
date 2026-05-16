import * as React from 'react'
import { cn } from '../lib/utils'
import { Label } from './label'

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode
  description?: React.ReactNode
  error?: React.ReactNode
  htmlFor?: string
  required?: boolean
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, description, error, htmlFor, required, children, ...props }, ref) => {
    const errorId = error ? `${htmlFor}-error` : undefined
    const descId = description ? `${htmlFor}-description` : undefined

    return (
      <div data-slot="field" ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
        {label ? (
          <Label htmlFor={htmlFor}>
            {label}
            {required ? <span className="ml-0.5 text-destructive">*</span> : null}
          </Label>
        ) : null}
        {children}
        {description ? (
          <p id={descId} className="text-sm text-muted-foreground">
            {description}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} role="alert" className="text-sm text-error">
            {error}
          </p>
        ) : null}
      </div>
    )
  },
)
Field.displayName = 'Field'

function FieldGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="field-group" className={cn('flex flex-col gap-4', className)} {...props} />
}

export { Field, FieldGroup }
