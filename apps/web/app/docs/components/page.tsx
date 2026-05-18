import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from '@punesh12/lattice-ui'
import { DocProse } from '@/components/docs/doc-prose'
import { docsConfig } from '@/lib/docs'

export default function ComponentsOverviewPage() {
  return (
    <DocProse>
      <h1>Components</h1>
      <p>
        Browse {docsConfig.components.length} production-ready components. Each includes live
        previews, usage examples, and API reference.
      </p>

      <div className="not-prose mt-8 grid gap-3 sm:grid-cols-2">
        {docsConfig.components.map((component) => (
          <Link key={component.slug} href={`/docs/components/${component.slug}`} className="group">
            <Card className="h-full transition-colors hover:border-primary/40 hover:bg-muted/30">
              <CardHeader className="gap-1.5 p-4">
                <CardTitle className="text-base group-hover:text-primary">
                  {component.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                  {component.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </DocProse>
  )
}
