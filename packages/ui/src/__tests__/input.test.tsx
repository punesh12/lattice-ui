import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input, InputGroup, InputPrefix, InputSuffix } from '../components/input'
import { controlPaddingX } from '../lib/control-sizes'

const DEFAULT_AFFIX_INSET = 16 + 8

describe('Input', () => {
  it('sets aria-invalid when error is true', () => {
    render(<Input error aria-label="email" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('does not set aria-invalid without error', () => {
    render(<Input aria-label="email" />)
    expect(screen.getByRole('textbox')).not.toHaveAttribute('aria-invalid')
  })
})

describe('InputGroup', () => {
  it('adds prefix inset to input padding via cloneElement', () => {
    render(
      <InputGroup>
        <InputPrefix data-testid="prefix">@</InputPrefix>
        <Input aria-label="username" />
      </InputGroup>,
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveStyle({
      paddingLeft: `${controlPaddingX.default + DEFAULT_AFFIX_INSET}px`,
    })
  })

  it('adds suffix inset to input padding via cloneElement', () => {
    render(
      <InputGroup>
        <Input aria-label="amount" />
        <InputSuffix data-testid="suffix">USD</InputSuffix>
      </InputGroup>,
    )

    const input = screen.getByRole('textbox')
    expect(input).toHaveStyle({
      paddingRight: `${controlPaddingX.default + DEFAULT_AFFIX_INSET}px`,
    })
  })

  it('respects custom affix inset', () => {
    const customInset = 32
    render(
      <InputGroup>
        <InputPrefix inset={customInset}>@</InputPrefix>
        <Input aria-label="username" />
      </InputGroup>,
    )

    expect(screen.getByRole('textbox')).toHaveStyle({
      paddingLeft: `${controlPaddingX.default + customInset}px`,
    })
  })
})
