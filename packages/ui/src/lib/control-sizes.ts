import type { CSSProperties } from 'react'

/** Pixel dimensions for consistent control sizing (works without Tailwind scan). */
export const controlHeights = {
  xs: 32,
  sm: 36,
  default: 44,
  lg: 48,
} as const

export const controlPaddingX = {
  xs: 10,
  sm: 12,
  default: 16,
  lg: 24,
} as const

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

export const controlBorderStyle: CSSProperties = {
  border: '1px solid var(--input)',
  borderRadius: 'calc(var(--radius) - 2px)',
  backgroundColor: 'var(--background)',
  boxSizing: 'border-box',
}

export const controlInvalidStyle: CSSProperties = {
  borderColor: 'var(--error)',
  boxShadow: '0 0 0 1px color-mix(in srgb, var(--error) 35%, transparent)',
}
