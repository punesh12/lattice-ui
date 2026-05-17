import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  avatarSizeStyle,
  avatarSizes,
  avatarStatusSize,
  type AvatarSize,
} from '../lib/avatar-sizes'
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
  extends
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
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
  ({ className, size = 'default', status, style, children, ...props }, ref) => {
    const sizeKey = (size ?? 'default') as AvatarSize
    const statusDimension = avatarStatusSize(sizeKey)

    return (
      <AvatarPrimitive.Root
        data-slot="avatar"
        data-size={sizeKey}
        ref={ref}
        className={cn(avatarVariants({ size: sizeKey }), className)}
        style={{
          ...avatarSizeStyle(sizeKey),
          borderRadius: '9999px',
          position: 'relative',
          flexShrink: 0,
          overflow: 'hidden',
          ...style,
        }}
        {...props}
      >
        {children}
        {status ? (
          <span
            data-slot="avatar-status"
            className={cn('absolute rounded-full border-2 border-background', statusColors[status])}
            style={{
              bottom: 0,
              right: 0,
              width: statusDimension,
              height: statusDimension,
              borderWidth: 2,
              borderStyle: 'solid',
              borderColor: 'var(--background)',
            }}
          />
        ) : null}
      </AvatarPrimitive.Root>
    )
  },
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, style, ...props }, ref) => (
  <AvatarPrimitive.Image
    data-slot="avatar-image"
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    style={{ width: '100%', height: '100%', objectFit: 'cover', ...style }}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, style, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    data-slot="avatar-fallback"
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground',
      className,
    )}
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '9999px',
      backgroundColor: 'var(--muted)',
      color: 'var(--muted-foreground)',
      fontSize: 'calc(var(--avatar-size, 40px) * 0.35)',
      ...style,
    }}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  /** Size applied to the overflow badge when present */
  size?: AvatarSize
}

function AvatarGroup({
  className,
  max = 4,
  size = 'default',
  children,
  ...props
}: AvatarGroupProps) {
  const items = React.Children.toArray(children)
  const visible = max ? items.slice(0, max) : items
  const overflow = items.length - visible.length
  const overflowSize = avatarSizes[size]

  return (
    <div
      data-slot="avatar-group"
      className={cn('flex -space-x-2', className)}
      style={{ display: 'flex' }}
      {...props}
    >
      {visible.map((child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ className?: string }>, {
              className: cn(
                'ring-2 ring-background',
                (child as React.ReactElement<{ className?: string }>).props.className,
              ),
              key: i,
            })
          : child,
      )}
      {overflow > 0 ? (
        <div
          data-slot="avatar-group-overflow"
          className="flex items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground ring-2 ring-background"
          style={{
            width: overflowSize,
            height: overflowSize,
            minWidth: overflowSize,
            minHeight: overflowSize,
            fontSize: overflowSize * 0.3,
            backgroundColor: 'var(--muted)',
            color: 'var(--muted-foreground)',
            borderRadius: '9999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          +{overflow}
        </div>
      ) : null}
    </div>
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, avatarVariants, avatarSizes }
export type { AvatarSize }
