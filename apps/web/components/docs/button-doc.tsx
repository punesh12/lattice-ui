'use client'

import { Plus } from 'lucide-react'
import { Button } from '@lattice-ui/ui'
import { ApiTable, type ApiProp } from '@/components/docs/api-table'
import { Callout } from '@/components/docs/callout'
import { DocProse } from '@/components/docs/doc-prose'
import { PreviewToolbar } from '@/components/docs/preview-toolbar'

const buttonApi: ApiProp[] = [
  { prop: 'variant', type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link" | "soft"', default: '"default"', description: 'Visual style of the button.' },
  { prop: 'size', type: '"xs" | "sm" | "default" | "lg" | "icon-xs" | "icon-sm" | "icon" | "icon-lg"', default: '"default"', description: 'Height and padding preset.' },
  { prop: 'loading', type: 'boolean', default: 'false', description: 'Shows a spinner and disables interaction.' },
  { prop: 'asChild', type: 'boolean', default: 'false', description: 'Merge props onto a child element via Radix Slot.' },
  { prop: 'disabled', type: 'boolean', default: 'false', description: 'Prevents interaction and applies disabled styles.' },
]

export function ButtonDoc() {
  return (
    <DocProse>
      <h1>Button</h1>
      <p>Displays a button or a component that looks like a button.</p>

      <h2 id="usage">Usage</h2>
      <PreviewToolbar
        code={`import { Button } from '@lattice-ui/ui'

<Button>Click me</Button>`}
      >
        <Button>Click me</Button>
      </PreviewToolbar>

      <h2 id="variants">Variants</h2>
      <PreviewToolbar
        code={`<div className="flex flex-wrap gap-2">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="soft">Soft</Button>
</div>`}
      >
        <div className="flex flex-wrap gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="soft">Soft</Button>
        </div>
      </PreviewToolbar>

      <h2 id="sizes">Sizes</h2>
      <PreviewToolbar
        code={`<div className="flex flex-wrap items-center gap-2">
  <Button size="xs">Extra small</Button>
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="icon" aria-label="Add"><Plus className="h-4 w-4" /></Button>
</div>`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Add">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </PreviewToolbar>

      <h2 id="loading">Loading</h2>
      <PreviewToolbar code={`<Button loading>Saving…</Button>`}>
        <Button loading>Saving…</Button>
      </PreviewToolbar>

      <Callout title="Accessibility">
        Icon-only buttons must include an <code>aria-label</code> so screen readers can describe the action.
      </Callout>

      <h2 id="api">API Reference</h2>
      <ApiTable props={buttonApi} />
    </DocProse>
  )
}
