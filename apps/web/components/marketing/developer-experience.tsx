import Link from 'next/link'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Kbd,
} from '@punesh12/lattice-ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

const highlights = [
  {
    title: 'Copy-paste examples',
    description: 'Every component page includes live previews and ready-to-copy code snippets.',
  },
  {
    title: 'Command palette',
    description: 'Jump to any doc page instantly with keyboard shortcuts.',
    keys: ['⌘', 'K'],
  },
  {
    title: 'Monorepo ready',
    description: 'Packages for tokens, UI primitives, and the docs site — all in one workspace.',
  },
]

export const DeveloperExperience = () => (
  <section className="border-y border-border bg-muted/20 px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <div className={cn('mx-auto max-w-2xl text-center', motion.fadeInUp)}>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Built for developers</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
          Documentation, types, and tooling that help your team move fast without guessing APIs.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <Card
            key={item.title}
            className={cn('lattice-hover-lift', motion.fadeInUp, motion.stagger(index))}
          >
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            {item.keys ? (
              <CardContent>
                <div className="flex gap-1">
                  {item.keys.map((key) => (
                    <Kbd key={key}>{key}</Kbd>
                  ))}
                </div>
              </CardContent>
            ) : null}
          </Card>
        ))}
      </div>
      <div className={cn('mt-10 text-center sm:mt-12', motion.fadeInUp, motion.stagger(4))}>
        <Button className="w-full sm:w-auto" asChild>
          <Link href="/docs/installation">Read the docs</Link>
        </Button>
      </div>
    </div>
  </section>
)
