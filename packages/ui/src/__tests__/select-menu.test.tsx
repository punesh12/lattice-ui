import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SelectMenu } from '../components/select-menu'

const options = [
  { value: 'alpha', label: 'Alpha' },
  { value: 'beta', label: 'Beta' },
  { value: 'gamma', label: 'Gamma' },
]

describe('SelectMenu', () => {
  it('selects a single option and closes', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<SelectMenu options={options} onValueChange={onValueChange} placeholder="Pick one" />)

    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: /Beta/i }))

    expect(onValueChange).toHaveBeenLastCalledWith('beta')
    expect(screen.getByRole('combobox')).toHaveTextContent('Beta')
  })

  it('toggles multiple selections without closing', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(<SelectMenu options={options} multiple onValueChange={onValueChange} />)

    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: /Alpha/i }))
    await user.click(screen.getByRole('option', { name: /Gamma/i }))

    expect(onValueChange).toHaveBeenLastCalledWith(['alpha', 'gamma'])
    expect(screen.getByRole('combobox')).toHaveTextContent('Alpha, Gamma')

    await user.click(screen.getByRole('option', { name: /Alpha/i }))
    expect(onValueChange).toHaveBeenLastCalledWith(['gamma'])
  })

  it('filters options when searchable', async () => {
    const user = userEvent.setup()

    render(<SelectMenu options={options} searchable searchPlaceholder="Filter…" />)

    await user.click(screen.getByRole('combobox'))
    await user.type(screen.getByPlaceholderText('Filter…'), 'bet')

    await waitFor(() => {
      expect(screen.getByRole('option', { name: /Beta/i })).toBeInTheDocument()
      expect(screen.queryByRole('option', { name: /Alpha/i })).not.toBeInTheDocument()
    })
  })
})
