/** Styled anchor with CVA variants for inline navigation and destructive links. */
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const linkVariants = cva(
  'inline-flex items-center gap-1 font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      variant: {
        default: 'text-primary hover:text-primary-hover underline-offset-4 hover:underline',
        muted: 'text-muted-foreground hover:text-foreground',
        destructive:
          'text-destructive hover:text-destructive/80 underline-offset-4 hover:underline',
      },
      size: {
        sm: 'text-sm',
        default: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

/** Props for {@link Link}. */
export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      data-slot="link"
      ref={ref}
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    />
  ),
)
Link.displayName = 'Link'

export { Link, linkVariants }
