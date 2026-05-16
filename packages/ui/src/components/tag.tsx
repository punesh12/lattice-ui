'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { flexRowWrapCenter, inlineFlexCenter } from '../lib/layout-styles'
import { cn } from '../lib/utils'

const tagVariants = cva(
  'inline-flex shrink-0 items-center gap-1.5 rounded-md border text-sm font-medium leading-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      variant: {
        default: 'border-border bg-secondary text-secondary-foreground hover:bg-secondary/80',
        selected: 'border-primary bg-primary/10 text-primary',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

const tagSizeStyle: React.CSSProperties = {
  ...inlineFlexCenter,
  height: 32,
  minHeight: 32,
  paddingLeft: 14,
  paddingRight: 14,
  gap: 6,
  lineHeight: 1,
  fontSize: 14,
}

const TAG_DISMISS_CLASS =
  'rounded-sm p-0.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground'

type TagDismissProps = {
  dismissLabel: string
  onDismiss: () => void
  stopPropagation?: boolean
}

const TagDismiss = ({ dismissLabel, onDismiss, stopPropagation = false }: TagDismissProps) => {
  const handleClick = (event: React.MouseEvent) => {
    if (stopPropagation) event.stopPropagation()
    onDismiss()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    if (stopPropagation) event.stopPropagation()
    onDismiss()
  }

  if (stopPropagation) {
    return (
      <span
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={dismissLabel}
        className={TAG_DISMISS_CLASS}
      >
        <X className="h-3.5 w-3.5" />
      </span>
    )
  }

  return (
    <button
      type="button"
      onClick={onDismiss}
      aria-label={dismissLabel}
      className={TAG_DISMISS_CLASS}
    >
      <X className="h-3.5 w-3.5" />
    </button>
  )
}

export interface TagProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: 'default' | 'selected'
  onDismiss?: () => void
  dismissLabel?: string
  /** When true, tag is a toggle button (for use inside TagGroup). */
  selectable?: boolean
  selected?: boolean
  onSelect?: () => void
}

const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (
    {
      className,
      variant,
      children,
      onDismiss,
      dismissLabel = 'Remove',
      selectable = false,
      selected,
      onSelect,
      style,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const resolvedVariant = variant ?? (selected ? 'selected' : 'default')
    const isInteractive = selectable || Boolean(onSelect)

    const sharedProps = {
      'data-slot': 'tag' as const,
      className: cn(
        tagVariants({ variant: resolvedVariant }),
        isInteractive && 'cursor-pointer',
        className,
      ),
      style: { ...tagSizeStyle, ...style },
    }

    if (!isInteractive) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          {...sharedProps}
          {...(props as React.HTMLAttributes<HTMLSpanElement>)}
        >
          {children}
          {onDismiss ? <TagDismiss dismissLabel={dismissLabel} onDismiss={onDismiss} /> : null}
        </span>
      )
    }

    return (
      <button
        ref={ref}
        type={type}
        aria-pressed={selected}
        onClick={onSelect}
        {...sharedProps}
        {...props}
      >
        {children}
        {onDismiss ? (
          <TagDismiss dismissLabel={dismissLabel} onDismiss={onDismiss} stopPropagation />
        ) : null}
      </button>
    )
  },
)
Tag.displayName = 'Tag'

export interface TagGroupProps {
  options: { value: string; label: string }[]
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  gap?: 'sm' | 'md' | 'lg'
  style?: React.CSSProperties
}

const gapClasses = { sm: 'gap-2.5', md: 'gap-4', lg: 'gap-5' } as const

const tagGroupGap: Record<NonNullable<TagGroupProps['gap']>, number> = { sm: 10, md: 16, lg: 20 }

const TagGroup = ({
  options,
  value,
  onValueChange,
  className,
  gap = 'md',
  style,
}: TagGroupProps) => (
  <div
    data-slot="tag-group"
    role="group"
    className={cn('flex flex-wrap items-center', gapClasses[gap], className)}
    style={{ ...flexRowWrapCenter, gap: tagGroupGap[gap], ...style }}
  >
    {options.map((option) => (
      <Tag
        key={option.value}
        selectable
        selected={value === option.value}
        onSelect={() => onValueChange?.(option.value)}
      >
        {option.label}
      </Tag>
    ))}
  </div>
)

export { Tag, TagGroup, tagVariants }
