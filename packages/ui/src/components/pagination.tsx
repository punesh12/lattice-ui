import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { controlHeights } from '../lib/control-sizes'
import { flexRowCenter, inlineFlexCenter, listReset } from '../lib/layout-styles'
import { cn } from '../lib/utils'
import { buttonVariants } from './button'

const paginationNavStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
}

const paginationListStyle: React.CSSProperties = {
  ...listReset,
  ...flexRowCenter,
  gap: 4,
}

const paginationLinkStyle = (isActive?: boolean): React.CSSProperties => ({
  ...inlineFlexCenter,
  height: controlHeights.default,
  minHeight: controlHeights.default,
  minWidth: controlHeights.default,
  paddingLeft: 12,
  paddingRight: 12,
  borderRadius: 'calc(var(--radius) - 2px)',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1,
  textDecoration: 'none',
  cursor: 'pointer',
  gap: 4,
  ...(isActive
    ? {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        border: '1px solid var(--border)',
      }
    : {
        backgroundColor: 'transparent',
        color: 'var(--foreground)',
        border: '1px solid transparent',
      }),
})

const Pagination = ({ className, style, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    data-slot="pagination"
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    style={{ ...paginationNavStyle, ...style }}
    {...props}
  />
)

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, style, ...props }, ref) => (
    <ul
      data-slot="pagination-content"
      ref={ref}
      className={cn('flex flex-row items-center gap-1', className)}
      style={{ ...paginationListStyle, ...style }}
      {...props}
    />
  ),
)
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, style, ...props }, ref) => (
    <li
      data-slot="pagination-item"
      ref={ref}
      className={cn('', className)}
      style={{ ...listReset, ...style }}
      {...props}
    />
  ),
)
PaginationItem.displayName = 'PaginationItem'

export interface PaginationLinkProps extends React.ComponentProps<'a'> {
  isActive?: boolean
}

const PaginationLink = ({ className, isActive, style, ...props }: PaginationLinkProps) => (
  <a
    data-slot="pagination-link"
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({ variant: isActive ? 'outline' : 'ghost', size: 'icon' }),
      className,
    )}
    style={{ ...paginationLinkStyle(isActive), ...style }}
    {...props}
  />
)

const PaginationPrevious = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    data-slot="pagination-previous"
    aria-label="Go to previous page"
    className={cn('gap-1 pl-2.5', className)}
    style={{ ...paginationLinkStyle(), paddingLeft: 10, paddingRight: 12, ...style }}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)

const PaginationNext = ({
  className,
  style,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    data-slot="pagination-next"
    aria-label="Go to next page"
    className={cn('gap-1 pr-2.5', className)}
    style={{ ...paginationLinkStyle(), paddingLeft: 12, paddingRight: 10, ...style }}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)

const PaginationEllipsis = ({ className, style, ...props }: React.ComponentProps<'span'>) => (
  <span
    data-slot="pagination-ellipsis"
    aria-hidden
    className={cn('flex h-11 w-11 items-center justify-center', className)}
    style={{
      ...inlineFlexCenter,
      height: controlHeights.default,
      width: controlHeights.default,
      ...style,
    }}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
