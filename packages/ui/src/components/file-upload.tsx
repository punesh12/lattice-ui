import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Upload } from 'lucide-react'
import { flexColCenter, visuallyHidden } from '../lib/layout-styles'
import { cn } from '../lib/utils'

const fileUploadVariants = cva(
  'flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      state: {
        default: 'border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/50',
        active: 'border-primary bg-primary/5',
        error: 'border-error bg-error/5',
        disabled: 'cursor-not-allowed opacity-50',
      },
    },
    defaultVariants: { state: 'default' },
  },
)

export interface FileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof fileUploadVariants> {
  label?: React.ReactNode
  description?: React.ReactNode
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, state, style, label = 'Drop files here or click to browse', description, disabled, ...props }, ref) => {
    const [dragging, setDragging] = React.useState(false)
    const resolvedState = disabled ? 'disabled' : dragging ? 'active' : state

    return (
      <label
        data-slot="file-upload"
        className={cn(fileUploadVariants({ state: resolvedState }), className)}
        style={{
          ...flexColCenter,
          gap: 8,
          padding: '40px 24px',
          textAlign: 'center',
          borderRadius: 'var(--radius)',
          borderWidth: 2,
          borderStyle: 'dashed',
          cursor: disabled ? 'not-allowed' : 'pointer',
          ...style,
        }}
        onDragOver={(e) => {
          e.preventDefault()
          if (!disabled) setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={() => setDragging(false)}
      >
        <Upload className="h-8 w-8 text-muted-foreground" />
        <span className="text-sm font-medium">{label}</span>
        {description ? <span className="text-xs text-muted-foreground">{description}</span> : null}
        <input ref={ref} type="file" style={visuallyHidden} disabled={disabled} {...props} />
      </label>
    )
  },
)
FileUpload.displayName = 'FileUpload'

export { FileUpload, fileUploadVariants }
