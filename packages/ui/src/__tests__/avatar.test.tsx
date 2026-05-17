import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from '../components/avatar'
import { avatarSizes } from '../lib/avatar-sizes'

describe('Avatar', () => {
  it.each([
    ['xs', avatarSizes.xs],
    ['sm', avatarSizes.sm],
    ['default', avatarSizes.default],
    ['lg', avatarSizes.lg],
    ['xl', avatarSizes.xl],
  ] as const)('applies %s dimensions (%ipx)', (size, dimension) => {
    const { container } = render(<Avatar size={size} />)
    const root = container.querySelector('[data-slot="avatar"]')

    expect(root).toHaveAttribute('data-size', size)
    expect(root).toHaveStyle({
      width: `${dimension}px`,
      height: `${dimension}px`,
    })
  })
})
