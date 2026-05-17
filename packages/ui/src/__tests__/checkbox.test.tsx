import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from '../components/checkbox'

describe('Checkbox', () => {
  it('reflects checked state via data-state', () => {
    render(<Checkbox checked onCheckedChange={vi.fn()} aria-label="Accept terms" />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'checked')
  })

  it('starts unchecked by default', () => {
    render(<Checkbox aria-label="Subscribe" />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('data-state', 'unchecked')
  })

  it('toggles checked state on click', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(<Checkbox aria-label="Remember me" onCheckedChange={onCheckedChange} />)
    const checkbox = screen.getByRole('checkbox')

    await user.click(checkbox)
    expect(onCheckedChange).toHaveBeenCalledWith(true)
    expect(checkbox).toHaveAttribute('data-state', 'checked')
  })

  it('supports disabled', () => {
    render(<Checkbox disabled aria-label="Locked" />)
    expect(screen.getByRole('checkbox')).toBeDisabled()
  })
})
