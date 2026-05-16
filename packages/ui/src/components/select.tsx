import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { controlSizeStyle, menuItemSizeStyle } from '../lib/control-sizes'
import { flexRowCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

export interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  size?: 'sm' | 'default' | 'lg'
}

const triggerSizes = {
  sm: 'text-sm',
  default: 'text-sm',
  lg: 'text-base',
}

const triggerStyleSizes = {
  sm: 'sm' as const,
  default: 'default' as const,
  lg: 'lg' as const,
}

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  ({ className, size = 'default', style, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      ref={ref}
      className={cn(
        'flex w-full items-center justify-between gap-2 rounded-md border border-input bg-background shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        triggerSizes[size],
        className,
      )}
      style={{
        ...flexRowCenter,
        justifyContent: 'space-between',
        width: '100%',
        gap: 8,
        ...controlSizeStyle(triggerStyleSizes[size]),
        ...style,
      }}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  ),
)
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton data-slot="select-scroll-up" ref={ref} className={cn('flex cursor-default items-center justify-center py-1', className)} {...props}>
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton data-slot="select-scroll-down" ref={ref} className={cn('flex cursor-default items-center justify-center py-1', className)} {...props}>
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', style, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      data-slot="select-content"
      ref={ref}
      position={position}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md',
        position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1',
        className,
      )}
      style={{
        zIndex: 50,
        minWidth: '8rem',
        overflow: 'hidden',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--popover)',
        color: 'var(--popover-foreground)',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        ...style,
      }}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]')}
        style={
          position === 'popper'
            ? {
                padding: 4,
                width: '100%',
                minWidth: 'var(--radix-select-trigger-width)',
              }
            : { padding: 4 }
        }
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Label data-slot="select-label" ref={ref} className={cn('px-2 py-1.5 text-sm font-semibold', className)} {...props} />
  ),
)
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>>(
  ({ className, style, children, ...props }, ref) => (
    <SelectPrimitive.Item
      data-slot="select-item"
      ref={ref}
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm pl-8 pr-3 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      style={{ ...flexRowCenter, ...menuItemSizeStyle, width: '100%', paddingLeft: 32, ...style }}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  ),
)
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator data-slot="select-separator" ref={ref} className={cn('-mx-1 my-1 h-px bg-border', className)} {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
