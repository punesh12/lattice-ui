'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { inlineFlexCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'

const Tabs = TabsPrimitive.Root

const tabsListStyle: React.CSSProperties = {
  ...inlineFlexCenter,
  alignItems: 'flex-end',
  gap: 0,
  height: 'auto',
  minHeight: 'unset',
  padding: 0,
  borderRadius: 0,
  backgroundColor: 'transparent',
  borderBottom: '1px solid var(--border)',
  color: 'var(--muted-foreground)',
}

/** Layout only — color and active border come from globals.css (inline would override data-state). */
const tabsTriggerStyle: React.CSSProperties = {
  ...inlineFlexCenter,
  minHeight: 40,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 10,
  paddingTop: 10,
  borderRadius: 0,
  fontSize: 14,
  lineHeight: 1,
  border: 'none',
  marginBottom: -1,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, style, ...props }, ref) => (
  <TabsPrimitive.List
    data-slot="tabs-list"
    ref={ref}
    className={cn(
      'inline-flex h-11 min-h-11 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      className,
    )}
    style={{ ...tabsListStyle, ...style }}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, style, ...props }, ref) => (
  <TabsPrimitive.Trigger
    data-slot="tabs-trigger"
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground',
      className,
    )}
    style={{ ...tabsTriggerStyle, ...style }}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, style, ...props }, ref) => (
  <TabsPrimitive.Content
    data-slot="tabs-content"
    ref={ref}
    className={cn(
      'mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    style={{ marginTop: 16, ...style }}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
