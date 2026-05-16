import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

const logos = ['Vercel', 'Stripe', 'Linear', 'Notion', 'Figma', 'Raycast']

export const Logos = () => (
  <section className="border-y border-border bg-muted/30 px-4 py-10 sm:px-6 sm:py-12">
    <div className="mx-auto max-w-6xl">
      <p
        className={cn(
          'mb-6 text-center text-xs text-muted-foreground sm:mb-8 sm:text-sm',
          motion.fadeIn,
        )}
      >
        Trusted by teams building modern products
      </p>
      <ul
        className={cn(
          'grid grid-cols-2 place-items-center gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-6',
          motion.fadeInUp,
        )}
      >
        {logos.map((name, index) => (
          <li
            key={name}
            className={cn(
              'text-sm font-medium text-muted-foreground/80 transition-colors duration-200 hover:text-foreground',
              motion.stagger(index),
            )}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  </section>
)
