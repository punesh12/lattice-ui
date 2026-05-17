import * as React from 'react'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '../lib/utils'

const breadcrumbTextStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.25,
}

const Breadcrumb = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<'nav'>>(
  ({ ...props }, ref) => (
    <nav data-slot="breadcrumb" ref={ref} aria-label="Breadcrumb" {...props} />
  ),
)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.OlHTMLAttributes<HTMLOListElement>>(
  ({ className, style, ...props }, ref) => (
    <ol
      data-slot="breadcrumb-list"
      ref={ref}
      className={cn('flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground', className)}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 6,
        listStyle: 'none',
        margin: 0,
        padding: 0,
        color: 'var(--muted-foreground)',
        ...breadcrumbTextStyle,
        ...style,
      }}
      {...props}
    />
  ),
)
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className, style, ...props }, ref) => (
    <li
      data-slot="breadcrumb-item"
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        ...breadcrumbTextStyle,
        ...style,
      }}
      {...props}
    />
  ),
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, style, ...props }, ref) => (
  <a
    data-slot="breadcrumb-link"
    ref={ref}
    className={cn('transition-colors hover:text-foreground', className)}
    style={{
      color: 'var(--muted-foreground)',
      textDecoration: 'none',
      fontWeight: 400,
      ...breadcrumbTextStyle,
      ...style,
    }}
    {...props}
  />
))
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, style, ...props }, ref) => (
    <span
      data-slot="breadcrumb-page"
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('text-foreground', className)}
      style={{
        color: 'var(--foreground)',
        fontWeight: 600,
        ...breadcrumbTextStyle,
        ...style,
      }}
      {...props}
    />
  ),
)
BreadcrumbPage.displayName = 'BreadcrumbPage'

const separatorIconStyle: React.CSSProperties = {
  width: 12,
  height: 12,
  flexShrink: 0,
  color: 'var(--muted-foreground)',
}

const BreadcrumbSeparator = ({
  children,
  className,
  style,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    data-slot="breadcrumb-separator"
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:h-3 [&>svg]:w-3', className)}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}
    {...props}
  >
    {children ?? <ChevronRight style={separatorIconStyle} aria-hidden />}
  </li>
)

const BreadcrumbEllipsis = ({ className, style, ...props }: React.ComponentProps<'span'>) => (
  <span
    data-slot="breadcrumb-ellipsis"
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      ...style,
    }}
    {...props}
  >
    <MoreHorizontal style={{ width: 16, height: 16 }} aria-hidden />
    <span className="sr-only">More</span>
  </span>
)

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
