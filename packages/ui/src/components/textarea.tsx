import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const textareaVariants = cva(
  'flex w-full rounded-md border border-input bg-background text-foreground shadow-sm transition-colors duration-150 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:ring-error/30',
  {
    variants: {
      size: {
        sm: 'min-h-[72px] px-3 py-2 text-sm',
        default: 'min-h-[88px] px-3 py-2.5 text-sm',
        lg: 'min-h-[104px] px-4 py-3 text-base',
      },
    },
    defaultVariants: { size: 'default' },
  },
)

export interface TextareaProps
  extends
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, ...props }, ref) => (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ size, className }))}
      ref={ref}
      {...props}
    />
  ),
)
Textarea.displayName = 'Textarea'

export { Textarea, textareaVariants }
