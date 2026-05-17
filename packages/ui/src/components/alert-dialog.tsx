'use client'

/**
 * Destructive/confirm Radix Alert Dialog with centered panel and action/cancel buttons.
 * Uses overlay-styles inline layout; client boundary matches Radix portal behavior.
 */
import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cn } from '../lib/utils'
import {
  CONTENT_Z_INDEX,
  OVERLAY_BACKDROP_CLASS,
  OVERLAY_Z_INDEX,
  overlayBackdropInlineStyle,
  overlayCenteredPanelInlineStyle,
  overlayFooterInlineStyle,
} from '../lib/overlay-styles'
import { Button } from './button'
import { createOverlaySection } from './overlay-parts'

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
const AlertDialogPortal = AlertDialogPrimitive.Portal

const dismissViaCancel = (event: React.MouseEvent<HTMLDivElement>) => {
  if (event.target !== event.currentTarget) return
  const cancel = event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(
    '[data-slot="alert-dialog-cancel"]',
  )
  cancel?.click()
}

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, style, onClick, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    data-slot="alert-dialog-overlay"
    ref={ref}
    className={cn(OVERLAY_BACKDROP_CLASS, className)}
    style={{ zIndex: OVERLAY_Z_INDEX, ...overlayBackdropInlineStyle, ...style }}
    onClick={(event) => {
      dismissViaCancel(event)
      onClick?.(event)
    }}
    {...props}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, style, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      data-slot="alert-dialog-content"
      ref={ref}
      className={cn('outline-none', className)}
      style={{ zIndex: CONTENT_Z_INDEX, ...overlayCenteredPanelInlineStyle(16), ...style }}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = createOverlaySection('alert-dialog-header', 'flex flex-col gap-2')

const AlertDialogFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => (
    <div
      data-slot="alert-dialog-footer"
      ref={ref}
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      style={{
        ...overlayFooterInlineStyle,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        ...style,
      }}
      {...props}
    />
  ),
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    data-slot="alert-dialog-title"
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    data-slot="alert-dialog-description"
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} asChild>
    <Button className={className} type="button" {...props} />
  </AlertDialogPrimitive.Action>
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel ref={ref} asChild>
    <Button
      data-slot="alert-dialog-cancel"
      variant="outline"
      textTone="foreground"
      className={className}
      type="button"
      {...props}
    />
  </AlertDialogPrimitive.Cancel>
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
