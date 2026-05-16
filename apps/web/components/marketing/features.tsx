import { Accessibility, BookOpen, Layers, Palette, Puzzle, Type } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

const features = [
  {
    icon: Accessibility,
    title: 'Accessible by default',
    description: 'Keyboard navigation, focus rings, and ARIA patterns built into every primitive.',
  },
  {
    icon: Palette,
    title: 'Theme tokens',
    description: 'CSS variables power light and dark modes with one import and zero runtime cost.',
  },
  {
    icon: Puzzle,
    title: 'Composable APIs',
    description: 'Predictable props and compound components that scale from prototypes to production.',
  },
  {
    icon: Type,
    title: 'Type-safe',
    description: 'Full TypeScript coverage with exported prop types for every component.',
  },
  {
    icon: Layers,
    title: 'Radix-powered',
    description: 'Unstyled primitives from Radix UI for dialogs, menus, and complex interactions.',
  },
  {
    icon: BookOpen,
    title: 'Documentation-first',
    description: 'Live previews, API tables, and copy-ready examples for your whole team.',
  },
]

export const Features = () => (
  <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <div className={cn('mx-auto max-w-2xl text-center', motion.fadeInUp)}>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Everything you need to ship</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
          Lattice UI is designed for product teams who care about consistency, speed, and quality.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={feature.title}
              className={cn(
                'border-border/80 bg-card/60 lattice-hover-lift',
                motion.fadeInUp,
                motion.stagger(index % 6),
              )}
            >
              <CardHeader className="gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted/50 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </div>
  </section>
)
