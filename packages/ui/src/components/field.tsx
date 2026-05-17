import * as React from 'react'
import { cn } from '../lib/utils'
import { Label } from './label'

const fieldStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}

const fieldDescriptionStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.5,
  color: 'var(--muted-foreground)',
  margin: 0,
}

const fieldErrorStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.5,
  color: 'var(--error)',
  margin: 0,
}

type ControlProps = {
  id?: string
  error?: boolean
  'aria-invalid'?: boolean | 'true' | 'false' | 'grammar' | 'spelling'
  'aria-describedby'?: string
}

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode
  description?: React.ReactNode
  /** Error message; applies invalid styling to the field control */
  error?: React.ReactNode
  htmlFor?: string
  required?: boolean
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, style, label, description, error, htmlFor, required, children, ...props }, ref) => {
    const hasError = Boolean(error)
    const errorId = hasError && htmlFor ? `${htmlFor}-error` : undefined
    const descId = description && htmlFor ? `${htmlFor}-description` : undefined
    const describedBy = [descId, errorId].filter(Boolean).join(' ') || undefined

    let control = children
    if (hasError && React.Children.count(children) === 1) {
      const child = React.Children.only(children) as React.ReactElement<ControlProps>
      const existingDescribedBy = child.props['aria-describedby']
      control = React.cloneElement(child, {
        id: child.props.id ?? htmlFor,
        error: child.props.error ?? true,
        'aria-invalid': child.props['aria-invalid'] ?? true,
        'aria-describedby':
          [existingDescribedBy, describedBy].filter(Boolean).join(' ') || undefined,
      })
    } else if (htmlFor && React.Children.count(children) === 1) {
      const child = React.Children.only(children) as React.ReactElement<ControlProps>
      control = React.cloneElement(child, {
        id: child.props.id ?? htmlFor,
        'aria-describedby':
          [child.props['aria-describedby'], describedBy].filter(Boolean).join(' ') || undefined,
      })
    }

    return (
      <div
        data-slot="field"
        ref={ref}
        className={cn('flex flex-col gap-2', className)}
        style={{ ...fieldStyle, ...style }}
        {...props}
      >
        {label ? (
          <Label htmlFor={htmlFor}>
            {label}
            {required ? (
              <span style={{ marginLeft: 2, color: 'var(--destructive)' }}>*</span>
            ) : null}
          </Label>
        ) : null}
        {control}
        {description ? (
          <p id={descId} style={fieldDescriptionStyle}>
            {description}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} role="alert" style={fieldErrorStyle}>
            {error}
          </p>
        ) : null}
      </div>
    )
  },
)
Field.displayName = 'Field'

function FieldGroup({ className, style, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="field-group"
      className={cn('flex flex-col gap-4', className)}
      style={{ display: 'flex', flexDirection: 'column', gap: 16, ...style }}
      {...props}
    />
  )
}

export { Field, FieldGroup }
