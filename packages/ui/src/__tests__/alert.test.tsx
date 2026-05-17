import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert, AlertDescription, AlertTitle } from '../components/alert'

describe('Alert', () => {
  it('renders title and description', () => {
    render(
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can adjust settings anytime.</AlertDescription>
      </Alert>,
    )

    expect(screen.getByRole('alert')).toBeInTheDocument()
    expect(screen.getByText('Heads up')).toHaveAttribute('data-slot', 'alert-title')
    expect(screen.getByText('You can adjust settings anytime.')).toHaveAttribute(
      'data-slot',
      'alert-description',
    )
  })

  it('applies variant classes', () => {
    const { rerender } = render(
      <Alert variant="info">
        <AlertDescription>Info message</AlertDescription>
      </Alert>,
    )
    expect(screen.getByRole('alert')).toHaveClass('border-info/30', 'bg-info/10')

    rerender(
      <Alert variant="error">
        <AlertDescription>Error message</AlertDescription>
      </Alert>,
    )
    expect(screen.getByRole('alert')).toHaveClass('border-error/30', 'bg-error/10')
  })
})
