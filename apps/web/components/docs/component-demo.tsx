'use client'

import { useEffect, useState } from 'react'
import { Spinner } from '@punesh12/lattice-ui'

type ComponentDemoProps = {
  slug: string
}

export const ComponentDemo = ({ slug }: ComponentDemoProps) => {
  const [demo, setDemo] = useState<React.ReactNode>(null)

  useEffect(() => {
    let active = true
    import('./component-demos-internal').then((mod) => {
      if (active) setDemo(mod.renderComponentDemo(slug))
    })
    return () => {
      active = false
    }
  }, [slug])

  if (!demo) {
    return <Spinner className="text-muted-foreground" />
  }

  return demo
}
