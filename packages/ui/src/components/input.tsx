import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { controlHeights, controlPaddingX } from '../lib/control-sizes'
import { cn } from '../lib/utils'

const inputSizeStyle = (
  size: keyof typeof controlHeights = 'default',
  affix?: { prefix?: boolean; suffix?: boolean },
): React.CSSProperties => {
  const h = controlHeights[size]
  const pad = controlPaddingX[size]
  return {
    height: h,
    minHeight: h,
    paddingLeft: affix?.prefix ? pad + 28 : pad,
    paddingRight: affix?.suffix ? pad + 36 : pad,
  }
}

const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-background text-foreground shadow-sm transition-colors duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:ring-error/30',
  {
    variants: {
      size: {
        sm: 'h-9 px-3 text-sm min-h-9',
        default: 'h-11 px-3 text-sm min-h-11',
        lg: 'h-12 px-4 text-base min-h-12',
      },
    },
    defaultVariants: { size: 'default' },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, style, ...props }, ref) => {
    const sizeKey = (size ?? 'default') as keyof typeof controlHeights
    return (
      <input
        data-slot="input"
        type={type}
        className={cn(inputVariants({ size, className }))}
        style={{ ...inputSizeStyle(sizeKey), ...style }}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

const InputGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div data-slot="input-group" ref={ref} className={cn('relative w-full', className)} {...props} />
  ),
)
InputGroup.displayName = 'InputGroup'

const affixStyle = (side: 'left' | 'right'): React.CSSProperties => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  ...(side === 'left' ? { left: controlPaddingX.default } : { right: controlPaddingX.default }),
})

const InputPrefix = ({ className, style, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    data-slot="input-prefix"
    className={cn('pointer-events-none z-[1] text-muted-foreground', className)}
    style={{ ...affixStyle('left'), ...style }}
    {...props}
  />
)

const InputSuffix = ({ className, style, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    data-slot="input-suffix"
    className={cn('pointer-events-none z-[1] text-muted-foreground', className)}
    style={{ ...affixStyle('right'), ...style }}
    {...props}
  />
)

export { Input, InputGroup, InputPrefix, InputSuffix, inputVariants }
