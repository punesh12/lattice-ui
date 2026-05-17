/**
 * Shared pixel dimensions and inline styles for inputs, buttons, selects, and menus.
 * Centralized here because consuming apps may not Tailwind-scan packages/ui.
 */
import type { CSSProperties } from 'react'

/** Pixel heights keyed by Lattice size token (xs through lg). */
export const controlHeights = {
  xs: 32,
  sm: 36,
  default: 44,
  lg: 48,
} as const

/** Horizontal padding (px) paired with {@link controlHeights} per size. */
export const controlPaddingX = {
  xs: 10,
  sm: 12,
  default: 16,
  lg: 24,
} as const

/** Height and horizontal padding for triggers and single-line controls. */
export const controlSizeStyle = (size: keyof typeof controlHeights = 'default') => {
  const h = controlHeights[size]
  return {
    height: h,
    minHeight: h,
    paddingLeft: controlPaddingX[size],
    paddingRight: controlPaddingX[size],
  } as CSSProperties
}

export const badgeSizeStyle: CSSProperties = {
  height: 28,
  minHeight: 28,
  paddingLeft: 10,
  paddingRight: 10,
}

export const menuItemSizeStyle: CSSProperties = {
  minHeight: 40,
  paddingTop: 8,
  paddingBottom: 8,
}

/** Label color for filled primary/destructive buttons (inline — reliable without Tailwind scan). */
export const filledButtonLabelStyle: CSSProperties = {
  color: '#ffffff',
}

/** Default input/select border and surface — applied inline alongside CVA classes. */
export const controlBorderStyle: CSSProperties = {
  border: '1px solid var(--input)',
  borderRadius: 'calc(var(--radius) - 2px)',
  backgroundColor: 'var(--background)',
  boxSizing: 'border-box',
}

/** Error border and ring used when `error` or `aria-invalid` is set on controls. */
export const controlInvalidStyle: CSSProperties = {
  borderColor: 'var(--error)',
  boxShadow: '0 0 0 1px color-mix(in srgb, var(--error) 35%, transparent)',
}
