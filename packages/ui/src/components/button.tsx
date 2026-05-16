import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { controlHeights, controlPaddingX, filledButtonLabelStyle } from '../lib/control-sizes'
import { cn } from '../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium leading-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-hover',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'border border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive text-white hover:bg-destructive/90',
        link: 'h-auto min-h-0 px-0 text-primary underline-offset-4 hover:underline',
        soft: 'bg-primary/10 text-primary hover:bg-primary/15',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        default: 'text-sm',
        lg: 'text-base',
        'icon-xs': 'p-0',
        'icon-sm': 'p-0',
        icon: 'p-0',
        'icon-lg': 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const iconSizes = {
  'icon-xs': 32,
  'icon-sm': 36,
  icon: 44,
  'icon-lg': 48,
} as const

const FILLED_VARIANTS = new Set(['default', 'destructive'])

const variantInlineStyle = (variant: string | null | undefined): React.CSSProperties => {
  switch (variant ?? 'default') {
    case 'secondary':
      return { backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }
    case 'outline':
      return {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
      }
    case 'ghost':
      return { backgroundColor: 'transparent', color: 'var(--foreground)' }
    case 'destructive':
      return { backgroundColor: 'var(--destructive)', color: '#ffffff' }
    case 'link':
      return { backgroundColor: 'transparent', color: 'var(--primary)', border: 'none' }
    case 'soft':
      return {
        backgroundColor: 'color-mix(in srgb, var(--primary) 10%, transparent)',
        color: 'var(--primary)',
      }
    case 'default':
    default:
      return { backgroundColor: 'var(--primary)', color: '#ffffff' }
  }
}

const buttonLayoutStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  gap: 8,
  boxSizing: 'border-box',
  verticalAlign: 'middle',
  WebkitAppearance: 'none',
  appearance: 'none',
}

const getButtonStyle = (
  size: keyof typeof controlHeights | keyof typeof iconSizes | null | undefined,
  variant: string | null | undefined,
): React.CSSProperties => {
  const resolvedVariant = variant ?? 'default'
  const filledLabel = FILLED_VARIANTS.has(resolvedVariant) ? filledButtonLabelStyle : undefined
  const surface = variantInlineStyle(resolvedVariant)

  if (resolvedVariant === 'link') {
    return { ...buttonLayoutStyle, ...surface, ...filledLabel }
  }

  if (size && size in iconSizes) {
    const s = iconSizes[size as keyof typeof iconSizes]
    return { ...buttonLayoutStyle, ...surface, width: s, height: s, minWidth: s, minHeight: s, ...filledLabel }
  }

  const key = (size && size in controlHeights ? size : 'default') as keyof typeof controlHeights
  return {
    ...buttonLayoutStyle,
    ...surface,
    height: controlHeights[key],
    minHeight: controlHeights[key],
    paddingLeft: controlPaddingX[key],
    paddingRight: controlPaddingX[key],
    borderRadius: 'calc(var(--radius) - 2px)',
    ...filledLabel,
  }
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  /** Override label color — `foreground` matches body text (e.g. dark theme copy on light buttons). */
  textTone?: 'default' | 'foreground'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, style, asChild = false, loading, disabled, textTone = 'default', children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const sizeStyle = getButtonStyle(size ?? 'default', variant)

    return (
      <Comp
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size }),
          textTone === 'foreground' && variant !== 'default' && variant !== 'destructive' && 'text-foreground',
          className,
        )}
        style={{ ...sizeStyle, ...style }}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading ? <Loader2 className="h-4 w-4 lattice-spin" aria-hidden /> : null}
            {children}
          </>
        )}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
