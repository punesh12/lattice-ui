import { Alert, AlertDescription, AlertTitle, Separator } from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

const reasons = [
  { label: 'Components', value: '50+' },
  { label: 'Theme modes', value: '2' },
  { label: 'Design tokens', value: '30+' },
  { label: 'Bundle impact', value: 'Tree-shakeable' },
]

export const WhyLattice = () => (
  <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className={motion.fadeInUp}>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Why Lattice?</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Most libraries give you unstyled primitives or opinionated kits with no middle ground. Lattice UI sits in
            the sweet spot — structured, themed, and flexible enough for any product surface.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
            {reasons.map((item, index) => (
              <div key={item.label} className={cn(motion.fadeInUp, motion.stagger(index))}>
                <p className="text-2xl font-semibold text-primary sm:text-3xl">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <Alert variant="info" className={cn('self-start lattice-hover-lift', motion.fadeInUp, motion.stagger(2))}>
          <AlertTitle>Designed for product teams</AlertTitle>
          <AlertDescription>
            Lattice UI ships with patterns for dashboards, settings pages, empty states, and notification feeds — not
            just form controls.
          </AlertDescription>
        </Alert>
      </div>
      <Separator className="mt-12 sm:mt-16" />
    </div>
  </section>
)
