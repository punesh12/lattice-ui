'use client'

/**
 * Edge-anchored panel (Radix Dialog) with slide animations and overlay-parts backdrop.
 * Inline sheet styles from overlay-styles when Tailwind does not scan packages/ui.
 */
import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'
import { getSheetContentInlineStyle } from '../lib/overlay-styles'
import {
  OverlayBackdrop,
  OverlayCloseButton,
  createOverlaySection,
  overlayContentStyle,
} from './overlay-parts'

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close
const SheetPortal = DialogPrimitive.Portal

const sheetVariants = cva(
  'fixed flex flex-col gap-4 border border-border bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out',
  {
    variants: {
      side: {
        right:
          'inset-y-0 right-0 h-full w-full max-w-sm border-l data-[state=closed]:translate-x-full data-[state=open]:translate-x-0',
        left: 'inset-y-0 left-0 h-full w-full max-w-sm border-r data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0',
        bottom:
          'inset-x-0 bottom-0 max-h-[85vh] w-full overflow-y-auto rounded-t-xl border-t data-[state=closed]:translate-y-full data-[state=open]:translate-y-0',
      },
    },
    defaultVariants: { side: 'right' },
  },
)

/** Slide-in panel; `side` sets edge and animation; `showClose` adds OverlayCloseButton. */
export interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  showClose?: boolean
}

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof OverlayBackdrop>,
  Omit<React.ComponentPropsWithoutRef<typeof OverlayBackdrop>, 'data-slot'>
>((props, ref) => <OverlayBackdrop ref={ref} data-slot="sheet-overlay" {...props} />)
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, showClose = true, style, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <DialogPrimitive.Content
      data-slot="sheet-content"
      data-side={side ?? 'right'}
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      style={{ ...getSheetContentInlineStyle(side ?? 'right'), ...overlayContentStyle, ...style }}
      {...props}
    >
      {children}
      {showClose ? <OverlayCloseButton data-slot="sheet-close" /> : null}
    </DialogPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = DialogPrimitive.Content.displayName

const SheetHeader = createOverlaySection('sheet-header', 'flex flex-col gap-1.5 pr-8')
const SheetFooter = createOverlaySection(
  'sheet-footer',
  'flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end',
)

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    data-slot="sheet-title"
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
))
SheetTitle.displayName = DialogPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    data-slot="sheet-description"
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
SheetDescription.displayName = DialogPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  sheetVariants,
}
