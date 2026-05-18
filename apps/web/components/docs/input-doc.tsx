'use client'

import { Field, Input, InputGroup, InputPrefix, InputSuffix } from '@punesh12/lattice-ui'
import { Search, Mail } from 'lucide-react'
import { ApiTable, type ApiProp } from '@/components/docs/api-table'
import { Callout } from '@/components/docs/callout'
import { DocProse } from '@/components/docs/doc-prose'
import { PreviewToolbar } from '@/components/docs/preview-toolbar'

const inputApi: ApiProp[] = [
  {
    prop: 'size',
    type: '"sm" | "default" | "lg"',
    default: '"default"',
    description: 'Height and typography preset.',
  },
  { prop: 'type', type: 'string', default: '"text"', description: 'Native input type attribute.' },
  { prop: 'placeholder', type: 'string', description: 'Placeholder text when empty.' },
  {
    prop: 'disabled',
    type: 'boolean',
    default: 'false',
    description: 'Prevents editing and applies disabled styles.',
  },
  {
    prop: 'error',
    type: 'boolean',
    default: 'false',
    description: 'Applies red error border and sets aria-invalid.',
  },
  {
    prop: 'aria-invalid',
    type: 'boolean',
    description: 'Also applies error border styling when true.',
  },
]

export function InputDoc() {
  return (
    <DocProse>
      <h1>Input</h1>
      <p>Displays a form input field or a component that looks like an input field.</p>

      <h2 id="usage">Usage</h2>
      <PreviewToolbar
        code={`import { Input } from '@punesh12/lattice-ui'

<Input placeholder="Email address" type="email" />`}
      >
        <Input placeholder="Email address" type="email" className="max-w-sm" />
      </PreviewToolbar>

      <h2 id="sizes">Sizes</h2>
      <PreviewToolbar
        code={`<div className="flex max-w-sm flex-col gap-3">
  <Input size="sm" placeholder="Small" />
  <Input size="default" placeholder="Default" />
  <Input size="lg" placeholder="Large" />
</div>`}
      >
        <div className="flex max-w-sm flex-col gap-3">
          <Input size="sm" placeholder="Small" />
          <Input size="default" placeholder="Default" />
          <Input size="lg" placeholder="Large" />
        </div>
      </PreviewToolbar>

      <h2 id="prefix-suffix">Prefix & suffix</h2>
      <PreviewToolbar
        code={`<InputGroup>
  <InputPrefix><Mail style={{ width: 16, height: 16 }} /></InputPrefix>
  <Input placeholder="you@example.com" />
</InputGroup>`}
      >
        <InputGroup className="max-w-sm">
          <InputPrefix>
            <Mail style={{ width: 16, height: 16 }} aria-hidden />
          </InputPrefix>
          <Input placeholder="you@example.com" />
        </InputGroup>
      </PreviewToolbar>

      <PreviewToolbar
        code={`<InputGroup>
  <Input placeholder="Search…" />
  <InputSuffix><Search style={{ width: 16, height: 16 }} /></InputSuffix>
</InputGroup>`}
      >
        <InputGroup className="max-w-sm">
          <Input placeholder="Search…" />
          <InputSuffix>
            <Search style={{ width: 16, height: 16 }} aria-hidden />
          </InputSuffix>
        </InputGroup>
      </PreviewToolbar>

      <h2 id="invalid">Error state</h2>
      <PreviewToolbar code={`<Input error placeholder="Required field" />`}>
        <Input error placeholder="Required field" className="max-w-sm" />
      </PreviewToolbar>

      <PreviewToolbar
        code={`<Field label="Email" htmlFor="email" error="Please enter a valid email.">
  <Input id="email" type="email" placeholder="you@example.com" />
</Field>`}
      >
        <Field
          label="Email"
          htmlFor="email"
          error="Please enter a valid email."
          className="max-w-sm"
        >
          <Input id="email" type="email" placeholder="you@example.com" />
        </Field>
      </PreviewToolbar>

      <Callout title="Forms">
        Pair inputs with <code>Field</code> and <code>Label</code> for accessible form layouts with
        descriptions and errors.
      </Callout>

      <h2 id="api">API Reference</h2>
      <ApiTable props={inputApi} />
    </DocProse>
  )
}
