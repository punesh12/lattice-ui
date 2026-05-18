'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@punesh12/lattice-ui'
import { docsConfig, getAllDocRoutes } from '@/lib/docs'

export function DocsCommand() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const routes = getAllDocRoutes()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground hover:bg-accent sm:flex"
      >
        <span>⌘K</span>
      </button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search documentation"
        description="Search docs pages and components"
      >
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Getting Started">
            {docsConfig.gettingStarted.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  router.push(item.href)
                  setOpen(false)
                }}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Components">
            {docsConfig.components.map((item) => (
              <CommandItem
                key={item.slug}
                onSelect={() => {
                  router.push(`/docs/components/${item.slug}`)
                  setOpen(false)
                }}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="All">
            {routes.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  router.push(item.href)
                  setOpen(false)
                }}
              >
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
