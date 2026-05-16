import * as React from 'react'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import { cn } from '../lib/utils'

export interface AspectRatioProps extends React.ComponentPropsWithoutRef<
  typeof AspectRatioPrimitive.Root
> {}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ className, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    data-slot="aspect-ratio"
    ref={ref}
    className={cn('relative overflow-hidden', className)}
    {...props}
  />
))
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName

export { AspectRatio }
