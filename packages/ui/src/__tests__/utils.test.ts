import { describe, expect, it } from 'vitest'
import { cn } from '../lib/utils'

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('deduplicates conflicting tailwind utilities', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
  })

  it('ignores falsy values', () => {
    const hidden: string | false = false
    expect(cn('base', hidden && 'hidden', undefined, 'end')).toBe('base end')
  })
})
