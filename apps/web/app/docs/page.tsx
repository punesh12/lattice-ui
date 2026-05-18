'use client'

import Link from 'next/link'
import { ArrowRight, Layers, Palette, Zap } from 'lucide-react'
import { Button, Card, CardDescription, CardHeader, CardTitle } from '@punesh12/lattice-ui'
import { DocProse } from '@/components/docs/doc-prose'

const features = [
  {
    icon: Layers,
    title: 'Structured primitives',
    description: 'Composable building blocks with consistent APIs across every component.',
  },
  {
    icon: Palette,
    title: 'Theme-ready tokens',
    description: 'CSS variables power light and dark modes with a single source of truth.',
  },
  {
    icon: Zap,
    title: 'Production quality',
    description: 'Accessible, typed components built for real product interfaces.',
  },
]

export default function DocsIntroductionPage() {
  return (
    <DocProse>
      <h1>Introduction</h1>
      <p>
        Lattice UI is a structured React component library for modern interfaces. It ships with full
        light and dark theme support, semantic design tokens, and documentation for every primitive.
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader className="space-y-2 p-5">
              <feature.icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">{feature.title}</CardTitle>
              <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <h2>Get started</h2>
      <p>
        Install the package, import tokens into your global styles, and wrap your app with the theme
        provider. Browse foundations for colors and typography, then explore the component catalog.
      </p>

      <div className="not-prose mt-6">
        <Button asChild>
          <Link href="/docs/installation">
            Installation guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </DocProse>
  )
}
