'use client'

import { ComponentDemo } from '@/components/docs/component-demo'
import { PreviewToolbar } from '@/components/docs/preview-toolbar'
import { getComponentExample } from '@/lib/component-examples'

type ComponentDocContentProps = {
  slug: string
  align?: 'center' | 'start'
  previewClassName?: string
}

export const ComponentDocContent = ({
  slug,
  align = 'center',
  previewClassName,
}: ComponentDocContentProps) => (
  <PreviewToolbar
    code={getComponentExample(slug)}
    align={align}
    previewClassName={previewClassName}
  >
    <ComponentDemo slug={slug} />
  </PreviewToolbar>
)
