import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { DocProse } from '@/components/docs/doc-prose'
import { ApiTable, type ApiProp } from '@/components/docs/api-table'
import { DocPager } from '@/components/docs/doc-pager'
import { ComponentDocContent } from '@/components/docs/component-doc-content'
import { ButtonDoc } from '@/components/docs/button-doc'
import { InputDoc } from '@/components/docs/input-doc'
import { docsConfig, getAdjacentComponents, getComponentBySlug } from '@/lib/docs'

const stubApi: ApiProp[] = [
  { prop: 'className', type: 'string', description: 'Additional CSS classes.' },
  { prop: 'children', type: 'React.ReactNode', description: 'Child elements.' },
]

export function generateStaticParams() {
  return docsConfig.components.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const component = getComponentBySlug(slug)
  if (!component) return { title: 'Component' }
  return {
    title: component.title,
    description: component.description,
  }
}

export default async function ComponentDocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const component = getComponentBySlug(slug)
  if (!component) notFound()

  const { prev, next } = getAdjacentComponents(slug)
  const overlaySlugs = new Set(['dialog', 'modal', 'sheet', 'alert-dialog'])
  const inlineCalloutSlugs = new Set(['alert'])

  if (slug === 'button') {
    return (
      <>
        <ButtonDoc />
        <DocPager prev={prev} next={next} />
      </>
    )
  }

  if (slug === 'input') {
    return (
      <>
        <InputDoc />
        <DocPager prev={prev} next={next} />
      </>
    )
  }

  return (
    <>
      <DocProse>
        <h1>{component.title}</h1>
        <p>{component.description}</p>

        <h2 id="usage">Usage</h2>
        <div className="not-prose">
          <ComponentDocContent
            slug={slug}
            align={overlaySlugs.has(slug) || inlineCalloutSlugs.has(slug) ? 'start' : 'center'}
            previewClassName={overlaySlugs.has(slug) ? 'min-h-[140px] overflow-visible' : undefined}
          />
        </div>

        <h2 id="api">API Reference</h2>
        <ApiTable props={stubApi} />
      </DocProse>
      <DocPager prev={prev} next={next} />
    </>
  )
}
