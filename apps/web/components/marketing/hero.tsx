import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge, Button } from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

export const Hero = () => (
  <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary)/0.18,transparent)] lattice-hero-glow" />
    <div className="relative mx-auto max-w-6xl text-center">
      <Badge
        variant="secondary"
        className={cn('mb-5 border-primary/20 bg-primary/10 text-primary sm:mb-6', motion.fadeInUp, motion.stagger(0))}
      >
        Announcing Lattice UI v1.0
      </Badge>
      <h1
        className={cn(
          'mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl',
          motion.fadeInUp,
          motion.stagger(1),
        )}
      >
        Build polished products with{' '}
        <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Lattice UI</span>
      </h1>
      <p
        className={cn(
          'mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg',
          motion.fadeInUp,
          motion.stagger(2),
        )}
      >
        Production-quality React primitives with semantic tokens, full dark mode, and documentation for every
        component. Ship faster without sacrificing craft.
      </p>
      <div
        className={cn(
          'mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4',
          motion.fadeInUp,
          motion.stagger(3),
        )}
      >
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/docs">
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" textTone="foreground" className="w-full sm:w-auto" asChild>
          <Link href="/playground">Open playground</Link>
        </Button>
      </div>
    </div>
  </section>
)
