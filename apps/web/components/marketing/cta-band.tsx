import Link from 'next/link'
import { Button } from '@punesh12/lattice-ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

export const CtaBand = () => (
  <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-primary/5 px-5 py-12 text-center sm:px-8 sm:py-16 lg:px-16',
          motion.fadeInUp,
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary)/0.2,transparent_50%)] lattice-hero-glow" />
        <div className="relative">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Start building today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Install Lattice UI in minutes. Explore the docs, try the playground, and ship your next
            interface with confidence.
          </p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/docs/installation">Install now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              textTone="foreground"
              className="w-full sm:w-auto"
              asChild
            >
              <Link href="/playground">View playground</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)
