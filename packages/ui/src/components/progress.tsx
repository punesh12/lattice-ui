/** Linear and circular progress indicators built on Radix Progress. */
import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '../lib/utils'

export interface ProgressProps extends React.ComponentPropsWithoutRef<
  typeof ProgressPrimitive.Root
> {
  indicatorClassName?: string
  indeterminate?: boolean
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, indicatorClassName, indeterminate, ...props }, ref) => (
    <ProgressPrimitive.Root
      data-slot="progress"
      ref={ref}
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
      {...props}
    >
      {indeterminate ? (
        <div
          data-slot="progress-indicator"
          className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-primary animate-lattice-progress"
        />
      ) : (
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn(
            'h-full w-full flex-1 bg-primary transition-transform duration-300 ease-out',
            indicatorClassName,
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      )}
    </ProgressPrimitive.Root>
  ),
)
Progress.displayName = ProgressPrimitive.Root.displayName

export interface CircularProgressProps extends React.SVGAttributes<SVGSVGElement> {
  value?: number
  size?: number
  strokeWidth?: number
  indeterminate?: boolean
}

function CircularProgress({
  value = 0,
  size = 40,
  strokeWidth = 3,
  indeterminate,
  className,
  ...props
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg
      data-slot="circular-progress"
      width={size}
      height={size}
      className={cn('-rotate-90', indeterminate && 'lattice-spin', className)}
      {...props}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-secondary"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={indeterminate ? circumference * 0.75 : offset}
        strokeLinecap="round"
        className={cn('text-primary', !indeterminate && 'transition-all duration-300 ease-out')}
      />
    </svg>
  )
}

export { Progress, CircularProgress }
