/** Pixel dimensions and CSS variables for Avatar and AvatarGroup overflow badge. */
import type { CSSProperties } from 'react'

/** Width/height in px for each Avatar size token. */
export const avatarSizes = {
  xs: 24,
  sm: 32,
  default: 40,
  lg: 48,
  xl: 64,
} as const

export type AvatarSize = keyof typeof avatarSizes

/** Inline width/height and --avatar-size for fallback typography scaling. */
export const avatarSizeStyle = (size: AvatarSize = 'default'): CSSProperties => {
  const dimension = avatarSizes[size]
  return {
    width: dimension,
    height: dimension,
    minWidth: dimension,
    minHeight: dimension,
    ['--avatar-size' as string]: `${dimension}px`,
  }
}

export const avatarStatusSize = (size: AvatarSize = 'default') =>
  size === 'xs' || size === 'sm' ? 8 : 10
