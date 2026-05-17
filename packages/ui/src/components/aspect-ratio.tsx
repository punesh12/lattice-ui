/** Radix AspectRatio with preset variant ratios (square, video, portrait). */
import * as React from 'react'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const aspectRatioVariants = cva('relative overflow-hidden', {
  variants: {
    variant: {
      square: '',
      video: '',
      portrait: '',
      photo: '',
      cinema: '',
      ultrawide: '',
    },
  },
  defaultVariants: {
    variant: 'video',
  },
})

const ratioByVariant = {
  square: 1,
  video: 16 / 9,
  portrait: 4 / 5,
  photo: 4 / 3,
  cinema: 21 / 9,
  ultrawide: 2,
} as const

export type AspectRatioVariant = keyof typeof ratioByVariant

/** Props for {@link AspectRatio} — `variant` picks a preset width/height ratio. */
export interface AspectRatioProps
  extends
    React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>,
    VariantProps<typeof aspectRatioVariants> {
  /** Explicit ratio; overrides `variant` when provided */
  ratio?: number
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ className, style, variant, ratio, ...props }, ref) => {
  const resolvedVariant = variant ?? 'video'
  const resolvedRatio = ratio ?? ratioByVariant[resolvedVariant]

  return (
    <AspectRatioPrimitive.Root
      data-slot="aspect-ratio"
      data-variant={resolvedVariant}
      ref={ref}
      ratio={resolvedRatio}
      className={cn(aspectRatioVariants({ variant: resolvedVariant }), className)}
      style={{ overflow: 'hidden', ...style }}
      {...props}
    />
  )
})
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName

export { AspectRatio, aspectRatioVariants, ratioByVariant }
