import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { cn } from '../lib/utils'

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Root data-slot="radio-group" className={cn('grid gap-2', className)} ref={ref} {...props} />
  ),
)
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {}

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  ({ className, ...props }, ref) => (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      ref={ref}
      className={cn(
        'aspect-square h-5 w-5 rounded-full border border-input bg-background text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-primary text-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  ),
)
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
