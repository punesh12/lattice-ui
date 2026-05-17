'use client'

type Theme = 'light' | 'dark' | 'system'

const THEME_TRANSITION_MS = 400

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function runWithClassTransition(apply: () => void) {
  const root = document.documentElement
  root.classList.add('theme-transition')
  apply()
  window.setTimeout(() => root.classList.remove('theme-transition'), THEME_TRANSITION_MS)
}

/**
 * Applies a theme change with a smooth cross-fade when supported.
 */
export function setThemeWithTransition(setTheme: (theme: Theme) => void, next: Theme) {
  if (typeof document === 'undefined' || prefersReducedMotion()) {
    setTheme(next)
    return
  }

  const apply = () => setTheme(next)

  if ('startViewTransition' in document) {
    document.startViewTransition(apply)
    return
  }

  runWithClassTransition(apply)
}
