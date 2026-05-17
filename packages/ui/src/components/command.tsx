'use client'

import * as React from 'react'
import {
  CommandEmpty as CommandEmptyPrimitive,
  CommandGroup as CommandGroupPrimitive,
  CommandInput as CommandInputPrimitive,
  CommandItem as CommandItemPrimitive,
  CommandList as CommandListPrimitive,
  CommandRoot as CommandRootPrimitive,
  CommandSeparator as CommandSeparatorPrimitive,
} from 'cmdk'
import { Search } from 'lucide-react'
import { flexRowCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './dialog'
import { visuallyHiddenStyle } from '../lib/a11y-styles'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandRootPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandRootPrimitive>
>(({ className, ...props }, ref) => (
  <CommandRootPrimitive
    data-slot="command"
    ref={ref}
    className={cn(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  />
))
Command.displayName = 'Command'

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandInputPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandInputPrimitive>
>(({ className, ...props }, ref) => (
  <div
    data-slot="command-input-wrapper"
    className="flex items-center border-b border-border px-3"
    style={{
      ...flexRowCenter,
      borderBottom: '1px solid var(--border)',
      paddingLeft: 12,
      paddingRight: 12,
    }}
  >
    <Search
      className="mr-2 h-4 w-4 shrink-0 text-muted-foreground"
      style={{ marginRight: 8, flexShrink: 0 }}
    />
    <CommandInputPrimitive
      data-slot="command-input"
      ref={ref}
      className={cn(
        'flex h-11 min-h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      style={{
        flex: 1,
        width: '100%',
        height: 44,
        minHeight: 44,
        border: 'none',
        background: 'transparent',
        outline: 'none',
        fontSize: 14,
        lineHeight: 1,
        padding: '12px 0',
      }}
      {...props}
    />
  </div>
))
CommandInput.displayName = 'CommandInput'

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandListPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandListPrimitive>
>(({ className, ...props }, ref) => (
  <CommandListPrimitive
    data-slot="command-list"
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden p-1', className)}
    {...props}
  />
))
CommandList.displayName = 'CommandList'

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandEmptyPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandEmptyPrimitive>
>((props, ref) => (
  <CommandEmptyPrimitive
    data-slot="command-empty"
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))
CommandEmpty.displayName = 'CommandEmpty'

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandGroupPrimitive>
>(({ className, ...props }, ref) => (
  <CommandGroupPrimitive
    data-slot="command-group"
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
    {...props}
  />
))
CommandGroup.displayName = 'CommandGroup'

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandItemPrimitive>
>(({ className, style, ...props }, ref) => (
  <CommandItemPrimitive
    data-slot="command-item"
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 min-h-11',
      className,
    )}
    style={{
      ...flexRowCenter,
      gap: 8,
      minHeight: 44,
      padding: '8px 12px',
      fontSize: 14,
      cursor: 'default',
      borderRadius: 4,
      ...style,
    }}
    {...props}
  />
))
CommandItem.displayName = 'CommandItem'

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandSeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <CommandSeparatorPrimitive
    data-slot="command-separator"
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
))
CommandSeparator.displayName = 'CommandSeparator'

export interface CommandDialogProps extends React.ComponentPropsWithoutRef<typeof Dialog> {
  title?: string
  description?: string
}

function CommandDialog({
  children,
  title = 'Command palette',
  description,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent
        data-slot="command-dialog"
        className="overflow-hidden p-0 shadow-lg"
        showClose={false}
      >
        <DialogTitle style={visuallyHiddenStyle}>{title}</DialogTitle>
        {description ? (
          <DialogDescription style={visuallyHiddenStyle}>{description}</DialogDescription>
        ) : null}
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground">{children}</Command>
      </DialogContent>
    </Dialog>
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
}
