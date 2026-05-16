'use client'

import Link from 'next/link'
import { Button } from '@lattice-ui/ui'
import { CodeBlock } from '@/components/docs/code-block'
import { CodeTabs } from '@/components/docs/code-tabs'
import { DocProse } from '@/components/docs/doc-prose'

export default function InstallationPage() {
  return (
    <DocProse>
      <h1>Installation</h1>
      <p>Install Lattice UI and its peer dependencies in your Next.js or React project.</p>

      <h2>Package manager</h2>
      <div className="not-prose">
        <CodeTabs
          commands={{
            npm: 'npm install @lattice-ui/ui @lattice-ui/tokens',
            pnpm: 'pnpm add @lattice-ui/ui @lattice-ui/tokens',
            yarn: 'yarn add @lattice-ui/ui @lattice-ui/tokens',
            bun: 'bun add @lattice-ui/ui @lattice-ui/tokens',
          }}
        />
      </div>

      <h2>Configure Tailwind</h2>
      <p>Import design tokens in your global stylesheet.</p>
      <div className="not-prose">
        <CodeBlock
          code={`@import 'tailwindcss';
@import '@lattice-ui/tokens/globals.css';`}
        />
      </div>

      <h2>Theme provider</h2>
      <p>
        Wrap your application with <code>next-themes</code> and the Lattice toaster.
      </p>
      <div className="not-prose">
        <CodeBlock
          code={`'use client'

import { ThemeProvider } from 'next-themes'
import { Toaster } from '@lattice-ui/ui/toast'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  )
}`}
        />
      </div>

      <h2>Fonts</h2>
      <p>
        Lattice UI is designed for Inter and IBM Plex Mono. Add them via your preferred font loader.
      </p>

      <div className="not-prose mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/docs/theming">Theming guide</Link>
        </Button>
        <Button variant="outline" textTone="foreground" asChild>
          <Link href="/docs/components">Browse components</Link>
        </Button>
      </div>
    </DocProse>
  )
}
