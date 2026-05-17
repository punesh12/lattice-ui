'use client'

/**
 * Shared Radix Dialog overlay pieces (backdrop, close, section factory).
 * Client boundary matches Radix Dialog primitives used by modal, sheet, and alert-dialog.
 */
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

/** Merged backdrop style: z-index plus inline blur/color from overlay-styles. */
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
  /** Stable slot name for docs and e2e selectors (e.g. dialog-overlay). */
  'data-slot': string
}

/** Dimmed full-screen layer behind centered panels and sheets. */
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

/** Icon close control wired to Radix Dialog.Close. */
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

/** Factory for header/footer/body sections with a consistent data-slot and base class. */
export const createOverlaySection =
  (dataSlot: string, baseClassName: string) =>
  ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div data-slot={dataSlot} className={cn(baseClassName, className)} {...props} />
  )
