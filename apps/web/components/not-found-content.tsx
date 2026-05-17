import Link from 'next/link'
import { ArrowLeft, BookOpen, Boxes, Home, LayoutGrid } from 'lucide-react'
import { Button } from '@lattice-ui/ui'
import { cn } from '@/lib/utils'
import { motion } from '@/lib/motion'

const quickLinks = [
  { href: '/', label: 'Home', icon: Home, description: 'Back to the marketing site' },
  { href: '/docs', label: 'Documentation', icon: BookOpen, description: 'Guides and foundations' },
  {
    href: '/docs/components',
    label: 'Components',
    icon: Boxes,
    description: 'Browse the component library',
  },
  {
    href: '/playground',
    label: 'Playground',
    icon: LayoutGrid,
    description: 'Live component previews',
  },
] as const

const iconStyle: React.CSSProperties = { width: 18, height: 18, flexShrink: 0 }

type NotFoundContentProps = {
  compact?: boolean
}

export function NotFoundContent({ compact = false }: NotFoundContentProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center text-center',
        compact ? 'py-10' : 'min-h-[calc(100vh-8rem)] justify-center py-16 sm:py-24',
      )}
    >
      {!compact ? (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--primary)/0.16,transparent)]"
          aria-hidden
        />
      ) : null}

      <div className={cn('relative z-[1] w-full max-w-2xl', motion.fadeInUp)}>
        <p
          className="text-sm font-semibold uppercase tracking-widest text-primary"
          style={{ letterSpacing: '0.12em' }}
        >
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          This page drifted off the grid
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          The URL may be mistyped, outdated, or the page was moved. Try one of the destinations
          below, or head back home.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/">
              <ArrowLeft style={{ ...iconStyle, marginRight: 8 }} aria-hidden />
              Back to home
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            textTone="foreground"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="/docs/components">Browse components</Link>
          </Button>
        </div>
      </div>

      <ul
        className={cn(
          'relative z-[1] mt-12 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2',
          motion.fadeInUp,
          motion.stagger(2),
        )}
      >
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full gap-3 rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/35 hover:bg-card"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15"
                  aria-hidden
                >
                  <Icon style={iconStyle} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">{link.label}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {link.description}
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
