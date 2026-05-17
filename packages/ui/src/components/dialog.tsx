'use client'

/**
 * Centered Radix Dialog composed from overlay-parts and overlay-styles tokens.
 * Client boundary required for Radix portal, focus trap, and open-state animations.
 */
import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '../lib/utils'
import { overlayCenteredPanelInlineStyle } from '../lib/overlay-styles'
import {
  OverlayBackdrop,
  OverlayCloseButton,
  createOverlaySection,
  overlayContentStyle,
} from './overlay-parts'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

export interface DialogOverlayProps extends Omit<
  React.ComponentPropsWithoutRef<typeof OverlayBackdrop>,
  'data-slot'
> {}

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof OverlayBackdrop>,
  DialogOverlayProps
>((props, ref) => <OverlayBackdrop ref={ref} data-slot="dialog-overlay" {...props} />)
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

/** Centered panel; `showClose` renders the shared OverlayCloseButton. */
export interface DialogContentProps extends React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> {
  showClose?: boolean
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, showClose = true, style, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      data-slot="dialog-content"
      ref={ref}
      className={cn('outline-none', className)}
      style={{ ...overlayCenteredPanelInlineStyle(20), ...overlayContentStyle, ...style }}
      {...props}
    >
      {children}
      {showClose ? <OverlayCloseButton data-slot="dialog-close" /> : null}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = createOverlaySection(
  'dialog-header',
  'flex flex-col gap-1.5 text-center sm:text-left',
)
const DialogFooter = createOverlaySection(
  'dialog-footer',
  'flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end',
)

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
