import * as React from 'react'
import { cn } from '../lib/utils'
import { SidebarProvider } from './sidebar'

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode
  header?: React.ReactNode
}

function AppShell({ className, sidebar, header, children, ...props }: AppShellProps) {
  return (
    <SidebarProvider>
      <div
        data-slot="app-shell"
        className={cn('flex min-h-svh w-full bg-background', className)}
        {...props}
      >
        {sidebar}
        <div data-slot="app-shell-main" className="flex min-w-0 flex-1 flex-col">
          {header ? (
            <header
              data-slot="app-shell-header"
              className="flex h-14 shrink-0 items-center border-b border-border px-4"
            >
              {header}
            </header>
          ) : null}
          <main data-slot="app-shell-content" className="flex-1 overflow-auto p-4">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export { AppShell }
