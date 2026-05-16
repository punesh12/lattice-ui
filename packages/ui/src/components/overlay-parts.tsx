'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  CONTENT_Z_INDEX,
  OVERLAY_BACKDROP_CLASS,
  OVERLAY_CLOSE_CLASS,
  OVERLAY_Z_INDEX,
  overlayBackdropInlineStyle,
  overlayCloseInlineStyle,
} from '../lib/overlay-styles'

export const overlayBackdropStyle: React.CSSProperties = {
  zIndex: OVERLAY_Z_INDEX,
  ...overlayBackdropInlineStyle,
}

export const overlayContentStyle: React.CSSProperties = {
  zIndex: CONTENT_Z_INDEX,
}

export type OverlayBackdropProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
> & {
  'data-slot': string
}

export const OverlayBackdrop = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  OverlayBackdropProps
>(({ className, style, 'data-slot': dataSlot, ...props }, ref) => (
  <DialogPrimitive.Overlay
    data-slot={dataSlot}
    ref={ref}
    className={cn(OVERLAY_BACKDROP_CLASS, className)}
    style={{ ...overlayBackdropStyle, ...style }}
    {...props}
  />
))
OverlayBackdrop.displayName = 'OverlayBackdrop'

export type OverlayCloseButtonProps = {
  'data-slot': string
}

export const OverlayCloseButton = ({ 'data-slot': dataSlot }: OverlayCloseButtonProps) => (
  <DialogPrimitive.Close
    data-slot={dataSlot}
    className={OVERLAY_CLOSE_CLASS}
    style={overlayCloseInlineStyle}
    aria-label="Close"
  >
    <X className="h-4 w-4" />
  </DialogPrimitive.Close>
)

export const createOverlaySection =
  (dataSlot: string, baseClassName: string) =>
  ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div data-slot={dataSlot} className={cn(baseClassName, className)} {...props} />
  )
