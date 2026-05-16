'use client'

import Link from 'next/link'
import { Navbar } from '@/components/marketing/navbar'
import { ComponentDemo } from '@/components/docs/component-demo'
import { Preview } from '@/components/docs/preview'
import { docsConfig } from '@/lib/docs'

export function PlaygroundClient() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}
    >
      <Navbar />

      <main className="playground-main">
        <div className="playground-intro">
          <h1 className="playground-title text-headline-md">Playground</h1>
          <p className="playground-description text-body-md">
            Live previews of every Lattice UI component. Toggle the theme to see light and dark
            variants.
          </p>
        </div>

        <div className="playground-grid">
          {docsConfig.components.map((component) => (
            <article key={component.slug} className="playground-card">
              <div className="playground-card-header">
                <h2 className="playground-card-title text-label-md">{component.title}</h2>
                <Link href={`/docs/components/${component.slug}`} className="playground-card-link">
                  Docs →
                </Link>
              </div>
              <Preview className="playground-preview" align="center" style={{ minHeight: 120 }}>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <ComponentDemo slug={component.slug} />
                </div>
              </Preview>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
