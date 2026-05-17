export type AppTheme = 'light' | 'dark' | 'system'

export const THEME_OPTIONS: { value: AppTheme; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
]

const THEME_CYCLE: AppTheme[] = ['light', 'dark', 'system']

export function getNextTheme(current: string | undefined): AppTheme {
  const index = THEME_CYCLE.indexOf((current as AppTheme) ?? 'system')
  return THEME_CYCLE[(index + 1) % THEME_CYCLE.length]
}

export function getThemeModeLabel(theme: string | undefined, resolvedTheme?: string) {
  if (theme === 'system') {
    return resolvedTheme ? `System (${resolvedTheme})` : 'System'
  }
  if (theme === 'dark') return 'Dark'
  return 'Light'
}
