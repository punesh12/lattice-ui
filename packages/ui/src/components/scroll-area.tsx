/** Radix ScrollArea with optional scrollbar visibility controls. */
import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { cn } from '../lib/utils'

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> {
  /** When `false`, scrollbars are hidden (content remains scrollable). Default `true` */
  showScrollbar?: boolean
  /** Radix scrollbar visibility — defaults to `always` when `showScrollbar` is true */
  type?: 'auto' | 'always' | 'scroll' | 'hover'
}

const scrollAreaStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
}

const scrollViewportStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, style, children, showScrollbar = true, type, ...props }, ref) => {
  // Scrollbar must stay mounted so Radix enables viewport overflow; hide it visually when needed
  const scrollbarType = type ?? 'always'

  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      data-scrollbar={showScrollbar ? 'visible' : 'hidden'}
      type={scrollbarType}
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      style={{ ...scrollAreaStyle, ...style }}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className="h-full w-full rounded-[inherit]"
        style={scrollViewportStyle}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="vertical" hidden={!showScrollbar} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export interface ScrollBarProps extends React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
> {
  hidden?: boolean
}

const verticalScrollBarStyle: React.CSSProperties = {
  display: 'flex',
  touchAction: 'none',
  userSelect: 'none',
  height: '100%',
  width: 10,
  minWidth: 10,
  padding: 1,
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
}

const horizontalScrollBarStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  touchAction: 'none',
  userSelect: 'none',
  width: '100%',
  height: 10,
  minHeight: 10,
  padding: 1,
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
}

const scrollBarThumbStyle: React.CSSProperties = {
  flex: 1,
  borderRadius: 9999,
  backgroundColor: 'var(--primary)',
}

const hiddenScrollBarStyle: React.CSSProperties = {
  display: 'none',
  width: 0,
  minWidth: 0,
  height: 0,
  minHeight: 0,
  padding: 0,
  opacity: 0,
  pointerEvents: 'none',
}

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarProps
>(({ className, orientation = 'vertical', style, hidden, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    data-slot="scroll-bar"
    data-orientation={orientation}
    data-hidden={hidden ? 'true' : 'false'}
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors duration-150',
      orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-px',
      orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-px',
      className,
    )}
    style={{
      ...(orientation === 'vertical' ? verticalScrollBarStyle : horizontalScrollBarStyle),
      ...(hidden ? hiddenScrollBarStyle : undefined),
      ...style,
    }}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      data-slot="scroll-bar-thumb"
      className="relative flex-1 rounded-full"
      style={scrollBarThumbStyle}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
