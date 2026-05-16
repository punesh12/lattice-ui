import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '../lib/utils'

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> {}

const radioGroupStyle: React.CSSProperties = {
  display: 'grid',
  gap: 8,
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, style, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    data-slot="radio-group"
    className={cn('grid gap-2', className)}
    style={{ ...radioGroupStyle, ...style }}
    ref={ref}
    {...props}
  />
))
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> {}

const radioItemStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 20,
  height: 20,
  minWidth: 20,
  minHeight: 20,
  padding: 0,
  borderRadius: '50%',
  border: '1.5px solid var(--border)',
  backgroundColor: 'var(--background)',
  boxSizing: 'border-box',
  flexShrink: 0,
  cursor: 'pointer',
  transition: 'border-color 0.15s ease',
  WebkitAppearance: 'none',
  appearance: 'none',
}

const radioDotStyle: React.CSSProperties = {
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: 'var(--foreground)',
  flexShrink: 0,
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, style, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    data-slot="radio-group-item"
    ref={ref}
    className={cn(className)}
    style={{ ...radioItemStyle, ...style }}
    {...props}
  >
    <RadioGroupPrimitive.Indicator
      data-slot="radio-group-indicator"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <span data-slot="radio-group-dot" style={radioDotStyle} aria-hidden />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
