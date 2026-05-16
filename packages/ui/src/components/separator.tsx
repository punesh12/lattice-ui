import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '../lib/utils'

export interface SeparatorProps extends React.ComponentPropsWithoutRef<
  typeof SeparatorPrimitive.Root
> {}

const getSeparatorStyle = (orientation: 'horizontal' | 'vertical'): React.CSSProperties => ({
  flexShrink: 0,
  backgroundColor: 'var(--border)',
  ...(orientation === 'horizontal'
    ? { height: 1, width: '100%', minHeight: 1 }
    : { width: 1, height: '100%', minWidth: 1 }),
})

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, orientation = 'horizontal', decorative = true, style, ...props }, ref) => (
  <SeparatorPrimitive.Root
    data-slot="separator"
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      className,
    )}
    style={{ ...getSeparatorStyle(orientation), ...style }}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
