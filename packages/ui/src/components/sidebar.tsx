'use client'

import * as React from 'react'
import { PanelLeft } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './button'

const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_ICON = '4rem'

type SidebarContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

function useSidebar() {
  const ctx = React.useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider')
  return ctx
}

export interface SidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean
  defaultCollapsed?: boolean
}

function SidebarProvider({ defaultOpen = true, defaultCollapsed = false, className, style, children, ...props }: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  return (
    <SidebarContext.Provider value={{ open, setOpen, collapsed, setCollapsed }}>
      <div
        data-slot="sidebar-provider"
        style={
          {
            '--sidebar-width': SIDEBAR_WIDTH,
            '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={cn('group/sidebar-wrapper flex min-h-svh w-full', className)}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(({ className, children, ...props }, ref) => {
  const { open, collapsed } = useSidebar()

  if (!open) return null

  return (
    <aside
      data-slot="sidebar"
      data-collapsed={collapsed}
      ref={ref}
      className={cn(
        'flex h-full flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-250',
        collapsed ? 'w-[var(--sidebar-width-icon)]' : 'w-[var(--sidebar-width)]',
        className,
      )}
      {...props}
    >
      {children}
    </aside>
  )
})
Sidebar.displayName = 'Sidebar'

function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sidebar-header" className={cn('flex h-14 items-center border-b border-sidebar-border px-4', className)} {...props} />
}

function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sidebar-content" className={cn('flex-1 overflow-auto p-2', className)} {...props} />
}

function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="sidebar-footer" className={cn('border-t border-sidebar-border p-2', className)} {...props} />
}

function SidebarNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <nav data-slot="sidebar-nav" className={cn('flex flex-col gap-1', className)} {...props} />
}

export interface SidebarNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: React.ReactNode
}

function SidebarNavItem({ className, active, icon, children, ...props }: SidebarNavItemProps) {
  const { collapsed } = useSidebar()
  return (
    <button
      data-slot="sidebar-nav-item"
      data-active={active}
      type="button"
      className={cn(
        'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors min-h-11',
        active ? 'bg-sidebar-accent text-sidebar-primary' : 'text-sidebar-foreground hover:bg-sidebar-accent',
        collapsed && 'justify-center px-0',
        className,
      )}
      {...props}
    >
      {icon}
      {!collapsed ? <span className="truncate">{children}</span> : null}
    </button>
  )
}

function SidebarTrigger({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { setCollapsed, collapsed } = useSidebar()
  return (
    <Button
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => setCollapsed(!collapsed)}
      aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      {...props}
    >
      <PanelLeft className="h-4 w-4" />
    </Button>
  )
}

export { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarNav, SidebarNavItem, SidebarTrigger, useSidebar }
