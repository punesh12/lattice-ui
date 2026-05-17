import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from '../components/button'

describe('Button', () => {
  it('renders variant classes', () => {
    const { rerender } = render(<Button variant="default">Default</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-primary')

    rerender(<Button variant="destructive">Delete</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-destructive')

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('border-border')

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole('button')).toHaveClass('hover:bg-accent')
  })

  it('is disabled when disabled or loading', () => {
    const { rerender } = render(<Button disabled>Save</Button>)
    expect(screen.getByRole('button')).toBeDisabled()

    rerender(<Button loading>Save</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('exposes data-slot for styling hooks', () => {
    render(<Button>Action</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'button')
  })
})
