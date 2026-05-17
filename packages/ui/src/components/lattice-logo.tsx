/** Lattice brand mark and optional wordmark with size tokens via inline dimensions. */
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { inlineFlexCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'

const latticeLogoVariants = cva('inline-flex shrink-0 items-center gap-2', {
  variants: {
    size: {
      xs: '',
      sm: '',
      default: '',
      lg: '',
    },
  },
  defaultVariants: { size: 'default' },
})

/** Pixel dimensions — inline so logo size works even if Tailwind doesn't scan the ui package. */
const markDimensions = {
  xs: 24,
  sm: 28,
  default: 32,
  lg: 40,
} as const

const wordmarkSizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  default: 'text-sm',
  lg: 'text-base',
} as const

const wordmarkFontSize = {
  xs: 12,
  sm: 14,
  default: 14,
  lg: 16,
} as const

export interface LatticeLogoProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof latticeLogoVariants> {
  showWordmark?: boolean
  /** Hide wordmark below `sm` breakpoint (for compact navbars). */
  compact?: boolean
}

function LatticeMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-full w-full p-1.5" aria-hidden>
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
      <circle cx="6" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="18" cy="12" r="1.5" fill="currentColor" />
      <circle cx="6" cy="18" r="1.5" fill="currentColor" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      <circle cx="18" cy="18" r="1.5" fill="currentColor" />
      <path
        d="M6 6h12M6 12h12M6 18h12M6 6v12M12 6v12M18 6v12"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.6"
      />
    </svg>
  )
}

function LatticeLogo({
  className,
  style,
  size = 'default',
  showWordmark = true,
  compact = false,
  ...props
}: LatticeLogoProps) {
  const resolvedSize = size ?? 'default'
  const markPx = markDimensions[resolvedSize]

  return (
    <div
      data-slot="lattice-logo"
      className={cn(latticeLogoVariants({ size: resolvedSize }), className)}
      style={{ ...inlineFlexCenter, gap: 8, ...style }}
      {...props}
    >
      <div
        data-slot="lattice-logo-mark"
        style={{
          ...inlineFlexCenter,
          width: markPx,
          height: markPx,
          minWidth: markPx,
          minHeight: markPx,
          overflow: 'hidden',
          backgroundColor: 'var(--primary)',
          color: '#ffffff',
          borderRadius: resolvedSize === 'lg' ? 'var(--radius)' : 'calc(var(--radius) - 2px)',
        }}
      >
        <LatticeMark />
      </div>
      {showWordmark ? (
        <span
          data-slot="lattice-logo-wordmark"
          className={cn(
            'font-semibold leading-none tracking-tight text-foreground',
            wordmarkSizeClasses[resolvedSize],
            compact && 'hidden sm:inline',
          )}
          style={{
            fontWeight: 600,
            lineHeight: 1,
            color: 'var(--foreground)',
            fontSize: wordmarkFontSize[resolvedSize],
          }}
        >
          Lattice UI
        </span>
      ) : null}
    </div>
  )
}

export { LatticeLogo, latticeLogoVariants }
