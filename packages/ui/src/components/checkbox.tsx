import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { cn } from '../lib/utils'

export interface CheckboxProps extends React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> {}

const checkboxBaseStyle: React.CSSProperties = {
  width: 20,
  height: 20,
  minWidth: 20,
  minHeight: 20,
  flexShrink: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  border: '1px solid var(--input)',
  backgroundColor: 'var(--background)',
  transition: 'background-color 150ms ease, border-color 150ms ease, color 150ms ease',
  cursor: 'pointer',
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, style, ...props }, ref) => (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      ref={ref}
      className={cn(
        'peer h-5 w-5 shrink-0 rounded border border-input bg-background transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground aria-invalid:border-error',
        className,
      )}
      style={{ ...checkboxBaseStyle, ...style }}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Check
          aria-hidden
          style={{
            width: 14,
            height: 14,
            strokeWidth: 3,
            color: 'currentColor',
          }}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
)
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
