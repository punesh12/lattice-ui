import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const avatarVariants = cva('relative flex shrink-0 overflow-hidden rounded-full', {
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      default: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    },
  },
  defaultVariants: { size: 'default' },
})

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  status?: 'online' | 'offline' | 'busy' | 'away'
}

const statusColors = {
  online: 'bg-success',
  offline: 'bg-muted-foreground',
  busy: 'bg-destructive',
  away: 'bg-warning',
} as const

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size, status, children, ...props }, ref) => (
    <AvatarPrimitive.Root
      data-slot="avatar"
      ref={ref}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    >
      {children}
      {status ? (
        <span
          data-slot="avatar-status"
          className={cn(
            'absolute bottom-0 right-0 rounded-full border-2 border-background',
            size === 'xs' || size === 'sm' ? 'h-2 w-2' : 'h-2.5 w-2.5',
            statusColors[status],
          )}
        />
      ) : null}
    </AvatarPrimitive.Root>
  ),
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image data-slot="avatar-image" ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    data-slot="avatar-fallback"
    ref={ref}
    className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground', className)}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
}

function AvatarGroup({ className, max = 4, children, ...props }: AvatarGroupProps) {
  const items = React.Children.toArray(children)
  const visible = max ? items.slice(0, max) : items
  const overflow = items.length - visible.length

  return (
    <div data-slot="avatar-group" className={cn('flex -space-x-2', className)} {...props}>
      {visible.map((child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ className?: string }>, {
              className: cn('ring-2 ring-background', (child as React.ReactElement<{ className?: string }>).props.className),
              key: i,
            })
          : child,
      )}
      {overflow > 0 ? (
        <div
          data-slot="avatar-group-overflow"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground ring-2 ring-background"
        >
          +{overflow}
        </div>
      ) : null}
    </div>
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, avatarVariants }
