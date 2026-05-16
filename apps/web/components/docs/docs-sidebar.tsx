'use client'

import { DocsNavTree } from './docs-nav-tree'

export const DocsSidebar = () => (
  <aside className="hidden w-[260px] shrink-0 border-r border-sidebar-border bg-sidebar lg:block">
    <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
      <DocsNavTree />
    </div>
  </aside>
)
